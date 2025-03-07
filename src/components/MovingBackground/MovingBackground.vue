<template>
  <ul class="circles" aria-hidden>
    <li aria-hidden></li>
    <li aria-hidden></li>
    <li aria-hidden></li>
    <li aria-hidden></li>
    <li aria-hidden></li>
    <li aria-hidden></li>
    <li aria-hidden></li>
    <li aria-hidden></li>
    <li aria-hidden></li>
    <li aria-hidden></li>
  </ul>
</template>

<style scoped>

.circles{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.circles li {
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.2);
    animation: animate 25s linear infinite; /* Smooth animation */
    right: -200px; /* Start offscreen to the right */
}

.circles li:nth-child(1) {
    top: 10%; /* 10% of viewport height */
    width: 80px;
    height: 80px;
    animation-delay: 0s;
    animation-duration: 20s;
}

.circles li:nth-child(2) {
    top: 70%; /* 70% of viewport height */
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 15s;
}

.circles li:nth-child(3) {
    top: 50%; /* 50% of viewport height */
    width: 30px;
    height: 30px;
    animation-delay: 4s;
    animation-duration: 18s;
}

.circles li:nth-child(4) {
    top: 90%; /* Exceeds 60% and closer to the bottom */
    width: 60px;
    height: 60px;
    animation-delay: 6s;
    animation-duration: 25s;
}

.circles li:nth-child(5) {
    top: 20%; /* Near the top */
    width: 20px;
    height: 20px;
    animation-delay: 8s;
    animation-duration: 30s;
}

.circles li:nth-child(6) {
    top: 80%; /* Randomly positioned below */
    width: 110px;
    height: 110px;
    animation-delay: 3s;
    animation-duration: 22s;
}

.circles li:nth-child(7) {
    top: 40%; /* Midway in height */
    width: 150px;
    height: 150px;
    animation-delay: 7s;
    animation-duration: 28s;
}

.circles li:nth-child(8) {
    top: 95%; /* Almost at the bottom */
    width: 25px;
    height: 25px;
    animation-delay: 10s;
    animation-duration: 35s;
}

.circles li:nth-child(9) {
    top: 30%; /* Near the top */
    width: 15px;
    height: 15px;
    animation-delay: 5s;
    animation-duration: 12s;
}

.circles li:nth-child(10) {
    top: 60%; /* Exceeds midpoint */
    width: 150px;
    height: 150px;
    animation-delay: 1s;
    animation-duration: 18s;
}


@keyframes animate {

    0%{
        transform: translateX(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }

    100%{
        transform: translateX(-1000px) rotate(720deg);
        opacity: 0;
        border-radius: 50%;
    }

}
</style>
