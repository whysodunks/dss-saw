<template>
	<div class="w-100">
		<div id="top"></div>
		<!-- HEADER -->
		<div class="header container px-4 py-3 bg-white" :class="{'box-shadow-header':scrollPosition>30}">
			<div class="row no-gutters m-0 w-100">
        <div class="col-1">
          <router-link to="/">
          	<div class="">
              <img src="../../assets/icon/left-arrow.svg" width="20">
          	</div>
          </router-link>
        </div>
        <div class="col-8">
          <p class="mb-0 mx-1 font-medium text-16 color-black ls-2 position-relative" style="top: 2px;">
          	<span>Kebijakan Privasi</span>
          </p>
        </div>
      </div>
		</div>
		<!-- <div class="container px-4">
			<p class="mb-4 text-14 font-regular ls-2">Guna melindungi dan mengatur informasi pribadi yang Anda berikan sebagai pelanggan dan pengguna situs goemas.com dan aplikasi mitra Goemas telah menetapkan "Kebijakan Privasi".</p>

			<h3>Persetujuan atas penggunaan, pengumpulan, dan penyingkapan informasi pribadi</h3>
			<p>Penggunaan Anda atas Aplikasi mitra Goemas dan/atau pendaftaran Anda atas jasa goemas.com merupakan persetujuan Anda pada ketentuan "Kebijakan Privasi" ini.</p>
			<p>Goemas dapat memperbarui "Kebijakan Privasi" ini pada saat dibutuhkan. Jika terdapat pembaruan, Goemas akan menandainya dengan memperbarui tanggal pada halaman atas "Kebijakan Privasi".</p>
			<p>Dalam hal terjadi perubahan, Goemas akan menghubungi Anda yang melalui email untuk meminta persetujuan, untuk setiap informasi baru yang digunakan atau yang akan disingkapkan serta setiap perubahan atas kebijakan yang akan mempengaruhi perihal pengumpulan informasi dari Anda di masa mendatang.</p>
			<p>Namun dalam kondisi tertentu, Goemas tidak akan menginformasikan dan meminta persetujuan dari pelanggan dan pengguna website. Yaitu untuk setiap kondisi yang berhubungan dengan investigasi terhadap pelanggan karena pelanggaran hukum, keadaan darurat dimana hidup, kesehatan atau keamanan seorang individu terancam, penagihan utang atau untuk memenuhi permintaan badan penegak hukum atau perintah dari pengadilan.</p>

			<h3>Data pribadi yang kami kumpulkan</h3>
			<p>Goemas mengumpulkan "informasi pribadi" (informasi yang secara pribadi mengidentifikasi Anda) pada saat Anda melakukan pendaftaran di situs Goemas. Informasi pribadi tersebut antara lain:</p>
			<ol>
				<li>Nama Anda</li>
				<li>Tanggal Lahir</li>
				<li>Alamat Email</li>
				<li>Nomor Telepon dan Ponsel</li>
				<li>Nomor Rekening Bank</li>
				<li>Nomor Kartu Identitas (KTP) dan Photo KTP</li>
				<li>Photo Mitra</li>
			</ol>
			<p>Informasi tersebut diatas tidak terbatas pada informasi tentang perangkat keras dan lunak komputer Anda (seperti alamat Internet Protocol, sistem pengoperasian, jenis browser, nama domain, URL, waktu akses dan alamat web site penghubung)</p>
			<p>Goemas akan menggunakan perjanjian ini dengan sepantasnya guna melindungi informasi pribadi yang dikirim untuk suatu pemrosesan data. Goemas tidak bertanggung jawab atas segala kerugian yang timbul akibat kesalahan informasi yang Anda masukkan.</p>

			<h3>Alasan kami mengumpulkan data pribadi</h3>
			<p>Pengumpulan data pribadi Anda oleh Goemas akan dipergunakan untuk kepentingan-kepentingan di bawah ini:</p>
			<ul>
				<li>Memenuhi kebutuhan pelanggan yang berkaitan dengan produk, jasa dan informasi Goemas, melingkupi proses pembelian, pembayaran, penjualan, pengambilan dan pengiriman, serta menyimpan sejarah transaksi Anda.</li>
				<li>Membangun dan pemeliharaan website dan aplikasi serta jasa Goemas untuk meningkatkan pelayanan kepada pelanggan.</li>
				<li>Berkomunikasi dengan pelanggan dan pengunjung website ketika diperlukan mengenai upgrade, produk dan jasa lainnya yang tersedia dalam Goemas</li>
				<li>Memberi akses website dan aplikasi Goemas pada pelanggan dan mitra.</li>
				<li>Mematuhi hukum yang berlaku, peraturan, proses legal dan permintaan pemerintah.</li>
				<li>Untuk melindungi jasa, produk dan hak-hak Goemas, termasuk -tanpa terbatas- pada keamanan atau integritas website dan aplikasi Goemas</li>
				<li>Untuk mengindentifikasi dan memecahkan masalah teknis yang berkaitan dengan situs, produk dan jasa Goemas serta menggunakan informasi-informasi pribadi dari sejumlah form tersebut untuk analisa bisnis, operasional, pemasaran dan tujuan promosi lainnya termasuk kepada partner dari Goemas.</li>
			</ul>

			<h3>Pemrosesan, Penyimpanan dan Keamanan Informasi</h3>
			<p>Goemas tidak menjual, menyewakan atau menyingkapkan informasi pribadi Anda pada orang lain, kecuali:</p>
			<ul>
				<li>Pada orang yang Anda rencanakan bertindak sebagai agen/wakil Anda,untuk satu atau lebih tujuan yang teridentifikasi Pada karyawan Goemas, kontraktor independen, cabang, affiliates, konsultan, rekan bisnis, penyedia jasa, suppliers dan agen, yang bertindak atas nama Goemas untuk tujuan yang teridentifikasi.</li>
				<li>Dalam keperluan tertentu jika Goemas memiliki alasan yang dipercayanya bahwa diperlukan penyingkapan informasi untuk mengidentifikasi, mengontak dan melaksanakan tindakan hukum terhadap seseorang yang mungkin bisa menyebabkan celaka atau gangguan (baik sengaja atau tidak sengaja) terhadap hak atau kepemilikan Goemas, pengguna website dan aplikasi Goemas lainnya, produk atau jasa Goemas, atau orang lain yang bisa membahayakan dikarenakan aktivitas-aktivitas tersebut.</li>
				<li>Untuk merespon proses hukum dan menyediakan informasi bagi penegakan hukum atau dalam hubungannya dengan penyelidikan yang berhubungan dengan keamanan publik, yang telah diijinkan atau disyaratkan oleh badan hukum.</li>
				<li>Adanya kepentingan untuk partner bisnis dari Goemas untuk bekerjasama dalam pengembangan bisnis dari Goemas.</li>
			</ul>
			<p>Ketika akun Anda tidak aktif (yaitu jika Anda meminta dikeluarkan dari database Goemas), Goemas akan tetap menyimpan informasi pribadi Anda dalam arsipnya. Informasi Anda akan digunakan hanya untuk alasan perpajakan jika diperlukan atau untuk membuktikan kepatuhan Goemas terhadap setiap hukum yang berlaku.</p>
			<p>Goemas akan berusaha keras dengan alasan yang kuat untuk melindungi informasi pribadi para pelanggan.</p>

			<h3>Akurasi Informasi</h3>
			<p>Goemas akan selalu berusaha untuk menjaga keakuratan informasi untuk tujuan terindentifikasi, dan untuk meminimalisir kemungkinan terjadinya keputusan pelanggan yang tidak selayaknya berdasarkan informasi tersebut.</p>
			<p>Pelanggan bertanggung jawab untuk menginformasikan perubahan informasi pribadi mereka kepada Goemas dengan cara mengirimkan email melalui 
				<a href="mailto:support@Goemas" target="_blank">
					<span class="color-green font-medium underline">support@Goemas</span>
				</a>. 
			Goemas akan melakukan verifikasi data sebelum menggunakan informasi pribadi yang baru atau yang telah diperbarui</p>
		</div> -->
		<div class="container px-4">
			<div v-html="privacy_policy"></div>
		</div>
	</div>
</template>
<script>
	import NavButton from '@/components/NavButton'
	import config from '@/config/index.js'
  import axios from 'axios'
	export default {
		components:{
		},
		data(){
			return {
				privacy_policy: '',
				scrollPosition: null,
				is_load: false,
			}
		},
		mounted(){
			document.getElementById('top').scrollIntoView({
        behavior: 'smooth'
      });
    	window.addEventListener('scroll', this.updateScroll);
    	this.getPrivacyPolicy()
		},
		methods:{
			updateScroll() {
	      this.scrollPosition = window.scrollY
	    },
	    getPrivacyPolicy(){
	    	this.is_load = true
	    	axios
	    		.get(config.API+'/general-setting-term')
	    		.then(response => {
	    			this.privacy_policy = response.data.privacy_policy
	    			this.is_load = false
	    		})
	    }
		}
	}
</script>
<style scope>
	p,span{
		font-size: 14px;
	  font-family: Poppins-Regular;
	}
	h3{
		padding-top: 12px;
	}
</style>