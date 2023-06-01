<template>
<n-card title="Minutovník">
    <n-space vertical>
      <n-timeline>
        <n-timeline-item type="default" title="Rozdělení do skupin" time="0:00 &ndash; 0:03" />
        <n-timeline-item type="default" title="Zadání pro novinářské redakce a experty" time="0:03 &ndash; 0:05" />
        <n-timeline-item type="success" title="Příprava otázek a odpovědí"
          content="Redakce si připravuje otázky, na které se budou ptát expertů." time="0:05 &ndash; 0:10" />
        <n-timeline-item type="success" title="Tisková konference 1" content="Průběh a moderace" time="0:10 &ndash; 0:20" />
        <n-timeline-item type="success" title="Tisková konference 2" content="Rotace na pozici týmů a expertů"
          time="0:20 &ndash; 0:30" />
        <n-timeline-item type="default" title="Zpětná vazba a vyhodnocení" time="0:30 &ndash; 0:35" />
      </n-timeline>
    </n-space>
  </n-card>
</template>

<script setup lang="ts">
import { NTimeline, NTimelineItem, NCard, NSpace } from 'naive-ui';
</script>