<template>
  <n-card title="Průběh aktivity &ndash; instrukce pro studenty">
    <n-list :show-divider="false" class="list-active">
      <n-list-item>
        <template #prefix>
          <div class="list-number" :style="{ borderColor: DEFAULT }">1</div>
        </template>
        <div>
          Rozdělte třídu na skupiny po 4 (novinářské redakce) a jednu skupinu expertů.
        </div>
      </n-list-item>
      <n-list-item>
        <template #prefix>
          <div class="list-number" :style="{ borderColor: DEFAULT }">2</div>
        </template>
        <div>
          Zadejte téma, ke kterému novináři vytvoří otázky, experti si připraví odpovědi.
        </div>
      </n-list-item>
      <n-list-item>
        <template #prefix>
          <div class="list-number" :style="{ borderColor: DEFAULT }">3</div>
        </template>
        <div>
          Před zahájením TK vysvětlete postup kladení otázek
        </div>
        <span class="list-infocontent" :style="{ color: OK }">Jste v roli moderátora (rozhodce) &ndash; posuzujete relevantnost otázky</span>
      </n-list-item>
      <n-list-item>
        <template #prefix>
          <div class="list-number" :style="{ borderColor: DEFAULT }">4</div>
        </template>
        <div>
          Kantor zahájí TK a vyzve prvního novináře, aby položil otázku
        </div>
      </n-list-item>
      <n-list-item>
        <template #prefix>
          <div class="list-number" :style="{ borderColor: DEFAULT }">5</div>
        </template>
        <div>
          Kantor zvolí konkrétního experta, spouští 30 sekundový limit
        </div>
      </n-list-item>
      <n-list-item>
        <template #prefix>
          <div class="list-number" :style="{ borderColor: DEFAULT }">6</div>
        </template>
        <div>
          Expert zodpoví otázku
        </div>
        <span class="list-infocontent" :style="{ color: OK }">Kantor posoudí správnost a věcnost odpovědi. Zapisuje info, zda otázka zodpovězena či nezodpovězena</span>
      </n-list-item>
    </n-list>
    <!-- <n-input
      v-model:value="value"
      type="textarea"
      placeholder="Vlastní komentář"
    /> -->
  </n-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useThemeVars, NList, NListItem, NCard, NInput } from 'naive-ui';
const value = ref('');
const values = useThemeVars().value;

const DEFAULT = values.textColor3;
const OK = values.successColor;
const WARNING = values.warningColor;
const ERROR = values.errorColor;
</script>