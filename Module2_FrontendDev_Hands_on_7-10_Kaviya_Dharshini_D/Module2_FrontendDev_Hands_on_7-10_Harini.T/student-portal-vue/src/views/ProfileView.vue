<template>
  <main class="container">

    <h2>Student Profile</h2>

    <p><strong>Name:</strong> John Doe</p>
    <p><strong>Semester:</strong> 6</p>

    <h3>Enrolled Courses</h3>

    <div v-if="store.enrolledCourses.length===0">
      No courses enrolled.
    </div>

    <div
      v-for="course in store.enrolledCourses"
      :key="course.id"
      class="course"
    >
      <p>{{ course.name }} ({{ course.credits }} Credits)</p>

      <button
  @click="store.remove(course.id)"
  aria-label="Remove enrolled course"
>
        Remove
      </button>
    </div>

    <h3>Total Credits : {{ store.totalCredits }}</h3>

  </main>
</template>

<script setup>
import { useEnrollmentStore } from '../stores/enrollment'

const store = useEnrollmentStore()
</script>

<style scoped>
.container{
  padding:20px;
}

.course{
  border:1px solid gray;
  padding:10px;
  margin:10px 0;
  border-radius:8px;
}

button{
  padding:6px 12px;
  cursor:pointer;
}
</style>
