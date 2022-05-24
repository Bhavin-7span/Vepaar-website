<template>
  <section class="module module--pricing">
    <div class="container">
      <h2 class="text-gray-900 text-center text-3xl font-semibold">
        Choose the right plan for you.
      </h2>
      <div class="flex justify-center mt-20">
        <div
          v-for="(tab, index) in tabs"
          class="
            w-60
            px-5
            h-14
            flex flex-col
            sm:flex-row
            justify-center
            items-center
            bg-gray-100
            rounded-md
            text-gray-500
            font-semibold
            tab-button
          "
          :class="tabActive == tab.value ? 'is-active' : ''"
          :key="index"
          v-html="tab.title"
          @click="tabChange(tab.value)"
        />
      </div>
      <div class="plan-list mt-14">
        <PlanCard v-for="(plan, index) in plans" :key="index" :plan="plan" />
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      tabs: [
        {
          title: "Monthly Bill",
          value: "monthly"
        },
        {
          title: "Annual Bill",
          value: "annual"
        }
      ],
      tabActive: "annual",
      monthly: [
        {
          title: "free",
          text: "For Business Starters",
          price: "$0.00",
          notes: "*All prices are exclusive of taxes.",
          link: "https://web.vepaar.com/#/signup"
        },
        {
          title: "basic",
          text: "For Business Starters",
          price: "$4.99",
          notes: "*All prices are exclusive of taxes.",
          link: "https://web.vepaar.com/#/signup"
        },
        {
          title: "pro",
          text: "For Business Starters",
          price: "$14.99",
          notes: "*All prices are exclusive of taxes.",
          link: "https://web.vepaar.com/#/signup"
        },
        {
          title: "agency",
          text: "For Business Starters",
          price: "$29.99",
          notes: "*All prices are exclusive of taxes.",
          link: "https://web.vepaar.com/#/signup"
        }
      ],
      annual: [
        {
          title: "free",
          text: "For Business Starters",
          price: "$0.00",
          notes: "*All prices are exclusive of taxes.",
          link: "https://web.vepaar.com/#/signup"
        },
        {
          title: "basic",
          text: "For Business Starters",
          price: "$8.99",
          notes: "*All prices are exclusive of taxes.",
          link: "https://web.vepaar.com/#/signup"
        },
        {
          title: "pro",
          text: "For Business Starters",
          price: "$18.99",
          notes: "*All prices are exclusive of taxes.",
          link: "https://web.vepaar.com/#/signup"
        },
        {
          title: "agency",
          text: "For Business Starters",
          price: "$39.99",
          notes: "*All prices are exclusive of taxes.",
          link: "https://web.vepaar.com/#/signup"
        }
      ]
    };
  },
  computed: {
    plans() {
      return this.tabActive == "monthly" ? this.monthly : this.annual;
    }
  },
  methods: {
    tabChange(val) {
      this.tabActive = val;
    }
  }
};
</script>
<style lang="scss">
.plan-list {
  @apply block lg:flex;
}
.tab-button {
  @apply cursor-pointer;
  &.is-active {
    @apply bg-accent-100 text-white relative z-10;
  }
  & + .tab-button {
    @apply -ml-1 relative;
    &::before {
      content: "";
      top: -40px;
      width: 80px;
      height: 40px;
      right: -20px;
      background-image: url("/images/curve-arrow.png");
      background-size: contain;
      position: absolute;
      background-repeat: no-repeat;
    }
    &::after {
      content: "Save 16%";
      background: #fff2cc;
      color: #ff9800;
      padding: 5px 7px;
      font-size: 14px;
      position: absolute;
      top: -75px;
      right: -60px;
      display: block;
      border-radius: 5px;
    }
  }
}
@media only screen and (max-width: 500px) {
  .tab-button {
    & + .tab-button {
      &::before {
        right: 30px;
      }
      &::after {
        right: 10px;
      }
    }
  }
}
</style>