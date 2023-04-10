import {
    render,
    screen
}                   from "@testing-library/vue";
import userEvent    from "@testing-library/user-event";
import Accordion    from "@/components/shared/Accordion.vue";


describe('accordion', () => {
    it("render context", async () => {
        render(Accordion, {
            global: {
                stubs: {
                    FontAwesomeIcon: true
                }
            },
            props: {
                header: "My Category"
            },
            slots: {
                default: "<h3>Slot</h3>"
            }
        });

        expect(screen.queryByText("Slot")).not.toBeInTheDocument();
        const button = screen.getByRole("button", {
            name: /my category/i
        });

        await userEvent.click(button);
        expect(screen.getByText("Slot")).toBeInTheDocument();
    });

    describe('parent does not providing content', () => {
        it("renders default content", async () => {
            render(Accordion, {
                global: {
                    stubs: {
                        FontAwesomeIcon: true
                    }
                },
                props: {
                    header: "My Category"
                },
            });
            
            const button = screen.getByRole("button", {
                name: /my category/i
            });
            await userEvent.click(button);
            expect(screen.getByText("Empty field")).toBeInTheDocument();
        })
    })
})