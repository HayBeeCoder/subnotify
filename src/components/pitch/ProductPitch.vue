<script setup lang="ts">
import TheButton from '../TheButton/TheButton.vue'
import TheFoldener from '../TheFoldener/TheFoldener.vue'
import PitchList from './PitchList.vue'
</script>

<template>
  <div class="text-white px-6 md:px-10 flex flex-col justify-center">
    <section class="mt-3 mb-6">
      <h1>
        Never Get Caught at your {{" "}}<span class="inline-block text-2xl md:text-5xl "> Lowest </span>
      </h1>
      <p class="py-2 pb-9 text-xs">Stay in Control of Your Subscriptions & Your Money</p>
      <div class="prose relative  w-full text-sm tracking-wide text-[#36454F] py-8 text-justify px-9 bg-[yellow]">
        <TheFoldener />
        <div class="prose-torn">
          <div class="px-8 flex flex-col justify-center h-full">
            <PitchList />
          </div>
        </div>
        <p
          class="border-b-[1px] border-[#CC492C] border-dashed text-xs md:text-sm font-light pb-2 relative"
        >

          Tired of waking up to
          <span
            class="inline-block font-black relative before:h-[2px] before:-bottom-[3px] before:bg-red-500 before:w-full before:absolute"
          >
            "Payment Declined"
          </span>
          or finding out a subscription
          <span
            class="inline-block font-black relative before:h-[2px] before:-bottom-[3px] before:bg-red-500 before:w-full before:absolute"
          >
            drained your account
          </span>

          > when you needed it most?<br />
        </p>
        <p class="text-xs md:text-sm font-medium pt-2">
          SubNotify keeps you ahead of every renewal, saving you from unexpected charges when you’re
          low on cash.
        </p>
      </div>
    </section>
    <div class="relative mt-32 md:mt-4">
      <div class="w-full max-w-md mx-auto">
        <router-link to="/auth" class="md:hidden">
          <TheButton variant="neutral" size="large" fillup-xaxis> Continue </TheButton>
        </router-link>
      </div>
      <p class="font-extrabold text-lg text-center">
        <!-- <span class="wheel inline-block mr-1"> 🛞 </span> -->
        Ready to take control ???
        <!-- <span class="wheel inline-block mr-1"> 🛞 </span> -->
      </p>
    </div>
  </div>
</template>

<style scoped>
.prose {
  background: white;
  clip-path: polygon(
    2% 4%,
    5% 2%,
    7% 5%,
    10% 3%,
    13% 4%,
    15% 1%,
    18% 3%,
    21% 1%,
    25% 4%,
    28% 2%,
    30% 5%,
    33% 3%,
    36% 4%,
    40% 2%,
    42% 5%,
    45% 3%,
    48% 4%,
    50% 1%,
    53% 3%,
    56% 2%,
    58% 5%,
    61% 3%,
    65% 4%,
    68% 2%,
    70% 5%,
    72% 3%,
    75% 4%,
    78% 2%,
    80% 5%,
    83% 3%,
    85% 4%,
    88% 2%,
    90% 5%,
    93% 3%,
    95% 4%,
    97% 2%,
    100% 5%,
    98% 8%,
    99% 10%,
    97% 12%,
    98% 15%,
    97% 18%,
    98% 22%,
    97% 25%,
    99% 28%,
    98% 32%,
    97% 35%,
    98% 38%,
    97% 42%,
    98% 45%,
    97% 48%,
    98% 52%,
    97% 55%,
    98% 58%,
    97% 62%,
    98% 65%,
    97% 68%,
    98% 72%,
    97% 75%,
    98% 78%,
    97% 82%,
    98% 85%,
    97% 88%,
    98% 92%,
    97% 95%,
    98% 98%,
    95% 97%,
    92% 98%,
    89% 97%,
    85% 98%,
    82% 97%,
    78% 98%,
    75% 97%,
    71% 98%,
    68% 97%,
    64% 98%,
    61% 97%,
    57% 98%,
    54% 97%,
    50% 98%,
    47% 97%,
    43% 98%,
    40% 97%,
    36% 98%,
    33% 97%,
    29% 98%,
    26% 97%,
    22% 98%,
    19% 97%,
    15% 98%,
    12% 97%,
    8% 98%,
    5% 97%,
    2% 98%,
    3% 92%,
    1% 89%,
    2% 85%,
    1% 82%,
    2% 78%,
    1% 75%,
    2% 71%,
    1% 68%,
    2% 64%,
    1% 61%,
    2% 57%,
    1% 54%,
    2% 50%,
    1% 47%
  );

  position: relative;
}

.prose-torn {
  will-change: transform;
  cursor: pointer;
  position: absolute;
  top: 1%;
  left: 0.5%;
  z-index: 10;
  width: 99%;
  height: 98%;
  background: #cc492c;
  /* border: 3px solid orange; */
  animation: tornWiggle 8s linear infinite alternate;
  clip-path: polygon(
    1% 47%,
    2% 50%,
    1% 54%,
    2% 57%,
    1% 61%,
    2% 64%,
    1% 68%,
    2% 71%,
    1% 75%,
    2% 78%,
    1% 82%,
    2% 85%,
    1% 89%,
    3% 92%,
    2% 98%,
    5% 97%,
    8% 98%,
    12% 97%,
    15% 98%,
    19% 97%,
    22% 98%,
    26% 97%,
    29% 98%,
    33% 97%,
    36% 98%,
    40% 97%,
    43% 98%,
    47% 97%,
    50% 98%,
    54% 97%,
    57% 98%,
    61% 97%,
    64% 98%,
    68% 97%,
    71% 98%,
    75% 97%,
    78% 98%,
    82% 97%,
    85% 98%,
    89% 97%,
    92% 98%,
    95% 97%,
    98% 98%,
    97% 95%,
    98% 92%,
    97% 88%,
    98% 85%,
    97% 82%,
    98% 78%,
    97% 75%,
    98% 72%,
    97% 68%,
    98% 65%,
    97% 62%,
    98% 58%,
    97% 55%,
    98% 52%,
    97% 48%,
    98% 45%,
    97% 42%,
    98% 38%,
    97% 35%,
    98% 32%,
    97% 28%,
    98% 25%,
    97% 22%,
    98% 18%,
    97% 15%,
    98% 12%,
    97% 10%,
    98% 8%,
    97% 5%,
    100% 2%,
    97% 4%,
    95% 2%,
    93% 5%,
    90% 3%,
    87% 4%,
    85% 1%,
    82% 3%,
    79% 1%,
    75% 4%,
    72% 2%,
    70% 5%,
    67% 3%,
    64% 4%,
    60% 2%,
    58% 5%,
    55% 3%,
    52% 4%,
    50% 1%,
    47% 3%,
    44% 2%,
    42% 5%,
    39% 3%,
    35% 4%,
    32% 2%,
    30% 5%,
    28% 3%,
    25% 4%,
    22% 2%,
    20% 5%,
    17% 3%,
    15% 4%,
    13% 2%,
    10% 5%,
    7% 3%,
    5% 4%,
    3% 2%,
    2% 5%
  );
}

.prose-torn:active {
  transition: clip-path 0.5s ease-out;
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
}

@keyframes tornWiggle {
  0% {
    transform: rotate(0deg);
    transform-origin: top;
  }
  25% {
    transform: rotate(-1deg);
    transform-origin: top;
    /* display: none; */
  }
  50% {
    transform: rotate(1deg);
    transform-origin: top;
  }
  75% {
    transform: rotate(-0.5deg) translateY(-100%);
    transform-origin: top;
  }
  100% {
    transform: rotate(0deg) translateY(-100%);
    transform-origin: top;
  }
}
@keyframes spin {
  from {
    transform: rotate(0deg) scale(2);
  }
  to {
    transform: rotate(360deg) scale(2);
  }
}

.wheel {
  display: inline-block; /* Ensures it doesn't affect surrounding layout */
  animation: spin 7s linear infinite;
  will-change: transform; /* Optimizes performance */
}

@media (prefers-reduced-motion: reduce) {
  .prose-torn {
    animation: none;
  }
}
</style>
