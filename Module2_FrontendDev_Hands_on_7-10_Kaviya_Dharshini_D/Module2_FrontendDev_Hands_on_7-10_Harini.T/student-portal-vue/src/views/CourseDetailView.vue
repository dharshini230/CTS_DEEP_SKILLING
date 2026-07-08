<template>
  <main class="container">
    <h2>Course Details</h2>

    <div v-if="course">
      <p><strong>Name:</strong> {{ course.name }}</p>
      <p><strong>Code:</strong> {{ course.code }}</p>
      <p><strong>Credits:</strong> {{ course.credits }}</p>
      <p><strong>Grade:</strong> {{ course.grade }}</p>

      <button @click="enrollCourse">
        Enroll
      </button>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useEnrollmentStore } from '../stores/enrollment'
import { getCourse } from '../api/courseService'

const route = useRoute()
const router = useRouter()
const enrollmentStore = useEnrollmentStore()

const course = ref(null)

onMounted(async () => {
  course.value = await getCourse(route.params.id)
})

function enrollCourse() {
  enrollmentStore.enroll(course.value)
  router.push('/profile')
}
</script>

<style scoped>
.container {
  padding: 20px;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
}
</style>