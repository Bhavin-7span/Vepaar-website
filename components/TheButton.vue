<template>
  <component :is="$attrs.href ? 'a' : 'button'" :class="classList">
    <img
      v-if="icon"
      :src="`images/${icon}`"
      :alt="title ? title : 'icon'"
      class="mr-2 h-6 lg:h-8"
    />
    <slot>{{ title }}</slot>
  </component>
</template>

<script>
export default {
  props: {
    title: String,
    disabled: Boolean,
    theme: {
      type: String,
      default: "solid"
    },
    color: {
      type: String,
      default: "primary"
    },
    icon: String,
    size: {
      type: String,
      default: "lg"
    }
  },
  data() {
    return {
      dark: [
        "bg-black",
        "hover:bg-gray-800",
        "text-white ",
        "py-4",
        "px-8",
        "rounded",
        "shadow-2xl"
      ]
    };
  },
  computed: {
    classList() {
      const classes = [`button--${this.size}`, `button--${this.theme}`];
      if (this.color) classes.push(`button--${this.color}`);
      if (this.disabled) classes.push("disabled");
      return classes;
    }
  }
};
</script>

<style lang="scss">
.button {
  @apply inline-flex items-center rounded;
}

.button--icon {
  @apply h-8 w-8 p-1 text-sm outline-none;
}
.button--xs {
  @extend .button;
  @apply h-8 px-4 text-sm;
}
.button--sm {
  @extend .button;
  @apply h-10 px-6 text-sm;
}
.button--md {
  @extend .button;
  @apply h-12 px-8;
}
.button--lg {
  @extend .button;
  @extend .button--sm;
  @screen lg {
    @apply h-14 px-8 text-base;
  }
}
.button--auto {
  @apply w-auto h-auto;
}

.button--primary {
  --color: #{theme("colors.primary.500")};
  --text-color: theme("colors.white");
  --hover-color: theme("colors.primary.700");
}
.button--dark {
  @apply bg-gray-900 text-white h-12;
  &:hover {
    @apply bg-gray-800;
  }
}

.button--solid {
  color: var(--text-color);
  background-color: var(--color);
  &:hover {
    background-color: var(--hover-color);
  }
}

.button--outline {
  color: var(--color);
  @apply border border-current;
  &:hover {
    @apply bg-primary-50;
  }
}

.button--gray {
  @apply border border-gray-400 text-gray-400;
}

.button--white {
  @apply bg-white text-gray-900 hover:bg-gray-100 font-medium;
}

.button--nav {
  @apply text-gray-200 lg:text-black px-2 h-auto font-normal text-base relative px-0 lg:px-3 py-2 lg:py-0;
  &::after {
    content: "";
    @apply absolute bottom-0 right-0 left-0 w-0 h-[1px] bg-white lg:static lg:h-0 mx-auto transition-all duration-300;
  }
  &:hover {
    @apply lg:text-transparent lg:bg-clip-text lg:bg-gradient-to-r from-primary-500 via-purple-500 via-deep-purple-500 to-pink-500;
    &::after {
      @apply w-full transition-all transition-all duration-300;
    }
  }
  & + .button--nav {
    @apply mt-5 lg:mt-0 ml-0 lg:ml-5;
  }
}
.button--accent {
  @apply bg-accent-100 text-white hover:bg-accent-200 w-full justify-center;
}
.button {
  &.disabled {
    @apply bg-gray-400 shadow-none;
    cursor: not-allowed;
    &:hover {
      @apply bg-gray-400;
    }
  }
}
</style>
