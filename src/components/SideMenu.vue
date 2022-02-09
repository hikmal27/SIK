<template>
    <div>
        <div class="tw-flex tw-flex-col">
            <div class="tw-pl-9">
                <div class="tw-flex tw-px-5 tw-mt-7 tw-text-center">
                    <img src="charging.svg" alt="charging" class="tw-w-12 tw-mr-4">
                    <p class="tw-text-2xl tw-font-black tw-mt-2 tw-text-orange-400">Go-Whats</p>
                </div>
            </div>

            <div class="tw-mt-20 tw-pl-9">
                <a href="">
                    <div class="tw-flex tw-px-5 tw-space-x-3 tw-text-orange-400 ">
                        <q-icon name="eva-grid-outline" class="tw-text-3xl" />
                        <p class="tw-text-lg">Dashboard</p>
                    </div>
                </a>
            </div>

            <div class="tw-mt-8 tw-pl-9">
                <div class="tw-px-5">
                    <p class="tw-text-gray-300 tw-text-lg">Templates</p>
                    <router-link to="/auto-reply">
                        <div class="tw-flex tw-space-x-3 tw-mt-6 tw-text-gray-600">
                            <q-icon name="eva-flip-2-outline" class="tw-text-3xl" />
                            <p class="tw-text-lg">Auto Reply</p>
                        </div>
                    </router-link>
                    <router-link to="/message">
                        <div class="tw-flex tw-space-x-3 tw-mt-5 tw-text-gray-600">
                            <q-icon name="eva-message-square-outline" class="tw-text-3xl" />
                            <p class="tw-text-lg">Message</p>
                        </div>
                    </router-link>
                </div>
            </div>

            <div class="tw-mt-8 tw-pl-9">
                <div class="tw-px-5">
                    <p class="tw-text-gray-300 tw-text-lg">Saved</p>
                    <a href="#">
                        <div class="tw-flex tw-space-x-3 tw-mt-6 tw-text-gray-600">
                            <q-icon name="eva-archive-outline" class="tw-text-3xl" />
                            <p class="tw-text-lg">Contact</p>
                        </div>
                    </a>
                    <router-link to="/devices">
                        <div class="tw-flex tw-space-x-3 tw-mt-5 tw-text-gray-600">
                            <q-icon name="eva-smartphone-outline" class="tw-text-3xl" />
                            <p class="tw-text-lg">Device</p>
                        </div>
                    </router-link>
                </div>
            </div>

            <div class="tw-mt-8 tw-pl-9">
                <div class="tw-px-5">
                    <p class="tw-text-gray-300 tw-text-lg">Documentation</p>
                    <a href="#">
                        <div class="tw-flex tw-space-x-3 tw-mt-6 tw-text-gray-600">
                            <q-icon name="eva-book-outline" class="tw-text-3xl" />
                            <p class="tw-text-lg">Rest API</p>
                        </div>
                    </a>
                </div>
            </div>

            <div class="tw-mt-20 tw-pl-9">
                <div class="tw-px-5">
                    <a href="#">
                        <div class="tw-flex tw-space-x-3 tw-mt-6 tw-text-red-700">
                            <q-icon name="eva-power-outline" class="tw-text-3xl" />
                            <p class="tw-text-lg">Shutdown!</p>
                        </div>
                    </a>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'side-menu',
    setup() {
        
    },
})
</script>
