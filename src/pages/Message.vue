<template>
    <q-page class="tw-px-14 tw-py-8">
        <div>
            <div class="tw-flex tw-flex-row tw-justify-between">
                <div>
                    <p class="tw-text-2xl tw-font-black">Messages</p>
                </div>
                <router-link to="/message/new-message">
                    <div class="tw-bg-white tw-px-7 tw-py-3 tw-rounded-md">
                        <p>Create new</p>
                    </div>
                </router-link>
            </div>
            
            <div class="tw-bg-white tw-rounded-md tw-mt-9 tw-px-5 tw-py-5">
                <table class="tw-table-auto tw-w-full">
                    <thead class="tw-text-sm tw-text-gray-400">
                        <tr>
                            <th class="tw-p-2 tw-whitespace-nowrap">
                                <div class="tw-text-left">Bulk</div>
                            </th>
                            <th class="tw-p-2 tw-whitespace-nowrap">
                                <div class="tw-text-left">Message Name</div>
                            </th>
                            <th class="tw-p-2 tw-whitespace-nowrap">
                                <div class="tw-text-left">Category</div>
                            </th>
                            <th class="tw-p-2 tw-whitespace-nowrap">
                                <div class="tw-text-left">Message Content</div>
                            </th>
                            <th class="tw-p-2 tw-whitespace-nowrap">
                                <div class="tw-text-left">Media</div>
                            </th>
                            <th class="tw-p-2 tw-whitespace-nowrap">
                                <div class="tw-text-left">Status</div>
                            </th>
                            <th class="tw-p-2 tw-whitespace-nowrap">
                                <div class="tw-text-left">Action</div>
                            </th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr v-for="message in messages" :key="message.Number">
                            <td class="tw-p-2 tw-whitespace-nowrap">
                                <div class="tw-flex tw-items-center"> 
                                    <input type="checkbox" value="" />
                                </div>
                            </td>
                            <td class="tw-p-2 tw-whitespace-nowrap">
                                <div class="tw-flex tw-items-center">
                                    <div class="tw-font-medium tw-text-gray-400">{{ message.Name }}</div>
                                </div>
                            </td>
                            <td class="tw-p-2 tw-whitespace-nowrap">
                                <div class="tw-flex tw-items-center">
                                    <div class="tw-font-medium tw-text-gray-400">{{ message.Category }}</div>
                                </div>
                            </td>
                            <td class="tw-p-2 tw-whitespace-nowrap">
                                <div class="tw-flex tw-items-center">
                                    <div class="tw-font-medium tw-text-gray-400">{{ message.Content }}</div>
                                </div>
                            </td>
                            <td class="tw-p-2 tw-whitespace-nowrap">
                                <div class="tw-flex tw-items-center">
                                    <div class="tw-font-medium tw-text-gray-400">{{ message.Media }}</div>
                                </div>
                            </td>
                            <td class="tw-p-2 tw-whitespace-nowrap">
                                <div class="tw-flex tw-items-left">
                                    <div class=" tw-text-green-600">{{ message.Status }}</div>
                                </div>
                            </td>
                            <td class="tw-p-2 tw-whitespace-nowrap">
                                <div class="tw-flex tw-items-left">
                                    <div class="tw-flex tw-flex-row tw-space-x-2 tw-font-medium tw-text-gray-400">
                                        <router-link to="/edit">Edit</router-link>
                                        <router-link to="/delete">Del</router-link>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </q-page>
</template>

<script>

const messages = [
    {
        Name: 'Informasi Umum',
        Category: 'UMUM',
        Content: 'Kepada Bapak/Ibu yang terhormat kami ing...',
        Media: '-',
        Status: 'Active',
    },
    {
        Name: 'Pembayaran Masuk',
        Category: 'PAYMENT',
        Content: 'Halo, Terima kasih telah melakukan pembayar...',
        Media: '[image]',
        Status: 'Active',
    },
    {
        Name: 'Pembayaran Gagal',
        Category: 'PAYMENT',
        Content: 'Maaf, pembayaran Anda telah gagal, silahk...',
        Media: '[image]',
        Status: 'Active',
    },
    {
        Name: 'Selamat Datang',
        Category: 'UMUM',
        Content: 'Halo {{ $nama }}, Terima kasih telah melakuka...',
        Media: '-',
        Status: 'Active',
    },
    {
        Name: 'Reset Password',
        Category: 'SETTING',
        Content: 'Halo {{ $nama }}, berikut adalah kode verifikasi...',
        Media: '-',
        Status: 'Active',
    },
]

export default {
    name: 'message',
    setup() {
        return {
            messages,
        }
    },
}
</script>