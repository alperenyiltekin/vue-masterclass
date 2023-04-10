<template>
    <ul>
        <li 
            v-for   = "sl in spotLights"
            :key    = "sl.id"
        >
            <slot 
                :img        = "sl.img"
                :title      = "sl.title"
                :description= "sl.description"
            ></slot>
        </li>
    </ul>
</template>

<script>
import axios from "axios";

export default {
    name: "SpotLight",
    data() {
        return {
            spotLights: [],
        }
    },
    async mounted() {
        const baseURL = import.meta.env.VITE_APP_API_URL;
        const url = `${baseURL}/spotlights`;
        const res = await axios.get(url);
        this.spotLights = res.data;
    }
}
</script>