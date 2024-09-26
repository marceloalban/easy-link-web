import data from '@/assets/data.json' assert { type: 'json' }
import { defineStore } from "pinia";

export const useSitesStore = defineStore('sitesStore', {
    state: () => {
        return {
            sitesData: data.database[0]
        }
    }
})