<template>
    <h1 class="text-6xl font-bold">Job page</h1>
    <button @click="returnHomePage">Go to Home Page</button>
</template>

<script>
export default {
    name: "JobResultView",
    methods: {
        returnHomePage() {
            this.$router.push({
                name: "Home"
            })
        }
    }
}
</script>