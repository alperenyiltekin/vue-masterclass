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

<script>
import axios            from "axios";
import JobListingItem   from "@/components/job-results/JobListingItem.vue";
 
export default {
    name: "JobListings",
    components: {
        JobListingItem
    },
    data() {
        return {
            jobs: [],
        }
    },
    computed: {
        displayJobs() {
            const pageSize = this.$route.query.page || "1";
            const pageNumber = Number.parseInt(pageSize);
            const firstJobIdx = (pageNumber - 1) * 10;
            const lastJobIdx = pageNumber * 10;

            return this.jobs.slice(firstJobIdx, lastJobIdx)
        },
        currentPage() {
            return Number.parseInt(this.$route.query.page || "1");
        },
        prevPage() {
            const prevPage = this.currentPage - 1;
            return prevPage >= 1 ? prevPage : undefined;
        },
        nextPage() {
            const next = this.currentPage + 1;
            const max = Math.ceil(this.jobs.length / 10);
            return next <= max ? next : undefined; 
        }
    },
    async mounted() {
        const baseURL = import.meta.env.VITE_APP_API_URL
        const res = await axios.get(`${baseURL}/jobs`);
        this.jobs = res.data;
    }
}
</script>