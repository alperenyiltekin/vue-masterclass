import { defineStore }  from "pinia";
import Jobs             from "@/api/jobs";
import { useUserStore } from "@/stores/user";
import type { Job }     from "@/api/types";

export const FETCH_JOBS                     = "FETCH_JOBS";
export const UNIQUE_ORGANIZATIONS           = "UNIQUE_ORGANIZATIONS";
export const UNIQUE_JOB_TYPES               = "UNIQUE_JOB_TYPES";
export const FILTERED_ALL_JOBS              = "FILTERED_ALL_JOBS";
export const INCLUDE_JOB_IN_ORGANIZATION    = "INCLUDE_JOB_IN_ORGANIZATION";
export const INCLUDE_JON_IN_JOB_TYPE        = "INCLUDE_JON_IN_JOB_TYPE";
export const INCLUDE_JOB_IN_DEGREE          = "INCLUDE_JOB_IN_DEGREE";
export const INCLUDE_JOB_IN_SEARCH          = "INCLUDE_JOB_IN_SEARCH";

export interface JobsState {
    jobs: Job[]
}

export const useJobsStore = defineStore("jobs", {
    state: (): JobsState => ({
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
            const uniqueOrg = new Set<string>();
            state.jobs.forEach(job => uniqueOrg.add(job.organization));
            return uniqueOrg;
        },
        [UNIQUE_JOB_TYPES](state) {
            const uniqueJobTypes = new Set<string>();
            state.jobs.forEach(job => uniqueJobTypes.add(job.jobType));
            return uniqueJobTypes;
        },
        [INCLUDE_JOB_IN_ORGANIZATION]: () => (job: Job) => {
            const store = useUserStore();
            if (!store.selectedOrganizations.length)
                return true;

            return store.selectedOrganizations.includes(job.organization);
        },
        [INCLUDE_JON_IN_JOB_TYPE]: () => (job: Job) => {
            const store = useUserStore();
            if (!store.selectedJobTypes.length)
                return true;

            return store.selectedJobTypes.includes(job.jobType);           
        },
        [FILTERED_ALL_JOBS](state): Job[] {
            return state.jobs
                .filter(job => this.INCLUDE_JOB_IN_ORGANIZATION(job))
                .filter(job => this.INCLUDE_JON_IN_JOB_TYPE(job))
                .filter(job => this.INCLUDE_JOB_IN_DEGREE(job))
                .filter(job => this.INCLUDE_JOB_IN_SEARCH(job));
        },
        [INCLUDE_JOB_IN_DEGREE]: () => (job: Job) => {
            const store = useUserStore();
            if (!store.selectedDegrees.length)
                return true;

            return store.selectedDegrees.includes(job.degree);
        },
        [INCLUDE_JOB_IN_SEARCH]: () => (job: Job) => {
            const store = useUserStore();
           
            return job.title
                .toLocaleLowerCase()
                .includes(store.skillSearchTerm.toLocaleLowerCase());
        }
    }
})