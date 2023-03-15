import { 
    render, 
    screen 
}                   from "@testing-library/vue";
import SubNav       from "@/components/navigation/Subnav.vue";

describe("Subnav", () => {
    describe("user on the job page", () => {
        it("displays job count", () => {
            render(SubNav, {
                global: {
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

            const jobCount = screen.getByText("16");
            expect(jobCount).toBeInTheDocument();
        })
    })

    describe("user not on the job page", () => {
        it("no displays job count", () => {
            render(SubNav, {
                global: {
                    stubs: {
                        FontAwesomeIcon: true,
                    }
                },
                data() {
                    return {
                        onJobResultsPage: false
                    }
                }
            })

            const jobCount = screen.queryByText("16");
            expect(jobCount).not.toBeInTheDocument();
        })
    })
})