<template>
  <div>
    <NavigationBar v-show="isNotSignInPage"/>
    <router-view :class="{'other-page': isNotSignInPage,  'sign-in': !isNotSignInPage}" :key="this.$route.path"/>
    <Background />
  </div>
</template>

<script>
import Background from "./components/Background.vue"
import NavigationBar from './components/NavigationBar.vue'

export default {
  name: 'App',
  components: {
    Background,
    NavigationBar
  },
  computed: {
    isNotSignInPage() {
      if(this.$route.name !== 'signin'){
        return true;
      }
      return false;
    }
  }
}
</script>

<style>
#app {
  font-family: Strait !important;
}

.sign-in{
  position: absolute;
}

.other-page {
  position: absolute;
  top: 75px;
}

:root{
  --primary-color: rgba(248, 38, 38, 1);
  --secondary-color: rgb(255, 255, 255, 1);
  --text-color: rgb(0, 0, 0, 1);
}
</style>
