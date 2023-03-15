<template>
    <section class="mb-16 ">
        <h1 class="mb-14 text-8xl font-bold tracking-tighter">
            <span :class="actionClass">{{ action }}</span>
            <br />
            for everyone
        </h1>
        <h2 class="text-3xl font-light">Find your next job</h2>
    </section>
</template>

<script>
import nextItemInList from "@/utils/nextItemInList"
export default {
    name: "Headline",
    data() {
        return {
            action: "Build",
            interval: null
        }
    },
    computed: {
        actionClass() {
            return this.action.toLocaleLowerCase() 
        }
    },
    created() {
        this.changeTitle();
    },
    beforeUnmount() {
        clearInterval(this.interval);
    },
    methods: {
        changeTitle() {
            this.interval = setInterval(() => {
                const actions = [ "Build", "Create", "Design", "Code" ];
                this.action = nextItemInList(actions, this.action)
            }, 2500)
        }
    }
}
</script>

<style scoped>
.build {
    color: #1a73e8;
}

.create {
    color: #34a853;
}

.design {
    color: #f9ab00;
}

.code {
    color: #d93025;
}
</style>