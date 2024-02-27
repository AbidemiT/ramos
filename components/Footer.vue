<template>
    <footer class="bg-black text-white py-20">
        <div class="w-10/12 mx-auto">
            <div data-aos="fade-up" data-aos-easing="linear" class="flex justify-between items-center">
                <ul class="flex items-center space-x-10 my-6">
                    <li>
                        <a href="!#" class="light-link">About</a>
                    </li>
                    <li>
                        <a href="!#" class="light-link">Why Us</a>
                    </li>
                    <li>
                        <a href="!#" class="light-link">Platform</a>
                    </li>
                    <li>
                        <a href="!#" class="light-link">Pricing</a>
                    </li>
                    <li>
                        <a href="!#" class="light-link">Contacts</a>
                    </li>
                </ul>
                <a href="mailto:hello@ramos.com" class="text-6xl font-medium">hello@ramos.com</a>
            </div>
            <div class="my-12">
                <UDivider />
            </div>
            <div data-aos="fade-up" data-aos-easing="linear" class="flex justify-between items-start mt-10">
                <ul class="flex-between-center space-x-20">
                    <li>
                        <h4>Warrensville heights</h4>
                        <p class="font-light text-neutral-300">14418 Vineyard Drive, NC</p>
                        <p class="font-light text-neutral-300">44128</p>
                    </li>
                    <li>
                        <h4>Saint Louis</h4>
                        <p class="font-light text-neutral-300">1366 Penn Street</p>
                        <p class="font-light text-neutral-300">63101</p>
                    </li>
                </ul>

                <ul>
                    <li class="mb-8 text-right"><a href="!#" class="text-2xl">Linkedin</a></li>
                    <li class="mb-8 text-right"><a href="!#" class="text-2xl">Instagram</a></li>
                    <li class="mb-8 text-right"><a href="!#" class="text-2xl">Facebook</a></li>
                </ul>
            </div>

            <div class="flex-between-center mt-10">
                <div data-aos="fade-right" data-aos-easing="linear" class="logo flex items-center">
                    <img src="../assets/svgs/ramos-white.svg" alt="Ramos white Log">
                </div>
                <ul data-aos="fade-up" data-aos-easing="linear" class="flex-between-center space-x-20">
                    <li><a href="!#">Privacy policy</a></li>
                    <li><a href="!#">License agreement</a></li>
                </ul>
                <div class="barcode">
                    <span data-aos="zoom-in" data-aos-duration="1500"
                        class="square-lg text-9xl rounded-3xl bg-white shadow-lg text-black flex items-center justify-center mb-5">
                        <UIcon name="i-fa-solid-qrcode" dynamic/>
                    </span>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
    .flex-between-center {
        @apply flex justify-between items-center
    }

    .light-link {
        @apply text-xl font-light text-neutral-300
    }

    .square-lg {
        @apply h-48 w-48
    }

    .logo {
        width: 700px;
    }
</style>