<template>
  <n-layout class="vh-100 vw-100">
    <n-layout-header style="height: 4rem; padding: 1.5rem" bordered>
      Test deploy funkce
    </n-layout-header>
    <n-layout position="absolute" style="top: 4rem;" has-sider sider-placement="right">
      <n-layout :native-scrollbar="false" class="outer-content-padding">
        <div class="inner-content-padding">
          <n-carousel :show-dots="false" ref="carouselRef">
            <n-carousel-item class="carousel-content-padding">
              <ActivityProfile />
            </n-carousel-item>
            <n-carousel-item class="carousel-content-padding">
              <ActivityFlow />
            </n-carousel-item>
            <n-carousel-item class="carousel-content-padding">
              <ActivityPrep />
            </n-carousel-item>
          </n-carousel>
        </div>
      </n-layout>
      <n-layout-sider content-style="padding: 1.5rem 1.5rem 1.5rem 0px; margin-left: 1rem;" :native-scrollbar="false">
        <n-scrollbar class="h-100">
          <n-anchor affix :show-rail="false" :type="'block'" :show-background="true">
            <n-anchor-link v-for="(section, index) in sections" :key="section" :title="section" @click="jumpTo(index)" :class="{ ['n-anchor-link--active']: carouselRef?.getCurrentIndex() === index }" />
          </n-anchor>
        </n-scrollbar>
      </n-layout-sider>
    </n-layout>
  </n-layout>
</template>

<style scoped>
.outer-content-padding {
  padding: 0.25rem 0.25rem 0.25rem 0.25rem;
}
.inner-content-padding{
  padding: 1rem 1rem 1rem 1rem;
}
.carousel-content-padding {
  padding: 1rem 3rem 1rem 3rem;
}
</style>

<script setup lang="ts">
import { NAnchor, NScrollbar, NAnchorLink } from 'naive-ui'
import ActivityProfile from '@/components/ActivityProfile.vue'
import ActivityFlow from '@/components/ActivityFlow/ActivityFlow.vue'
import ActivityPrep from '@/components/ActivityPrep/ActivityPrep.vue'
import { ref } from 'vue'
import { NLayout, NLayoutHeader, NLayoutSider, NCarousel, NCarouselItem } from 'naive-ui';
import type { CarouselInst } from 'naive-ui';

const sections = [ 'Profil', 'Průběh krok za krokem', 'Příprava', 'Varianty', 'Ke stažení', 'Návodné otázky', 'Inspirace', 'Galerie', 'Deriváty']

const carouselRef = ref<CarouselInst | null>(null)

function jumpTo(index : number) {
  carouselRef.value?.to(index)
}

</script>