<template>
  <footer v-if="route.name != 'diplom'">
    <div v-if="route.name == 'home'" class="footer-container">
      <div class="kontakt">
        <p>Kontakt</p>
        <p class="small">
          Denna utbildning är framtagen av Vårdhygien Stockholm
        </p>
        <a
          class="links"
          href="https://vardgivarguiden.se/kunskapsstod/vardhygien/"
          tabindex="2"
          >Vårdhygien Vårdgivarguiden
        </a>
      </div>
      <div class="referenslista">
        <p>Referenslista</p>
        <p class="small">Ett urval av referenser och litteratur</p>
        <a
          class="links"
          href="https://projekt.learnways.com/projekt/Learnways/Praktik/Desinfektion/pdfs/Referenslista.pdf"
          tabindex="2"
          >Se referenslistan
        </a>
      </div>
      <div class="hygienrutiner">
        <p>Basala hygienrutiner</p>
        <a
          class="links"
          href="https://www.basala-hygienrutiner.se/login.aspx?ReturnUrl=%2f"
          tabindex="2"
          >Klicka här för att komma till vår andra webbutbildning.
        </a>
      </div>
    </div>
    <div
      v-if="route.name == 'olikatyper' || route.name == 'situationer'"
      class="footer-container"
    >
      <ButtonComponent action="forward" v-if="!modalOpen"> Gå till nästa del </ButtonComponent>
    </div>
  </footer>
</template>

<script setup>
  import { useRoute } from "vue-router";
  import { computed } from "vue";
  import ButtonComponent from "@/components/ButtonComponent.vue";
  import { useStore } from "vuex";
  
  const store = useStore();
  const modalOpen = computed(() => {
    return store.state.modalShown;
  });
  const route = useRoute();
</script>

<style lang="scss" scoped>
  footer {
    background: #e0ded9;
    min-height: 5em;
    padding: 1em 0;
    color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
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

  .kontakt {
    background-image: url(/assets/footerImgs/icon-kontakt.svg);
  }

  .referenslista {
    background-image: url(/assets/footerImgs/icon-referens.svg);
  }

  .hygienrutiner {
    background-image: url(/assets/footerImgs/icon-link.svg);
  }

  .links,
  .links:visited .links:link {
    text-decoration: underline;
  }

  .small {
    font-size: 15px;
  }

  p {
    font-size: 17px;
  }

  @media (max-width: 768px) {
    .footer-container {
      flex-direction: column;
      gap: 10px;
      align-items: flex-start;
      margin-left: 1rem;
    }
    .footer-container div {
      padding-left: 50px;
      text-align: left;
      background-position: center left;
    }
  }
</style>
