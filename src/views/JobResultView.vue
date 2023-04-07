<template>
    <div class="flex flex-row flex-nowrap w-full">
        <JobFiltersSidebar />
        <JobListings />
    </div>
</template>

<script>
import JobFiltersSidebar    from '@/components/job-results/job-filter-sidebar/JobFiltersSidebar.vue';
import JobListings          from "@/components/job-results/JobListings.vue";

export default {
    name: "JobResultView",
    components: {
        JobFiltersSidebar,
        JobListings
    },
    methods: {
        returnHomePage() {
            this.$router.push({
                name: "Home"
            })
        }
    }
}
</script>