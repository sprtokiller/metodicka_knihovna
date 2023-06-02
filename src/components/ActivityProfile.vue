<template>
  <section>
    <n-h2 prefix="bar">Profil aktivity: Tisková konference</n-h2>
    <n-row :gutter="12">
      <n-col :span="20">
        <n-empty description="You can't find anything" style="margin-top: 200px"/>
        <!-- <div class="my-5" style="max-width: 70%;"> 
          <n-h3 style="margin-bottom: 0;">Popis</n-h3>
          Doformulovat - studenti formou hry na novináře a experty na tiskovou konferenci – novinářské redakce „grilují“ tým expertů. Expertní tým za správné odpovědi získává body…
        </div>
        <div class="my-5" style="max-width: 70%; margin-left: 10%;"> 
          <n-h3 style="margin-bottom: 0;">Cíl</n-h3>
          Procvičit dovednost formulovat správně otázky, abych se dozvěděl požadovanou informaci.<br>
          Procvičit učivo / informace, které souvisí s probranou či v budoucnu probíranou látkou / učivem.</div>
        <div class="my-5" style="max-width: 70%;  margin-left: 5%;"> 
          <n-h3 style="margin-bottom: 0;">Přínos</n-h3>
          Doformulovat - studenti formou hry na novináře a experty na tiskovou konferenci – novinářské redakce „grilují“ tým expertů. Expertní tým za správné odpovědi získává body…
        </div> -->
      </n-col>
      <n-col :span="4">
        <n-list :show-divider="false">
          <n-list-item>
            <n-tooltip trigger="hover">
              <template #trigger>
                <div class="stat-trig my-3">
                  <div>
                    <timer-sharp class="stat-icon" :style="{ color: mainColor }" />
                  </div>
                  <span class="stat-desc">
                    25 &ndash; 40 min
                  </span>
                </div>
              </template>
              Celková délka se odvíjí od počtu vystřídaných skupin expertů.
            </n-tooltip>
          </n-list-item>
          <n-list-item>
            <n-tooltip trigger="hover">
              <template #trigger>
                <div class="stat-trig my-3">
                  <div>
                    <group-filled class="stat-icon" :style="{ color: mainColor }" />
                  </div>
                  <span class="stat-desc">
                    6 skupin<br>4 &ndash; 6 osob/sk.
                  </span>
                </div>
              </template>
              Ideálně 4 studenti ve skupině, max 6 lidí ve skupině.
            </n-tooltip>
          </n-list-item>
          <n-list-item>
            <n-tooltip trigger="hover">
              <template #trigger>
                <div class="stat-trig my-3">
                  <div>
                    <print-outlined class="stat-icon" :style="{ color: mainColor }" />
                  </div>
                  <span class="stat-desc">
                    Stopky, losovací sada, vytištěné pracovní listy 
                  </span>
                </div>
              </template>
              Losovací sada &ndash; rozdělení třídy do týmů. Ideálně avizovat rozdělení již během hodiny předešlé &ndash; šetří to čas v hodině, kdy realizujeme TK</n-tooltip>
          </n-list-item>
        </n-list>

      </n-col>
    </n-row>
  </section>
</template>

<script setup lang="ts">
import { useThemeVars, NH2, NRow, NCol, NTooltip, NList, NListItem, NEmpty } from 'naive-ui';
import { TimerSharp, GroupFilled, PrintOutlined } from '@vicons/material';

const values = useThemeVars().value;
const mainColor = values.primaryColor;

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