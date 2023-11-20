<!--<script setup lang="ts">-->
<!--const router = useRouter()-->
<!--// const routes = router.getRoutes().filter((r) => r.path.lastIndexOf('/') === 0)-->
<!--const drawerState = useState('drawer', () => true)-->

<!--const {mobile, lgAndUp, width} = useDisplay()-->
<!--const drawer = computed({-->
<!--  get() {-->
<!--    return drawerState.value || !mobile.value-->
<!--  },-->
<!--  set(val: boolean) {-->
<!--    drawerState.value = val-->
<!--  },-->
<!--})-->
<!--const rail = computed(() => !drawerState.value && !mobile.value)-->
<!--// routes.sort((a, b) => (a.meta?.drawerIndex ?? 99) - (b.meta?.drawerIndex ?? 98))-->

<!--nextTick(() => {-->
<!--  drawerState.value = lgAndUp.value && width.value !== 1280-->
<!--})-->
<!--import LogoImg from '@/assets/images/logo.png'-->
<!--</script>-->

<template>
  <v-navigation-drawer>
  </v-navigation-drawer>
</template>