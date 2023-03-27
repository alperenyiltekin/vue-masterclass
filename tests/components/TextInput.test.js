import {
    render,
    screen
}                       from "@testing-library/vue";
import userEvent        from "@testing-library/user-event";
import  TextInput       from "@/components/Shared/TextInput.vue";

describe("TextInput", () => {
    it("check entered value", async () => {
        const { emitted } = render(TextInput, {
            props: {
                modelValue: "",
            }
        });

        const input = screen.getByRole("textbox");
        await userEvent.type(input, "Ist")
        const data = emitted()["update:modelValue"];
        
        expect(data).toEqual([["I"], ["Is"], ["Ist"]]);

    })
})