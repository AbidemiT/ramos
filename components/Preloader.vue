<script setup>
    const percentage = ref(0);

    onMounted(() => {
        const tl = gsap.timeline();

        tl.to(percentage, {
            progress: 100,
            duration: 1,
            onUpdate() {
                percentage.value = Math.floor(percentage.progress)
            },
            onComplete() {
                general.isPreloaderVisible = false;
                general.scrollLenis.start();
            }
        })

        tl.fromTo('.preloader', {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
        },
        {
            clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)',
            duration: 1,
        }
        )
    })
</script>

<template>
    <div class="preloader">
        <div class="preloader__percent text-6xl">
            {{percentage}}%
        </div>
    </div>
</template>

<style scoped lang="scss">
.preloader {
    position: fixed;
    inset: 0;
    z-index: 12;
    background: white;
    letter-spacing: -0.1em;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>