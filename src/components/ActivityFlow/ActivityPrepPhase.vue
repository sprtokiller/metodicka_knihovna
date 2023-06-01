<template>
  <n-card title="Přípravná fáze">
    <n-list :show-divider="false" class="list-prep">
      <n-list-item>
        <template #prefix>
          <div class="list-number" :style="{ borderColor: DEFAULT }">1</div>
        </template>
        <div>
          Sestavit seznam témat pro experty (1&ndash;5 témat).
        </div>
      </n-list-item>
      <n-list-item>
        <template #prefix>
          <div class="list-number" :style="{ borderColor: DEFAULT }">2</div>
        </template>
        <div>
          Nasdílet témata studentům &ndash; ideálně v předchozí hodině, minimálně 1 den předem.
        </div>
      </n-list-item>
      <n-list-item>
        <template #prefix>
          <div class="list-number" :style="{ borderColor: WARNING }">3</div>
        </template>
        <div>
          Sestavit „vodítka“ &ndash; tzn. 2-3 otázky, které studentům pomohou lépe pochopit, jaké typy otázek tvořit.
        </div>
        <span class="list-infocontent" :style="{ color: WARNING }">Doporučeno v případě, že cílová skupina je mladší třída.</span>
      </n-list-item>
      <n-list-item>
        <template #prefix>
          <div class="list-number" :style="{ borderColor: DEFAULT }">4</div>
        </template>
        <div>
          Vytisknout „vodítkové“ otázky na papír, případně předepsat na flipchart.
        </div>
      </n-list-item>
    </n-list>
  </n-card>
</template>

<script setup lang="ts">
import { useThemeVars, NList, NListItem, NCard } from 'naive-ui';
const values = useThemeVars().value;

const DEFAULT = values.textColor3;
const OK = values.successColor;
const WARNING = values.warningColor;
const ERROR = values.errorColor;
</script>