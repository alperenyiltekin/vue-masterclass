import { defineStore }  from "pinia";
import Jobs             from "@/api/jobs";

export const FETCH_JOBS = "FETCH_JOBS";

export const useJobsStore = defineStore("jobs", {
    state: () => ({
        jobs: []
    }),
    actions: {
        async [FETCH_JOBS]() {
            const jobs = await Jobs();
            this.jobs = jobs;
        }
    }
})