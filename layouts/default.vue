<script setup>
import { watch } from 'vue';


onMounted(() => {
    useSmoothScroll()
})

</script>

<template>
    <div id="viewport">
        <Preloader />
        <slot />
    </div>
</template>

<style lang="scss" scoped></style>