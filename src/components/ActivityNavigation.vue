<template>
    <n-scrollbar class="h-100">
        <n-anchor affix :show-rail="false" :bound="80" :type="'block'" :show-background="true" listen-to=".my-scroll-container">
            <n-anchor-link title="Profil" href="#activity-profile" />
            <n-anchor-link title="Průběh krok za krokem" href="#activity-flow" />
            <n-anchor-link title="Příprava"  href="#activity-prep" />
            <n-anchor-link title="Varianty" href="#activity-variants" />
            <n-anchor-link title="Ke stažení" href="#activity-downloads" />
            <n-anchor-link title="Návodné otázky" href="#activity-questions" />
            <n-anchor-link title="Inspirace" href="#activity-inspiration" >
                <n-anchor-link style="margin-top: 4px"  title="Galerie" href="#activity-gallery" />
                <n-anchor-link style="margin-bottom: 0px" title="Deriváty" href="#activity-derivates" />
            </n-anchor-link>
        </n-anchor>
    </n-scrollbar>
</template>
  
<script setup lang="ts">
import { NAnchorLink, NAnchor, NScrollbar } from 'naive-ui'
</script>