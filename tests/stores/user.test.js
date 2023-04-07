import {
    createPinia,
    setActivePinia
}                       from "pinia";
import { useUserStore } from "@/stores/user";

describe('state', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    })

    it("check user is logged in", () => {
        const store = useUserStore();
        expect(store.isLoggedIn).toBe(false);
    })
});

describe('actions', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    })

    describe("loginUser", () => {
        it("logs user", () => {
            const store = useUserStore();
            store.loginUser();
            expect(store.isLoggedIn).toBe(true);
        })
    })
})