<template>
  <main>
    <slot></slot>
  </main>
</template>


  <style lang="scss" scoped>
  main {
    display: flex;
    max-width: 100vw;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    min-height: 60vh;
    min-width: 85%;
    margin: 4.5rem;
    transition: all 0.5s ease;
  }

  @media screen and (max-width: 768px) {
    main {
      margin: 4.5rem 1rem;
    }
  }
</style>
