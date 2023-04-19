import { defineStore }  from "pinia";
import { ref }          from "vue";

export const ADD_SELECTED_ORGANIZATIONS = "ADD_SELECTED_ORGANIZATIONS";
export const ADD_SELECTED_JOB_TYPES     = "ADD_SELECTED_JOB_TYPES";
export const ADD_SELECTED_DEGREES       = "ADD_SELECTED_DEGREES";
export const CLEAR_FILTERS              = "CLEAR_FILTERS";
export const UPDATE_SKILL_SEARCH_TERM   = "UPDATE_SKILL_SEARCH_TERM";

export interface UserState {
    isLoggedIn              : boolean;
    selectedOrganizations   : string[];
    selectedJobTypes        : string[];
    selectedDegrees         : string[];
}

export const useUserStore = defineStore("user", () => {
    const isLoggedIn            = ref(false);
    const selectedOrganizations = ref<string[]>([]);
    const selectedJobTypes      = ref<string[]>([]);
    const selectedDegrees       = ref<string[]>([]);
    const skillSearchTerm       = ref("");

    const LOGIN_USER = () => {
        isLoggedIn.value = true;
    };

    const ADD_SELECTED_ORGANIZATIONS = (organizations: string[]) => {
        selectedOrganizations.value = organizations;
    };

    const ADD_SELECTED_JOB_TYPES = (jobTypes: string[]) => {
        selectedJobTypes.value = jobTypes;
    };

    const ADD_SELECTED_DEGREES = (degrees: string[]) => {
        selectedDegrees.value = degrees;
    };

    const CLEAR_FILTERS = () => {
        selectedDegrees.value        = [];
        selectedJobTypes.value       = [];
        selectedOrganizations.value  = [];
        skillSearchTerm.value        = "";
    };

    const UPDATE_SKILL_SEARCH_TERM = (input: string) => {
        skillSearchTerm.value = input;
    };

    return {
        isLoggedIn,
        selectedOrganizations,
        selectedJobTypes,
        selectedDegrees,
        skillSearchTerm,
        LOGIN_USER,
        ADD_SELECTED_ORGANIZATIONS,
        ADD_SELECTED_JOB_TYPES,
        ADD_SELECTED_DEGREES,
        CLEAR_FILTERS,
        UPDATE_SKILL_SEARCH_TERM
    }
})