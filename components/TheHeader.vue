<template>
  <header
    class="bg-white fixed top-0 left-0 right-0 header z-20"
    :class="showNavbar ? '' : 'is-fixed'"
  >
    <div class="container">
      <div
        class="flex justify-between header__wrap"
        :class="isOpen ? 'relative z-10' : 'static'"
      >
        <div class="flex items-center justify-between">
          <nuxt-link
            to="/"
            class="header-logo"
            :class="scrollPosition > 60 ? 'logo-icon' : ''"
          >
            <div>
              <img
                width="192"
                height="32"
                class="h-6 md:h-8 w-auto max-w-none"
                :src="
                  isOpen
                    ? '/images/vepaar-logo-gray.png'
                    : '/images/vepaar-logo.png'
                "
                alt="vepaar-logo"
              />
            </div>
          </nuxt-link>
        </div>
        <div
          class="
            flex
            justify-between
            lg:flex-1
            items-center
            lg:bg-white
            relative
          "
        >
          <TheNavigation
            :class="isOpen ? 'flex -z-[1] is-open' : ''"
            class="navigation"
          />
          <div class="lg:hidden flex items-center">
            <the-button
              size="sm"
              color="primary"
              theme="link"
              class="button--humberger"
              :class="isOpen ? 'filter invert' : ''"
              @click.native="navToggle()"
            >
              <icons-mdi-menu v-if="!isOpen" class="text-xl" />
              <icons-mdi-close v-else class="text-xl" />
            </the-button>
          </div>
          <div class="header-action hidden lg:flex">
            <the-button
              color="primary"
              size="sm"
              class="login-button"
              href="https://web.vepaar.com/#/login"
            >
              Login
            </the-button>
            <the-button
              theme="outline"
              color="gray"
              size="sm"
              class="ml-2 language-button"
            >
              EN
              <icons-mdi-translate class="ml-2" />
            </the-button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      isOpen: false,
      lastScrollPosition: 0,
      scrollPosition: null,
      showNavbar: true
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    navToggle() {
      this.isOpen = !this.isOpen;
    },
    close() {
      this.isOpen = false;
    },
    onScroll() {
      this.scrollPosition = window.scrollY;

      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollPosition < 0) {
        return;
      }
      // Stop executing this function if the difference between
      // current scroll position and last scroll position is less than some offset
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 100) {
        return;
      }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition;
      this.lastScrollPosition = currentScrollPosition;
    }
  }
};
</script>
<style lang="scss">
.header {
  @apply transition-all duration-300 bg-white z-10;
  &::after {
    content: "";
    @apply absolute bottom-0 right-0 left-0 bg-gradient-to-b from-white via-[#D1D5DB] to-white inline-block w-full h-[2px];
  }
  &.is-fixed {
    @apply transition-all duration-300 transform -translate-y-16;
    .header__wrap {
      @apply py-3;
    }
  }
  &__wrap {
    @apply py-3 lg:py-5;
  }
}
.header-logo {
  @apply flex items-center w-auto transition-all duration-300 pr-8 w-64 relative;
  &::after {
    content: "";
    @apply bg-gradient-to-b from-white via-[#D1D5DB] to-white inline-block w-[2px] h-10 ml-5 sm:ml-10;
  }
  &.logo-icon {
    @apply lg:w-20 transition-all duration-300;
    &::after {
      @apply lg:absolute lg:right-4;
    }
    &::before {
      content: "";
      @apply lg:absolute lg:right-0 lg:w-10 lg:h-full bg-white;
    }
  }
}
.navigation {
  @apply flex-col justify-center items-center lg:flex-row fixed inset-0 lg:static bg-gradient-to-r lg:bg-none from-primary-500 via-purple-500 via-deep-purple-500 to-pink-500 transform translate-x-full lg:translate-x-0 transition-all duration-300;
  &.is-open {
    @apply translate-x-0 transition-all duration-300;
  }
}
.button--link.button--humberger {
  @apply px-0;
  img {
    @apply m-0;
  }
}
</style>