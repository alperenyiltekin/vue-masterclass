<template>
    <header-container>
        <template v-slot:title>
            <h1 class="w-full text-4xl font-normal">Teams</h1>
        </template>

        <template v-slot:subtitle>
            <h2 class="my-4 w-full text-base font-light">
                It's awesome working here!
            </h2>
        </template>
    </header-container>
</template>

<script lang="ts" setup>
import HeaderContainer from "@/components/shared/HeaderContainer.vue";
</script>