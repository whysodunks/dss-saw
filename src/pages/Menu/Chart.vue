<template>
	<div class="w-100 bg-light">
		<div id="top"></div>
		<!-- HEADER LIST ORDER -->
		<Header></Header>
		<div class="pt-90"></div>
    <div class="container p-4">
			<div class="mb-4 pb-4">
				<h3 class="mb-4 color-black text-center">Grafik Harga Emas</h3>
				<!-- Begin Gold Price Script - GOLDPRICE.ORG -->
				<div class="w-100 h-auto font-medium bg-white border">
					<!-- Begin Gold Price Script - GOLDPRICE.ORG -->
					<div class="py-2 my-0 mx-auto w-100 text-center bg-white-light">
						<a class="py-2 font-medium text-14 color-black" 
							href="http://goldprice.org" target="_blank">Harga Emas</a>
					</div>
					<div class="mt-3 pt-1" id="gold-price" data-gold_price="IDR-g-1d"></div>
					<!-- End Gold Price Script - GOLDPRICE.ORG -->
				</div>
			</div>
			<div class="mb-4 pb-4">
				<h3 class="mb-4 color-black text-center">Grafik Harga Silver</h3>
				<!-- Begin Gold Price Script - GOLDPRICE.ORG -->
				<div class="w-100 h-auto font-medium bg-white border">
					<!-- Begin Gold Price Script - GOLDPRICE.ORG -->
					<div class="py-2 my-0 mx-auto w-100 text-center bg-white-light">
						<!-- Begin Gold Price Script - GOLDPRICE.ORG -->
						<a 
							class="py-2 font-medium text-14 color-black"
							href="http://silverprice.org" target="_blank">Harga Silver</a>
					</div>
					<div class="mt-3 pt-1" id="silver-price" data-silver_price="IDR-k-1d"></div>
					<!-- End Gold Price Script - GOLDPRICE.ORG -->
				</div>
			</div>
    </div>
    <div class="h-80px"></div>
		<!-- Footer -->
		<NavButton></NavButton>
	</div>		
</template>
<script>
  import Header from '@/components/Header'
  import NavButton from '@/components/NavButton'

	export default{
		components: {
			Header,
			NavButton
		},
		data() {
			return {

			}
		},
		mounted() {
			document.getElementById('top').scrollIntoView({
        behavior: 'smooth'
      });
	    this.LinkGold()
	    this.LinkSilver()
	  },
	  methods: {
	  	LinkGold(){
	  		const plugin = document.createElement("script");
		    plugin.setAttribute(
		      "src",
		      "//goldprice.org/js/gold-price.js"
		    );
		    plugin.async = true;
		    document.head.appendChild(plugin);
	  	},
	  	LinkSilver(){
	  		const plugin = document.createElement("script");
		    plugin.setAttribute(
		      "src",
		      "http://charts.goldprice.org/silver-price.js"
		    );
		    plugin.async = true;
		    document.head.appendChild(plugin);
	  	}
	  }
	}
</script>
<style scoped>

</style>