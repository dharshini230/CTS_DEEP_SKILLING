import { courses } from "./data.js";

const courseGrid = document.querySelector(".course-grid");
const loading = document.getElementById("loading");
const notificationList = document.getElementById("notification-list");
const errorMessage = document.getElementById("error-message");
const retryButton = document.getElementById("retry-btn");

function renderCourses(courseList){

    courseGrid.innerHTML="";

    courseList.forEach(course=>{

        const article=document.createElement("article");

        article.className="course-card";

        article.innerHTML=`
            <h3>${course.name}</h3>
            <p>Code : ${course.code}</p>
            <p>Credits : ${course.credits}</p>
            <span>Grade : ${course.grade}</span>
        `;

        courseGrid.appendChild(article);

    });

}

function fetchUser(id){

    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response=>response.json())
    .then(user=>{
        console.log(user.name);
        return user;
    });

}

fetchUser(1);

async function fetchUserAsync(id){

    try{

        const response=await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

        const user=await response.json();

        console.log(user.name);

        return user;

    }

    catch(error){

        console.log(error);

    }

}

fetchUserAsync(2);

function fetchAllCourses(){

    loading.style.display="block";

    return new Promise(resolve=>{

        setTimeout(()=>{

            resolve(courses);

        },1000);

    });

}

fetchAllCourses().then(data=>{

    renderCourses(data);

    loading.style.display="none";

});

Promise.all([

    fetchUserAsync(1),

    fetchUserAsync(2)

]).then(users=>{

    console.log(users[0].name);

    console.log(users[1].name);

});

async function apiFetch(url){

    const response=await fetch(url);

    if(!response.ok){

        throw new Error("Unable to fetch data.");

    }

    return await response.json();

}

async function loadNotifications(){

    notificationList.innerHTML="Loading...";

    errorMessage.textContent="";

    retryButton.style.display="none";

    try{

        const posts=await apiFetch("https://jsonplaceholder.typicode.com/posts?_limit=5");

        notificationList.innerHTML="";

        posts.forEach(post=>{

            const div=document.createElement("div");

            div.className="notification-card";

            div.innerHTML=`
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            `;

            notificationList.appendChild(div);

        });

    }

    catch(error){

        notificationList.innerHTML="";

        errorMessage.textContent=error.message;

        retryButton.style.display="inline-block";

    }

}

loadNotifications();

retryButton.addEventListener("click",()=>{

    loadNotifications();

});

apiFetch("https://jsonplaceholder.typicode.com/nonexistent")
.catch(error=>{

    errorMessage.textContent="404 Error : "+error.message;

    retryButton.style.display="inline-block";

});

axios.interceptors.request.use(config=>{

    console.log("API call started : "+config.url);

    return config;

});

async function loadAxiosPosts(){

    try{

        const response=await axios.get(

            "https://jsonplaceholder.typicode.com/posts",

            {
                params:{userId:1}
            }

        );

        console.log(response.data);

    }

    catch(error){

        console.log(error);

    }

}

loadAxiosPosts();

/*
Fetch vs Axios

1. Fetch requires response.json(), Axios parses JSON automatically.

2. Fetch does not throw HTTP errors automatically,
   Axios throws for non-2xx responses.

3. Axios supports interceptors and timeout directly,
   Fetch requires additional code.

*/