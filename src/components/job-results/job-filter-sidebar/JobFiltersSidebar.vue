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

<script>
import { 
    mapState,
    mapActions
}                           from "pinia";
import {
    useJobsStore,
    UNIQUE_ORGANIZATIONS
}                           from "@/stores/jobs";
import {
    useUserStore,
    ADD_SELECTED_ORGANIZATIONS
}                           from "@/stores/user";
import ActionButton         from "@/components/shared/ActionButton.vue";
import Accordion            from "@/components/shared/Accordion.vue";

export default {
    name: "JobFiltersSidebar",
    components: {
        ActionButton,
        Accordion
    },
    data() {
        return {
            selectedOrganizations: [],
        }
    },
    computed: {
        ...mapState(useJobsStore, [UNIQUE_ORGANIZATIONS])
    },
    methods: {
        ...mapActions(useUserStore, [ADD_SELECTED_ORGANIZATIONS]),
        selectedOrganization() {
            this.ADD_SELECTED_ORGANIZATIONS(this.selectedOrganizations);
        }
    }
}
</script>