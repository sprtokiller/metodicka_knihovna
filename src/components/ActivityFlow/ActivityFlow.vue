<template>
  <section>
    <n-h2 prefix="bar">Průběh krok za krokem</n-h2>
    <n-row :gutter="12" style="margin-bottom: 2rem;">
      <n-col :span="16">
        <ActivityPrepPhase style="margin-bottom: 12px;"/>
        <ActivityActivePhase />
      </n-col>
      <n-col :span="8">
        <ActivityMinutebook />
      </n-col>
    </n-row>
  </section>
</template>

<script setup lang="ts">
import ActivityMinutebook from './ActivityMinutebook.vue';
import ActivityPrepPhase from './ActivityPrepPhase.vue';
import ActivityActivePhase from './ActivityActivePhase.vue';
import { NH2, NRow, NCol } from 'naive-ui';
</script>