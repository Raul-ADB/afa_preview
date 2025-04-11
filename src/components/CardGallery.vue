<script setup>

  import CardComponent from '@/components/CardComponent.vue';

  const props = defineProps({
    cards: {
      type: Array,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  });

</script>

<template>

  <section class="card__gallery container mb" :class="`card__gallery--${type}`">
    <CardComponent
      v-for="(card, index) in cards"
      :key="index"
      :card="card"
      :index="index"
    />
  </section>

</template>

<style scoped>

  .card__gallery {
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr;
    grid-auto-rows: 35rem;
  }

  @media (width >= 768px) {
    .card__gallery {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media (width >= 992px) {
    .card__gallery {
      grid-template-columns: repeat(6, 1fr);
    }
  }

  /* GALLERY A */

	.card__gallery--A {
    grid-template-areas: "a1" "a2" "a3" "a4" "a5" "a6" "a7";
  }

  @media (width >= 768px) {
    .card__gallery--A {
      grid-template-rows: repeat(9, 25rem);
      grid-template-areas:
        "a1 a1 a1 a1"
        "a1 a1 a1 a1"
        "a2 a2 a4 a4"
        "a3 a3 a3 a3"
        "a3 a3 a3 a3"
        "a5 a5 a6 a6"
        "a5 a5 a6 a6"
        "a7 a7 a7 a7"
        "a7 a7 a7 a7"
      ;
    }
  }

  @media (width >= 992px) {
    .card__gallery--A {
      grid-template-rows: repeat(6, 25rem);
      grid-template-areas:
        "a1 a1 a1 a1 a1 a1"
        "a1 a1 a1 a1 a1 a1"
        "a2 a2 a3 a3 a3 a3"
        "a4 a4 a3 a3 a3 a3"
        "a5 a5 a6 a6 a7 a7"
        "a5 a5 a6 a6 a7 a7"
      ;
    }
  }

  /* GALLERY B */

  .card__gallery--B {
    grid-template-areas: "a1" "a2" "a3" "a4" "a5" "a6" "a7";
  }

  @media (width >= 768px) {
    .card__gallery--B {
      grid-template-rows: repeat(12, 12rem);
      grid-template-areas:
        "a1 a1 a1 a1"
        "a1 a1 a1 a1"
        "a1 a1 a1 a1"
        "a2 a2 a4 a4"
        "a2 a2 a4 a4"
        "a3 a3 a4 a4"
        "a5 a5 a6 a6"
        "a5 a5 a6 a6"
        "a5 a5 a6 a6"
        "a7 a7 a7 a7"
        "a7 a7 a7 a7"
        "a7 a7 a7 a7"
      ;
    }
  }

  @media (width >= 992px) {
    .card__gallery--B {
      grid-template-rows: repeat(12, 12rem);
      grid-template-areas:
        "a1 a1 a1 a1 a1 a1"
        "a1 a1 a1 a1 a1 a1"
        "a1 a1 a1 a1 a1 a1"
        "a1 a1 a1 a1 a1 a1"
        "a2 a2 a2 a2 a4 a4"
        "a2 a2 a2 a2 a4 a4"
        "a3 a3 a3 a3 a4 a4"
        "a3 a3 a3 a3 a4 a4"
        "a5 a5 a6 a6 a7 a7"
        "a5 a5 a6 a6 a7 a7"
        "a5 a5 a6 a6 a7 a7"
        "a5 a5 a6 a6 a7 a7"
      ;
    }
  }

  /* GALLERY C */

  .card__gallery--C {
    grid-template-rows: repeat(10, 25rem);
    grid-template-areas: "a1" "a2" "a3" "a4" "a5" "a6" "a7" "a8" "a9" "a10";
  }

  @media (width >= 768px) {
    .card__gallery--C {
      grid-template-rows: repeat(12, 12rem);
      grid-template-areas:
        "a1 a1 a2 a2"
        "a1 a1 a2 a2"
        "a1 a1 a2 a2"
        "a3 a3 a6 a6"
        "a3 a3 a6 a6"
        "a4 a4 a7 a7"
        "a5 a5 a8 a8"
        "a5 a5 a8 a8"
        "a5 a5 a8 a8"
        "a9 a9 a10 a10"
        "a9 a9 a10 a10"
        "a9 a9 a10 a10"
      ;
    }
  }

  @media (width >= 992px) {
    .card__gallery--C {
      grid-template-rows: repeat(12, 12rem);
      grid-template-areas:
        "a1 a1 a1 a1 a2 a2"
        "a1 a1 a1 a1 a2 a2"
        "a1 a1 a1 a1 a2 a2"
        "a1 a1 a1 a1 a2 a2"
        "a3 a3 a5 a5 a6 a6"
        "a3 a3 a5 a5 a6 a6"
        "a4 a4 a5 a5 a7 a7"
        "a4 a4 a5 a5 a7 a7"
        "a8 a8 a9 a9 a10 a10"
        "a8 a8 a9 a9 a10 a10"
        "a8 a8 a9 a9 a10 a10"
        "a8 a8 a9 a9 a10 a10"
      ;
    }
  }

  /* GALLERY D */

  .card__gallery--D {
    grid-template-rows: repeat(5, 27rem);
    grid-template-areas: "a1" "a2" "a3" "a4" "a5";
  }

  @media (width >= 768px) {
    .card__gallery--D {
      grid-template-rows: repeat(9, 12rem);
      grid-template-areas:
        "a2 a2 a2 a2"
        "a2 a2 a2 a2"
        "a2 a2 a2 a2"
        "a1 a1 a3 a3"
        "a1 a1 a3 a3"
        "a1 a1 a3 a3"
        "a4 a4 a5 a5"
        "a4 a4 a5 a5"
        "a4 a4 a5 a5"
      ;
    }
  }

  @media (width >= 992px) {
    .card__gallery--D {
      grid-template-rows: repeat(6, 16rem);
      grid-template-areas:
        "a1 a1 a2 a2 a2 a2"
        "a1 a1 a2 a2 a2 a2"
        "a1 a1 a2 a2 a2 a2"
        "a3 a3 a4 a4 a5 a5"
        "a3 a3 a4 a4 a5 a5"
        "a3 a3 a4 a4 a5 a5"
      ;
    }
  }

  /* GALLERY E */

  .card__gallery--E {
    grid-template-rows: repeat(5, 27rem);
    grid-template-areas: "a1" "a2" "a3" "a4";
  }

  @media (width >= 768px) {
    .card__gallery--E {
      grid-template-rows: repeat(6, 24rem);
      grid-template-areas:
        "a1 a1 a1 a1"
        "a1 a1 a1 a1"
        "a2 a2 a3 a3"
        "a2 a2 a3 a3"
        "a4 a4 a4 a4"
        "a4 a4 a4 a4"
      ;
    }
  }

  @media (width >= 768px) {
    .card__gallery--E {
      grid-template-rows: repeat(6, 24rem);
      grid-template-areas:
        "a1 a1 a1 a1 a1 a1"
        "a1 a1 a1 a1 a1 a1"
        "a2 a2 a2 a3 a3 a3"
        "a2 a2 a2 a3 a3 a3"
        "a4 a4 a4 a4 a4 a4"
        "a4 a4 a4 a4 a4 a4"
      ;
    }
  }

  /* GALLERY F */

  .card__gallery--F {
    grid-template-rows: repeat(8, 27rem);
    grid-template-areas: "a1" "a2" "a3" "a4" "a5" "a6" "a7" "a8";
  }

  @media (width >= 768px) {
    .card__gallery--F {
      grid-template-rows: repeat(8, 24rem);
      grid-template-areas:
        "a1 a1 a1 a1"
        "a1 a1 a1 a1"
        "a2 a2 a3 a3"
        "a2 a2 a4 a4"
        "a5 a5 a7 a7"
        "a6 a6 a7 a7"
        "a8 a8 a8 a8"
        "a8 a8 a8 a8"
      ;
    }
  }

  @media (width >= 992px) {
    .card__gallery--F {
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(4, 24rem);
      grid-template-areas:
        "a1 a2 a4 a4"
        "a1 a3 a4 a4"
        "a5 a5 a6 a8"
        "a5 a5 a7 a8"
      ;
    }
  }

</style>