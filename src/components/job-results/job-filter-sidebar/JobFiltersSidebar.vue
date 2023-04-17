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
                <div class="mt-5">
                    <fieldset>
                        <ul class="flex flew-row flex-wrap">
                            <li 
                                v-for   = "job in UNIQUE_JOB_TYPES" 
                                :key    = "job"
                                class   = "h-8 w-1/2"
                            >
                                <input 
                                    type    = "checkbox" 
                                    v-model = "selectedJobTypes"
                                    :value  = "job"
                                    :id     = "job"
                                    class   = "mr-3"
                                    @change = "selectedJobType"
                                />
                                <label :for="job">{{ job }}</label>
                            </li>
                        </ul>
                    </fieldset>
                </div>
            </accordion>
            <accordion
                header="Organizations"
            >
                <div class="mt-5">
                    <fieldset>
                        <ul class="flex flew-row flex-wrap">
                            <li 
                                v-for   = "org in UNIQUE_ORGANIZATIONS" 
                                :key    = "org"
                                class   = "h-8 w-1/2"
                            >
                                <input 
                                    type    = "checkbox" 
                                    v-model = "selectedOrganizations"
                                    :value  = "org"
                                    :id     = "org"
                                    class   = "mr-3"
                                    @change = "selectedOrganization"
                                />
                                <label :for="org">{{ org }}</label>
                            </li>
                        </ul>
                    </fieldset>
                </div>
            </accordion>
        </section>
    </div>
</template>

<script setup>
import { ref, computed }    from "vue";
import { useRouter }        from "vue-router";
import {
    useJobsStore,
    
}                           from "@/stores/jobs";
import {
    useUserStore,
   
}                           from "@/stores/user";
import ActionButton         from "@/components/shared/ActionButton.vue";
import Accordion            from "@/components/shared/Accordion.vue";

const selectedJobTypes          = ref([]);
const selectedOrganizations     = ref([]);
const jobsStore                 = useJobsStore();

const UNIQUE_JOB_TYPES          = computed(() => jobsStore.UNIQUE_JOB_TYPES);
const UNIQUE_ORGANIZATIONS      = computed(() => jobsStore.UNIQUE_ORGANIZATIONS);

const userStore = useUserStore();
const router    = useRouter();

const selectedJobType = () => {
    userStore.ADD_SELECTED_JOB_TYPES(selectedJobTypes.value);
    router.push({ name: "JobResults" })
}
const selectedOrganization = () => {
    userStore.ADD_SELECTED_ORGANIZATIONS(selectedOrganizations.value);
    router.push({ name: "JobResults" })
}

</script>