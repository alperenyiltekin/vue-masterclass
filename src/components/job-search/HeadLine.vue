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

<script lang="ts" setup>
import {
    ref,
    computed,
    onMounted,
    onBeforeUnmount
}                           from "vue";
import nextItemInList       from "@/utils/nextItemInList";

const action    = ref("Build");
const interval  = ref<ReturnType<typeof setInterval>>();

const actionClass = computed(() => {
    return {
        [ action.value.toLocaleLowerCase() ] : true
    }
});

const changeTitle = () => {
    interval.value = setInterval(() => {
        const actions = [ "Build", "Create", "Design", "Code" ];
        action.value = nextItemInList(actions, action.value)
    }, 2500)
};

onMounted(changeTitle);
onBeforeUnmount(() => clearInterval(interval.value));

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