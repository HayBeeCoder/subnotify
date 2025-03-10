<template>
  <section class="z-[900] fixed top-full -translate-y-full bg-transparent w-screen h-screen  left-0   ">
    <div class=" w-full h-full dark" @click="$emit('someEvent')">

    </div>
    <section class="bg-white h-[65%] w-full bottom-0 absolute left-0 bottom-[0px]">

      <slot>

      </slot>
    </section>
  </section>
</template>

<style scoped
>
.dark{
  background: rgba(0,0,0,0.3)
}
</style>
