import {
    render,
    screen
}                           from "@testing-library/vue";
import { RouterLinkStub }   from "@vue/test-utils";
import JobListingItem       from "@/components/job-results/JobListingItem.vue";

describe('JobListing', () => {
    const defaultProps = (props = {}) => ({
        title: "Vue Developer",
        organization: "Netflix",
        ...props
    })

    const renderList = (p) => {
        render(JobListingItem, {
            global: {
                stubs: {
                    "router-link": RouterLinkStub,
                }
            },
            props: {
                job: {
                    ...p
                }
            }
        })
    }

    it("render job title", () => {
        const p = defaultProps({ title: "React Developer"})
        renderList(p);
        expect(screen.getByText("React Developer")).toBeInTheDocument();
    })

    it("render job org", () => {
        const p = defaultProps({ organization: "Netflix"})

        renderList(p);
        expect(screen.getByText("Netflix")).toBeInTheDocument();
    })
})