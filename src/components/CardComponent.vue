<script setup>

  const props = defineProps({
    card: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  });

</script>

<template>

  <div class="card" :class="`card--${card.cardNumber} card--${card.type}`">
    <figure class="card__picture">
      <img :src="card.url" class="card__image" :alt="`Imagen ${card.name}`" loading="lazy" >
    </figure>
    <div class="card__body">
      <a class="card__link" href="">
        <h3 class="card__title">{{card.project_title}}</h3>
      </a>
      <p class="card__description">{{card.description}}</p>
    </div>
  </div>

</template>

<style scoped>

  .card {
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    padding: 1rem;
    background-color: #f1f1f1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .card--external {
    background-color: #000;
    color: #FFF;
  }

  .card__picture {
    width: 100%;
    height: calc(100% - 5rem);
    background-color: #222222;
    overflow: hidden;
  }

  .card__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%);
  }

  .card__link:visited {
    color: #000;
  }

  .card__video {
    width: 100%;
    height: 100%;
  }

  .card__body {
    height: max-content;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  .card__title {
    color: #000;
    font-size: 1.8rem;
    font-weight: 500;
  }

  .card__description {
    font-size: 1.6rem;
  }

  .card--1 {grid-area: a1;}

  .card--2 {grid-area: a2;}

  .card--3 {grid-area: a3;}

  .card--4 {grid-area: a4;}

  .card--5 {grid-area: a5;}

  .card--6 {grid-area: a6;}

  .card--7 {grid-area: a7;}

  .card--8 {grid-area: a8;}

  .card--9 {grid-area: a9;}

  .card--10 {grid-area: a10;}

  .card--10 {grid-area: a10;}

  .card--11 {grid-area: a11;}

  .card--12 {grid-area: a12;}

  .card--13 {grid-area: a13;}

  .card--14 {grid-area: a14;}

  .card--15 {grid-area: a15;}

  .card--16 {grid-area: a16;}

  .card--17 {grid-area: a17;}

  .card--18 {grid-area: a18;}

  .card--19 {grid-area: a19;}

  .card--20 {grid-area: a20;}

  .card--21 {grid-area: a21;}

  .card--22 {grid-area: a22;}

  .card--23 {grid-area: a23;}

  .card--24 {grid-area: a24;}

  .card--25 {grid-area: a25;}

  .card--26 {grid-area: a26;}

  .card--27 {grid-area: a27;}

  .card--28 {grid-area: a28;}

  .card--29 {grid-area: a29;}

  .card--screen {
    display: block;
    width: 100%;
    height: 100%;
    position: relative;
  }

  .card--g-item .card__picture,
  .card--screen .card__picture {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .card--screen .card__image {
    width: 100%;
    height: 100%;
  }

  .card--screen .card__body {
    position: absolute;
    top: 2rem;
    left: 2rem;
    z-index: 100;
  }

  .card--screen .card__description {
    display: none;
  }

  .card--screen .card__title {
    color: #FFF;
    background-color: #000;
  }

  .card--g-item .card__body {
    display: none;
  }

</style>