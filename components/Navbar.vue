<template>
    <nav class="navbar bg-black flex justify-between items-center text-white w-10/12 mx-auto rounded-2xl px-2 py-2 mt-4">
        <div class="logo-container w-24 h-10 ml-3">
            <img src="../assets/svgs/ramos-white.svg" alt="Ramos logo">
        </div>
        <ul class="nav-links flex space-x-10 px-8 py-3 bg-neutral-800 rounded-2xl">
            <li><a href="!#" class="text-sm nav-link">Dashboard</a></li>
            <li><a href="!#" class="text-sm nav-link">Reports</a></li>
            <li><a href="!#" class="text-sm nav-link">Documents</a></li>
            <li><a href="!#" class="text-sm nav-link">History</a></li>
            <li><a href="!#" class="text-sm nav-link">Settings</a></li>
        </ul>
        <div class="signup">
            <UButton color="white" variant="solid" size="xl" :ui="{ rounded: 'rounded-xl' }">Sign Up</UButton>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
.navbar {
    // display
}

img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

</style>