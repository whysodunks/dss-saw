<template>
	<div class="w-100 pb-4">
    <!-- Header -->
    <Header></Header>
    <div class="pt-75"></div>
    <!-- <div class="w-100">
      <div class="row mb-4 border-grey no-gutters text-center">
        <div class="col-6 py-11px bg-white-light delay cursor-pointer" 
          v-for="data in product_category"
          @click="toggleProductCategory(data.url)"
          :class="{'bg-white':data.active}">
          <div class="circle-icon-small d-inline-block">
            <img :src="data.icon" width="24" style="position: relative;top: 4px;">
          </div>
          <p class="mb-0 pl-2 position-relative font-regular d-inline-block text-14 color-grey ls-2" 
            :class="{'font-semibold color-green':data.active}"
            style="top: 5px">
            {{data.name}}
          </p>
        </div>
      </div>
    </div> -->
		<div class="container px-4 position-relative">
      <!-- Title -->
      <!-- <div class="mb-3 pb-1">
        <div class="position-relative" id="check-price" style="top: 10px"></div>
        <p
          data-aos="fade-up" 
          data-aos-duration="1500"
          class="mb-1 font-bold text-20 color-black ls-2">Berinvestasi Di Sini</p>
        <p
          data-aos="fade-up" 
          data-aos-duration="1500"
          class="mb-0 font-regular text-14 color-grey ls-2">Silahkan gunakan kalkulator berikut untuk memprediksi harga emas/silver anda.</p>
      </div> -->
      <div class="text-center">
      	<h2 class="mb-4 pb-2 pt-3 font-medium color-black">Dalam <br>Pengembangan</h2>
  	    <img src="../../assets/icon/under_construction.svg" width="250">
      	<p class="my-4 font-regular text-14 color-black">Maaf, Halaman Investasi sedang dalam pengembangan </p>
      	<router-link to="/">
      		<button type="button" class="button-primary px-4">Kembali ke Beranda</button>
      	</router-link>
      </div>
    </div>
	</div>
</template>
<script>
  import Header from '@/components/Header'
  import profits from '../../assets/icon/profits.svg'
  import sell from '../../assets/icon/sell.svg'
  export default {
    components:{
      Header
    },
    data(){
      return {
        product_category: [
          {
            name: "Buyback",
            type: "buyback",
            url: "/",
            icon: sell,
            active: false
          },
          {
            name: "Investasi",
            type: "investasi",
            url: "",
            icon: profits,
            active: true
          },
        ],
      }
    },
    methods:{
      toggleProductCategory(data){
        window.location.href = data
      }
    }
  }
</script>