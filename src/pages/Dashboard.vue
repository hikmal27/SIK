<template>
    <q-page class="tw-px-14 tw-py-8">
        <div>
            <div>
                <p class="tw-text-2xl tw-font-black">Dashboard</p>
            </div>
        </div>

        <div class="tw-mt-9">
            <div class="tw-grid tw-grid-cols-4 tw-gap-x-3">
                <div v-for="val in value" :key="val.Judul" class="tw-flex tw-flex-row tw-justify-between tw-bg-white tw-rounded-lg tw-px-6 tw-py-4">
                    <div class="tw-flex tw-flex-col tw-text-gray-600">
                        <p class="tw-text-4xl tw-font-medium">{{ val.Nilai }}</p>
                        <p class="tw-text-lg">{{ val.Judul }}</p>
                    </div>
                    <div class="tw-flex tw-items-center tw-text-5xl">
                        <q-icon :name="val.Icon" :class="val.Color" />
                    </div>
                </div>
            </div>
        </div>
        <div>

        </div>
    </q-page>
</template>

<script>
import { defineComponent } from 'vue'

// import VueApexCharts from "vue3-apexcharts"

const value = [
    {
        Nilai: 56,
        Judul: 'Auto Reply',
        Icon: 'eva-flip-2-outline',
        Color: 'tw-text-blue-600',
    },
    {
        Nilai: 123,
        Judul: 'Message',
        Icon: 'eva-message-square-outline',
        Color: 'tw-text-green-600',
    },
    {
        Nilai: 78,
        Judul: 'Contacts',
        Icon: 'eva-archive-outline',
        Color: 'tw-text-orange-600',
    },
    {
        Nilai: 5,
        Judul: 'Devices',
        Icon: 'eva-smartphone-outline',
        Color: 'tw-text-yellow-700',
    },
]

export default defineComponent({
    name: 'dashboard',
    components: {
        // apexchart: VueApexCharts
    },
    setup() {
        return {
            value,
            series: [
                {
                    name: 'Website Blog',
                    type: 'column',
                    data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
                },
                {
                    name: 'Social Media',
                    type: 'line',
                    data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
                }
            ],

            options: {
                chart: {
                    height: 350,
                    type: 'line'
                },
                stroke: {
                    width: [0, 4]
                },
                title: {
                    text: 'Traffic Source'
                },
                dataLabels: {
                    enable: true,
                    enabledOnseries: [1]
                },
                labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
                
                xaxis: {
                    type: 'datetime'
                },
                yaxis: [
                    {
                        title: {
                            text: 'Website Blog'
                        }
                    },
                    {
                        opposite: true,
                        title: {
                            text: 'Sosial Media'
                        }
                    }
                ]
            },
            
        }
    },
})
</script>
