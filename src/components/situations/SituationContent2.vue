<template>
  <div class="content-container">
    <header>
      <img :src="situation.image" />
      <HeadingComponent font-size="small">
        {{ situation.heading }}
      </HeadingComponent>
    </header>
    <MainComponent v-if="situation.questions">
      <TransitionGroup @enter="showNextQuestion">
        <QuestionComponent
          v-for="question in questions"
          :key="question.id"
          :question="question"
          @answer="incrementQuestionIndex(situation.id)"
        />
      </TransitionGroup>
    </MainComponent>
    <MainComponent v-else>
      <DragAndDrop :content="situation.dragAndDrop"> </DragAndDrop>
    </MainComponent>
    <!-- <footer class="footer"> -->
    <footer class="footer" v-if="showFooter">
      <img class="thumbs-up-icon" src="src/assets/qicon-last.svg" alt="" />
      <SubHeadingComponent class="sub-heading">
        {{ situation.end }}
      </SubHeadingComponent>
      <ButtonComponent @click="closeModal" class="trigger">
        Stäng
      </ButtonComponent>
    </footer>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, ref, onMounted } from "vue";
import HeadingComponent from "@/components/headings/HeadingComponent.vue";
import MainComponent from "@/components/layouts/MainComponent.vue";
import QuestionComponent from "./QuestionComponent.vue";
import SubHeadingComponent from "@/components/headings/SubHeadingComponent.vue";
import ButtonComponent from "../ButtonComponent.vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import DragAndDrop from "./DragAndDrop.vue";
gsap.registerPlugin(ScrollTrigger);

const store = useStore();
const situation = store.state.modalContent;

const showFooter = ref(false);

const questions = computed(() => {
  return situation.questions.slice(0, questionIndex.value);
});

const questionIndex = ref(1);

const incrementQuestionIndex = (situationId) => {
  questionIndex.value++;
  if (questionIndex.value > situation.questions.length) {
    showFooter.value = true;
    store.commit("addCompleted", situationId);
  }
};

const closeModal = () => {
  store.commit("modalContentClose");
  setTimeout(() => {
    store.commit("modalClose");
  }, 500);
};

const showNextQuestion = (el, done) => {
  gsap.from(el, {
    duration: 1,
    delay: 0.5,
    opacity: 0,
    y: 100,
  });
};

// const scrollTo = () => {
//   gsap.to(container.value, {
//     duration: 0.5,
//     scrollTo: {
//       y: 1000,
//       behavior: 'smooth'
//     }
//   })
// }
</script>

<style scoped lang="scss">
.content-container {
  display: flex;
  flex-direction: column;
  /* height: 500px; */
  /* overflow: scroll; */
}

header {
  display: flex;
  align-items: center;
  /* height: 20vh; */
  border-radius: 10px 10px 0 0;
  background: #f4edc9;
  padding: 3rem;
  & > img {
    margin: 1rem;
  }
}

footer {
  height: 100vh;
  background-color: #f4edc9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .thumbs-up-icon {
    width: 160px;
    height: 160px;
    margin-bottom: 80px;
    /* transform: rotate(45deg) scale(0.8);
    opacity: 0;
    transition: all 1s ease-in-out; */
  }
  .sub-heading {
    margin-bottom: 80px;
  }
}
/* 
footer:hover .thumbs-up-icon {
  transform: rotate(0deg) scale(1);
  opacity: 1;
  transition: all 1s ease-in-out;
} */

@media screen and (max-width: 768px) {
  header {
    display: flex;
    flex-direction: column;
  }
}
</style>
