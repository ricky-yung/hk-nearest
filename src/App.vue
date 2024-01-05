<script setup>
import { ref, onMounted } from 'vue'
import GoogleMap from './components/GoogleMap.vue';
import NavBar from "./components/NavBar.vue";

import { RepositoryFactory } from './repo/RepositoryFactory';
import MapMarker from "./modal/MapMarker";

const nearestSchoolRepository = RepositoryFactory.get('nearestSchoolRepository');

onMounted(() => {
  let result = nearestSchoolRepository.get(22.2812, 114.1659);
  console.log(result);
})

</script>

<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider :style="siderStyle" v-model:collapsed="collapsed" collapsible>
      <NavBar></NavBar>
    </a-layout-sider>
    <a-layout>
      <a-layout-header :style="headerStyle">Header</a-layout-header>
      <a-layout-content :style="contentStyle">
        <GoogleMap />
      </a-layout-content>
      <a-layout-footer :style="footerStyle">Footer</a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#108ee9',
};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#3ba0e9',
};
const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
};
export {};
</script>

<style scoped>
</style>
