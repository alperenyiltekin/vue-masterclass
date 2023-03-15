<template>
    <header :class="['w-full', 'text-sm', headerHeightClass]">
        <div class="fixed top-0 left-0 w-full h-16 bg-white">
            <div class="flex h-full flex-nowrap border-b border-solid border-b-brand-gray-1 px-8 mx-auto">
                <a 
                    :href="url" 
                    class="flex h-full items-center text-xl"
                >
                    {{ company }}
                </a>

                <nav class="ml-12 h-full">
                    <ul class="flex h-full list-none">
                        <li 
                            class   = "ml-9 h-full first:ml-0"
                            v-for   = "item in menuItems"
                            key     = "item"
                        >
                            <a href="" class="flex h-full items-center py-2.5">
                                {{ item }}
                            </a>
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

<script>
import ActionButton from '@/components/shared/ActionButton.vue';
import ProfileImage from '@/components/navigation/ProfileImage.vue';
import Subnav       from '@/components/navigation/Subnav.vue';
 
export default {
    name: "MainNav",
    components: {
        ActionButton,
        ProfileImage,
        Subnav
    },
    data() {
        return {
            company: "Careers",
            url: "https://careers.google.com",
            menuItems: [
                "Teams",
                "Location",
                "Life at Corp",
                "How we hire",
                "Students",
                "Jobs"
            ],
            isLoggedIn: false
        }
    },
    computed: {
        headerHeightClass() {
            return {
                "h-16": !this.isLoggedIn,
                "h-32": this.isLoggedIn
            }
        }
    },
    methods: {
        loginUser() {
            this.isLoggedIn = true;
        }
    }
}
</script>