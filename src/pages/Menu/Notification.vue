<template>
	<div class="w-100">
		<div id="top"></div>
		<!-- HEADER LIST ORDER -->
		<header>
			<div class="header w-100 position-sticky" style="top: 0">
				<div class="container bg-white px-4 py-3 h-60px box-shadow-header">
					<div class="row no-gutters m-0 w-100">
	          <div class="col-1">
	            <router-link to="/">
	            	<div class="">
	                <img src="../../assets/icon/left-arrow.svg" width="20">
	            	</div>
	            </router-link>
	          </div>
	          <div class="col-8">
	            <div class="">
	              <p class="mb-0 mx-1 font-medium text-16 color-black ls-2 position-relative" style="top: 2px;">Notifikasi</p>
	            </div>
	          </div>
	        </div>
				</div>
			</div>
		</header>
    <div class="container px-4 mt-5 text-center">
	    <img src="../../assets/icon/empty.svg" width="175">
    	<p class="mb-0 mt-3 font-regular text-14 color-black">Anda tidak memiliki notifikasi apa pun </p>
    </div>
	</div>		
</template>
<script>
	export default{
		data(){
			return{

			}
		},
		mounted(){
			document.getElementById('top').scrollIntoView({
        behavior: 'smooth'
      });
		}
	}
</script>