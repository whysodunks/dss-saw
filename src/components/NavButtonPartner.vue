<template>
	<div class="w-100">
		<footer>
			<div class="w-100 position-fixed w-100 mx-auto z-index-99" style="bottom: 0">
			  <b-row no-gutters>
			    <b-col cols="12" sm="8" md="6" lg="4" xl="4">
						<div class="footer bg-white">
							<div class="container px-2 py-3">
								<div class="row text-center no-gutters">
									<div class="col-3">
										<a href="http://goemas.com/">	
											<div class="cursor-pointer d-table mx-auto">
												<img src="../assets/icon/bold/Home.svg" width="auto" class="object-fit" v-if="Home">
												<img src="../assets/icon/light/Home.svg" width="auto" class="object-fit" v-else>
												<p class="mb-0 pt-1 font-regular text-12 color-grey ls-2" :class="{'font-medium color-green':Home}">Beranda</p>
											</div>
										</a>
									</div>
									<div class="col-3">
										<a href="http://goemas.com/">	
											<div class="cursor-pointer d-table mx-auto">
												<img src="../assets/icon/bold/Chart.svg" width="auto" class="object-fit" v-if="Chart">
												<img src="../assets/icon/light/Chart.svg" width="auto" class="object-fit" v-else>
												<p class="mb-0 pt-1 font-regular text-12 color-grey ls-2" :class="{'font-medium color-green':Chart}">Cek Harga</p>
											</div>	
										</a>
									</div>
									<div class="col-3">
										<a href="http://goemas.com/">	
											<div class="cursor-pointer d-table mx-auto">
												<img src="../assets/icon/bold/Document.svg" width="auto" class="object-fit" v-if="HowTo">
												<img src="../assets/icon/light/Document.svg" width="auto" class="object-fit" v-else>
												<p class="mb-0 pt-1 font-regular text-12 color-grey ls-2" :class="{'font-medium color-green':HowTo}">Cara Kerja</p>
											</div>
										</a>
									</div>
									<div class="col-3">
										<a href="http://goemas.com/login">	
											<img src="../assets/icon/bold/Profile.svg" width="auto" class="object-fit" v-if="Profile">
											<img src="../assets/icon/light/Profile.svg" width="auto" class="object-fit" v-else>
											<p class="mb-0 pt-1 font-regular text-12 color-grey ls-2" :class="{'font-medium color-green':Profile}">Profil</p>
										</a>
									</div>
								</div>
							</div>
						</div>
					</b-col>
				</b-row>
			</div>
		</footer>
	</div>
</template>
<script>
	export default{
		data() {
			return {

			}
		},
		computed:{
			Home(){
				let active = false
				if (this.$route.name == 'HomePage') {
					active = true
				}
				return active
			},
			Chart(){
				let active = false
				if (this.$route.name == 'Chart') {
					active = true
				}
				return active
			},
			HowTo(){
				let active = false
				if (this.$route.name == 'HowTo') {
					active = true
				}
				return active
			},
			Profile(){
				let active = false
				if (this.$route.name == 'Profile') {
					active = true
				}
				return active
			}
		}
	}
</script>