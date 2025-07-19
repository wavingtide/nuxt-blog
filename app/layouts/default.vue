<template>
  <div class="pt-30">
    <UContainer class="max-w-4xl mx-auto px-4 py-8">
      <AppHeader :links="navLinks" />
      <slot />
      <AppFooter />
    </UContainer>
  </div>
</template>