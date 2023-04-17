import axios            from "axios";
import Jobs             from "@/api/jobs";
import type { Mock }    from "vitest";

vi.mock("axios");
const axiosGetMock = axios.get as Mock;

describe("get jobs", () => {
    beforeEach(() => {
        axiosGetMock.mockResolvedValue({
            data: [
                {
                    id: 1,
                    title: "Java Engineer"
                }
            ]
        })
    })

    it("fetch job", async () => {
        await Jobs();
        expect(axios.get).toHaveBeenCalledWith("http://localhost:3000/jobs")
    });

    it("extract job response data", async () => {
        const jobs = await Jobs();
        expect(jobs).toEqual([{ id: 1, title: "Java Engineer" }]);
    })
});