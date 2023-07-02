import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Ref, ComputedRef } from 'vue'

export const useActivityStore = defineStore('activityStore', () => {
    //states

    //getters

    //actions
    async function getActivity(activityUUID: string): Promise<void> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve()
            }, 1000)
        })
    }
})
