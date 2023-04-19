import type { Mock }            from "vitest";
import { 
    render, 
    screen 
}                               from "@testing-library/vue";
import SubNav                   from "@/components/navigation/Subnav.vue";
import { useRoute }             from "vue-router";
import { createTestingPinia }   from "@pinia/testing";
import { useJobsStore }         from "@/stores/jobs";

vi.mock("vue-router");

const useRouteMock = useRoute as Mock;

describe("Subnav", () => {
    const renderTheSubnav = () => {
        const pinia = createTestingPinia();
        const jobsStore = useJobsStore();

        render(SubNav, {
            global: {
                plugins: [ pinia ],
                stubs: {
                    FontAwesomeIcon: true,
                }
            },
            data() {
                return {
                    onJobResultsPage: true
                }
            }
        })
    }

    describe("user on the job page", () => {
        it("displays job count", async () => {
            useRouteMock.mockReturnValue({
                name: "JobResults"
            })
            
            const { jobsStore } = renderTheSubnav();
            
            const numberOfJobs = 16;
            // @ts-expect-error
            jobsStore.FILTERED_ALL_JOBS = Array(jobCount).fill({});
            const jobCount = await screen.findByText(numberOfJobs);
            expect(jobCount).toBeInTheDocument();
        })
    })

    describe("user not on the job page", () => {
        it("no displays job count", async () => {
            useRouteMock.mockReturnValue({
                name: "Home"
            })

            const { jobsStore } = renderTheSubnav();

            const numberOfJobs = 16;
            // @ts-expect-error
            jobsStore.FILTERED_ALL_JOBS = Array(jobCount).fill({});
            const jobCount = await screen.findByText(numberOfJobs);
            expect(jobCount).toBeInTheDocument();
        })
    })
})