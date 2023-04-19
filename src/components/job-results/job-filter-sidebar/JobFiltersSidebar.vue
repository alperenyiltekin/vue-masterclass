<template>
    <div class="flex flex-col border-r border-solid border-brand-gray-1 bg-white p-4 w-96">
        <section class="pb-5">
            <div class="flex flex-row justify-between">
                <h3 class="my-4 text-base font-semibold">What do you want to do?</h3>
                <div class="flex items-center text-sm">
                    <action-button 
                        text    = "Clear Filters"
                        type    = "secondary"
                        @click  = "clearFilters"
                    />
                </div>
            </div>
            <JobFiltersSidebarSkills />
            <accordion header="Degree">
                <div class="mt-5">
                    <fieldset>
                        <ul class="flex flew-row flex-wrap">
                            <li 
                                v-for   = "deg in UNIQUE_DEGREES" 
                                :key    = "deg"
                                class   = "h-8 w-1/2"
                            >
                                <input 
                                    type    = "checkbox" 
                                    v-model = "selectedDegrees"
                                    :value  = "deg"
                                    :id     = "deg"
                                    class   = "mr-3"
                                    @change = "selectedDegree"
                                />
                                <label :for="deg">{{ deg }}</label>
                            </li>
                        </ul>
                    </fieldset>
                </div>
            </accordion>
            <accordion header="Job types">
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
            <accordion header="Organizations">
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

<script lang="ts" setup>
import {
    ref,
    computed,
    onMounted
}                               from "vue";
import {
    useRouter,
    useRoute
}                               from "vue-router";
import { useJobsStore }         from "@/stores/jobs";
import { useUserStore }         from "@/stores/user";
import { useDegreesStore }      from "@/stores/degrees";
import ActionButton             from "@/components/shared/ActionButton.vue";
import Accordion                from "@/components/shared/Accordion.vue";
import JobFiltersSidebarSkills  from "@/components/job-results/job-filter-sidebar/JobFilterSidebarSkills.vue";

const selectedJobTypes          = ref([]);
const selectedOrganizations     = ref([]);
const selectedDegrees           = ref([]);

const jobsStore                 = useJobsStore();
const degreesStore              = useDegreesStore();
const userStore                 = useUserStore();

const UNIQUE_JOB_TYPES          = computed(() => jobsStore.UNIQUE_JOB_TYPES);
const UNIQUE_ORGANIZATIONS      = computed(() => jobsStore.UNIQUE_ORGANIZATIONS);
const UNIQUE_DEGREES            = computed(() => degreesStore.UNIQUE_DEGREES);

const router = useRouter();
const route = useRoute();

const parseSkillsSearch = () => {
    const role = (route.query.role as string) || "";
    userStore.UPDATE_SKILL_SEARCH_TERM(role);
}


const selectedJobType = () => {
    userStore.ADD_SELECTED_JOB_TYPES(selectedJobTypes.value);
    router.push({ name: "JobResults" })
}

const selectedOrganization = () => {
    userStore.ADD_SELECTED_ORGANIZATIONS(selectedOrganizations.value);
    router.push({ name: "JobResults" })
}

const selectedDegree = () => {
    userStore.ADD_SELECTED_DEGREES(selectedDegrees.value);
    router.push({ name: "JobResults" })
}

const clearFilters = () => {
    userStore.CLEAR_FILTERS();
    selectedOrganizations.value = [];
    selectedJobTypes.value      = [];
    selectedDegrees.value       = [];
        
}

onMounted(parseSkillsSearch);
</script>