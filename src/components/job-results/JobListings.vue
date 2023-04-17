<template>
    <main class="flex-auto bg-brand-gray-2 p-8">
        <ol>
            <JobListingItem
                v-for   = "job in displayJobs"
                :key    = "job.id"
                :job    = "job"
            />
        </ol>
        <div class="mx-auto mt-8">
            <div class="flex flex-row flex-nowrap">
                <p class="flex-grow text-sm">Page {{ currentPage }}</p>
                <div class="flex items-center justify-center">
                    <router-link 
                        role    = "link"
                        v-if    = "prevPage" 
                        :to     = "{ name: 'JobResults', query: { page: prevPage }}"
                        class   = "mx-3 text-sm font-semibold text-brand-blue-1"
                    >
                        Previous
                    </router-link>
                    <router-link 
                        role    = "link"
                        v-if    = "nextPage" 
                        :to     = "{ name: 'JobResults', query: { page: nextPage }}"
                        class   = "mx-3 text-sm font-semibold text-brand-blue-1"
                    >
                        Next
                    </router-link>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import { 
    computed, 
    onMounted
}                           from "vue";
import { useRoute }         from "vue-router";
import {
    useJobsStore
}                           from "@/stores/jobs";
import JobListingItem       from "@/components/job-results/JobListingItem.vue";
import usePrevAndNextPages  from "@/composables/usePrevNextPages.js";

const store = useJobsStore();
onMounted(store.FETCH_JOBS);

const FILTERED_ALL_JOBS = computed(() => store.FILTERED_ALL_JOBS);

const route = useRoute();

const currentPage   = computed(() => Number.parseInt(route.query.page || "1"));
const maxPage       = computed(() => Math.ceil(FILTERED_ALL_JOBS.value.length / 10));

const { prevPage, nextPage } = usePrevAndNextPages(currentPage, maxPage);

const displayJobs = computed(() => {
    const pageSize      = currentPage.value;
    const pageNumber    = Number.parseInt(pageSize);
    const firstJobIdx   = (pageNumber - 1) * 10;
    const lastJobIdx    = pageNumber * 10;
    return FILTERED_ALL_JOBS.value.slice(firstJobIdx, lastJobIdx)
})
</script>