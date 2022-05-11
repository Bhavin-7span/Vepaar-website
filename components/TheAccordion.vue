<template>
  <div class="accordion" :class="active ? 'accordion--active' : ''">
    <h3
      class="text-xl lg:text-2xl font-semibold text-gray-400 flex items-center"
      @click="isToggle()"
    >
      <div class="w-10">
        <icons-mdi-minus v-if="active" class="text-gray-400"></icons-mdi-minus>
        <icons-mdi-plus v-else></icons-mdi-plus>
      </div>
      <span class="flex-1">{{ question }}</span>
    </h3>
    <Transition>
      <div v-show="active" class="mt-4 pl-10"><slot /></div>
    </Transition>
  </div>
</template>
<script>
export default {
  props: {
    accordion: Object,
    question: String
  },
  data() {
    return {
      active: false
    };
  },
  methods: {
    isToggle() {
      console.log("click...");
      this.active = !this.active;
    }
  }
};
</script>
<style lang="scss">
.accordion {
  h3 {
    @apply cursor-pointer;
  }
  &.accordion--active {
    h3 {
      @apply text-transparent
        bg-clip-text bg-gradient-to-r
        from-primary-500
        via-purple-500 via-deep-purple-500
        to-pink-500;
    }
  }
  & + .accordion {
    @apply mt-10;
  }
}
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>