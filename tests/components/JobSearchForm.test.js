import {
    render,
    screen
}                       from "@testing-library/vue";
import userEvent        from "@testing-library/user-event";
import { useRouter }    from "vue-router";

vi.mock("vue-router");
import JobSearchForm    from "@/components/job-search/JobSearchForm.vue";

describe("JobSearchForm", () => {
    describe("submitting the form", () => {
        it("check direction to job result with params", async () => {
            const push = vi.fn();
            useRouter.mockReturnValue({ push })

            render(JobSearchForm, {
                global: {
                    stubs: {
                        FontAwesomeIcon: true,
                    }
                }
            })

            const role = screen.getByRole("textbox", {
                name: /role/i
            });
            await userEvent.type(role, "Vue Developer")

            const location = screen.getByRole("textbox", {
                name: /where?/i
            });
            await userEvent.type(location, "Germany")

            const submit = screen.getByRole("button", {
                name: /search/i
            });
            await userEvent.click(submit);

            expect(push).toHaveBeenCalledWith({
                name    : "JobResults",
                query   : { 
                    role    : "Vue Developer",
                    location: "Germany"
                }
            })
        })
    })
})