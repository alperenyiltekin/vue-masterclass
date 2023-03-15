import { 
    render, 
    screen 
}                   from "@testing-library/vue";
import { nextTick } from "vue";
import HeadLine     from "@/components/job-search/HeadLine.vue";

describe("HeadLine", () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });

    afterEach(() => {
        vi.useRealTimers();
    })

    describe("display for Headline", () => {
        it("displays first value display", () => {
            render(HeadLine);

            const actionPhrase = screen.getByRole("heading", {
                name: /build for everyone/i,
            });
            expect(actionPhrase).toBeInTheDocument();
        });

        it("changes action interval", () => {
            const mock = vi.fn();
            vi.stubGlobal("setInterval", mock);
            render(HeadLine);

            expect(mock).toHaveBeenCalled();
        });

        it("swaps action after interval", async () => {
            render(HeadLine);
            vi.advanceTimersToNextTimer();

            await nextTick();
            const actionPhrase = screen.getByRole("heading", {
                name: /create for everyone/i,
            });
            
            expect(actionPhrase).toBeInTheDocument();
        });

        it("removes interval when comp disappears", async () => {
            const clearInterval = vi.fn();
            vi.stubGlobal("clearInterval", clearInterval);

            const { unmount } = render(HeadLine);
            unmount();

            expect(clearInterval).toHaveBeenCalled();
        });
    }) 
})