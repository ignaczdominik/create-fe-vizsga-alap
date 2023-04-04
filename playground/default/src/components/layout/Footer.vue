<template>
  <footer class="mt-auto py-3 bg-dark" data-bs-theme="dark">
    <p class="text-center text-white">© {{ currentYear }} {{ props.copyright }}</p>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
const props = defineProps({
  copyright: {
    type: String,
    default: 'Company, Inc'
  }
})
</script>
