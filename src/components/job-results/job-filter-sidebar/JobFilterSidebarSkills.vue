<template>
    <div class="mt-2">
        <input 
            v-model.lazy.trim   = "skillsSearch"
            type                = "text" 
            class               = "h-12 w-full rounded border border-solid border-brand-gray-1 p-3 text-base shadow-gray"
            placeholder         = "Software Developer, Designer, Manager"
        >
    </div>
</template>

<script lang="ts" setup>
import { computed }     from "vue";
import { useUserStore } from "@/stores/user";

const userStore = useUserStore();

const skillsSearch = computed({
    get() {
        return userStore.skillSearchTerm;
    },
    set(value: string) {
        userStore.UPDATE_SKILL_SEARCH_TERM(value)
    }
})

</script>