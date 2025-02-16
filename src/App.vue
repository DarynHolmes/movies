<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div>
    <header>
      <div class="bg-teal-500 shadow-2xl">
        <div class="text-white p-5 container mx-auto">
          <h1 class="text-3xl">Movies</h1>
          <nav>
            <!-- <RouterLink to="/">Home</RouterLink> -->
          </nav>
        </div>
      </div>
    </header>

    <div class="container mx-auto p-5">
      <RouterView />
    </div>
  </div>
</template>
