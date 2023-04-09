import { render }       from "@testing-library/vue";
import { 
    createTestingPinia 
}                       from "@pinia/testing";
import { 
    createPinia, 
    getActivePinia 
}                       from "pinia";
import JobListings      from "@/components/job-results/JobListings.vue";
import { useJobsStore } from "@/stores/jobs";

describe('JobListings', () => { 
    beforeEach(() => {
        getActivePinia(createPinia())
    })
    it.only("fetching process", () => {
        const $route = { 
            query: {
                page: "1"
            }
        }

        const pinia = createTestingPinia();

        render(JobListings, {
            global: {
                plugins: [ pinia ],
                mocks: {
                    $route
                }
            }
        });
        const jobsStore = useJobsStore();
        expect(jobsStore.FETCH_JOBS).toHaveBeenCalled()
    })
});