<template>
    <q-page class="tw-px-14 tw-py-8">
        <div>
            <div>
                <p class="tw-text-2xl tw-font-black">Devices</p>
            </div>
        </div>
        <div class="tw-flex tw-flex-row tw-mt-9 tw-space-x-3">
            <div class="tw-bg-white tw-rounded-md tw-px-5 tw-py-5">
                <table class="tw-table-auto tw-w-full">
                    <thead class="tw-text-sm tw-text-gray-400">
                        <tr>
                            <th class="tw-p-2 tw-whitespace-nowrap">
                                <div class="tw-text-left">Bulk</div>
                            </th>
                            <th class="tw-p-2 tw-whitespace-nowrap">
                                <div class="tw-text-left">Number</div>
                            </th>
                            <th class="tw-p-2 tw-whitespace-nowrap">
                                <div class="tw-text-left">Type</div>
                            </th>
                            <th class="tw-p-2 tw-whitespace-nowrap">
                                <div class="tw-text-left">Status</div>
                            </th>
                            <th class="tw-p-2 tw-whitespace-nowrap">
                                <div class="tw-text-left">Registered At</div>
                            </th>
                            <th class="tw-p-2 tw-whitespace-nowrap">
                                <div class="tw-text-left">Action</div>
                            </th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr v-for="table in tables" :key="table.Number">
                            <td class="tw-p-2 tw-whitespace-nowrap">
                                <div class="tw-flex tw-items-center"> 
                                    <input type="checkbox" value="" />
                                </div>
                            </td>
                            <td class="tw-p-2 tw-whitespace-nowrap">
                                <div class="tw-flex tw-items-center">
                                    <div class="tw-font-medium tw-text-gray-400">{{ table.Number }}</div>
                                </div>
                            </td>
                            <td class="tw-p-2 tw-whitespace-nowrap">
                                <div class="tw-flex tw-items-center">
                                    <div class="tw-font-medium tw-text-gray-400">{{ table.Type }}</div>
                                </div>
                            </td>
                            <td class="tw-p-2 tw-whitespace-nowrap">
                                <div class="tw-flex tw-items-left">
                                    <div :class="table.ColorText">{{ table.Status }}</div>
                                </div>
                            </td>
                            <td class="tw-p-2 tw-whitespace-nowrap">
                                <div class="tw-flex tw-items-left">
                                    <div class="tw-font-medium tw-text-gray-400">{{ table.Register }}</div>
                                </div>
                            </td>
                            <td class="tw-p-2 tw-whitespace-nowrap">
                                <div class="tw-flex tw-items-left">
                                    <div class="tw-font-medium tw-text-gray-400">Edit | Del</div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="tw-bg-white tw-rounded-lg tw-px-5 tw-py-5">
                <div>
                    <p>Quick Connect</p>
                </div>
                <div class="tw-my-2">
                    <img src="qr.svg" alt="Qr">
                </div>
                <div class="tw-text-center">
                    <p>Refresh</p>
                </div>
            </div>
        </div>
    </q-page>
</template>

<script>

const tables = [
    {
        Number: '+62 8788730944',
        Type: 'Android Oreo (10.1)',
        Status: 'Not Connected',
        Register: '12 Januari 2022',
        ColorText: 'tw-text-red-600',
    },
    {
        Number: '+62 81290187761',
        Type: 'Android Nougat (7.2)',
        Status: 'Connected',
        Register: '09 Januari 2022',
        ColorText: 'tw-text-green-400',
    },
    {
        Number: '+62 859106535379',
        Type: 'iPhone 6s  (iOS 12.2)',
        Status: 'Connected',
        Register: '28 Desember 2021',
        ColorText: 'tw-text-green-400',
    },
    {
        Number: '+62 87898123727',
        Type: 'iPhone Xr (iOS 15.2)',
        Status: 'Not Connected',
        Register: '12 Desember 2021',
        ColorText: 'tw-text-red-600',
    },
    {
        Number: '+62 85209918723',
        Type: 'Android Nougat (7.1)',
        Status: 'Not Connected',
        Register: '10 Desember 2021',
        ColorText: 'tw-text-red-600',
    },
]

export default {
    setup() {
        return {
            tables,
        }
    },
}
</script>