<template>
  <section class="module module--pricing">
    <div class="container">
      <h2 class="text-gray-900 text-center text-3xl font-semibold">
        Choose the right plan for you.
      </h2>
      <div class="flex justify-center mt-10">
        <div
          v-for="(tab, index) in tabs"
          class="
            w-60
            px-5
            h-14
            flex
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
          title:
            "Annual Bill <strong class='ml-2 inline-block'>[Save 16%]</strong>",
          value: "annual"
        }
      ],
      tabActive: "annual",
      monthly: [
        {
          title: "Free",
          text: "For Business Starters",
          price: "$0.00",
          notes: "*All prices are exclusive of taxes.",
          link: "#",
          color: "free-plan"
        },
        {
          title: "Basic",
          text: "For Business Starters",
          price: "$4.99",
          notes: "*All prices are exclusive of taxes.",
          link: "#",
          color: "basic-plan"
        },
        {
          title: "Pro",
          text: "For Business Starters",
          price: "$14.99",
          notes: "*All prices are exclusive of taxes.",
          link: "#",
          color: "pro-plan"
        },
        {
          title: "Agency",
          text: "For Business Starters",
          price: "$29.99",
          notes: "*All prices are exclusive of taxes.",
          link: "#",
          color: "agency-plan"
        }
      ],
      annual: [
        {
          title: "free",
          text: "For Business Starters",
          price: "$0.00",
          notes: "*All prices are exclusive of taxes.",
          link: "#"
        },
        {
          title: "basic",
          text: "For Business Starters",
          price: "$8.99",
          notes: "*All prices are exclusive of taxes.",
          link: "#"
        },
        {
          title: "pro",
          text: "For Business Starters",
          price: "$18.99",
          notes: "*All prices are exclusive of taxes.",
          link: "#"
        },
        {
          title: "agency",
          text: "For Business Starters",
          price: "$39.99",
          notes: "*All prices are exclusive of taxes.",
          link: "#"
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
.plan-list{
  @apply block lg:flex;
}
.tab-button {
  @apply cursor-pointer;
  &.is-active {
    @apply bg-accent-100 text-white relative z-10;
  }
  & + .tab-button {
    @apply -ml-1;
  }
}
</style>