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

.circles li{
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.2);
    animation: animate 25s linear infinite;
    right: -150px;

}
.circles li:nth-child(1) {
    top: 10%; /* Position 10% of the viewport height */
    right: -100px;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
    animation-duration: 20s;
}

.circles li:nth-child(2) {
    top: 20%; /* Position 20% of the viewport height */
    right: -100px;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 12s;
}

.circles li:nth-child(3) {
    top: 30%; /* Position 30% of the viewport height */
    right: -100px;
    width: 30px;
    height: 30px;
    animation-delay: 4s;
    animation-duration: 15s;
}

.circles li:nth-child(4) {
    top: 40%; /* Position 40% of the viewport height */
    right: -100px;
    width: 60px;
    height: 60px;
    animation-delay: 1s;
    animation-duration: 18s;
}

.circles li:nth-child(5) {
    top: 50%; /* Position 50% of the viewport height */
    right: -100px;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
    animation-duration: 10s;
}

.circles li:nth-child(6) {
    top: 15%; /* Position 15% for variety */
    right: -100px;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
    animation-duration: 25s;
}

.circles li:nth-child(7) {
    top: 25%; /* Position 25% for variety */
    right: -100px;
    width: 150px;
    height: 150px;
    animation-delay: 5s;
    animation-duration: 30s;
}

.circles li:nth-child(8) {
    top: 35%; /* Position 35% of the viewport height */
    right: -100px;
    width: 25px;
    height: 25px;
    animation-delay: 7s;
    animation-duration: 45s;
}

.circles li:nth-child(9) {
    top: 45%; /* Position 45% for variety */
    right: -100px;
    width: 15px;
    height: 15px;
    animation-delay: 6s;
    animation-duration: 35s;
}

.circles li:nth-child(10) {
    top: 5%; /* Position near the top at 5% of the viewport */
    right: -100px;
    width: 150px;
    height: 150px;
    animation-delay: 8s;
    animation-duration: 20s;
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
