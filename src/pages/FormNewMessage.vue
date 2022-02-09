<template>
    <q-page class="tw-px-14 tw-py-8">
        <div>
            <div>
                <p class="tw-text-2xl tw-font-black">Create Message</p>
            </div>
        </div>

        <div class="tw-flex tw-flex-row tw-mt-9 tw-space-x-4">
            <div class="tw-w-full tw-bg-white tw-rounded-md tw-px-5 tw-py-5">
                <form action="">
                    <div class="tw-flex tw-flex-wrap tw--mx-3 tw-mb-6">
                        <div class="tw-w-full md:tw-w-1/2 tw-px-3 tw-mb-6 md:tw-mb-0">
                            <label class="tw-block tw-tracking-wide tw-text-gray-700 tw-text-xs tw-font-bold tw-mb-2">
                                Message Name
                            </label>
                            <input type="text" class="tw-w-full tw-leading-none tw-text-gray-900 tw-p-3 focus:tw-outline-none focus:tw-border-blue-700 tw-border tw-rounded tw-border-gray-200" />
                        </div>
                        <div class="tw-w-full md:tw-w-1/2 tw-px-3">
                            <label class="tw-block tw-tracking-wide tw-text-gray-700 tw-text-xs tw-font-bold tw-mb-2">
                                Category
                            </label>
                            <input type="text" class="tw-w-full tw-leading-none tw-text-gray-900 tw-p-3 focus:tw-outline-none focus:tw-border-blue-700 tw-border tw-rounded tw-border-gray-200" />
                        </div>
                    </div>

                    <div class="tw-flex tw-flex-wrap tw--mx-3 tw-mb-6">
                        <div class="tw-w-full tw-px-3 ">
                            <label class="tw-block tw-tracking-wide tw-text-gray-700 tw-text-xs tw-font-bold tw-mb-2">Document Media</label>
                            <input type="file" class="tw-w-full tw-leading-none tw-text-gray-900 tw-p-3 focus:tw-outline-none focus:tw-border-blue-700 tw-border tw-rounded tw-border-gray-200" />
                        </div>
                    </div>

                    <div class="tw-flex tw-flex-wrap tw--mx-3 tw-mb-6">
                        <div class="tw-w-full tw-px-3 ">
                            <label class="tw-block tw-tracking-wide tw-text-gray-700 tw-text-xs tw-font-bold tw-mb-2">Document Media</label>
                            <textarea name="textarea" rows="6" class="tw-w-full tw-leading-none tw-text-gray-900 tw-p-3 focus:tw-outline-none focus:tw-border-blue-700 tw-border tw-rounded tw-border-gray-200"></textarea>
                        </div>
                    </div>
                    <div class="tw-flex tw-flex-row tw-justify-end tw-space-x-2">
                        <div>
                            <button class=" tw-bg-red-600 tw-rounded-md tw-px-7 tw-py-3 tw-text-white">Cancel</button>
                        </div>
                        <div>
                            <button class="tw-bg-blue-500 tw-rounded-md tw-px-7 tw-py-3 tw-text-white">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
            <div class=" tw-w-2/5 tw-h-3/5 tw-overflow-hidden tw-bg-white tw-px-4 tw-py-7 tw-rounded-md">
                <div class=" ">
                    <div>
                        <p>Preview Message</p>
                    </div>
                    <div class="tw-px-2 tw-mt-3">
                        <img src="preview-message.svg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </q-page>
</template>

<script>
export default {
    name: 'form-new-message',
    setup() {
        return {

        }
    },
}
</script>