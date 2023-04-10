<template>
    <div class="flex flex-col border-r border-solid border-brand-gray-1 bg-white p-4 w-96">
        <section class="pb-5">
            <div class="flex flex-row justify-between">
                <h3 class="my-4 text-base font-semibold">What do you want to do?</h3>
                <div class="flex items-center text-sm">
                    <action-button 
                        text= "Clear Filters"
                        type= "secondary"
                    />
                </div>
            </div>
            <accordion type="Degree" />
            <accordion
                header="Job types"
            >
                Empty for now
            </accordion>
            <accordion
                header="Organizations"
            >
                <div class="mt-5">
                    <fieldset>
                        <ul class="flex flew-row flex-wrap">
                            <li class="h-8 w-1/2">
                                <input 
                                    type    = "checkbox" 
                                    id      = "VueTube"
                                    class   = "mr-3"
                                />
                                <label for="VueTube">VueTube</label>
                            </li>
                            <li class="h-8 w-1/2">
                                <input 
                                    type    = "checkbox" 
                                    id      = "Between Vue and Me"
                                    class   = "mr-3"
                                />
                                <label for="Between Vue and Me">Between Vue</label>
                            </li>
                            <li class="h-8 w-1/2">
                                <input 
                                    type    = "checkbox" 
                                    id      = "Et Vue Brute"
                                    class   = "mr-3"
                                />
                                <label for="Et Vue Brute">Et Vue Brute</label>
                            </li>
                            <li class="h-8 w-1/2">
                                <input 
                                    type    = "checkbox" 
                                    id      = "Vue and a Half Men"
                                    class   = "mr-3"
                                />
                                <label for="Vue and a Half Men">Vue and a Half Men</label>
                            </li>
                        </ul>
                    </fieldset>
                </div>
            </accordion>
        </section>
    </div>
</template>

<script>
import ActionButton from "@/components/shared/ActionButton.vue";
import Accordion    from "@/components/shared/Accordion.vue";

export default {
    name: "JobFiltersSidebar",
    components: {
        ActionButton,
        Accordion
    }
}
</script>