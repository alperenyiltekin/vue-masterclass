import {
    render,
    screen
}                   from "@testing-library/vue";
import axios        from "axios";
import SpotLight    from "@/components/job-search/SpotLight.vue";

vi.mock("axios");

describe('SpotLight', () => {
    it("provides image", async () => {
        axios.get.mockResolvedValue({
            data: [
                {
                    id          : 1,
                    img         : "image src",
                    title       : "content title",
                    description : "content description"
                }
            ]
        })

        render(SpotLight, {
            slots: {
                default:    `<template v-slot:default="slotProps">
                                <h1>{{ slotProps.img }}</h1>
                            </template>`
            }
        });

        const text = await screen.findByText("image src");
        expect(text).toBeInTheDocument();
    });

})