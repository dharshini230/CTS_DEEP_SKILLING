import apiClient from "./apiClient";

export async function getCourses() {
  const response = await apiClient.get("/posts");
  return response.data.slice(0, 10).map(post => ({
    id: post.id,
    name: post.title,
    code: "CSE" + post.id,
    credits: 4,
    grade: "A"
  }));
}

export async function getCourse(courseId) {
  const response = await apiClient.get(`/posts/${courseId}`);

  return {
    id: response.data.id,
    name: response.data.title,
    code: "CSE" + response.data.id,
    credits: 4,
    grade: "A"
  };
}