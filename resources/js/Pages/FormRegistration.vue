<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import TextInput from "@/Components/TextInput.vue";
import Dropdown from "@/Components/Dropdown.vue";
import { Head, Link, useForm } from "@inertiajs/inertia-vue3";
import { ref } from "vue";
import { WebCamUI } from "vue-camera-lib";
import axios from 'axios';
const errorq = ref({})
const profileAdded = ref(0)
const form = ref({
  husband_name: "",
  husband_birthdate: "",
  husband_certification: "",
  husband_job: "",
  husband_address: "",
  husband_image: "",
  wife_name: "",
  wife_birthdate: "",
  wife_certification: "",
  wife_job: "",
  wife_address: "",
  wife_image: "",
  phone_number: "",
  invoice_number: "",
  relatives: "",
});
defineProps({
  usersType: Array,
  coordinators: Array,
});
//
let show_birthday_husband=ref(false);
let show_birthday_wife=ref(false)

let showWife = ref(false);
let day = ref("اليوم");
let month = ref("الشهر");
let year = ref("السنة");
let dayW = ref("اليوم");
let monthW = ref("الشهر");
let yearW = ref("السنة");
let showHusband = ref(false);
let certification = ref([
  { key: "بدون", name: "بدون" },
  { key: "ابتدائي", name: "ابتدائي" },
  { key: "متوسطة", name: "متوسطة" },
  { key: "اعدادي", name: "اعدادي" },
  { key: "دبلوم", name: "دبلوم" },
  { key: "بكالوريوس", name: "بكالوريوس" },
  { key: "ماجستير", name: "ماجستير" },
  { key: "دكتوراه", name: "دكتوراه" },
]);
let relativesType = ref([
  { key: "اقارب-درجة اولى", name: "اقارب-درجة اولى" },
  { key: "اقارب", name: "اقارب" },
  { key: "ليس اقارب", name: "ليس اقارب" },
]);
let dayList = ref([
  { key: "01", name: "01" },
  { key: "02", name: "02" },
  { key: "03", name: "03" },
  { key: "04", name: "04" },
  { key: "05", name: "05" },
  { key: "06", name: "06" },
  { key: "07", name: "07" },
  { key: "08", name: "08" },
  { key: "09", name: "09" },
]);

const isLoading = ref(false);

const submit = () => {
  isLoading.value = true;
  show_birthday_husband.value=false;
  show_birthday_wife.value=false;
  if(day.value=='اليوم'||month.value=='الشهر'||year.value=='السنة'){
    show_birthday_husband.value=true;
    isLoading.value = false;
    return 0;
  }
  if(dayW.value=='اليوم'||monthW.value=='الشهر'||yearW.value=='السنة'){
    show_birthday_wife.value=true;
    isLoading.value = false;
    return 0;
  }  
  axios.post('/formRegistration', form.value)
  .then(response => {
    form.value={};
    isLoading.value = false;
    profileAdded.value = response.data
    errorq.value={}
    day.value ="اليوم";
    month.value ="الشهر";
    year.value ="السنة";
    dayW.value ="اليوم";
    monthW.value ="الشهر";
    yearW.value ="السنة";
  })
  .catch(error => {
    errorq.value= JSON.parse(error.request.response)
    isLoading.value = false;
    profileAdded.value=0
    
  })

  show_birthday_husband.value=false;
  show_birthday_wife.value=false;
};

const photoHusband = (data) => {
  form.value.husband_image = data.image_data_url;

  showHusband.value = false;
};
const photoWife = (data) => {
  form.value.wife_image = data.image_data_url;
  showWife.value = false;
};
const handleImage = (e) => {
  const selectedImage = e.target.files[0]; // get first file
  createBase64Image(selectedImage);
};
const createBase64Image = (fileObject) => {
  const reader = new FileReader();

  reader.onload = (e) => {
    form.value.husband_image = e.target.result;
    //this.uploadImage();
  };
  reader.readAsDataURL(fileObject);
};
const handleImageWife = (e) => {
  const selectedImage = e.target.files[0]; // get first file
  createBase64ImageWife(selectedImage);
};
const createBase64ImageWife = (fileObject) => {
  const reader = new FileReader();

  reader.onload = (e) => {
    form.value.wife_image = e.target.result;
    //this.uploadImage();
  };
  reader.readAsDataURL(fileObject);
};
</script>

<template>
  <Head title="Dashboard" />
  <AuthenticatedLayout>
    <template #header>
      <h2 class="font-semibold text-xl text-gray-800 leading-tight">
        دائرة الصحة - استمارة الزواج
      </h2>
      <WebCamUI @photoTaken="photoHusband" v-if="showHusband" />
      <WebCamUI @photoTaken="photoWife" v-if="showWife" />
    </template>
    <div v-if="profileAdded">
      <div
        id="alert-2"
        class="p-4 mb-4 bg-green-300 rounded-lg dark:bg-green-300 text-center"
        role="alert"
      >
        <div class="ml-3 text-sm font-medium text-green-700 dark:text-green-800">
          تم ادخال الاستمارة  رقم 
           {{ profileAdded.no }} 
          بنجاح
        </div>
      </div>
    </div>
    <form name="createForm" @submit.prevent="submit">
      <div class="flex flex-row">
        <div class="basis-1/2">
          <div class="py-6">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
                  <h2 class="text-center text-xl py-2">معلومات الزوج</h2>
                  <div className="flex flex-col">
                    <div className="mb-4">
                      <InputLabel for="name" value="الصورة الشخصية" />
                      <img :src="form.husband_image" />
                      <button
                        @click.prevent="showHusband = true"
                        class="
                          px-12
                          mt-3
                          mx-2
                          py-2
                          font-bold
                          text-white
                          bg-rose-500
                          rounded
                        "
                      >
                        الكاميرة
                      </button>
                      <input
                        @change="handleImage"
                        type="file"
                        accept="image/*"
                        class="
                          px-2
                          mt-3
                          py-1
                          font-bold
                          text-white
                          bg-rose-500
                          rounded
                        "
                      />
                      <span
                        className="text-red-600"
                        v-if="errorq?.errors?.husband_image && !form.husband_image"
                      >
                        الصورة الشخصية حقل مطلوب
                      </span>
                    </div>
                    <div className="mb-4">
                      <InputLabel for="name" value="الأسم" />

                      <TextInput
                        id="name"
                        type="text"
                        class="mt-1 block w-full"
                        v-model="form.husband_name"
                        autofocus
                      />

                      <span
                        className="text-red-600"
                        v-if="errorq?.errors?.husband_name && !form.husband_name"
                      >
                        الأسم حقل مطلوب
                      </span>
                    </div>
                    <div className="mb-4">
                      <InputLabel
                        for="husband_birthdate"
                        value="تاريخ الميلاد"
                      />
                      <div class="flex flex-row">
                        <div class="basis-1/3 px-2">
                          <select
                            v-model="day"
                            @change="
                              form.husband_birthdate =
                                year + '/' + month + '/' + day
                            "
                            class="
                              m-1
                              pr-8
                              bg-gray-50
                              border border-gray-300
                              text-gray-900 text-sm
                              rounded-lg
                              focus:ring-blue-500 focus:border-blue-500
                              block
                              w-full
                              p-2.5
                              dark:bg-gray-700
                              dark:border-gray-600
                              dark:placeholder-gray-400
                              dark:text-white
                              dark:focus:ring-blue-500
                              dark:focus:border-blue-500
                            "
                          >
                            <option :value="day" selected disabled>
                              {{ day }}
                            </option>
                            <option
                              :value="d.key"
                              v-for="d in dayList"
                              :key="d.key"
                            >
                              {{ d.name }}
                            </option>
                            <option :value="n + 9" v-for="n in 22" :key="n">
                              {{ n + 9 }}
                            </option>
                          </select>
                        </div>
                        <div class="basis-1/3 px-2">
                          <select
                            v-model="month"
                            @change="
                              form.husband_birthdate =
                                year + '/' + month + '/' + day
                            "
                            class="
                              m-1
                              pr-8
                              bg-gray-50
                              border border-gray-300
                              text-gray-900 text-sm
                              rounded-lg
                              focus:ring-blue-500 focus:border-blue-500
                              block
                              w-full
                              p-2.5
                              dark:bg-gray-700
                              dark:border-gray-600
                              dark:placeholder-gray-400
                              dark:text-white
                              dark:focus:ring-blue-500
                              dark:focus:border-blue-500
                            "
                          >
                            <option :value="month" selected disabled>
                              {{ month }}
                            </option>
                            <option
                              :value="d.key"
                              v-for="d in dayList"
                              :key="d.key"
                            >
                              {{ d.name }}
                            </option>
                            <option :value="n + 9" v-for="n in 3" :key="n + 9">
                              {{ n + 9 }}
                            </option>
                          </select>
                        </div>
                        <div class="basis-1/3 px-2">
                          <select
                            v-model="year"
                            @change="
                              form.husband_birthdate =
                                year + '/' + month + '/' + day
                            "
                            class="
                              m-1
                              pr-8
                              bg-gray-50
                              border border-gray-300
                              text-gray-900 text-sm
                              rounded-lg
                              focus:ring-blue-500 focus:border-blue-500
                              block
                              w-full
                              p-2.5
                              dark:bg-gray-700
                              dark:border-gray-600
                              dark:placeholder-gray-400
                              dark:text-white
                              dark:focus:ring-blue-500
                              dark:focus:border-blue-500
                            "
                          >
                            <option :value="year" selected disabled>
                              {{ year }}
                            </option>
                            <option :value="n + 1939" v-for="n in 80" :key="n">
                              {{ n + 1939 }}
                            </option>
                          </select>
                        </div>
                      </div>

                      <span
                        className="text-red-600"
                        v-if="errorq?.errors?.husband_birthdate ||show_birthday_husband"
                      >
                        حقل تاريخ الميلاد مطلوب
                      </span>
                    </div>
                    <div className="mb-4">
                      <InputLabel
                        for="husband_certification"
                        value="التحصيل العلمي"
                      />
                      <select
                        v-model="form.husband_certification"
                        id="userType"
                        class="
                          pr-8
                          bg-gray-50
                          border border-gray-300
                          text-gray-900 text-sm
                          rounded-lg
                          focus:ring-blue-500 focus:border-blue-500
                          block
                          w-full
                          p-2.5
                          dark:bg-gray-700
                          dark:border-gray-600
                          dark:placeholder-gray-400
                          dark:text-white
                          dark:focus:ring-blue-500
                          dark:focus:border-blue-500
                        "
                      >
                        <option selected disabled>التحصيل العلمي</option>
                        <option
                          :key="type.key"
                          v-for="type in certification"
                          :value="type.key"
                        >
                          {{ type.name }}
                        </option>
                      </select>
                      <span
                        className="text-red-600"
                        v-if="errorq?.errors?.husband_certification && !form.husband_certification"
                      >
                        التحصيل العلمي حقل مطلوب
                      </span>
                    </div>
                    <div className="mb-4">
                      <InputLabel for="husband_job" value="المهنة" />

                      <TextInput
                        id="husband_job"
                        type="text"
                        class="mt-1 block w-full"
                        v-model="form.husband_job"
                      />

                      <span
                        className="text-red-600"
                        v-if="errorq?.errors?.husband_job && !form.husband_job"
                      >
                        المهنة حقل مطلوب
                      </span>
                    </div>

                    <div className="mb-4">
                      <InputLabel for="husband_address" value="العنوان" />

                      <TextInput
                        id="husband_address"
                        type="text"
                        class="mt-1 block w-full"
                        v-model="form.husband_address"
                        
                      />

                      <span
                        className="text-red-600"
                        v-if="errorq?.errors?.husband_address && !form.husband_address"
                      >
                        العنوان حقل مطلوب
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="basis-1/2">
          <div class="py-6">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
                  <h2 class="text-center text-xl py-2">معلومات الزوجة</h2>

                  <div className="flex flex-col">
                    <div className="mb-4">
                      <InputLabel for="name" value="الصورة الشخصية" />
                      <img :src="form.wife_image" />
                      <button
                        @click.prevent="showWife = true"
                        class="
                          px-12
                          mt-3
                          mx-2
                          py-2
                          font-bold
                          text-white
                          bg-rose-500
                          rounded
                        "
                      >
                        الكاميرة
                      </button>
                      <input
                        @change="handleImageWife"
                        type="file"
                        accept="image/*"
                        class="
                          px-2
                          mt-3
                          py-1
                          font-bold
                          text-white
                          bg-rose-500
                          rounded
                        "
                      />
                      <span
                        className="text-red-600"
                        v-if="errorq?.errors?.wife_image && !form.wife_image"
                      >
                        الصورة الشخصية حقل مطلوب
                      </span>
                    </div>
                    <div className="mb-4">
                      <InputLabel for="wife_name" value="الأسم" />

                      <TextInput
                        id="wife_name"
                        type="text"
                        class="mt-1 block w-full"
                        v-model="form.wife_name"
                      />

                      <span
                        className="text-red-600"
                        v-if="errorq?.errors?.wife_name && !form.wife_name"
                      >
                        الأسم حقل مطلوب
                      </span>
                    </div>
                    <div className="mb-4">
                      <InputLabel for="wife_birthdate" value="تاريخ الميلاد" />

                      <div class="flex flex-row">
                        <div class="basis-1/3 px-2">
                          <select
                            v-model="dayW"
                            @change="
                              form.wife_birthdate =
                                yearW + '/' + monthW + '/' + dayW
                            "
                            class="
                              m-1
                              pr-8
                              bg-gray-50
                              border border-gray-300
                              text-gray-900 text-sm
                              rounded-lg
                              focus:ring-blue-500 focus:border-blue-500
                              block
                              w-full
                              p-2.5
                              dark:bg-gray-700
                              dark:border-gray-600
                              dark:placeholder-gray-400
                              dark:text-white
                              dark:focus:ring-blue-500
                              dark:focus:border-blue-500
                            "
                          >
                            <option :value="dayW" selected disabled>
                              {{ dayW }}
                            </option>
                            <option
                              :value="d.key"
                              v-for="d in dayList"
                              :key="d.key"
                            >
                              {{ d.name }}
                            </option>
                            <option :value="n + 9" v-for="n in 22" :key="n">
                              {{ n + 9 }}
                            </option>
                          </select>
                        </div>
                        <div class="basis-1/3 px-2">
                          <select
                            v-model="monthW"
                            @change="
                              form.wife_birthdate =
                                yearW + '/' + monthW + '/' + dayW
                            "
                            class="
                              m-1
                              pr-8
                              bg-gray-50
                              border border-gray-300
                              text-gray-900 text-sm
                              rounded-lg
                              focus:ring-blue-500 focus:border-blue-500
                              block
                              w-full
                              p-2.5
                              dark:bg-gray-700
                              dark:border-gray-600
                              dark:placeholder-gray-400
                              dark:text-white
                              dark:focus:ring-blue-500
                              dark:focus:border-blue-500
                            "
                          >
                            <option :value="monthW" selected disabled>
                              {{ monthW }}
                            </option>
                            <option
                              :value="d.key"
                              v-for="d in dayList"
                              :key="d.key"
                            >
                              {{ d.name }}
                            </option>
                            <option :value="n + 9" v-for="n in 3" :key="n + 9">
                              {{ n + 9 }}
                            </option>
                          </select>
                        </div>
                        <div class="basis-1/3 px-2">
                          <select
                            v-model="yearW"
                            @change="
                              form.wife_birthdate =
                                yearW + '/' + monthW + '/' + dayW
                            "
                            class="
                              m-1
                              pr-8
                              bg-gray-50
                              border border-gray-300
                              text-gray-900 text-sm
                              rounded-lg
                              focus:ring-blue-500 focus:border-blue-500
                              block
                              w-full
                              p-2.5
                              dark:bg-gray-700
                              dark:border-gray-600
                              dark:placeholder-gray-400
                              dark:text-white
                              dark:focus:ring-blue-500
                              dark:focus:border-blue-500
                            "
                          >
                            <option :value="yearW" selected disabled>
                              {{ yearW }}
                            </option>
                            <option :value="n + 1939" v-for="n in 80" :key="n">
                              {{ n + 1939 }}
                            </option>
                          </select>
                        </div>
                      </div>

                      <span
                        className="text-red-600"
                        v-if="errorq?.errors?.wife_birthdate || show_birthday_wife"
                      >
                        حقل تاريخ الميلاد مطلوب
                      </span>
                    </div>
                    <div className="mb-4">
                      <InputLabel
                        for="wife_certification"
                        value="التحصيل العلمي"
                      />
                      <select
                        v-model="form.wife_certification"
                        id="wife_certification"
                        class="
                          pr-8
                          bg-gray-50
                          border border-gray-300
                          text-gray-900 text-sm
                          rounded-lg
                          focus:ring-blue-500 focus:border-blue-500
                          block
                          w-full
                          p-2.5
                          dark:bg-gray-700
                          dark:border-gray-600
                          dark:placeholder-gray-400
                          dark:text-white
                          dark:focus:ring-blue-500
                          dark:focus:border-blue-500
                        "
                      >
                        <option selected disabled>التحصيل العلمي</option>
                        <option
                          :key="type.key"
                          v-for="type in certification"
                          :value="type.key"
                        >
                          {{ type.name }}
                        </option>
                      </select>
                      <span
                        className="text-red-600"
                        v-if="errorq?.errors?.wife_certification && !form.wife_certification"
                      >
                        التحصيل العلمي حقل مطلوب
                      </span>
                    </div>
                    <div className="mb-4">
                      <InputLabel for="wife_job" value="المهنة" />

                      <TextInput
                        id="wife_job"
                        type="text"
                        class="mt-1 block w-full"
                        v-model="form.wife_job"
                      />

                      <span
                        className="text-red-600"
                        v-if="errorq?.errors?.wife_job && !form.wife_job"
                      >
                        المهنة حقل مطلوب
                      </span>
                    </div>

                    <div className="mb-4">
                      <InputLabel for="wife_address" value="العنوان" />

                      <TextInput
                        id="wife_address"
                        type="text"
                        class="mt-1 block w-full"
                        v-model="form.wife_address"
                        
                      />

                      <span
                        className="text-red-600"
                        v-if="errorq?.errors?.wife_address && !form.wife_address"
                      >
                        العنوان حقل مطلوب
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-row">
        <div class="grow">
          <div class="pb-3">
            <div class="mx-auto mx-7">
              <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
                  <div class="flex flex-row">
                    <div class="basis-1/3">
                      <div className="mb-4 mx-5">
                        <InputLabel for="invoice_number" value="رقم الوصل" />
                        <TextInput
                          id="invoice_number"
                          type="number"
                          class="mt-1 block w-full"
                          v-model="form.invoice_number"
                          
                        />

                        <span
                          className="text-red-600"
                          v-if="errorq?.errors?.invoice_number && !form.invoice_number"
                        >
                          رقم الوصل حقل مطلوب
                        </span>
                      </div>
                    </div>
                    <div class="basis-1/3">
                      <div className="mb-4 mx-5">
                        <InputLabel for="phone_number" value="رقم الهاتف" />
                        <TextInput
                          id="phone_number"
                          type="text"
                          class="mt-1 block w-full"
                          v-model="form.phone_number"
                          
                        />

                        <span
                          className="text-red-600"
                          v-if="errorq?.errors?.phone_number && !form.phone_number"
                        >
                          رقم الهاتف حقل مطلوب
                        </span>
                      </div>
                    </div>
                    <div class="basis-1/3">
                      <div className="mb-4 mx-5">
                        <InputLabel for="relatives" value="صلة القرابة" />
                        <select
                          v-model="form.relatives"
                          id="relatives"
                          class="
                            pr-8
                            bg-gray-50
                            border border-gray-300
                            text-gray-900 text-sm
                            rounded-lg
                            focus:ring-blue-500 focus:border-blue-500
                            block
                            w-full
                            p-2.5
                            dark:bg-gray-700
                            dark:border-gray-600
                            dark:placeholder-gray-400
                            dark:text-white
                            dark:focus:ring-blue-500
                            dark:focus:border-blue-500
                          "
                        >
                          <option selected disabled>تحديد صلة القرابة</option>
                          <option
                            :key="type.key"
                            v-for="type in relativesType"
                            :value="type.key"
                          >
                            {{ type.name }}
                          </option>
                        </select>
                        <span
                          className="text-red-600"
                          v-if="errorq?.errors?.relatives && !form.relatives"
                        >
                          صلة القرابة حقل مطلوب
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center my-6 ">
        <Link
          className="px-6 mx-2 py-2 mb-12 text-white bg-gray-500 rounded-md focus:outline-none rounded"
          :href="route('formRegistration')"
        >
          العودة
        </Link>

        <button @click.prevent="submit" :disabled="isLoading" class="px-6 mb-12 mx-2 py-2 font-bold text-white bg-rose-500 rounded">
          <span v-if="!isLoading">حفظ</span>
          <span v-else>جاري الحفظ...</span>
        </button>

      </div>
    </form>
  </AuthenticatedLayout>
</template>