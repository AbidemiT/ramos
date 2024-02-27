<script setup>
watch(() => general.isPreloaderVisible, () => {
    nav({
        parent: '.main'
    })

    logo({
        parent: '.navbar'
    })
})
</script>

<template>
    <main class="main">
        <Navbar />

        <section class="hero__wrapper w-10/12 mx-auto my-32 px-12">
            <div class="hero relative">
                <div class="play-card absolute right-0 top-7" data-aos="zoom-in" data-aos-delay="3000" data-aos-easing="linear">
                    <span
                        class=" absolute -left-5 -top-5 circle-sm text-sm rounded-full bg-red-500 text-white flex items-center justify-center shadow shadow-neutral-100">
                        <UIcon name="i-fa-solid-play" dynamic />
                    </span>
                    <div class="video-card ">
                        <img class="rounded-2xl" src="../assets/imgs/laptop-shoot.jpg" alt="laptop-shoot">
                    </div>
                </div>
                <div class="top-h1 h1-container flex items-center ml-44 relative">
                    <span data-aos="flip-right" data-aos-delay="2000"
                        class=" absolute -left-28 circle  text-2xl rounded-full bg-neutral-100 text-red-500 flex items-center justify-center mx-4">
                        <UIcon name="i-ph-lightning-fill" dynamic />
                    </span>
                    <span data-aos="flip-left" data-aos-delay="2000"
                        class="circle text-2xl z-10 rounded-full bg-red-500 text-white flex items-center justify-center mx-4">
                        <UIcon name="i-heroicons-light-bulb" />
                    </span>
                    <h1 class="hero-h1" data-aos="fade-up" data-aos-delay="1000" data-aos-easing="linear">Analytics</h1>
                </div>
                <div class="middle-h1  h1-container">
                    <h1 data-aos="fade-up" data-aos-delay="1500" data-aos-easing="linear" class="hero-h1">that <span class="text-gray-400">helps</span> you</h1>
                </div>
                <div class="bottom-h1 ml-60  h1-container">
                    <h1 data-aos="fade-up" data-aos-delay="2000" data-aos-easing="linear" class="hero-h1 flex items-center">shape <span
                        data-aos="zoom-in" data-aos-delay="2500" class="circle text-2xl rounded-full bg-yellow-400 flex items-center justify-center mx-4">
                            <UIcon name="i-ph-rocket-launch" dynamic />
                        </span> the future</h1>
                </div>
            </div>
        </section>
        <section class="info__wrapper bg-neutral-100" data-aos="fade-up" data-aos-delay="3000" data-aos-easing="linear">
            <div class="info w-10/12 mx-auto px-12 py-32" >
                <div class="flex justify-between items-center space-x-80" data-aos="fade-up"  data-aos-easing="linear">
                    <h3 class="text-5xl">Your key to strategic success through analytics</h3>
                    <p class="font-light text-2xl">Ready for exciting, instantenous, all-accessible insights in real-time.
                    </p>
                </div>
                <div class="grid grid-cols-7 gap-4 my-20">
                    <div class="left-box" data-aos="fade-up"  data-aos-easing="linear">
                        <div class="left">
                            <UBadge class="shadow-md" color="yellow" variant="solid" size="md">Setting up reports</UBadge>

                            <div class="mt-16">
                                <h4 class="text-2xl font-medium mb-5">Fast and easy access <br> to analytics</h4>
                                <p class="text-neutral-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    Tempore quidem magni totam et
                                    possimus soluta odit consequuntur corrupti, velit dolore!</p>
                            </div>
                        </div>
                        <div class="right h-full" data-aos="fade-up"  data-aos-easing="linear">
                            <img src="../assets/imgs/Dashboard.gif" alt="dashboard gif">
                        </div>

                    </div>
                    <div data-aos="fade-up"  data-aos-easing="linear"
                        class="col-span-3 right-box bg-black rounded-3xl shadow-lg px-24 py-10 flex flex-col items-center justify-center">
                        <div class="flex justify-center items-center space-x-2">
                            <div
                                class="border border-neutral-800 rounded-xl bg-transparent px-10 py-5 flex flex-col items-center">
                                <span class="inline-block text-yellow-400 text-3xl mb-4">
                                    <UIcon name="i-heroicons-square-3-stack-3d" />
                                </span>
                                <UAvatarGroup size="sm" :max="2">
                                    <UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" alt="benjamincanac" />
                                    <UAvatar src="https://avatars.githubusercontent.com/u/904724?v=4" alt="Atinux" />
                                </UAvatarGroup>

                            </div>
                            <div class="border border-neutral-800 rounded-xl bg-transparent px-10 py-5 text-left">
                                <p class="text-white text-xs">Transactions</p>
                                <span class="text-green-400 text-right">
                                    <UIcon name="i-emojione-up-arrow" dynamic />
                                    <span class="fs-10 self-end">+14%</span>
                                </span>
                                <h2 class="text-5xl text-white">43k</h2>
                            </div>

                        </div>
                        <div class="mt-12 text-center">
                            <h4 class="text-2xl font-medium mb-5 text-white">Widget control</h4>
                            <p class="text-neutral-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Tempore quidem magni totam et
                                possimus </p>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-6 gap-4" data-aos="fade-up"  data-aos-easing="linear">
                    <div class="col-start-2 col-span-4 flex space-x-6 items-center">
                        <h5 class="self-center">Upto</h5>
                        <h1>45%</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet eaque ad odio, expedita
                            mollitia accusamus odit autem nemo et repudiandae quia asperiores possimus temporibus
                            repellendus, ex quidem sequi molestias nisi.</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="efficiency__wrapper w-10/12 mx-auto my-32 px-12">
            <div class="top-h1">
                <h1 data-aos="fade-up" data-aos-easing="linear">Maximize <span class="text-gray-400">efficiency</span> with our intuitive</h1>
            </div>
            <div class="row mt-5 flex  justify-between items-center">
                <div class="flex">
                    <span data-aos="zoom-in" data-aos-duration="1500"
                        class="circle-lg z-10  text-7xl rounded-full bg-neutral-100 text-red-500 flex items-center justify-center">
                        <UIcon name="i-bxs-chart" dynamic />
                    </span>
                    <span data-aos="zoom-in" data-aos-duration="1500"
                        class="circle-lg -ml-8 text-2xl rounded-full bg-yellow-400 text-black flex items-center justify-center">
                        <div class="flex flex-col justify-center items-center text-center p-12">
                            <h4 class="text-4xl font-medium mb-2">45%</h4>
                            <p class="text-sm font-light">System grow faster</p>
                        </div>
                    </span>
                </div>
                <div data-aos="zoom-in" data-aos-duration="1500" class="relative h-48 w-2/5 br-70 bg-yellow-400  overflow-hidden">
                    <div
                        class="flex absolute top-0 left-0 items-center justify-start w-full h-full whitespace-nowrap custom">
                        <div>
                            <h1 class="text-black">Analytics services</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div class="my-20">
                <UDivider />
            </div>
            <div class="row grid grid-cols-5">
                <p data-aos="fade-up" data-aos-easing="linear" class="col-start-1 col-span-3 pr-32">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
                    optio accusantium. Laudantium vel incidunt odit nihil, quisquam dolores adipisci a laborum rerum</p>
                <div data-aos="zoom-out" data-aos-duration="500" class="flex space-x-4 items-center col-start-4 col-span-2 justify-end">
                    <UButton color="gray" variant="solid">Request a demo</UButton>
                    <UButton color="red" variant="solid">Start for free</UButton>
                </div>
            </div>
        </section>
        <section class="info__wrapper bg-neutral-100">
            <div class="info w-10/12 mx-auto px-12 pt-24 pb-10">
                <div class="flex justify-between items-center space-x-80 relative">
                    <div class="max-w-lg">
                        <h3 class="text-5xl mb-3" data-aos="fade-up" data-aos-easing="linear">Turning data into real</h3>
                        <h3 class="text-5xl mb-24" data-aos="fade-up" data-aos-delay="500" data-aos-easing="linear">actions and ideas.</h3>
                        <div class="accordions__wrapper">
                            <UAccordion data-aos="fade-up" data-aos-easing="linear" class="accordions" color="white" variant="solid" size="xl"
                                open-icon="i-heroicons-plus-circle-solid" close-icon="i-heroicons-minus-circle-solid"
                                :items="[{ label: 'Instant insight', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' }, { label: 'Getting Started', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' }, { label: 'Theming', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' }]" />
                        </div>
                    </div>

                    <div class="absolute -right-96 top-6" data-aos="fade-up" data-aos-easing="linear">
                        <img src="../assets/imgs/dashboard.png" alt="dashboard">
                    </div>
                    <div class="absolute left-32 top-48 z-10" data-aos="fade-up" data-aos-easing="linear">
                        <img class="mobile-phone" src="../assets/imgs/mobile.png" alt="mobile phone view">
                    </div>
                </div>
            </div>
            <div class="pattern ">
                <div class="w-10/12 mx-auto px-12">
                    <h1 data-aos="fade-right" data-aos-easing="linear" class="text-red-500 text-9xl -z-10">Rasmos</h1>
                </div>
            </div>
        </section>
        <section class="control__wrapper w-10/12 mx-auto my-32 px-12">
            <div class="top-h1">
                <h1 data-aos="fade-up" data-aos-easing="linear">We give you full</h1>
                <h1 data-aos="fade-up" data-aos-delay="500" data-aos-easing="linear"><span class="text-gray-400">control</span> over your data</h1>
            </div>
            <div class="grid grid-cols-2 gap-6 mt-16">
                <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500" class="rounded-3xl shadow-lg flex flex-col items-center justify-center">
                    <div class="pattern-sm w-full flex items-center justify-center p-10">
                        <div class="w-80 h-80">
                            <img src="../assets/imgs/pic.png" alt="insights">
                        </div>
                    </div>
                    <div class="-mt-12 text-center bg-neutral-50 px-32 py-8 rounded-b-3xl">
                        <h4 class="text-2xl font-medium mb-5 text-black">Improved customer service</h4>
                        <p class="text-neutral-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Tempore quidem magni totam et
                            possimus </p>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500" class="rounded-3xl shadow-lg flex flex-col items-center justify-center">
                    <div class="pattern-sm w-full flex items-center justify-center p-10">
                        <div class="w-80 h-80">
                            <img src="../assets/imgs/pic.png" alt="insights">
                        </div>
                    </div>
                    <div class="-mt-12 text-center bg-neutral-50 px-32 py-8 rounded-b-3xl">
                        <h4 class="text-2xl font-medium mb-5 text-black">Monitoring key indicators</h4>
                        <p class="text-neutral-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Tempore quidem magni totam et
                            possimus </p>
                    </div>
                </div>
            </div>
        </section>
        <section class="get-in-touch w-10/12 mx-auto my-32 px-12">
            <div class="flex justify-center items-center flex-col text-center">
                <span data-aos="zoom-out" data-aos-duration="1500"
                    class="square -ml-8 text-2xl rounded-3xl bg-red-600 shadow-lg -z-10 shadow-red-400 text-white flex items-center justify-center mb-5">
                    <div class="h-10 w-10">
                        <img src="../assets/svgs/ramos-favicon.svg" alt="Logo">
                    </div>
                </span>
                <h1 data-aos="fade-up" data-aos-easing="linear">Get Started</h1>
                <p data-aos="fade-up" data-aos-delay="50" data-aos-easing="linear" class="text-neutral-400 text-xl">Turn information into advantage! start using <br> ramos today. Sign up
                    for a free trail.</p>
                <div data-aos="fade-up" data-aos-delay="50" data-aos-easing="linear" class="flex space-x-4 items-center col-start-4 col-span-2 justify-end mt-10">
                    <UButton color="gray" variant="solid">Request a demo</UButton>
                    <UButton color="red" variant="solid">Start for free</UButton>
                </div>
            </div>

        </section>
        <Footer />
    </main>
</template>

<style lang="scss" scoped>
.left-box {
    @apply col-span-4 grid grid-cols-2 space-x-28 border bg-white border-gray-300 rounded-3xl p-10 shadow-lg
}

.circle {
    @apply h-32 w-32
}

.square {
    @apply h-20 w-20
}

.circle-lg {
    @apply h-48 w-48
}

.circle-sm {
    @apply h-14 w-14
}

h1 {
    font-size: 126px;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 10px;
}

.mobile-phone {
    width: 300px;
    height: 600px;
}

.video-card {
    height: 260px;
    width: 420px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

.info__wrapper {
    border-radius: 100px;
}

.fs-10 {
    font-size: 10px;
}

.br-70 {
    border-radius: 70px;
}

.pattern {
    background-image: linear-gradient(#e3dfdf 1px, transparent 1px), linear-gradient(to right, #e3dfdf 1px, transparent 1px);
    background-size: 100px 100px;
    background-color: rgba(0, 0, 0, 0);
    background-repeat: repeat;
    background-position: bottom center;

    h1 {
        font-size: 370px;
        font-weight: 600;
        line-height: normal;
    }
}

.pattern-sm {
    background-image: linear-gradient(#e3dfdf 1px, transparent 1px), linear-gradient(to right, #e3dfdf 1px, transparent 1px);
    background-size: 60px 60px;
    background-color: rgba(0, 0, 0, 0);
    background-repeat: repeat;
    background-position: bottom center;
}

.custom {
    transform: scale(2);
    transition: all 1s ease;

    &>div {
        display: flex;
        animation: scrollText 15s infinite linear;
    }
}

@keyframes scrollText {
    from {
        transform: translateX(0%);
    }

    to {
        transform: translateX(-50%);
    }
}
</style>