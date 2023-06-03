<template>
  <section>
    <n-h2 prefix="bar">Galerie</n-h2>
    <n-divider>Příprava</n-divider>
    <n-grid cols="1 400:2 600:3 800:4 1000:5 1200:6 1400:7">
      <n-grid-item>
        <n-image
          width="200"
          src="https://picsum.photos/seed/a/800"
        />
      </n-grid-item>
      <n-grid-item>
        <n-image
          width="200"
          src="https://picsum.photos/seed/b/800"
        />
      </n-grid-item>
      <n-grid-item>
        <n-image
          width="200"
          src="https://picsum.photos/seed/c/800"
        />
      </n-grid-item>
      <n-grid-item>
        <n-image
          width="200"
          src="https://picsum.photos/seed/d/800"
        />
      </n-grid-item>
      <n-grid-item>
        <n-image
          width="200"
          src="https://picsum.photos/seed/e/800"
        />
      </n-grid-item>
      <n-grid-item>
        <n-image
          width="200"
          src="https://picsum.photos/seed/f/800"
        />
      </n-grid-item>
      <n-grid-item>
        <n-image
          width="200"
          src="https://picsum.photos/seed/g/800"
        />
      </n-grid-item>
    </n-grid>

    <n-divider>Postup</n-divider>
    <n-grid cols="1 400:2 600:3 800:4 1000:5 1200:6 1400:7">
      <n-grid-item>
        <n-image
          width="200"
          src="https://picsum.photos/seed/h/800"
        />
      </n-grid-item>
      <n-grid-item>
        <n-image
          width="200"
          src="https://picsum.photos/seed/i/800"
        />
      </n-grid-item>
      <n-grid-item>
        <n-image
          width="200"
          src="https://picsum.photos/seed/j/800"
        />
      </n-grid-item>
      <n-grid-item>
        <n-image
          width="200"
          src="https://picsum.photos/seed/k/800"
        />
      </n-grid-item>
      <n-grid-item>
        <n-image
          width="200"
          src="https://picsum.photos/seed/l/800"
        />
      </n-grid-item>
      <n-grid-item>
        <n-image
          width="200"
          src="https://picsum.photos/seed/m/800"
        />
      </n-grid-item>
    </n-grid>
  </section>
</template>

<script setup lang="ts">
import {NH2, NImage, NDivider, NGrid, NGridItem } from 'naive-ui';
</script>

<style scoped>
.stat-desc {
  font-weight: 600;
}

.stat-icon {
  max-width: 3rem;
  opacity: 0.7;
}

.stat-trig{
  text-align: center;
}
.box {
  width: 500px; 
  height: 100px;  
  border: solid 5px #000;
  border-color: gray;
  border-radius: 0 50%/100px 100px 0;
}
</style>