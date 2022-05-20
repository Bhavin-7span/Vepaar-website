<template>
  <section class="module module--client">
    <div class="container">
      <div
        class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-14"
      >
        <div
          v-for="(client, index) in clients"
          :key="index"
          class="text-center"
        >
          <img :src="`/images/clients/` + client.src" class="block h-[100px]" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      clients: [
        {
          src: "monginis.svg"
        },
        {
          src: "the-power-mba.svg"
        },
        {
          src: "falhari.svg"
        },
        {
          src: "baqala.svg"
        },
        {
          src: "road-tippers-travel.svg"
        },
        {
          src: "florida.svg"
        },
        {
          src: "agrocare.svg"
        },
        {
          src: "yalron.svg"
        },
        {
          src: "multi-mambos.svg"
        },
        {
          src: "supplement-mentor.svg"
        },
        {
          src: "diamond.svg"
        },
        {
          src: "the-breadery.svg"
        }
      ]
    };
  }
};
</script>