<template>
  <div>
    <UContainer class="pt-50 sm:pt-30 max-w-4xl mx-auto px-4 py-8">
      <AppHeader :links="navLinks" />
      <slot />
      <AppFooter />
    </UContainer>
  </div>
</template>