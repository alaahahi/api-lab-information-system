<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/inertia-vue3';
import VueTailwindDatepicker from 'vue-tailwind-datepicker'
import { ref } from 'vue';

const dateValue = ref({
    startDate: '',
    endDate: ''
})
const countComp = ref()
const formatter = ref({
  date: 'YYYY/MM/DD',
  month: 'MM'
})
const options = ref({
  shortcuts: {
    today: 'اليوم',
    yesterday: 'البارحة',
    past: period => period + ' قبل يوم',
    currentMonth: 'الشهر الحالي',
    pastMonth: 'الشهر السابق'
  },
  footer: {
    apply: 'Terapkan',
    cancel: 'Batal'
  }
})
const dDate = (date) => {
  return date >= new Date() ;
}
const getcountComp = async () => {
    const response = await fetch(`getcount?start=${dateValue.value.startDate}&end=${dateValue.value.endDate}`);
    countComp.value = await response.json();
}
getcountComp()
const props =  defineProps({
    url: String,
    user: String,
    profile:String,
    comp:String,
    working:String
});
</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                لوحة القيادة
            </h2>
        </template>
       
       

    </AuthenticatedLayout>
</template>
