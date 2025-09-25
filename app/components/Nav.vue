<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex h-12 items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center space-x-4">
          <NuxtLink to="/" class="text-xl font-bold text-gray-900 dark:text-white"
            ><img
              src="/logo.png"
              alt="Logo"
              class="max-h-10 w-auto object-contain"
              style="max-width: 160px"
            />
          </NuxtLink>
        </div>

        <!-- Links desktop -->
        <div class="relative w-full max-w-sm">
          <input
            v-model="query"
            type="text"
            placeholder="Search..."
            class="w-full rounded-md border border-border bg-card px-2 py-1 text-sm text-foreground shadow-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/50"
          />
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>

</script>
