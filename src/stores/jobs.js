import { defineStore }  from "pinia";
import Jobs             from "@/api/jobs";
import { useUserStore } from "@/stores/user";

export const FETCH_JOBS                 = "FETCH_JOBS";
export const UNIQUE_ORGANIZATIONS       = "UNIQUE_ORGANIZATIONS";
export const FILTER_JOB_ORGANIZATION    = "FILTER_JOB_ORGANIZATION";

export const useJobsStore = defineStore("jobs", {
    state: () => ({
        jobs: []
    }),
    actions: {
        async [FETCH_JOBS]() {
            const jobs = await Jobs();
            this.jobs = jobs;
        }
    },
    getters: {
        [UNIQUE_ORGANIZATIONS](state) {
            const uniqueOrg = new Set();
            state.jobs.forEach(job => uniqueOrg.add(job.organization));
            return uniqueOrg;
        },
        [FILTER_JOB_ORGANIZATION](state) {
            const store = useUserStore();
            return store.selectedOrganizations.length
                    ? state.jobs.filter(job => store.selectedOrganizations.includes(job.organization))
                    : state.jobs
        }
    }
})