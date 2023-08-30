<div class="coffee-card-skeleton">
  <div class="coffee-card-skeleton__img"></div>
  <div class="coffee-card-skeleton__content">
    <div class="coffee-card-skeleton__row"></div>
    <div class="coffee-card-skeleton__row"></div>
    <div class="coffee-card-skeleton__row"></div>
  </div>
  <div class="coffee-card-skeleton__bottom-row"></div>
</div>

<style lang="scss">
  .coffee-card-skeleton {
    width: 300px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 10px 20px lightgray;
    padding-bottom: 20px;

    &__img {
      width: 100%;
      height: 250px;
      animation: background 2s infinite alternate;
    }

    &__content {
      padding: 10px;
    }

    &__row {
      height: 20px;
      animation: background 2s infinite alternate;

      & + & {
        margin-top: 10px;
      }
    }

    &__bottom-row {
      height: 30px;
      margin-left: 10px;
      animation: background 2s infinite alternate;
    }
  }

  @keyframes background {
    0% {
      background: linear-gradient(to right, white, lightgray, white);
      background-position: 0 0;
    }

    100% {
      background: linear-gradient(to right, white, lightgray, white);
      background-position: 500px 0;
    }
  }
</style>