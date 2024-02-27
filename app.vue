<template>
  <div class="scroll-smooth">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="scss">
body {
  font-family: 'Urbanist';
  background-color: white;
  color: black;
}

.accordions__wrapper {
  div.accordions {
    div[data-headlessui-state] {
      margin-bottom: 20px;
      max-width: 350px;

      button[type="button"] {
        background: white;
        border-radius: 35px;
        padding: 15px 20px;
        font-size: 20px;
        border: none;
        -webkit-box-shadow: -2px 6px 13px 1px rgba(0, 0, 0, 0.141);
        -moz-box-shadow: -2px 6px 13px 1px rgba(0, 0, 0, 0.141);
        box-shadow: -2px 6px 13px 1px rgba(0, 0, 0, 0.141);
        color: black;

        span {
          &:last-child {
            background: #838383a1;
            padding: 30px
          }
        }
      }

      div {
        div {
          font-size: 20px;
          padding-left: 10px;
          margin-top: 10px;
        }
      }
    }
  }
}
</style>
