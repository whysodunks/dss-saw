<template>
  <div class="w-100">
    <div class="bg-dark pb-3 pt-1 mt-3 rounded-6">
      <div class="row mt-3 no-gutters text-center">
        <div class="col-12">
          <p class="px-3 mb-2 pb-1 text-14 font-semibold color-white">Total transaksi 
            <template>
              <ICountUp
                class="mb-1 text-16 font-semibold color-white"
                v-if="scroll"
                :delay="delay"
                :endVal="total.gram"
                :options="options1"
              ></ICountUp>
              <span v-else>0</span>
            </template>
               gram</p>
        </div>
        <div class="col-6">
          <span class="text-16 font-semibold color-white d-inline-block">Rp </span>
          <div class="d-inline-block" v-if="scroll">
            <ICountUp
              class="mb-1 text-16 font-semibold ls-2 color-white"
              :delay="delay"
              :endVal="total.transaction"
              :options="options2"
            /><span class="text-14 font-medium color-white">jt</span><span class="text-12 font-medium color-white"> /hari</span>
          </div>
          <p class="mb-1 text-16 font-semibold color-white d-inline-block" v-else>0</p>
          <p class="mb-0 pt-1 font-regular text-10 color-white">Rata-rata <span class="text-12">11jt</span> /transaksi</p>
        </div>
        <div class="col-6">
          <div class="d-inline-block" v-if="scroll">
            <ICountUp
              class="mb-1 text-16 font-semibold color-white"
              :delay="delay"
              :endVal="total.mitra"
              :options="options3"
            /> <span class="text-12 font-medium color-white">mitra</span>
          </div>
          <p class="mb-1 text-16 font-semibold color-white" v-else>0</p>
          <p class="mb-0 pt-1 font-regular text-10 color-white"><span class="text-12">1</span> transaksi /mitra</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import ICountUp from 'vue-countup-v2';
  export default{
    components: {
      ICountUp
    },
    props: ['data'],
    data(){
      return{
        scrollPosition: null,
        delay: 1000,
        total: {
          gram: 261.9,
          transaction: 220,
          mitra: 20
        },
        options1: {
          useEasing: true,
          useGrouping: true,
          decimalPlaces: 1,
          separator: ',',
          decimal: '.',
          prefix: '',
          suffix: ''
        },
        options2: {
          useEasing: true,
          useGrouping: true,
          separator: ',',
          decimal: '.',
          prefix: '',
          suffix: ''
        },
        options3: {
          useEasing: true,
          useGrouping: true,
          separator: ',',
          decimal: '.',
          prefix: '',
          suffix: ''
        },
      }
    },
    computed:{
      scroll(){
        let display = false
        if (this.scrollPosition > 100) {
          display = true
        }else{
          display = false
        }
        return display
      },
    },
    mounted() { 
      window.addEventListener('scroll', this.updateScroll);
        console.log('sda', this.scroll)
    },
    methods:{
      updateScroll() {
        this.scrollPosition = window.scrollY
      },
    }
  }
</script>
<style scoped>
  @property --num {
     syntax: "<integer>";
     initial-value: 0;
     inherits: false;
  }
  #counter {
     animation: counter 4s forwards ease-out 0.5s;
     counter-reset: num var(--num);
  }
  #counter::after {
     content: counter(num);
  }
   @keyframes counter {
     from {
       --num: 0;
    }
     to {
       --num: 20;
    }
  }

  @property --num2 {
     syntax: "<integer>";
     initial-value: 0;
     inherits: false;
  }

  #transaction {
     animation: transaction 2s forwards ease-out 0.5s;
     counter-reset: num2 var(--num2);
  }
  #transaction::after {
     content: counter(num2);
  }
  @keyframes transaction {
    from {
      --num2: 0;
    }
    to {
      --num2: 220;
    }
  }

  @property --num3 {
     syntax: "<integer>";
     initial-value: 0;
     inherits: false;
  }

  #gram {
     animation: gram 2s forwards ease-out 0.5s;
     counter-reset: num3 var(--num3);
  }
  #gram::after {
     content: counter(num3);
  }
  @keyframes gram {
    from {
      --num3: 0;
    }
    to {
      --num3: 261;
    }
  }


 @property --num4 {
     syntax: "<integer>";
     initial-value: 0;
     inherits: false;
  }

  #decimal {
     animation: decimal 2s forwards ease-out 0.5s;
     counter-reset: num3 var(--num4);
  }
  #decimal::after {
     content: counter(num3);
  }
  @keyframes decimal {
    from {
      --num4: 0;
    }
    to {
      --num4: 9;
    }
  }
</style>