<template>
  <n-card style="margin: auto; width: 70%; top: 10rem">
    <h2>Kolikrát Káťa ťukla: {{ counter.count }}</h2>
    <n-button @click="handleButtonClick">Ťuk!</n-button>
  </n-card>
</template>

<script setup lang="ts">
import { NCard, NInputNumber, NButton } from 'naive-ui'
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore() 

const handleButtonClick = () => {
  counter.increment()
}
</script>