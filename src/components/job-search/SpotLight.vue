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

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
const spotLights = ref([]);

const getSpotLights = async () => {
    const baseURL = import.meta.env.VITE_APP_API_URL;
    const url = `${baseURL}/spotlights`;
    const res = await axios.get(url);
    spotLights.value = res.data;
}
onMounted(getSpotLights); 
</script>