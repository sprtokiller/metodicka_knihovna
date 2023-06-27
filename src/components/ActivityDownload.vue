<template>
  <section>
    <n-h2 prefix="bar">Ke stažení</n-h2>
    <div class="my-5">
      <n-card title="Pracovní list">
        TODO - add space between buttons
        <br />
        <n-button dashed>Pro novinářskou redakci / tým expertů</n-button>
        <br />
        <n-button dashed
          >Přehled témat pro tvorbu otázek jednotlivými novinářskými redakcemi</n-button
        >
      </n-card>
    </div>
  </section>
</template>

<script setup lang="ts">
import { NH2, NCard, NButton } from 'naive-ui'
</script>
