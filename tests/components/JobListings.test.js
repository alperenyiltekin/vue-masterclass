import { render }   from "@testing-library/vue";
import JobListings  from "@/components/job-results/JobListings.vue";
import axios        from "axios"

vi.mock("axios");

describe('JobListings', () => { 
    it("fetching process", () => {
        const $route = { 
            query: {
                page: "1"
            }
        }
        
        axios.get.mockResolvedValue({ data: [] });

        render(JobListings, {
            global: {
                mocks: {
                    $route
                }
            }
        });

        expect(axios.get).toHaveBeenCalled("http://localhost:3000/jobs")
    })
})