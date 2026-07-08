<template>
  <main class="container">
    <h2>Courses</h2>

    <label for="searchCourse">Search Course</label>

    <input
      id="searchCourse"
      type="text"
      v-model="searchTerm"
      placeholder="Search Course"
    />

    <p>{{ filteredCourses.length }} course(s) found</p>

    <div
      v-for="course in filteredCourses"
      :key="course.id"
      class="course-item"
    >
      <CourseCard
        :name="course.name"
        :code="course.code"
        :credits="course.credits"
        :grade="course.grade"
        @click="viewCourse(course.id)"
        @select="viewCourse(course.id)"
      />

      <button class="remove-btn" @click="removeCourse(course.id)">
        Remove
      </button>
    </div>
  </main>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import CourseCard from '../components/CourseCard.vue'
import { getCourses } from '../api/courseService'

const router = useRouter()

const searchTerm = ref('')
const courses = ref([])

onMounted(async () => {
  try {
    courses.value = await getCourses()
  } catch (error) {
    console.log("Using local data")

    courses.value = [
      {
        id: 1,
        name: 'Mathematics',
        code: 'MAT101',
        credits: 4,
        grade: 'A'
      },
      {
        id: 2,
        name: 'Physics',
        code: 'PHY101',
        credits: 3,
        grade: 'B+'
      },
      {
        id: 3,
        name: 'Chemistry',
        code: 'CHE101',
        credits: 4,
        grade: 'A'
      }
    ]
  }
})

const filteredCourses = computed(() => {
  return courses.value.filter(course =>
    course.name.toLowerCase().includes(searchTerm.value.toLowerCase())
  )
})

function viewCourse(id) {
  router.push(`/courses/${id}`)
}

function removeCourse(id) {
  courses.value = courses.value.filter(course => course.id !== id)
}
</script>

<style scoped>
.container {
  padding: 20px;
}

input {
  width: 300px;
  padding: 8px;
  margin: 10px 0;
}

label {
  display: block;
  margin-top: 10px;
  font-weight: bold;
}

.course-item {
  margin-bottom: 20px;
}

.remove-btn {
  margin-top: 8px;
  padding: 6px 12px;
  background: crimson;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}
</style>