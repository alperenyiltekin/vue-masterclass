<template>
    <header :class="['w-full', 'text-sm', headerHeightClass]">
        <div class="fixed top-0 left-0 w-full h-16 bg-white">
            <div class="flex h-full flex-nowrap border-b border-solid border-b-brand-gray-1 px-8 mx-auto">
                <router-link 
                    :to  = "{ name: 'Home' }"
                    class= "flex h-full items-center text-xl"
                >
                    {{ company }}
                </router-link>

                <nav class="ml-12 h-full">
                    <ul class="flex h-full list-none">
                        <li 
                            class   = "ml-9 h-full first:ml-0"
                            v-for   = "item in menuItems"
                            key     = "item.text"
                        >
                            <router-link 
                                :to     = "item.url" 
                                class   = "flex h-full items-center py-2.5"
                            >
                                {{ item.text }}
                            </router-link>
                        </li>
                    </ul>
                </nav>

                <div class="ml-auto flex h-full items-center">
                    <profile-image v-if="isLoggedIn" />
                    <action-button 
                        v-else  
                        @click      = "loginUser" 
                        text        = "Sign In"
                        type        = "primary"
                    />
                </div> 
            </div> 
            <subnav v-if="isLoggedIn"/>
        </div>
    </header>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { 
    mapActions, 
    mapState 
}                       from "pinia";
import { useUserStore } from "@/stores/user";
import ActionButton     from '@/components/shared/ActionButton.vue';
import ProfileImage     from '@/components/navigation/ProfileImage.vue';
import Subnav           from '@/components/navigation/Subnav.vue';

const menuItems = ref(
    [
        { text: "Teams", url: "/teams" },
        { text: "Locations", url: "/" },
        { text: "Life at Corp", url: "/" },
        { text: "How we hire", url: "/" },
        { text: "Students", url: "/" },
        { text: "Jobs", url: "/jobs/results" },
    ],
);

const userStore = useUserStore();
const loginUser = userStore.LOGIN_USER;
const isLoggedIn = computed(() => userStore.isLoggedIn);
const headerHeightClass = computed(() => ({
    "h-16": isLoggedIn,
    "h-32": !isLoggedIn
}));

// export default {
 
//     data() {
//         return {
//             company: "Careers",
//             url: "https://careers.google.com",

//         }
//     },
//     computed: {
//         ...mapState(useUserStore, [ "isLoggedIn" ]),
//         headerHeightClass() {
//             return {

//             }
//         }
//     },
//     methods: {
//         ...mapActions(useUserStore, [ "loginUser" ])
//     }
// }
</script>