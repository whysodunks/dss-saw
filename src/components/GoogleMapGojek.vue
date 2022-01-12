<template>
	<div class="w-100">
		<p class="mb-3 font-bold text-16 ls-2">GoEmas ingin mengakses Lokasi anda untuk melanjutkan transaksi</p>
   	<button type="button" class="button-primary w-100 overflow-hidden" v-if="is_load_state">
  		<img src="../assets/icon/loading-white.gif" width="80" class="position-relative top_18" />
  	</button>
    <button type="button" class="button-primary w-100" v-else @click="onBack();hitGogleAnalytics('Gojek Lanjutkan')">Lanjutkan</button>
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
				center: { lat: 0, lng: 0 },
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
			// this.permissionLocation()
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
      		// this.permissionLocation()
        });
      },
      onBack(){
      	this.geolocate()
      	this.toggleCurrentLocation()
      	this.getGeolocation()
      	this.locationDetail()
      	this.$emit('toggleSell', this.loc_detail, this.is_type)
      },
      toggleLearnMore(){
      	this.is_learn_more = !this.is_learn_more
      },
      toggleCurrentLocation(){
      	this.current_location = true
      	this.form_validate.address = true	
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
      		this.loc_detail.keterangan = '-'
        	console.log("center", this.loc_detail.address)
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