<template>
  <div
    class="card"
    tabindex="0"
    @keydown.enter="$emit('select')"
  >
    <h2>{{ name }}</h2>

    <p>Code : {{ code }}</p>

    <p>Credits : {{ credits }}</p>

    <p>Grade : {{ grade }}</p>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  code: String,
  credits: Number,
  grade: String
})

defineEmits(['select'])
</script>

<style scoped>
.card{
    border:1px solid gray;
    border-radius:10px;
    padding:15px;
    margin:10px;
    cursor:pointer;
}

.card:focus{
    outline:3px solid #42b883;
}
</style>