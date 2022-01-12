<head>
	<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-206364681-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-206364681-1');
</script>

</head>
<template>
	<div class="w-100" id="top">
		<!-- Header -->
		<Header></Header>
		<div style="height: 85px"></div>
		<!-- LOADER -->
		<template v-if="is_load">
			<img src="../../assets/icon/loading.gif" class="mx-auto d-block" width="150">
		</template>
		<!-- BODY -->
		<template v-else>
			<div class="container px-4">
				<div class="row mb-4 border-grey no-gutters text-center">
					<div class="col-6 py-2 rounded-6 bg-white-light delay cursor-pointer" 
						v-for="data in product_category"
						@click="toggleProductCategory(data.url)"
						:class="{'bg-green':data.active}">
						<p class="mb-0 pl-1 font-regular text-14 color-grey ls-2" 
							:class="{'font-medium color-white':data.active}">
							{{data.name}}
						</p>
					</div>
				</div>
				<template>
					<div class="row no-gutters pb-4">
						<div class="col-12">
							<p class="mb-0 text-16 d-inline-block font-semibold">Harga Referensi : </p>
							<div class="border-1 rounded-6 w-100 mt-2">
								<div class="d-inline-block">
									<label class="bg-white position-relative pl-2 py-2 font-medium color-black" style="top: -2px">Rp</label>
								</div>
								<div class="d-inline-block w-55">
									<vue-autonumeric 
										ref="input-price"
										inputmode="numeric"
										:options="['integer',
											{digitGroupSeparator: '.',
						         	decimalCharacter: ',',
						         	maximumValue: 10000000}]"
										placeholder="Masukan harga referensi disini" 
										v-model="referensi_price" 
										@input="toggleReferensiPrice(referensi_price)"
										class="w-100 border-none px-2 uang">
									</vue-autonumeric>
								</div>
								<div class="d-inline-block position-relative" style="right: 12px;top: 6px;float: right;">
									<label class="bg-white position-relative pl-2 py-2 font-medium color-grey" style="top: -2px;">/ gr. 24kt</label>
								</div>
							</div>
							<p class="mb-0 mt-1 font-regular color-grey text-12" v-if="referensi_price == 0 || referensi_price == null"><img src="../../assets/icon/info.svg" width="20" class="pr-2">Isi terlebih dahulu harga referensi diatas.</p>
						</div>
					</div>
					<div class="pt-4 mt-2 pb-3 text-center" v-if="referensi_price == 0 || referensi_price == null">
						<img src="../../assets/icon/calculator.svg" width="50" class="mb-2 pb-1 box-shadow-header">
						<p class="mb-0 font-regular text-14 color-grey ls-2" style="line-height: 24px">Cek secara gratis harga emasmu melalui kalkulator GOEMAS dan gunakan untuk memudahkan pekerjaan anda.</p>
					</div>
				</template>
				<template v-if="referensi_price != 0 && referensi_price != null">
					<!-- SCRAP CALCULATOR -->
					<table class="table table-striped mb-0">
						<thead>
						  <tr class="bg-gold border-gold">
						    <th scope="col" class="text-12 font-semibold align-baseline no">No</th>
						    <th scope="col" class="text-12 font-semibold align-baseline">Berat (/gr)</th>
						    <th scope="col" class="text-12 font-semibold align-baseline">Karat</th>
						    <th scope="col" class="text-12 font-semibold align-baseline">Murni</th>
						    <th scope="col" class="text-12 font-semibold align-baseline">Jumlah</th>
						  </tr>
						</thead>
						<tbody class="border-left border-right">
							<template v-if="is_edit">
							  <tr 
								  class="cursor-pointer" 
								  v-for="data, index in getScrapCalculator()">
							    <td class="no">{{index+1}}</td>
							    <template v-if="is_setting == data.id">
							    	<td>
								    	<input type="number" class="border-1 rounded-3 w-100 px-1 h-36px" v-model="form_edit.gram" @change="toggleEditCalculator(data.id)" />
								    </td>
								    <td>
								    	<select 
												v-model="form_edit.price" 
												:value="data.carat"
												:change="toggleEditCalculator(data.id)"
												@focus="toggleForm('focus', 'karat')" 
												@blur="toggleForm('blur', 'karat')"
												@change="toggleSelectCarat(form_edit.price);" 
												class="w-100 rounded-3 border-1 w-100 bg-white px-1 position-relative h-36px">
												<option class="cursor-pointer" v-for="data in get_quality_unit" v-if="data.type == 'gold'" :value="data">{{data.name}}</option>
											</select>
										</td>
									</template>
									<template v-else>
										<td>{{data.gram}}</td>
								  	<td>{{data.carat_title}}</td>
									</template>
							    <td>{{data.percent}}</td>
							    <td class="total">{{formatPrice(data.total)}}</td>
							  </tr>
							</template>
						  <!-- LIST CALCULATOR-->
						  <template v-else>
							  <tr 
								  class="cursor-pointer"
								  v-for="data, index in getScrapCalculator()"
								  @click="togglePopUpSetting('popup', data.id)">
							    <td class="no">{{index+1}}</td>
								  <td>{{data.gram}}</td>
								  <td>{{data.carat_title}}</td>
							    <td>{{data.percent}}</td>
							    <td class="total">Rp {{formatPrice(data.total)}}</td>
							  </tr>
							</template>
						  <!-- CALCULATOR VALUE -->
						  <tr v-if="scrap_calculator_add || getScrapCalculator().length == 0">
						    <td class="no align-middle">{{getScrapCalculator().length+1 }}</td>
						    <td>
						    	<input type="number" class="border-1 rounded-3 w-100 px-1 h-36px" v-model="form.gram" @change="toggleScrapCalculator()" />
						    </td>
						    <td>
						    	<select 
										v-model="form.price" 
										:value="form.carat"
										:change="toggleScrapCalculator()"
										@focus="toggleForm('focus', 'karat')" 
										@blur="toggleForm('blur', 'karat')"
										@change="toggleSelectCarat(form.price);" 
										class="w-100 rounded-3 border-1 w-100 bg-white px-1 position-relative h-36px">
										<option class="cursor-pointer" v-for="data in get_quality_unit" v-if="data.type == 'gold'" :value="data">{{data.name}}</option>
									</select>
								</td>
						    <td class="align-middle">{{isPercent}}</td>
						    <td class="total align-middle">{{formatPrice(isPrice)}}</td>
						  </tr>
						</tbody>
					</table>
					<div class="row no-gutters mt-3 mb-4" v-if="getScrapCalculator().length >= 1">
						<div class="col-6">
							<button type="button" class="button-primary h-38px w-115px" @click="toggleAddScrapCalculator()">
								<p class="mb-0 text-12 font-semibold text-white cursor-pointer">
									<img src="../../assets/icon/plus-white.svg" class="position-relative" width="10" style="top: -2px" />
									<span class="ml-2">Tambah</span>
								</p>
							</button>
						</div>
						<div class="col-6 text-right">
							<button type="button" class="button-danger h-38px w-115px" @click="toggleReset()">
								<p class="mb-0 text-12 font-semibold text-white cursor-pointer">
									<img src="../../assets/icon/reset-white.svg" class="position-relative" width="10" style="top: -1px" />
									<span class="ml-2">Reset</span>
								</p>
							</button>
						</div>
					</div>
					<!-- TOTAL -->
					<template v-if="getScrapCalculator() != ''">
						<table class="table border mb-0">
							<thead>
								<tr>
							    <th scope="col-12" class="text-14 font-semibold align-baseline border-none">Total :</th>
								</tr>
							</thead>
						</table>
						<table class="table">
							<thead>
							  <tr class="bg-gold border-gold">
							    <th scope="col" class="text-12 font-semibold align-baseline no">No</th>
							    <th scope="col" class="text-12 font-semibold align-baseline">Berat (/gr)</th>
							    <th scope="col" class="text-12 font-semibold align-baseline">Karat</th>
							    <th scope="col" class="text-12 font-semibold align-baseline">Murni</th>
							    <th scope="col" class="text-12 font-semibold align-baseline">Jumlah</th>
							  </tr>
							</thead>
							<tbody class="border-left border-right">
								<tr>
							    <td class="no bg-total color-green">{{getScrapCalculator().length}}</td>
							    <td class="no bg-total color-green">{{getScrapCalculatorGramTotal()}}</td>
							    <td class="no bg-total color-green">{{Math.round(total_carat)}}</td>
							    <td class="no bg-total color-green">{{Math.round(total_murni)}}</td>
							    <td class="total bg-total color-green">Rp {{formatPrice(getScrapCalculatorPriceTotal())}}</td>
							  </tr>
							</tbody>
						</table>
					</template>
				</template>
				<!-- BANNER -->
				<template> 
					<div style="height: 80px;"></div>
	        <div class="p-4 text-center rounded-6 position-relative " style="background: linear-gradient(153deg, #357f5a 48%, #81b199 100%)">
	          <div class="position-relative w-100" style="z-index: 9">
	            <p class="mb-0 font-semibold text-16 ls-2 text-white" style="text-shadow: 1px 1px 1px #887c7c;margin-top: -3px">Daftar Menjadi Mitra</p>
	            <p class="mb-2 font-regular text-white text-12 ls-2">Jadilah mitra Goemas dan dapatkan banyak keuntungannya.</p>
	            <a 
								:href="'http://bit.ly/pendaftarangoemas'" target="_blank">
	            	<button type="button" class="button-primary bg-white color-green mt-1 px-4 py-2 text-12" style="height: 44px">Daftar Sekarang</button>
	            </a>
	          </div>
	        </div>
					<TotalMitra></TotalMitra>
	      </template>
			</div>
		</template>
		<div style="height: 100px;"></div>
		<!-- Footer -->
		<NavButton></NavButton>
		<!-- POP UP EDIT & DELETE -->
		<template v-if="is_pop_up">
      <transition name="list">
        <div class="">
          <div class="position-relative">
            <div class="row no-gutters justify-content-center">
              <div class="fixed-top d-block nav-bottom" style="z-index: 1036;top: 30%;">
                <div class="custom-container-fluid px-0">
                  <div class="row justify-content-center no-gutters">
                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-8 col-12 position-relative">
                      <div class="mx-4 bg-white rounded-3 position-relative">
                        <div class="py-3 px-4 rounded-3 hover" @click="togglePopUpSetting('edit', is_setting)">
                          <p class="mb-0 font-medium text-14 ls-2">Edit</p>
                        </div>
                        <div class="py-3 px-4 rounded-3 hover" @click="togglePopUpSetting('delete', is_setting)">
                          <p class="mb-0 font-medium text-14 ls-2 color-danger">Delete</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </template>
		<!-- BG Pop Up -->
    <template v-if="is_pop_up">
      <transition name="fade">
        <div class="position-relative">
          <div class="row no-gutters justify-content-center">
            <div class="fixed-bottom d-block nav-bottom p-0">
              <div class="custom-container-fluid px-0">
                <div class="row justify-content-center no-gutters">
                  <div class="col-xl-4 col-lg-4 col-md-6 col-sm-8 col-12 position-relative">
                    <div class="w-100 bg-pop-up" @click="togglePopUp()">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </template>
	</div>
</template>
<script>
  import Header from '@/components/Header'
  import NavButton from '@/components/NavButton'
  import TotalMitra from '@/components/TotalMitra'
  import config from '@/config/index.js'
  import axios from 'axios'
  import VueAutonumeric from 'vue-autonumeric'
  import {mapGetters,mapMutations} from 'vuex';
  import VueAnalytics from 'vue-analytics'

	export default{
		components: {
			Header,
			VueAutonumeric,
			VueAnalytics,
			NavButton,
			TotalMitra
		},
		VueAnalytics: {
		  id: 'UA-162002758-1',
		  checkDuplicatedScript: true
		},
		data() {
			return {
				referensi_price: this.getReferensiPrice(),
				scrap_calculator: this.getScrapCalculator(),
				maxValue: 10000000,
				total_transaksi: 120,
				total_mitra: 34,
				form: {
					id: null,
					gram: null,
					carat: null,
					carat_title: null,
					percent: null,
					total: null,
					murni: null,
				},
				form_edit: {
					id: null,
					gram: null,
					carat: null,
					carat_title: null,
					percent: null,
					total: null,
					murni: null,
				},
				scrap_calculator_add: false,
				is_pop_up: false,
				is_setting: '',
				is_edit: false,
				scrollPosition: null,
				phone_number: '6281237741001',
				is_learn_more: false,
				is_load: false,
        real_price: {
        	emas: '',
					harga_silver_500: '',
					harga_silver_925: ''
        },
				is_open: "gold",
				check_price: false,
				category: [
					{
						name: "Emas",
						type: "gold"
					},
					{
						name: "Silver",
						type: "silver"
					},
				],
				price: 0,
				check_murni: '',
				focus: {
					gram: false,
					karat: false,
				},
				product_category: [
					{
						name: "Emas",
						type: "emas",
						url: "",
						active: true
					},
					{
						name: "Silver",
						type: "silver",
						url: "tools-silver",
						active: false
					},
				],
				get_quality_unit: '',
			  murni: ''
			}
		},
		computed: {
			validate_scrap_calculator(){
				let display = false
				if (this.form.gram != 0 && this.form.carat != 0 && this.form.carat != null &&  this.form.gram != null) {
					display = true
				}
				return display
			},
			validate_scrap_calculator_edit(){
				let display = false
				if (this.form_edit.gram != 0 && this.form_edit.carat != 0 && this.form_edit.carat != null &&  this.form_edit.gram != null) {
					display = true
				}
				return display
			},
			total_murni(){
				return this.total_carat*this.megic_price
			},
			total_carat(){
				return this.getScrapCalculatorCaratTotal()/this.getScrapCalculatorGramTotal()
			},
			gold_carat(){
				return config.gold
			},
			megic_price(){
				return config.megic_price
			},
			murni_price(){
				return config.murni_price
			},
			silver_quality(){
				return config.silver
			},
			isPercent(){
				let display = null
				if (this.form.carat != null) {
					let data =  this.form.murni
					display = data
				}else{
					display = null
				}
				return display
			},
			isPrice(){
				let display = 0
				if (this.is_open == 'gold' && this.validate_scrap_calculator) {
					display = Math.round((this.form.murni/1000) * this.referensi_price * this.form.gram)
				}else{
					display = 0
				}
				return display
			},
			isPriceEdit(){
				let display = 0
				if (this.is_open == 'gold' && this.validate_scrap_calculator_edit) {
					display = Math.round((this.form_edit.murni/1000) * this.referensi_price * this.form_edit.gram)
				}else{
					display = 0
				}
				return display
			}
		},
		mounted(){
			document.getElementById('top').scrollIntoView({
        behavior: 'smooth'
      });
    	window.addEventListener('scroll', this.updateScroll);
			this.getApiUnit()
		},
		methods:{
			...mapGetters([
				'getReferensiPrice',
				'getScrapCalculator',
				'getScrapCalculatorGramTotal',
				'getScrapCalculatorCaratTotal',
				'getScrapCalculatorPercentTotal',
				'getScrapCalculatorPriceTotal'
				]),
			...mapMutations([
				'setReferensiPrice',
				'setScrapCalculator',
				'setResetCalculator',
				'setDeleteCalculator'
				]),
			getApiUnit(){
				this.is_load = true
				axios
		      .get(config.API+'/form-data/unit-list')
		      .then(response => {
		      	this.get_quality_unit = response.data
						this.is_load = false
		      })
			},
			toggleReferensiPrice(data){
				this.setReferensiPrice(data)
			},
			toggleScrapCalculator(){
				let scrap_data = {
					id: this.uuid(),
					gram: Number(this.form.gram),
					carat: this.form.carat,
					carat_title: this.form.carat_title,
					percent: Number(this.isPercent),
					total: this.isPrice,
				}
				if (this.validate_scrap_calculator) {
					this.scrap_calculator.push(scrap_data)
					this.setScrapCalculator(this.scrap_calculator)
					this.scrap_calculator_add = false
					scrap_data = {}
					this.form = {
						id: null,
						gram: null,
						carat: null,
						carat_title: null,
						percent: this.isPercent,
						total: this.isPrice,
					}
					this.is_edit = false
				}
			},
			toggleAddScrapCalculator(){
				this.scrap_calculator_add = true
				this.is_edit = false
				this.toggleResetForm()
			},
			toggleReset(){
				this.scrap_calculator = []
				this.setResetCalculator()
				this.toggleResetForm()
				this.resetEditForm()
			},
			getApi(){
				this.is_load = true
				axios
		      .get(config.API)
		      .then(response => {
		      	this.real_price = response.data
						this.is_load = false
		      })
			},
			togglePopUp(){
				this.is_pop_up = !this.is_pop_up
			},
			togglePopUpSetting(type, data){
				this.is_setting = data
				this.scrap_calculator_add = false
				if (type == 'popup') {
					this.is_pop_up = !this.is_pop_up
				} else if (type == 'edit') {
					this.is_edit = true
					this.is_pop_up = false
					this.toggleGetEditForm(data)
					this.toggleEditCalculator(data)

				} else if (type == 'delete') {
					this.setDeleteCalculator(data)
					this.is_pop_up = false
				}
			},
			toggleGetEditForm(data){
				let record = this.getScrapCalculator()
				for (let i = 0; i < record.length; i++){
					if (record[i].id == data) {
						this.form_edit.gram = record[i].gram 
						this.form_edit.carat = null 
						this.form_edit.percent = null 
						break;
					}
				}
			},
			toggleEditCalculator(data){
				let record = this.scrap_calculator
				for (let i = 0; i < record.length; i++){
					if (record[i].id == data) {
						record[i].id = data
						record[i].gram = Number(this.form_edit.gram)
						record[i].carat = this.form_edit.carat
						record[i].carat_title = this.form_edit.carat_title
						record[i].percent = Number(this.isPercent)
						record[i].total = this.isPriceEdit
						if (this.validate_scrap_calculator_edit) {
							this.setScrapCalculator(this.scrap_calculator)
							this.resetEditForm()
						}
						break;
					}
				}
			},
			uuid(){
				return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
			    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
			    return v.toString(16);
			  });
			},
			resetEditForm(){
				this.is_edit = false
				this.form_edit = {
					gram: null,
					carat: null,
					carat_title: null,
					percent: this.isPercent,
					total: this.isPrice,
				}
				this.scrap_calculator_add = false
			},
			toggleResetForm(){
				this.form = {
					id: null,
					gram: null,
					carat: null,
					carat_title: null,
					percent: null,
					total: null,
				}
			},
			toggleSelectCarat(data){
				this.form.quality = data.quality
				this.form.carat = data.quality
				this.form.murni = data.murni
				this.form.carat_title = data.name
				this.form.unit_id = data.id

				this.form_edit.carat = data.quality
				this.form_edit.carat_title = data.name
				this.form_edit.murni = data.murni
				this.check_murni = data.murni
				this.form.title = data.name
			},
			focusRefs(){
				this.$refs['input-price'].focus()
			},
			toggleCheckPrice(){
				this.check_price = !this.check_price
			},
			toggleForm(type, id){
				if (type == 'focus') {
					this.focus[id] = true
				}else{
          this.focus[id] = false 
				}
			},
			formatPrice(value) {
        let val = (value/1)	
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    	},
    	updateScroll() {
	      this.scrollPosition = window.scrollY
	    },
    	toggleMenu(data){
    		window.addEventListener('scroll', this.updateScroll);
		    document.getElementById(data).scrollIntoView({
		      behavior: 'smooth'
		    });
    	},
    	toggleLearnMore(){
    		this.is_learn_more = !this.is_learn_more
    	},
    	toggleProductCategory(data){
				window.location.href = data
			},
			toFixed_1(value){
				return value.toFixed(1)
			},
		}
	}
</script>
<style scoped>
	td {
		font-size: 14px;
  	font-family: Poppins-Regular;
  	padding-top: 16px; 
  	padding-bottom: 16px; 
  	border-right: 1px solid #dee2e6;
	}

	th {
		border-bottom: 1px solid #dee2e6 !important
	}

	th.no {
		width: 32px;
	}

	td.no {
		width: 32px;
  	font-family: Poppins-SemiBold;
  	background-color: #f2f2f2,
	}

	td.total {
  	font-family: Poppins-SemiBold;
  	width: 110px;
	}

</style>