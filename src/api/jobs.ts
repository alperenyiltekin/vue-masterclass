import axios        from "axios";
import type { Job } from "@/api/types";

const jobs = async () => {
    const baseURL   = import.meta.env.VITE_APP_API_URL;
    const url       = `${baseURL}/jobs`;
    const response  = await axios.get<Job[]>(url);
    
    return response.data;
}

export default jobs;