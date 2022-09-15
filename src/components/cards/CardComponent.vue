<template>
  <div class="card">
    <img :src="cardContent.image" class="image" />
    <SubHeadingComponent>
      {{ cardContent.title }}
    </SubHeadingComponent>
    <p v-if="cardContent.body">
      {{ cardContent.body }}
    </p>
    <ul v-if="cardContent.list">
      <li v-for="(item, i) in cardContent.listItems" :key="i">
        {{ item }}
      </li>
    </ul>
    <div class="button-container" v-if="cardContent.buttons">
      <ButtonComponent v-for="button in cardContent.buttons" :key="button">
        {{ button }}
      </ButtonComponent>
    </div>
    <div class="button-container" v-if="cardContent.situations">
      <ButtonComponent
        v-for="(situation, i) in cardContent.situations"
        :key="i"
        @click="modalOpen(situation)"
        :situationId="situation.id"
        :tabindex="modalComponentOpen ? -1 : 0"
      >
        Situation {{ i + 1 }}
      </ButtonComponent>
    </div>
  </div>
</template>

<script setup>
  import SubHeadingComponent from "@/components/headings/SubHeadingComponent.vue";
  import ButtonComponent from "../ButtonComponent.vue";
  import { computed } from "vue";
  import { useStore } from "vuex";

  const props = defineProps({
    cardContent: {
      type: Object,
    },
  });

  const store = useStore();

  const modalOpen = (situation) => {
    store.commit("modalOpen", situation);
  };

  const modalComponentOpen = computed(() => store.state.modalShown);

  const cardContent = props.cardContent;
</script>

<style scoped lang="scss">
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 450px;
    border-radius: 5px;
    background: #f5f2ed;
    justify-content: flex-start;
    padding: 20px;
    margin: 0 10px;
    flex: 1;
    min-width: 220px;
    gap: 30px;
  }

  p, ul, li {
    text-align: left;
  }

  .button-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }

  .image{
    width: 169px;
    height: 169px;
  }

  @media screen and (max-width: 480px) {
    .card {
      padding: 40px
    }
  }
</style>
