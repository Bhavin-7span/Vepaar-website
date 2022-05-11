<template>
  <section class="module module">
    <div class="container">
      <h2
        class="
          text-2xl
          lg:text-5xl
          font-semibold
          text-transparent
          bg-clip-text bg-gradient-to-r
          from-primary-500
          via-purple-500 via-deep-purple-500
          to-pink-500
          text-center
        "
      >
        Dashboard And Orders
        <span class="text-gray-900 block">Lorem Ipsum Dolor Sit Amet.</span>
      </h2>
      <p class="text-gray-400 text-base mt-5 text-center max-w-xl mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus
        ultrices amet posuere placerat.
      </p>

      <div class="mt-20">
        <div
          class="
            flex flex-col-reverse
            lg:flex-row
            rounded-xl
            bg-deep-purple-500 bg-opacity-10
          "
        >
          <div class="flex-1 p-5">
            <div class="flex items-center">
              <img src="images/desktop-icon.svg" alt="" />
              <h3 class="ml-3 text-2xl sm:text-4xl text-gray-900 font-semibold">
                Desktop
              </h3>
            </div>
            <p class="text-gray-500 text-lg my-6 max-w-md">
              Download our free online business app, available for Android/iOS
              users, and kickstart your digital store with CRM, conducting
              polls, and running your business page at ease. Kickstart your
              online presence with the Vepaar app today!
            </p>
            <the-button theme="dark"> Signup for Free </the-button>
          </div>
          <div class="flex-1">
            <img
              src="images/desktop-screenshot.png"
              alt=""
              class="p-4 lg:pt-4 rounded-3xl lg:rounded-none"
            />
          </div>
        </div>

        <div class="block sm:flex mt-5">
          <Extension />
          <AppsDownload />
        </div>

        <VolizApp />
      </div>
    </div>
  </section>
</template>