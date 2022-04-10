<script setup>
  import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
</script>

<template>
  <ParentLayout>
    <template #home>
    <main class="page">
      <slot name="top" />

      <Content class="theme-default-content" />
      <PageEdit />

      <PageNav v-bind="{ sidebarItems }" />

      <slot name="bottom" />
    </main>
  </template>
  </ParentLayout>
</template>