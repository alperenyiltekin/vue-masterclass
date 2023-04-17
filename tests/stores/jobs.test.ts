import type { Mock }    from "vitest";
import type { Job }     from "@/api/types";
import {
    createPinia,
    setActivePinia
}                       from "pinia";
import axios            from "axios";
import { useJobsStore } from "@/stores/jobs";

vi.mock("axios");
const axiosGetMock = axios.get as Mock;

describe('state', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    })

    it("store job listing", () => {
        const store = useJobsStore();
        expect(store.jobs).toEqual([]);
    })
});


describe('actions', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    })

    describe('FETCH_JOBS', () => {
        it("make api request", async () => {
            axiosGetMock.mockResolvedValue({ data: [ "job1", "job2" ] });
            const store = useJobsStore();
            await store.FETCH_JOBS();
            
            expect(store.jobs).toEqual([ "job1", "job2" ])
        })
    })

    describe("check getters", () => {
        beforeEach(() => {
            setActivePinia(createPinia());
        })

        describe("unique organizations", () => {
            it("finds unique organizations from list of jobs", () => {
                const store = useJobsStore();
                store.jobs = [
                    { organization: "Google" },
                    { organization: "Amazon" },
                    { organization: "Netflix" },
                    { organization: "Netflix" },
                ] as Job[];
                
                const result = store.UNIQUE_ORGANIZATIONS;

                expect(result).toEqual(new Set([ "Google", "Amazon", "Netflix" ]));
            })

        })
    })
})