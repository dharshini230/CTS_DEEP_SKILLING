import { courses } from "./data.js";


// ES6 FEATURES


// Destructuring
courses.forEach(course => {

    const { name, credits } = course;

    console.log(`${name} - ${credits} credits`);

});

// map()

const formattedCourses = courses.map(course =>
`${course.code} - ${course.name} (${course.credits} credits)`);

console.log(formattedCourses);

// filter()

const creditCourses = courses.filter(course =>
course.credits >= 4);

console.log("Courses with credits >= 4 :", creditCourses.length);

// reduce()

const totalCredits = courses.reduce(
(total, course) => total + course.credits,
0
);

console.log("Total Credits :", totalCredits);

// =========================
// DOM ELEMENTS
// =========================

const courseGrid = document.querySelector(".course-grid");

const totalCreditText = document.getElementById("total-credits");

const searchBox = document.getElementById("search-courses");

const sortButton = document.getElementById("sort-btn");

const selectedCourse = document.getElementById("selected-course");

// =========================
// RENDER FUNCTION
// =========================

function renderCourses(courseList){

    courseGrid.innerHTML = "";

    courseList.forEach(course=>{

        const article=document.createElement("article");

        article.className="course-card";

        article.dataset.id=course.id;

        article.innerHTML=`

        <h3>${course.name}</h3>

        <p>Course Code : ${course.code}</p>

        <p>Credits : ${course.credits}</p>

        <span>Grade : ${course.grade}</span>

        `;

        courseGrid.appendChild(article);

    });

    const credits=courseList.reduce(
        (sum,course)=>sum+course.credits,
        0
    );

    totalCreditText.textContent=
    `Total Credits : ${credits}`;

}

// Initial Rendering

renderCourses(courses);

// SEARCH


searchBox.addEventListener("input",()=>{

    const keyword=searchBox.value.toLowerCase();

    const filteredCourses=courses.filter(course=>

        course.name.toLowerCase().includes(keyword)

    );

    renderCourses(filteredCourses);

});


// SORT


sortButton.addEventListener("click",()=>{

    const sortedCourses=[...courses].sort(

        (a,b)=>b.credits-a.credits

    );

    renderCourses(sortedCourses);

});


// EVENT DELEGATION


courseGrid.addEventListener("click",(event)=>{

    const card=event.target.closest(".course-card");

    if(!card){

        return;

    }

    const id=parseInt(card.dataset.id);

    const selected=courses.find(course=>course.id===id);

    selectedCourse.textContent=

    `Selected Course :
     ${selected.name}
     | Grade : ${selected.grade}`;

});