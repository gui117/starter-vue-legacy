<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCounterStore } from '~/stores/counter'

const counterStore = useCounterStore()

const { counter, doubleCount } = storeToRefs(counterStore)
</script>

<template>
  <div class="flex flex-col items-center justify-center [&>*]:my-4">
    <div class="color-base text-2xl">
      Hello World
    </div>
    <a class="c-black" href="https://github.com/gui117/starter-vue-legacy" target="_blank">
      <div class="i-carbon-logo-github" />
    </a>
    <div>
      count: {{ counter }}
    </div>
    <div>
      double count: {{ doubleCount }}
    </div>
    <div class="flex items-center justify-center [&>*]:mx-4">
      <button class="btn" @click="counterStore.increment">
        increase
      </button>
      <button class="btn" @click="counterStore.decrement">
        decrease
      </button>
    </div>
  </div>
</template>
