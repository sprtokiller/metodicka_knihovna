<script setup lang="ts">
import { NLayout, NLayoutHeader, NInput, NIcon, NCard } from 'naive-ui'
import { SearchSharp } from '@vicons/ionicons5'
</script>

<template>
  <main>
    <n-layout class="vh-100 vw-100">
      <n-layout-header style="height: 4rem; padding: 1.5rem" bordered>
        Vyhledávání
      </n-layout-header>

      <n-layout position="absolute" style="top: 4rem;" has-sider sider-placement="right">
        <n-layout>
          <n-input round placeholder="What to search for?">
            <template #prefix>
              <n-icon :component="SearchSharp" />
            </template>
          </n-input>

          <!-- search results -->
          <n-layout :native-scrollbar="false" class="outer-content-padding">
            <n-card title="result" size="small">
              <p>Search results will be displayed here.</p>
            </n-card>
          </n-layout>
        </n-layout>
      </n-layout>
    </n-layout>
  </main>
</template>