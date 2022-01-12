<template>
	<div class="w-100 bg-light">
		<div id="top"></div>
		<!-- HEADER LIST ORDER -->
		<Header></Header>
		<div class="pt-90"></div>
    <div class="container p-4">
			<h3 class="mb-4 pb-3 color-black text-center">Cara Kerja Kami</h3>
			<div class="row no-gutters mb-4">
				<div class="col-3">
					<img src="../../assets/icon/empty.svg" width="65" class="object-fit">
				</div>
				<div class="col-9">
					<p class="mb-2 font-medium text-16 color-black">Gratis cek perkiraan harga</p>
    			<p class="mb-0 font-regular text-14 color-grey">Masukkan data emas/silver kamu dan dapatkan perkiraan harga jual sesuai berat dan karatnya.</p>
				</div>
			</div>
			<div class="row no-gutters mb-4">
				<div class="col-3">
					<img src="../../assets/icon/under_construction.svg" width="65" class="object-fit">
				</div>
				<div class="col-9">
					<p class="mb-2 font-medium text-16 color-black">Gratis cek perkiraan harga</p>
    			<p class="mb-0 font-regular text-14 color-grey">Masukkan data emas/silver kamu dan dapatkan perkiraan harga jual sesuai berat dan karatnya</p>
				</div>
			</div>
			<div class="row no-gutters mb-4">
				<div class="col-3">
					<img src="../../assets/icon/smartphone.svg" width="65" class="object-fit">
				</div>
				<div class="col-9">
					<p class="mb-2 font-medium text-16 color-black">Gratis cek perkiraan harga</p>
    			<p class="mb-0 font-regular text-14 color-grey">Masukkan data emas/silver kamu dan dapatkan perkiraan harga jual sesuai berat dan karatnya</p>
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
		mounted(){
			document.getElementById('top').scrollIntoView({
        behavior: 'smooth'
      });
		}
	}
</script>