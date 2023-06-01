<template>
  <n-card title="Materiály a pomůcky">
    <n-space vertical size="large">
      <n-checkbox size="large">
        Seznam témat, na které se budou tvořit otázky (vygeneruje kantor)
      </n-checkbox>
      <n-checkbox size="large">
        Pracovní list pro zápis otázek &ndash; týmy „redakce“ využijí levou část PL, týmy „experti“ pracují s pravou částí
        PL
      </n-checkbox>
      <n-checkbox size="large" label="large">
        <div>Časomíra &ndash; přesýpací hodiny, písnička jako časově ohraničený úsek, atd.</div>
        <n-button size="tiny" quaternary :color="values.primaryColor" @click.stop="">
          <template #icon>
            <n-icon>
              <attach-file-filled />
            </n-icon>
          </template>
          [PDF] Časomíry &ndash; různé formáty a možnosti pro měření času
        </n-button>
      </n-checkbox>
    </n-space>
  </n-card>
</template>

<script setup lang="ts">
import { useThemeVars, NSpace, NCheckbox, NCard, NButton, NIcon } from 'naive-ui';
import { AttachFileFilled } from '@vicons/material'
const values = useThemeVars().value;
</script>