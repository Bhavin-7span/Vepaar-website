<template>
  <section class="module module--form">
    <div class="container">
      <div class="block sm:flex items-center">
        <div class="max-w-xs mx-auto sm:mx-0">
          <img src="/images/wa-link-generator.gif" />
        </div>
        <div class="flex-1 mt-10 sm:mt-0">
          <form class="max-w-xl mx-auto shadow-sm bg-white p-8 rounded-lg">
            <div class="form__input">
              <label for="">Your WhatsApp Number</label>
              <div class="flex">
                <select v-model="countryCode" class="input-group">
                  <option
                    v-for="(code, index) in codeList"
                    :key="index"
                    :value="code.value"
                  >
                    {{ code.value }}
                  </option>
                </select>
                <input type="tel" v-model="whatsAppNumber" />
              </div>
            </div>
            <div class="form__input">
              <label for=""
                >What message do you want your customers to see when they
                contact you?</label
              >
              <textarea v-model="message" />
            </div>

            <div class="form__action">
              <the-button color="accent">Get Link</the-button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      countryCode: "+91",
      codeList: [
        {
          value: "+90"
        },
        {
          value: "+91"
        },
        {
          value: "+92"
        },
        {
          value: "+93"
        },
        {
          value: "+94"
        },
        {
          value: "+95"
        },
        {
          value: "+96"
        },
        {
          value: "+97"
        },
        {
          value: "+98"
        },
        {
          value: "+99"
        },
        {
          value: "+100"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
// .module--form {
//   @apply bg-gray-100;
// }
.form {
  &__input {
    label {
      @apply block font-semibold mb-2;
    }
    & + .form__input {
      @apply mt-10;
    }
    select {
      @apply bg-gray-100 h-12 rounded-tl-md rounded-bl-md focus:outline-none px-2;
    }
    input[type="tel"] {
      @apply bg-gray-100 w-full focus:outline-none px-4;
    }
    textarea {
      @apply w-full rounded-md bg-gray-100 focus:outline-none h-40 p-4;
    }
  }
  &__action {
    @apply mt-10;
  }
}
</style>