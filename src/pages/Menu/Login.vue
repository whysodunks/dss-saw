<template>
	<div class="w-100">
		<div id="top"></div>
		<div class="container px-4 pt-5 bg-white">
			<div class="row no-gutters justify-content-center">
				<div class="col-12 col-md-12 col-lg-11 col-xl-11">
					<div class="mb-4 text-center">
						<router-link to="/">
			   			<img src="../../assets/goemas.png" width="200">
			   		</router-link>
						<p class="mb-0 mt-3 font-medium text-18 color-black ls-2">Selamat Datang Kembali</p>
						<p class="mb-0 font-regular text-12 color-grey">Masukan email dan password untuk melanjutkan</p>
					</div>
					<div class="mb-4">
						<input type="email" placeholder="Masukan email yang terdaftar" class="w-100 bg-light mb-3" />
						<input type="password" placeholder="Kata sandi" class="w-100 bg-light my-2" />
	          <router-link to="/404">
							<p class="mb-2 font-regular text-14 color-green text-right">Lupa kata sandi?</p>
						</router-link>
					</div>
					<div class="mb-4">
						<router-link to="/404">
							<button type="button" class="button-primary w-100 mb-3">Masuk</button>
						</router-link>
						<div class="row mb-4">
							<div class="col-4 border-bottom"></div>
							<div class="col-4 text-center">
								<p class="mb-0 font-regular text-12 color-grey position-relative" style="top: 10px">Tidak punya akun?</p>
							</div>
							<div class="col-4 border-bottom"></div>
						</div>
						<router-link to="/404">
							<button type="button" class="button-outline w-100">Buat Akun</button>
						</router-link>
					</div>
					<p class="mb-0 font-regular text-12 ls-2 color-grey text-center">Dengan masuk, kamu akan menyetujui Persyaratan Layanan, Kebijakan Privasi, dan Kebijakan Konten GoEmas.</p>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped>
</style>
<script>
	export default {
		data(){
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