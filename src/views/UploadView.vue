<template>
    <div>
        <input type="file" accept="image/*" @change="handleFileChange" :disabled="uploading" multiple>
        <img v-for="url in imageUrl" :src="url" alt="">
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const uploading = ref(false)
const imageUrl = ref([])
const handleFileChange = (event: Event) => {
    imageUrl.value.forEach(url => URL.revokeObjectURL(url))

    const files = Array.from(event.target.files)

    imageUrl.value = files.map(file =>
    URL.createObjectURL(file)
  )
}

</script>
