<template>
    <main>
        <section class="flex flex-col h-screen pt-10 pb-20">
           <div class="grid grid-cols-12">
                <div class="col-span-1 col-start-1">
                </div>
                <div class="col-span-5 col-start-2">
                    <head-line />
                    <job-search-form />
                </div>
                <div class="col-span-5 col-start-7 self-center justify-self-center">
                    <img 
                        class   = "h-80 w-80 object-contain" 
                        src     = "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" 
                        alt     = ""
                    >
                </div>
                <div class="col-span-1 col-start-12">
                </div>
           </div>
        </section>
    </main>
</template>

<script>
import HeadLine         from '@/components/job-search/HeadLine.vue';
import JobSearchForm    from '@/components/job-search/JobSearchForm.vue';

export default {
    name: "Hero",
    components: {
        HeadLine,
        JobSearchForm
    }
}
</script>