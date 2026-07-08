import { defineStore } from "pinia";
import { getCourse } from "../api/courseService";

export const useEnrollmentStore = defineStore("enrollment", {
  state: () => ({
    enrolledCourses: [],
    loading: false,
    error: null
  }),

  getters: {
    totalCredits: (state) =>
      state.enrolledCourses.reduce(
        (sum, course) => sum + (course.credits || 3),
        0
      ),

    enrolledCount: (state) => state.enrolledCourses.length
  },

  actions: {
    enroll(course) {
      if (!this.enrolledCourses.find(c => c.id === course.id)) {
        this.enrolledCourses.push(course);
      }
    },

    remove(courseId) {
      this.enrolledCourses =
        this.enrolledCourses.filter(c => c.id !== courseId);
    },

    async fetchAndEnroll(courseId) {
      this.loading = true;
      this.error = null;

      try {
        const course = await getCourse(courseId);

        this.enroll({
          id: course.id,
          name: course.title,
          credits: 3
        });
      } catch (err) {
        this.error = "Unable to load course";
      } finally {
        this.loading = false;
      }
    },

    resetEnrollment() {
      this.$reset();
    }
  }
});