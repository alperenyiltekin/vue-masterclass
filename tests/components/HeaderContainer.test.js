import {
    render,
    screen
}                       from "@testing-library/vue";
import HeaderContainer  from "@/components/shared/HeaderContainer.vue";

describe('HeaderContainer', () => {
    it("allows parent component to title content", () => {
        render(HeaderContainer, {
            slots: {
                title: "<h2>title</h2>"
            }
        })

        expect(screen.getByText("title")).toBeInTheDocument();
    });

    it("allows parent component to subtitle content", () => {
        render(HeaderContainer, {
            slots: {
                title: "<h2>subtitle</h2>"
            }
        })

        expect(screen.getByText("subtitle")).toBeInTheDocument();
    });
})