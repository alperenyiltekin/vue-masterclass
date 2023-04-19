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

<script lang="ts" setup>
import { ref, onMounted }   from "vue";
import axios                from "axios";

interface SpotLight {
    id          : number,
    img         : string,
    title       : string,
    description : string
};

const spotLights = ref<SpotLight[]>([]);

const getSpotLights = async () => {
    const baseURL = import.meta.env.VITE_APP_API_URL;
    const url = `${baseURL}/spotlights`;
    const res = await axios.get<SpotLight[]>(url);
    spotLights.value = res.data;
}
onMounted(getSpotLights); 
</script>