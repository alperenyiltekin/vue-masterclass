import { 
    render, 
    screen 
}                   from "@testing-library/vue";
import SubNav       from "@/components/navigation/Subnav.vue";

describe("Subnav", () => {
    const renderTheSubnav = (name) => {
        render(SubNav, {
            global: {
                mocks: {
                    $route: {
                        name
                    }
                },
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
        it("displays job count", () => {
            const route = "JobResults";
            renderTheSubnav(route);

            const jobCount = screen.getByText("16");
            expect(jobCount).toBeInTheDocument();
        })
    })

    describe("user not on the job page", () => {
        it("no displays job count", () => {
            const route = "Home"

            renderTheSubnav(route);
            const jobCount = screen.queryByText("16");
            expect(jobCount).not.toBeInTheDocument();
        })
    })
})