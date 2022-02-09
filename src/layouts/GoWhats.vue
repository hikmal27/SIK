<template>
  <q-layout view="lHh lpR fFf" class="tw-font-kufi">

    <q-header class="tw-bg-gray-50 tw-px-10 tw-pt-5 tw-pb-3 tw-text-gray-500">
      <q-toolbar class="tw-flex tw-justify-between">
        <!-- <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" /> -->
        <div>
            <q-icon name="eva-search-outline" class="tw-text-2xl" />
            <input class="tw-h-8 tw-px-3 tw-bg-gray-50 tw-rounded-lg tw-text-sm focus:tw-outline-none"
          type="search" name="search" placeholder="Search something...">
        </div>
        <div class="tw-flex tw-items-center">
            <div class="tw-mr-3">
                <img src="profil.png" alt="profil" class="tw-w-8">
            </div>
            <div class="tw-flex tw-items-center">
                <p class="tw-mr-1">Azriel Fatur</p>
                <q-icon name="eva-arrow-ios-downward-outline" />
            </div>
        </div>

        <!-- <q-toolbar-title>
          Go Whats
        </q-toolbar-title> -->
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" class="tw-bg-white">
        <side-menu />
      <!-- drawer content -->
    </q-drawer>

    <q-page-container class="tw-bg-gray-50">
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref } from 'vue'
import SideMenu from 'src/components/SideMenu.vue'

export default {
    components: {
        SideMenu
    },
  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>