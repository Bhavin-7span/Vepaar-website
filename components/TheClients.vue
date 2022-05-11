<template>
  <section class="module module--client">
    <div class="container">
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-5">
        <div v-for="index in 12" :key="index">
          <img src="images/monginis-logo.jpg" class="w-4/5 mx-auto block">
        </div>
      </div>
    </div>
  </section>
</template>