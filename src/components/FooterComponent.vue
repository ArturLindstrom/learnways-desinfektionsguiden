<template>
  <footer>
    <div v-if="route.name == 'home'" class="footer-container">
     <div class="kontakt">
       <h3>
         Kontakt
       </h3>
       <p>
         Denna utbildning är framtagen av Vårdhygien Stockholm
       </p>
       <a class="links" href="https://vardgivarguiden.se/kunskapsstod/vardhygien/">Vårdhygien Vårdgivarguiden
</a>
     </div>
     <div class="referenslista" >
       <h3>
        Referenslista
       </h3>
       <p>
         Ett urval av referenser och litteratur
       </p>
       <a class="links"  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://projekt.learnways.com/projekt/Learnways/Praktik/Desinfektion/pdfs/Referenslista.pdf">Se referenslistan
</a>
     </div>
     <div class="hygienrutiner">
       <h3>
         Basala hygienrutiner
       </h3>
       <a class="links"  href="https://www.basala-hygienrutiner.se/login.aspx?ReturnUrl=%2f">Klicka här för att komma till vår andra webbutbildning.
</a>
     </div>
    </div>
    <div v-if="route.name == 'olika-typer' || route.name == 'situationer'"  class="footer-container">
        <ButtonComponent action="forward">
          Gå till nästa del
        </ButtonComponent>
     </div>
  </footer>
</template>

<script setup>
import { onMounted } from '@vue/runtime-core';
import {useRoute, useRouter} from 'vue-router';
import ButtonComponent from './ButtonComponent.vue';
const route = useRoute();

</script>

<style lang="scss" scoped>
footer {
  background: #e0ded9;
  min-height: 6em;
  /* height: auto; */
  padding: 1em 0;
  color: #000000;
 
}
.footer-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 70px;
}

.footer-container div {
  text-align: left;
  padding-left: 60px;
  background-repeat: no-repeat;
    background-position: top left;
    background-size: 37px 37px;
}

.kontakt{
     background-image: url(../assets/footerImgs/icon-kontakt.svg);
    
}

.referenslista{
     background-image: url(../assets/footerImgs/icon-referens.svg);
    
}

.hygienrutiner{
     background-image: url(../assets/footerImgs/icon-link.svg);
    
}

.links, .links:visited .links:link{
  text-decoration: underline;
}

</style>