<script setup>
import { onMounted, onBeforeMount } from "vue";
import { computed } from 'vue';
import { useStore } from 'vuex';
import { Loader } from "@googlemaps/js-api-loader";

const store = useStore();

const loader = new Loader({
  apiKey: "AIzaSyC8AAeoV6DwIZHirP9VNBuqFmn1elrMERk",
  version: "weekly",
});

let map;

onBeforeMount(() => {
  console.log(store);
  
})

onMounted(() => {
  store.dispatch('category/getMarker', {lat: 22.2812, long: 114.1659});
  initMap();  
});

const markers = computed(() => store.state.category.markers);

console.log(markers);

function initMap() {
  loader.load().then(async () => {
    const { Map } = await google.maps.importLibrary("maps");

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          map = new Map(document.getElementById("map"), {
            center: pos,
            zoom: 15,
            disableDefaultUI: true,
            zoomControl: true,
            scaleControl: true,
            rotateControl: true,
            fullscreenControl: true
          });
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });
}
</script>

<template>
  <div>
    <div>{{ markers }}</div>
  <div id="map"></div>
  </div>
  
</template>

<style scoped>
#map {
  width: 100%;
  height: 100%;
}
</style>
