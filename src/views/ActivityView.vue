<template>
  <n-layout class="vh-100 vw-100">
    <n-layout-header style="height: 4rem; padding: 1.5rem" bordered>
      Záhlaví stránky
    </n-layout-header>
    <n-layout position="absolute" style="top: 4rem;" has-sider sider-placement="right">
      <n-layout ref="contentRef" :on-scroll="handleScroll" class="my-scroll-container" :native-scrollbar="false">
        <div v-show="showMore" style="position: absolute; bottom: 1.5rem; margin-left: 50%;">
          <n-button @click="contentRef?.scrollTo({ top: 630, behavior: 'smooth' })">Zobrazit více</n-button>
        </div>
        <div style="padding: 0rem 3rem 1rem 3rem;">
          <ActivityProfile />
          <ActivityFlow />
          <ActivityPrep />
          <n-back-top style="z-index: 99;" :bottom="30" :right="30" />
        </div>
      </n-layout>
      <n-layout-sider content-style="padding: 1.5rem 1.5rem 1.5rem 0px; margin-left: 1rem;" :native-scrollbar="false">
        <ActivityNavigation />
      </n-layout-sider>
    </n-layout>
    <!-- <n-layout-footer position="absolute" style="height: 3rem;" bordered>
    <div class="d-flex justify-content-center h-100">
      <div class="align-self-center">Patička</div>
    </div>
  </n-layout-footer> -->
  </n-layout>
</template>

<script setup lang="ts">
import ActivityNavigation from '@/components/ActivityNavigation.vue'
import ActivityProfile from '@/components/ActivityProfile.vue'
import ActivityFlow from '@/components/ActivityFlow/ActivityFlow.vue'
import ActivityPrep from '@/components/ActivityPrep/ActivityPrep.vue'
import { ref } from 'vue'
import { NLayout, NLayoutHeader, NLayoutSider, NBackTop, NButton } from 'naive-ui';
import type { LayoutInst } from 'naive-ui';

const contentRef = ref<LayoutInst | null>(null)
const showMore = ref(true)
// test when the page is scrolled by at least 100px
function handleScroll (e : any) {
  if (e.target.scrollTop > 20) {
    showMore.value = false
  } else {
    showMore.value = true
  }
}
</script>
