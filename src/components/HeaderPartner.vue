<template>
	<div class="w-100">
		<header>
			<div class="w-100 position-fixed w-100 mx-auto z-index-99" style="top: 0">
			  <b-row no-gutters>
			    <b-col cols="12" sm="8" md="6" lg="4" xl="4">
						<div class="bg-white" :class="{'box-shadow-header':scrollPosition > 50}">
							<div class="container px-4 pt-3 pb-2">
								<div class="row no-gutters">
									<div class="col-6">
										<a href="http://goemas.com/">	
											<img src="../assets/goemas.png" width="auto" height="47" class="object-fit" @click="onBack('toggleMenu', 'check-price-id')">
										</a>
									</div>
									<div class="col-6 text-right">
										<a href="http://goemas.com/notification">	
											<img src="../assets/icon/light/Notification.svg" width="24" height="24" class="object-fit position-relative" style="top: 8px">
										</a>
									</div>
								</div>
							</div>
						</div>
					</b-col>
				</b-row>
			</div>
		</header>
	</div>
</template>
<script>
	export default{
		props: ['data'],
		data(){
			return{
      	scrollPosition: null,
			}
		},
		mounted()	{	
    	window.addEventListener('scroll', this.updateScroll);
		},
		methods:{
			updateScroll() {
	      this.scrollPosition = window.scrollY
	    },
	    onBack(type,data){
	    	this.$emit(type,data)
	    }
		}
	}
</script>