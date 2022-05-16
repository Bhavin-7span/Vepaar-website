<template>
  <div class="py-12 border-t border-gray-100">
    <div class="container">
      <div class="flex">
        <div class="hidden sm:block w-2/6"></div>
        <div class="w-full sm:w-2/3">
          <h2 class="max-w-3xl ml-auto text-4xl font-semibold pl-2">
            Compare Plans
          </h2>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <table class="table-head" :class="isSticky ? 'head-sticky' : ''">
      <thead>
        <tr class="desktop-thead hidden lg:table-row">
          <th></th>
          <th
            v-for="(plan, index) in plans"
            :key="index"
            :class="plan.title + '-plan'"
          >
            <h3 class="text-2xl text-gray-900 font-semibold mb-2 capitalize">
              {{ plan.title }}
            </h3>
            <a :href="plan.link" class="plan-button plan-button--visible">
              Try Now!
            </a>
          </th>
        </tr>
        <tr class="responsive-thead lg:hidden">
          <th colspan="5" :class="plans[selectedPlan].title + '-plan'">
            <div class="flex justify-between items-center relative z-10 mb-2">
              <h3 class="text-lg capitalize m-0">
                {{ plans[selectedPlan].title }}
              </h3>
              <select
                v-model="selectedPlan"
                class="capitalize block p-2 border border-gray-400 rounded"
              >
                <option
                  v-for="(plan, index) in plans"
                  :key="index"
                  :value="index"
                  class="capitalize"
                >
                  {{ plan.title }}
                </option>
              </select>
            </div>
            <a
              :href="plans[selectedPlan].link"
              class="plan-button plan-button--visible relative z-10"
            >
              Try Now!
            </a>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colspan="5">
            <table
              v-for="(table, index) in tables"
              :key="index"
              class="compare-table"
            >
              <thead>
                <tr>
                  <th colspan="5" class="text-left">
                    <div class="inline-flex items-center thead-title">
                      <img :src="'/images/' + table.icon" alt="" />
                      <span class="pl-3 text-2xl">{{ table.title }}</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in table.data" :key="index">
                  <td>{{ item.label }}</td>
                  <td
                    :class="
                      plans[selectedPlan].title == 'free'
                        ? 'table-cell'
                        : 'hidden lg:table-cell'
                    "
                  >
                    <span v-if="item.free == 'yes'" class="text-2xl text-free"
                      ><icons-mdi-check-circle
                    /></span>
                    <span v-else>{{ item.free }}</span>
                  </td>
                  <td
                    :class="
                      plans[selectedPlan].title == 'basic'
                        ? 'table-cell'
                        : 'hidden lg:table-cell'
                    "
                  >
                    <span v-if="item.basic == 'yes'" class="text-2xl text-basic"
                      ><icons-mdi-check-circle
                    /></span>
                    <span v-else>{{ item.basic }}</span>
                  </td>
                  <td
                    :class="
                      plans[selectedPlan].title == 'pro'
                        ? 'table-cell'
                        : 'hidden lg:table-cell'
                    "
                  >
                    <span v-if="item.pro == 'yes'" class="text-2xl text-pro"
                      ><icons-mdi-check-circle
                    /></span>
                    <span v-else>{{ item.pro }}</span>
                  </td>
                  <td
                    :class="
                      plans[selectedPlan].title == 'agency'
                        ? 'table-cell'
                        : 'hidden lg:table-cell'
                    "
                  >
                    <span
                      v-if="item.agency == 'yes'"
                      class="text-2xl text-agency"
                      ><icons-mdi-check-circle
                    /></span>
                    <span v-else>{{ item.agency }}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="table-notes pb-20 pt-10">
      <p class="text-gray-500 font-semibold">
        <a href="javascript:;" class="text-primary-500"
          >For Starters, try our Free Plan.</a
        >
        No strings attached. You can upgrade, downgrade or cancel anytime.
      </p>
      <p class="text-sm text-gray-400">*Features are under development.</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    plans: Array,
    isSticky: Boolean
  },
  data() {
    return {
      tables: [
        {
          title: "CRM",
          icon: "crm-icon.svg",
          data: [
            {
              label: "Quick Reply Templates",
              free: "10",
              basic: "15",
              pro: "20",
              agency: "Unlimited"
            },
            {
              label: "Quick Replies Per Day",
              free: "20",
              basic: "55",
              pro: "100",
              agency: "Unlimited"
            },
            {
              label: "Contacts, Messages and Media Tags",
              free: "10",
              basic: "15",
              pro: "20",
              agency: "Unlimited"
            },
            {
              label: "Asset Library",
              free: "20 MB",
              basic: "50 MB",
              pro: "100 MB",
              agency: "Unlimited"
            },
            {
              label: "Contacts Management",
              free: "yes",
              basic: "yes",
              pro: "yes",
              agency: "yes"
            },
            {
              label: "Customizable Sales Funnel",
              free: "yes",
              basic: "yes",
              pro: "yes",
              agency: "yes"
            },
            {
              label: "Sales and Activity Reports",
              free: "yes",
              basic: "yes",
              pro: "yes",
              agency: "yes"
            },
            {
              label: "Notifications",
              free: "yes",
              basic: "yes",
              pro: "yes",
              agency: "yes"
            },
            {
              label: "Auto-Sync Chats",
              free: "",
              basic: "yes",
              pro: "yes",
              agency: "yes"
            },
            {
              label: "Personalized Quick Replies",
              free: "",
              basic: "yes",
              pro: "yes",
              agency: "yes"
            },
            {
              label: "Export Reports",
              free: "",
              basic: "",
              pro: "yes",
              agency: "yes"
            },
            {
              label: "Vepaar API",
              free: "",
              basic: "",
              pro: "yes",
              agency: "yes"
            },
            {
              label: "Zapier Integration",
              free: "",
              basic: "",
              pro: "yes",
              agency: "yes"
            },
            {
              label: "Import Contacts",
              free: "",
              basic: "",
              pro: "",
              agency: "yes"
            },
            {
              label: "Custom Fields*",
              free: "",
              basic: "",
              pro: "",
              agency: "yes"
            },
            {
              label: "Agency Profile",
              free: "",
              basic: "",
              pro: "",
              agency: "yes"
            },
            {
              label: "Salesforce Integration",
              free: "",
              basic: "",
              pro: "",
              agency: "yes"
            }
          ]
        },
        {
          title: "Polls",
          icon: "polls-icon.svg",
          data: [
            {
              label: "Active Poll",
              free: "3",
              basic: "5",
              pro: "10",
              agency: "Unlimited"
            },
            {
              label: "Responses",
              free: "Unlimilited",
              basic: "Unlimilited",
              pro: "Unlimilited",
              agency: "Unlimited"
            },
            {
              label: "Multilingual Support*",
              free: "yes",
              basic: "yes",
              pro: "yes",
              agency: "yes"
            },
            {
              label: "Export Results",
              free: "",
              basic: "",
              pro: "",
              agency: "yes"
            }
          ]
        },
        {
          title: "Store",
          icon: "store-icon.svg",
          data: [
            {
              label: "Biz Page",
              free: "yes",
              basic: "yes",
              pro: "yes",
              agency: "yes"
            },
            {
              label: "Products",
              free: "50",
              basic: "100",
              pro: "200",
              agency: "Unlimited"
            },
            {
              label: "Product Variants",
              free: "Predefined",
              basic: "Custom",
              pro: "Custom",
              agency: "Custom"
            },
            {
              label: "Shipping Locations",
              free: "1",
              basic: "1",
              pro: "20",
              agency: "50"
            },
            {
              label: "Dashboard and Reports",
              free: "Basic",
              basic: "Basic",
              pro: "Advanced",
              agency: "Advanced"
            },
            {
              label: "Product Badges",
              free: "yes",
              basic: "yes",
              pro: "yes",
              agency: "yes"
            },
            {
              label: "Multingual Support",
              free: "yes",
              basic: "yes",
              pro: "yes",
              agency: "yes"
            },
            {
              label: "Order on WhatsApp",
              free: "yes",
              basic: "yes",
              pro: "yes",
              agency: "yes"
            },
            {
              label: "Payment Integration",
              free: "yes",
              basic: "yes",
              pro: "yes",
              agency: "yes"
            },
            {
              label: "Custom Domain",
              free: "yes",
              basic: "yes",
              pro: "yes",
              agency: "yes"
            },
            {
              label: "Order Editing",
              free: "",
              basic: "yes",
              pro: "yes",
              agency: "yes"
            },
            {
              label: "Export Reports",
              free: "",
              basic: "",
              pro: "yes",
              agency: "yes"
            },
            {
              label: "Order Receipt",
              free: "",
              basic: "",
              pro: "yes",
              agency: "yes"
            },
            {
              label: "Advance Shipping Configuration",
              free: "",
              basic: "",
              pro: "yes",
              agency: "yes"
            },
            {
              label: "Remove Vepaar Branding",
              free: "",
              basic: "",
              pro: "yes",
              agency: "yes"
            },
            {
              label: "Bulk Import Inventory",
              free: "",
              basic: "",
              pro: "",
              agency: "yes"
            }
          ]
        },
        {
          title: "Support and Onboarding",
          icon: "support-icon.svg",
          data: [
            {
              label: "Chat and Email Support",
              free: "yes",
              basic: "yes",
              pro: "yes",
              agency: "yes"
            },
            {
              label: "Ongoing Product Consulatation",
              free: "",
              basic: "",
              pro: "yes",
              agency: "yes"
            },
            {
              label: "Personalized Onboarding",
              free: "",
              basic: "",
              pro: "yes",
              agency: "yes"
            },
            {
              label: "Early Beta Access",
              free: "",
              basic: "",
              pro: "",
              agency: "yes"
            }
          ]
        }
      ],
      selectedPlan: 0
    };
  }
};
</script>
<style lang="scss">
.table-head {
  @apply w-full relative transition-all duration-300;
  > thead tr th {
    @apply text-left lg:px-3 border-b border-gray-100 pb-12 sticky top-0 z-10 bg-white;
    &:nth-child(1) {
      @apply w-1/3;
      &::before {
        background: #fff;
        content: "";
        height: 126px;
        left: -50%;
        position: absolute;
        top: 0;
        width: 50%;
        @apply border-b border-gray-100 hidden lg:block;
      }
    }
    &:last-child {
      &::before {
        background: #fff;
        content: "";
        height: 126px;
        right: -50%;
        position: absolute;
        top: 0;
        width: 50%;
        @apply border-b border-gray-100;
      }
    }
    &::after {
      content: "";
      @apply -bottom-[1px] right-0 left-0 h-[1px] absolute bg-gray-100;
    }
  }
  &.head-sticky {
    > thead tr th {
      @apply pt-4 pb-5;
      h3 {
        @apply text-base mb-1;
      }
      a {
        @apply h-8;
      }
      &:nth-child(1) {
        &:before {
          height: 97px;
        }
      }
      &:last-child {
        &:before {
          height: 97px;
        }
      }
    }
    .thead-title {
      @apply absolute -top-12;
    }
  }
}
@media (max-width: 1024px) {
  .table-head > thead tr th:after {
    @apply top-0 -bottom-1 bg-white border-b border-gray-200 h-full -mx-5;
  }
}

.compare-card {
  @apply px-3;
}
.compare-table {
  @apply w-full relative;
  thead {
    th {
      @apply lg:sticky top-20 z-10;
      // bg-white z-10 border-b border-gray-100
    }
  }
  & + .compare-table {
    @apply mt-24;
  }
  tr {
    > th {
      @apply py-5;
    }
    th {
      @apply pt-5;
    }
    td {
      @apply w-1/6 text-center p-5 border border-gray-100;
      &:nth-child(1) {
        @apply text-left w-1/3 border-l-0 pl-0;
      }
      &:last-child {
        @apply border-r-0;
      }
      span {
        @apply inline-block mx-auto;
      }
    }
  }
}

.text-free {
  @apply text-primary-500;
}
.text-basic {
  @apply text-purple-500;
}
.text-pro {
  @apply text-deep-purple-500;
}
.text-agency {
  @apply text-pink-500;
}
</style>