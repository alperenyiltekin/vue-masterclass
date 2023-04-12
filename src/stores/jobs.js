import { defineStore }  from "pinia";
import Jobs             from "@/api/jobs";
import { useUserStore } from "@/stores/user";

export const FETCH_JOBS                     = "FETCH_JOBS";
export const UNIQUE_ORGANIZATIONS           = "UNIQUE_ORGANIZATIONS";
export const UNIQUE_JOB_TYPES               = "UNIQUE_JOB_TYPES";
export const FILTERED_ALL_JOBS              = "FILTERED_ALL_JOBS";
export const INCLUDE_JOB_IN_ORGANIZATION    = "INCLUDE_JOB_IN_ORGANIZATION";
export const INCLUDE_JON_IN_JOB_TYPE        = "INCLUDE_JON_IN_JOB_TYPE";

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
        [UNIQUE_JOB_TYPES](state) {
            const uniqueJobTypes = new Set();
            state.jobs.forEach(job => uniqueJobTypes.add(job.jobType));
            return uniqueJobTypes;
        },
        [INCLUDE_JOB_IN_ORGANIZATION]: () => (job) => {
            const store = useUserStore();
            if (!store.selectedOrganizations.length)
                return true;

            return store.selectedOrganizations.includes(job.organization);
        },
        [INCLUDE_JON_IN_JOB_TYPE]: () => (job) => {
            const store = useUserStore();
            if (!store.selectedJobTypes.length)
                return true;

            return store.selectedJobTypes.includes(job.jobType);           
        },
        [FILTERED_ALL_JOBS](state) {
            return state.jobs
                .filter(job => this.INCLUDE_JOB_IN_ORGANIZATION(job))
                .filter(job => this.INCLUDE_JON_IN_JOB_TYPE(job));
        }
    }
})