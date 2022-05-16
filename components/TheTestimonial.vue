<template>
  <section class="module module--testimonial bg-gray-900">
    <div class="container">
      <h2
        class="
          text-2xl
          sm:text-4xl
          lg:text-5xl
          font-semibold
          text-white
          max-w-2xl
        "
      >
        Our Customers,
        <span
          class="
            text-transparent
            bg-clip-text bg-gradient-to-r
            from-primary-500
            via-purple-500 via-deep-purple-500
            to-pink-500
            mt-1
            block
          "
          >Our Triumph.</span
        >
      </h2>
      <p class="mt-6 text-gray-400 text-md sm:text-base">
        At Vepaar, our most incredible wealth is our customers. Here’s what they
        have to say about us.
      </p>

      <div class="mt-12 sm:flex -mx-5">
        <div class="flex-1 px-4">
          <TestimonialCard
            v-for="(testimonial, index) in testimonials1"
            :key="index"
            :testimonial="testimonial"
          />
        </div>
        <div class="flex-1 px-4">
          <TestimonialCard
            v-for="(testimonial, index) in testimonials2"
            :key="index"
            :testimonial="testimonial"
          />
        </div>
        <div class="sm:flex-1 px-4">
          <TestimonialCard
            v-for="(testimonial, index) in testimonials3"
            :key="index"
            :testimonial="testimonial"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      testimonials1: [
        {
          image: "testimonial-1.jpg",
          name: "Adison Mango",
          store: "Store Name",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          socialIcon: "twitter"
        },
        {
          image: "testimonial-2.jpg",
          name: "Zaire Dorwart",
          store: "Store Name",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, tellus aenean porttitor.",
          socialIcon: "twitter"
        },
        {
          image: "testimonial-3.jpg",
          name: "Jaylon Aminoff",
          store: "Store Name",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          socialIcon: "twitter"
        }
      ],
      testimonials2: [
        {
          image: "testimonial-3.jpg",
          name: "Jakob Carder",
          store: "Store Name",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, tellus aenean porttitor ligula tristique libero turpis.  Amet, tellus aenean porttitor ligula tristique libero turpis.",
          socialIcon: "twitter"
        },
        {
          image: "testimonial-4.jpg",
          name: "Erin Passaquindici Arcand",
          store: "Store Name",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, tellus aenean porttitor.",
          socialIcon: "twitter"
        },
        {
          image: "testimonial-5.jpg",
          name: "Jaylon Aminoff",
          store: "Store Name",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          socialIcon: "twitter"
        }
      ],
      testimonials3: [
        {
          image: "testimonial-6.jpg",
          name: "Adison Mango",
          store: "Store Name",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          socialIcon: "twitter"
        },
        {
          image: "testimonial-5.jpg",
          name: "Nolan Saris",
          store: "Store Name",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, tellus aenean porttitor.",
          socialIcon: "twitter"
        },
        {
          image: "testimonial-4.jpg",
          name: "Craig Korsgaard",
          store: "Store Name",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, tellus aenean porttitor ligula tristique libero turpis.  Amet, tellus aenean porttitor ligula tristique libero turpis.",
          socialIcon: "twitter"
        }
      ]
    };
  }
};
</script>