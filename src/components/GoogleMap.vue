<template>
	<div class="w-100">
		<div>
			<div class="mb-3">
				<label class="color-black">Lokasi
					<span>{{form_title}}:</span> 
				*</label>
				<gmap-autocomplete 
					v-if="current_location"
					ref="input-map"
					:class="{'border-danger':!form_validate.address}"
					@focus="hideWarning()"
					class="w-100 input map"
					:value="loc_detail.address"
					@place_changed="setPlace"
					id="address-detail"
					container="my-container"
					:options="{fields: ['geometry']}"
					style="z-index: 999">
				</gmap-autocomplete>
				<gmap-autocomplete 
					v-else
					ref="input-map"
					:class="{'border-danger':!form_validate.address}"
					@focus="hideWarning()"
					class="w-100 input"
					placeholder="Contoh: Jln. Emas No. 1 Denpasar"
					@place_changed="setPlace"
					id="address-detail"
					container="my-container"
					:options="{fields: ['geometry']}"
					style="z-index: 999">
				</gmap-autocomplete>
				<p class="mb-2 mt-1 font-regular text-12 text-danger" v-if="!form_validate.address">Lokasi <span>{{form_title}}</span> tidak boleh kosong. Atau gunakan lokasi saat ini berikut</p>
				<p class="mb-2 mt-1 font-regular text-12 text-danger" v-if="!form_validate.geolocation">Untuk menggunakan lokasi saat ini, mohon aktifkan lokasi perangkat atau beri ijin pada browser. Atau gunakan pencarian manual diatas</p>
				<p class="mb-0 mt-2 font-medium text-danger text-14 underline cursor-pointer" @click="geolocate();toggleCurrentLocation()"><img src="../assets/icon/gps.svg" width="16"><span class="pl-1">Gunakan lokasi saat ini</span></p>
			</div>
			<div class="mb-3">
				<label class="color-black">Peta :</label>
				<GmapMap
				:center="center"
				:zoom="12"
				class="w-100 rounded-6"
				style="height: 200px;"
				>
					<GmapMarker
						:key="index"
						v-for="(m, index) in markers"
						:position="m.position"
						:draggable="true"
						:clickable="true"
						@drag="updateCoordinates"
						@click="center=m.position"
					></GmapMarker>
				</GmapMap>
			</div>
			<div class="mb-3">
				<label class="color-black">Nomor Telepone: *</label>
	  		<input type="text" placeholder="Mohon masukkan nomer whatsapp" 
					id="keterangan" 
					:class="{'border-danger':!form_validate.keterangan}"
					@focus="form_validate.keterangan = true"
					class="w-100 rounded-6"></input>
				<p class="mb-0 font-regular text-12 text-danger" v-if="!form_validate.keterangan">Nomor Telepone tidak boleh kosong.</p>
			</div>
		</div>
		<div class="py-3">
			<button type="button" class="button-primary w-100 overflow-hidden" v-if="is_load_state">
    		<img src="../assets/icon/loading-white.gif" width="80" class="position-relative top_18" />
    	</button>
      <button type="button" class="button-primary w-100" v-else @click="onBack();hitGogleAnalytics('Lanjut ke Whatsapp')">Lanjut ke Whatsapp</button>
      <!-- <p class="mb-0 mt-2 pt-1 font-regular color-green text-12 text-center underline cursor-pointer" @click="toggleLearnMore()">Learn more 
				<img src="../assets/icon/arrow-bottom.svg" width="12" v-if="!is_learn_more" />
				<img src="../assets/icon/arrow-top.svg" width="12" v-else />
			</p>
			<p class="mb-0 mt-2 font-regular color-grey text-12 text-center" v-if="is_learn_more">Klik ‘Jual Sekarang’ jika anda ingin melakukan transaksi pembayaran melalui sistem 
				<span class="font-regular color-grey text-12" v-if="is_type == 'COD'">COD dan setiap emas/silver yang anda jual akan kami tes kadar karatnya langsung dihadapan anda.</span>
				<span class="font-regular color-grey text-12" v-else>Gijekin Aja dan setiap emas/silver yang anda jual akan kami tes kadar karatnya di toko kami.</span>
			</p> -->
    </div>
	</div>
</template>
<script>
  import {mapGetters,mapMutations} from 'vuex';
  import config from '@/config/index.js'
  import axios from 'axios'

	export default{
		props: ['is_load_state','is_type'],
		components: {
		},
		data(){
			return{
				center: { lat: -8.543054699999999, lng: 115.3322709 },
        markers: [],
        places: [],
        currentPlace: null,
        current_location: false,
        form_validate: {
        	address: true,
        	keterangan: true,
        	geolocation: true
        },
        loc_detail:{
        	address: '',
        	lat: '',
        	lng: '',
        	keterangan: ''
        },
        is_learn_more: false,
        is_permission: ''
			}
		},
		computed:{
			validate(){
				let display = false
				if (this.loc_detail.keterangan == '' || this.loc_detail.keterangan == null || this.loc_detail.address == '' || this.loc_detail.address == null){
					display = false
				}else{
					display = true
				}
				return display
			},
			form_title(){
				let title = 'Pertemuan'
				if (this.is_type != 'COD') {
					title = 'Anda'
				}
				return title
			}
		},
		mounted(){
			this.geolocate()
			this.permissionLocation()
		},
		methods:{
			hitGogleAnalytics(event){
      	this.$gtag.event(event, { method: 'Google' })
      },
			...mapGetters([
				'getLocationUser'
			]),
			...mapMutations([
				'setLocationUser'
			]),
			setPlace(place) {
				this.currentPlace = place;
				this.addMarker()
      },
      updateCoordinates(location) {
        this.center = {
          lat: location.latLng.lat(),
          lng: location.latLng.lng(),
        };
      },
      addMarker() {
        if (this.currentPlace) {
          const marker = {
            lat: this.currentPlace.geometry.location.lat(),
            lng: this.currentPlace.geometry.location.lng()
          };
          this.markers = [];
          this.markers.push({ position: marker });
          this.places.push(this.currentPlace);
          this.center = marker;
          this.currentPlace = null;
        }
      },
      locationDetail(){
      	this.loc_detail.address = document.getElementById('address-detail').value
      	this.loc_detail.keterangan = document.getElementById('keterangan').value
      	this.loc_detail.lat = this.center.lat
      	this.loc_detail.lng = this.center.lng
      },
      geolocate() {
        navigator.geolocation.getCurrentPosition(position => {
          this.center = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          this.markers = [];
          this.markers.push({ position: this.center });
      		this.permissionLocation()
        });
      },
      onBack(){
      	this.locationDetail()
      	if (this.validate) {
      		this.$emit('toggleSell', this.loc_detail, this.is_type)
      		this.form_validate.address = true	
      		this.form_validate.keterangan = true	
      	}else{
      		if (this.loc_detail.address == '' || this.loc_detail.address == null) {
      			this.form_validate.address = false
      		}
      		if (this.loc_detail.keterangan == '' || this.loc_detail.keterangan == null) {
      			this.form_validate.keterangan = false
      		}
      	}
      	this.form_validate.geolocation = true	
      },
      toggleLearnMore(){
      	this.is_learn_more = !this.is_learn_more
      },
      toggleCurrentLocation(){
      	this.current_location = true
      	this.form_validate.address = true	
      	this.getGeolocation()
      },
      permissionLocation(){
      	navigator.geolocation.getCurrentPosition(
			    position => {
			      this.is_permission = error.message
			      console.log("LOCATION", error.message)
			    },
			    error => {
			      console.log("LOCATION QQ", error.message)
			      this.is_permission = error.message
			    },
		  	) 
      },
      getGeolocation(){
      	axios.get(config.API+'/get-location-from-coor?lat='+this.center.lat+'&long='+this.center.lng+'')
      	.then(response => {
      		this.loc_detail.address = response.data.data.formatted_address
      		this.currentPlace = this.loc_detail.address
      		if (this.is_permission == 'User denied Geolocation') {
      			this.loc_detail.address = ""
      			this.form_validate.geolocation = false
	      	}
      	})
      },
      hideWarning(){
      	this.form_validate.address = true
      	this.form_validate.geolocation = true
				this.current_location = false
      }
		}
	}
</script>
<style scoped>
.map::placeholder {
  color: #222!important;
}
</style>