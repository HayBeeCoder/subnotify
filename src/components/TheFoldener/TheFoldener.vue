<template>

   <span class="folds main">
    <span class="cell main-1"></span>
    <span class="cell main-2"></span>
    <span class="cell main-1"></span>
    <span class="cell main-2"></span>
    <span class="cell main-1"></span>
  </span>

  <span class="folds vertical">
    <span class="cell vertical-1"></span>
    <span class="cell vertical-2"></span>
    <span class="cell vertical-3"></span>
    <span class="cell vertical-4"></span>
    <span class="cell vertical-5"></span>
  </span>

  <span class="folds horizontal">
    <span class="cell horizontal-1"></span>
    <span class="cell horizontal-2"></span>
    <span class="cell horizontal-1"></span>
    <span class="cell horizontal-2"></span>
    <span class="cell horizontal-1"></span>
    <span class="cell horizontal-3"></span>
    <span class="cell horizontal-4"></span>
    <span class="cell horizontal-3"></span>
    <span class="cell horizontal-4"></span>
    <span class="cell horizontal-3"></span>
  </span>

</template>


<style scoped>

span.folds {
  position:absolute;
  top:0;
  right:0;
  bottom:0;
  left:0;
  display:grid;
  grid-template-columns:auto auto auto auto auto;
}

span.cell {
  border:0px solid rgba(30, 10, 60, 0.4);
  font-size:1em;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
}

/* ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- */
/* ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- */

/* MAIN */
span.main {
  visibility:visible;
  filter:opacity(1);
}

span.main-1 {
  background-image:
    linear-gradient(
      to right,
      rgba(76, 53, 73, 0.20) 0%,
      rgba(76, 53, 73, 0.10) 100%
    );
}

span.main-2 {
  background-image:
    linear-gradient(
      to right,
      rgba(76, 53, 73, 0.04) 0%,
      rgba(76, 53, 73, 0.00) 100%
    );
}

/* ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- */
/* ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- */

/* VERTICAL */
span.vertical {
  visibility:visible;
  filter:opacity(1);
}

span.vertical-1 {
  background-image:
    linear-gradient(
      to right,
      rgba(76, 53, 73, 0.08) 0%,
      rgba(76, 53, 73, 0.02) 20%,
      rgba(76, 53, 73, 0.00) 60%,
      rgba(76, 53, 73, 0.16) 94%,
      rgba(76, 53, 73, 0.10) 98%,
      rgba(76, 53, 73, 0.06) 100%
    );
}

span.vertical-2 {
  background-image:
    linear-gradient(
      to right,
      rgba(76, 53, 73, 0.06) 0%,
      rgba(76, 53, 73, 0.10) 2%,
      rgba(76, 53, 73, 0.16) 6%,
      rgba(76, 53, 73, 0.00) 40%,
      rgba(76, 53, 73, 0.02) 100%
    );
}

span.vertical-3 {
  background-image:
    linear-gradient(
      to right,
      rgba(76, 53, 73, 0.30) 0%,
      rgba(76, 53, 73, 0.24) 2%,
      rgba(76, 53, 73, 0.15) 5%,
      rgba(76, 53, 73, 0.00) 28%,
      rgba(76, 53, 73, 0.00) 60%,
      rgba(76, 53, 73, 0.16) 94%,
      rgba(76, 53, 73, 0.10) 98%,
      rgba(76, 53, 73, 0.06) 100%
    );
}

span.vertical-4 {
  background-image:
    linear-gradient(
      to right,
      rgba(76, 53, 73, 0.06) 0%,
      rgba(76, 53, 73, 0.10) 2%,
      rgba(76, 53, 73, 0.16) 6%,
      rgba(76, 53, 73, 0.00) 40%,
      rgba(76, 53, 73, 0.02) 100%
    );
}

span.vertical-5 {
  background-image:
    linear-gradient(
      to right,
      rgba(76, 53, 73, 0.30) 0%,
      rgba(76, 53, 73, 0.24) 2%,
      rgba(76, 53, 73, 0.15) 5%,
      rgba(76, 53, 73, 0.00) 28%,
      rgba(76, 53, 73, 0.02) 100%
    );
}

/* ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- */
/* ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- */

/* HORIZONTAL */
span.horizontal {
  visibility:visible;
  filter:opacity(1);
}

span.horizontal-1 {
  background-image:
    linear-gradient(
      to bottom,
      rgba(76, 53, 73, 0.02) 0%,
      rgba(76, 53, 73, 0.00) 72%,
      rgba(76, 53, 73, 0.15) 95%,
      rgba(76, 53, 73, 0.24) 100%
    );
}

span.horizontal-2 {
  background-image:
    linear-gradient(
      to bottom,
      rgba(76, 53, 73, 0.02) 0%,
      rgba(76, 53, 73, 0.00) 60%,
      rgba(76, 53, 73, 0.22) 96%,
      rgba(76, 53, 73, 0.08) 100%
    );
}

span.horizontal-3 {
  background-image:
    linear-gradient(
      to top,
      rgba(76, 53, 73, 0.08) 0%,
      rgba(76, 53, 73, 0.00) 40%,
      rgba(76, 53, 73, 0.14) 100%
    );
}

span.horizontal-4 {
  background-image:
    linear-gradient(
      to top,
      rgba(76, 53, 73, 0.02) 0%,
      rgba(76, 53, 73, 0.00) 60%,
      rgba(76, 53, 73, 0.18) 94%,
      rgba(76, 53, 73, 0.02) 100%
    );
}
</style>
