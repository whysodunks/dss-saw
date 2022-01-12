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
          	<span>Syarat & Ketentuan</span>
          </p>
        </div>
      </div>
		</div>
		<!-- <div class="container px-4">
			<p class="mb-4 text-14 font-regular ls-2">Harap membaca syarat dan ketentuan penggunaan ini dengan seksama karena mengandung informasi-informasi penting terkait hak Anda. Dengan mengakses atau menggunakan aplikasi Goemas, Anda menyetujui Syarat & Ketentuan berikut.</p>

			<h3>1. Definisi</h3>
			<ol>
		    <li>Penyelenggara situs dan aplikasi adalah Goemas dengan alamat situs www.partner.goemas.com dan selanjutnya disebut Goemas. Goemas merupakan situs dan aplikasi milik PT Goemas Niaga Solusi.</li>
		    <li>Mitra Goemas selanjutnya disebut Mitra, adalah pengguna yang telah mengisi form pendaftaran keanggotaan secara online melalui situs atau aplikasi Goemas dan data pengguna tersebut telah terverifikasi oleh sistem Goemas. Setiap Mitra memiliki nomor akun individual sebagai identifikasi dalam bertransaksi di situs dan/atau aplikasi Goemas</li>
		    <li>Akun Mitra Goemas selanjutnya disebut Akun, adalah nomor kepesertaan individu Mitra yang memuat data diri Mitra serta seluruh sejarah transaksi yang dilakukan oleh Mitra.</li>
		    <li>User adalah penjual emas yang akan menggunakan layanan emas di Goemas untuk dilakukan lelang terhadap mitra yang mempunyai cukup saldo dalam akun saldo mitra.</li>
		    <li>Barang berupa Emas dan Perak yang selanjutnya disebut Barang adalah objek yang diperjual-belikan antara Mitra dan Goemas.</li>
		    <li>Emas Logam Mulia selanjutnya disebut Emas adalah logam mulia batangan yang diperjual-belikan oleh Goemas dengan kadar 99,99%</li>
		    <li>Perak Murni selanjutnya disebut Perak adalah logam batangan yang diperjual-belikan oleh Goemas dengan kadar 99,9%</li>
		    <li>Saldo Akun E-Wallet selanjutnya disebut Saldo Mitra, adalah jumlah saldo rupiah milik Mitra yang telah terintegrasi dengan Goemas, dimana Mitra dapat melakukan top-up dana untuk melakukan lelang transaksi Pembelian Emas kepada user dan Saldo mitra tersebut tidak dapat diuangkan dan/atau ditarik kembali oleh Mitra hingga batas Rp. 1.000.000,00 (Satu juta rupiah).</li>
			</ol>

			<h3>2. Ruang Lingkup Syarat & Ketentuan</h3>
			<ol>
		    <li>Syarat dan Ketentuan ini merupakan bentuk dari Perjanjian antara Goemas dan Mitra dan mulai berlaku serta mengikat kepada semua orang yang telah mendaftar dengan cara mencontreng kolom persetujuan yang tersedia di bagian akhir Syarat dan Ketentuan ini, kemudian mendapat konfirmasi tertulis melalui e-mail atau SMS dari Goemas. Mitra dengan ini tunduk kepada semua ketentuan-ketentuan keanggotaan yang berlaku dan semua perubahan-perubahannya. Goemas dapat memperbaharui Syarat dan Ketentuan di www.partner.goemas.com, dan Mitra dengan ini setuju untuk membaca and menyetujui setiap perubahan-perubahan Syarat dan Ketentuan. Tanpa mengesampingkan ketentuan mengenai pengakhiran keanggotaan, Mitra dapat mencabut keanggotaannya apabila tidak setuju dengan Syarat dan Ketentuan yang berubah.</li>
		    <li>Biaya - biaya yang dikenakan kepada Mitra pada umumnya adalah biaya potongan komisi atas transaksi yang dilakukan oleh mitra dalam pembelian emas kepada user dalam transaksi yang diatur dalam aplikasi mitra goemas.</li>
		    <li>Biaya - biaya lain seperti biaya perjalanan, biaya pengecekan barang, biaya pembelian barang user ditanggung sepenuhnya oleh Mitra. Selain itu, semua biaya-biaya sehubungan dengan pembayaran seperti biaya surcharge kartu kredit dan biaya transfer antar bank jika ada akan dibebankan kepada Mitra.</li>
		    <li>Mitra mengakui bahwa keanggotaan Mitra secara elektronik merupakan kesepakatan serta keinginan Mitra untuk terikat oleh serta untuk membayar segala biaya yang muncul berdasarkan Syarat dan Ketentuan ini dan transaksi yang dilakukan oleh Mitra. Kesepakatan serta keinginan Mitra untuk terikat pada penundukan secara elektronik berlaku untuk semua catatan yang terkait dengan semua transaksi yang dilakukan dengan Goemas dalam dalam situs dan aplikasi ini, termasuk pemberitahuan pembatalan, kebijakan, perjanjian, dan penerapan.</li>
		    <li>Mitra dengan ini menyatakan bahwa Mitra mengetahui dengan jelas segala informasi dan ketentuan yang berlaku setiap saat dan program-program yang disediakan oleh Goemas.</li>
		    <li>Mitra diwajibkan menyediakan data verifikasi sesuai dengan tanda pengenal maupun dokumen data diri lainnya yang telah ditentukan oleh Goemas. Goemas berhak menangguhkan atau mencabut keanggotaan seorang Mitra apabila Mitra gagal untuk menyediakan dokumen atau data verifikasi sebagaimana dimintakan oleh Goemas.</li>
		    <li>Mitra dengan ini menjamin bahwa semua informasi yang diberikan oleh Mitra adalah yang yang sebenar-benarnya. Mitra harus berumur minimal 17 (tujuh belas) tahun atau lebih. Dengan melakukan pendaftaran, berarti Mitra telah setuju dengan aturan-aturan yang mengatur didalamnya.</li>
		    <li>Mitra dilarang untuk menggunakan Situs dan aplikasi ini atau semua program-program dan/atau fasiltas yang disediakan oleh Goemas untuk tindakan-tindakan melawan hukum yang berlaku di Indonesia, atau di domisili Mitra, baik secara langsung maupun tidak langsung. Mitra dengan ini menjamin tidak akan melakukan perbuatan melawan hukum sebagaimana disebutkan diatas dan dengan ini Mitra akan Mitraikan ganti rugi kepada Goemas akan setiap kerugian, biaya atau bunga yang diderita atau dibayarkan oleh Goemas akibat perbuatan Mitra sebagai pelanggaran ketentuan ini.</li>
		    <li>Mitra dengan ini menyatakan bahwa setelah Mitra melakukan pendaftaran, maka Mitra secara otomatis juga melakukan pendaftaran akun Mitra Saldo sebagai e-wallet yang bekerjasama dengan Goemas sebagai penyimpanan dana sementara guna pemotongan komisi.</li>
			</ol>
		
			<h3>3. Tingkatan Keanggotaan</h3>
			<p class="mb-3 text-14 font-regular pl-4">Mitra diklasifikasikan dalam suatu tingkatan keanggotaan yang diberlakukan oleh Goemas. Tingkat keanggotaan tersebut ditentukan sesuai dengan kebijakan yang diberlakukan oleh Goemas, dan Goemas akan mencantumkan tingkatan keanggotaan dalam akun Mitra.</p>

			<h3>4. Penggunaan Situs</h3>
			<p class="mb-3 text-14 font-regular pl-4">Penggunaan Situs ini tunduk berdasarkan Syarat dan Ketentuan Penggunaan Situs, yang telah disetujui oleh Mitra saat dimulainya penggunaan Situs ini dan menjadi Perjanjian yang mengikat di antara Mitra dengan Goemas.</p>

			<h3>5. Hak-Hak Mitra</h3>
			<ol>
		    <li>Mitra berhak mengakses semua infomasi mengenai akun Mitra termasuk jumlah Saldo akun berdasarkan transaksi antara Mitra dan Goemas. Dalam Syarat dan Ketentuan ini, Barang termasuk semua emas bersertifikasi, produk atau barang-barang yang dibeli oleh dan telah menjadi hak milik Mitra dengan menggunakan fasilitas transaksi yang disediakan dan diselenggarakan oleh Goemas, berdasarkan ketentuan transaksi yang berlaku.</li>
		    <li>Mitra berhak merubah beberapa informasi pribadi akunnya dengan ketentuan bahwa informasi-informasi tersebut, sebagaimana ditentukan oleh Goemas, hanya dapat diubah bilamana Mitra dapat memberikan bukti yang dapat diyakini oleh Goemas bahwa penggantian tersebut adalah benar dan sah, dan hanya berlaku dengan kesepakatan tertulis dari Goemas. Goemas tidak bertanggung jawab atas segala resiko yang terjadi akibat perubahan informasi tersebut.</li>
		    <li>Mitra berhak untuk mendapatkan layanan penggunaan Situs sesuai dengan tingkat keanggotaannya, dimana Goemas berhak untuk melakukan perubahan terhadap spesifikasi layanan untuk tingkat keanggotaan tersebut dengan pemberitahuan kepada Mitra.</li>
		    <li>Mitra berhak atas kepemilikan atas Barang yang telah dibeli dari user sesuai dengan ketentuan Perjanjian ini. Jika informasi dalam permintaan yang dilakukan oleh Mitra tidak sesuai dengan informasi Mitra yang disimpan oleh Goemas, maka Goemas berhak untuk melakukan proses verifikasi ulang untuk memastikan kebenaran atas permintaan Penarikan tersebut, namun Goemas tidak berkewajiban melakukan proses verifikasi tersebut. Goemas berhak menunda atau membatalkan proses transaksi tersebut selama proses verifikasi berlangsung. Goemas dengan ini tidak bertanggung jawab atas kerugian terhadap semua transaksi yang dilakukan oleh Mitra.</li>
		    <li>Mitra berhak untuk mengundurkan diri dari keanggotaannya dan menghapus akun milik Mitra tersebut.</li>
			</ol>

			<h3>6. Kewajiban Mitra</h3>
			<ol>
		    <li>Mitra wajib membaca, memiliki pemahaman dan tunduk pada Syarat dan Ketentuan ini.</li>
		    <li>Mitra wajib memberikan informasi dengan benar dan wajib melakukan pemuktahiran data berkaitan dengan informasinya.</li>
		    <li>Mitra wajib untuk menjaga keamanan akun keanggotaannya sehingga akun Mitra tidak digunakan untuk melanggar hukum yang berlaku. Mitra wajib bertanggung jawab untuk menjaga kerahasiaan kata sandi yang digunakan dan penggunaan yang sesuai. Segala kerugian yang timbul akibat kegagalan Mitra untuk menjaga keamanan kata sandi akan menjadi tanggung jawab Mitra dan Mitra setuju untuk membebaskan Goemas dari segala kerugian yang dialami Mitra karena hal tersebut.</li>
		    <li>Mitra wajib menyesuaikan perangkat yang digunakan untuk melakukan akses ke akun sesuai dengan sistem elektronik yang dimiliki oleh Goemas. Goemas tidak bertanggung jawab atas kerusakan atau kerugian yang timbul akibat tidak cocoknya perangkat Mitra dan perangkat elektronik yang digunakan oleh Goemas.</li>
		    <li>Mitra tidak boleh merubah, atau memanipulasi data Goemas akibat pemanfaatan celah keamanan, berkomplot dengan bagian internal untuk manipulasi data maupun kegiatan lain yang tidak jujur dan merugikan Goemas</li>
			</ol>

			<h3>7. Akibat Pelanggaran Kewajiban Keanggotaan</h3>
			<ol>
		    <li>Akibat pelanggaran Mitra kepada semua ketentuan-ketentuan yang berlaku sehubungan dengan penggunaan Situs, Syarat dan Ketentuan ini, dan/atau ketentuan yang belaku untuk semua transaksi yang dilakukan antara Mitra dan Goemas, dan dengan tidak mengesampingkan hak-hak Goemas untuk mendapatkan ganti rugi atau melaksanakan haknya berdasarkan peraturan perudang-undangan yang berlaku, maka:</li>
			</ol>
			<ol class="ml-3">
		    <li>Goemas dapat melakukan penangguhan atau pembatalan terhadap keanggotaan Mitra secara sepihak;</li>
		    <li>Goemas berhak untuk membatalkan atau mengakhir perjanjian-perjanjian yang dilakukan oleh Mitra dan Goemas sehubungan dengan Transaksi; dan/atau</li>
		    <li>Mitra akan melakukan ganti rugi terhadap semua kerugian, biaya, atau bunga yang dialami atau dibayarkan oleh Goemas akibat pelanggaran Mitra tersebut.</li>
			</ol>

			<h3>8. Hak-Hak Goemas</h3>
			<ol>
		    <li>Goemas berhak meminta keterangan lain sebagai bagian proses verifikasi melalui e-mail, telepon, ataupun melalui media lainnya kepada Mitra.</li>
		    <li>Goemas berhak untuk menyimpan dan mempergunakan semua data yang diberikan oleh Mitra sebatas keperluan menjaga dan menagih biaya-biaya ke akun Mitra.</li>
		    <li>Goemas dapat melakukan penon-aktifan akun Mitra atau menangguhkan keanggotaan kapanpun dengan alasan apapun terutama penyalahgunaan sistem Rencana Emas, tindak kriminal, hack (retas) keamanan situs maupun hal-hal lain yang melanggar Syarat dan Ketentuan yang disediakan oleh Goemas. Sisa saldo dalam akun Mitra merupakan hak Goemas.</li>
		    <li>Goemas berhak untuk melakukan verifikasi atas keaslian dan keabsahan data Mitra dan sumber dana yang digunakan oleh Mitra untuk berpartisipasi dan/atau melakukan Transaksi. Goemas dapat menangguhkan penggunaan akun apabila diketahui bahwa informasi yang diberikan Mitra adalah tidak benar dan sumber dana yang digunakan bertentangan dengan peraturan perundang-undangan yang berlaku di Indonesia.</li>
			</ol>

			<h3>9. Kewajiban Goemas</h3>
			<ol>
		    <li>Goemas wajib menyimpan catatan yang benar berkaitan dengan transaksi Mitra. Mitra dan Goemas dengan ini menyetujui bahwa catatan yang dilakukan oleh Goemas (termasuk Pembukuan Manual) merupakan satu-satunya bukti atas jumlah transaksi Mitra.</li>
		    <li>Goemas wajib mengumumkan pada Situs dan aplikasi semua informasi berkaitan dengan perubahan ketentuan-ketentuan keanggotaan di Situs ini.</li>
			</ol>

			<h3>10. Pernyataan dan Jaminan</h3>
			<ol>
		    <li>Mitra dilarang mengunakan segala fasilitas atau program yang diberikan oleh Goemas untuk melanggar ketentuan peraturan perundang-undangan yang berlaku di Indonesia. Goemas akan berkerja sama dengan instansi pemerintahan terkait jika diminta oleh Instansi tersebut. Dengan ini Mitra menangguhkan dan/atau melepaskan semua haknya berdasarkan Perjanjian ini atau ketentuan-ketentuan keanggotaan lainnya dalam rangka kerjasama Goemas dengan Instansi yang berwenang.</li>
		    <li>Mitra menyatakan bahwa informasi yang Mitra unggah ke Situs dan aplikasi akan dianggap informasi yang tidak bersifat rahasia dan tidak dilindungi kepemilikannya.</li>
		    <li>Mitra setuju untuk memberikan kuasa kepada Goemas untuk menampilkan, menggunakan, mereproduksi, mengubah, menyesuaikan, membuat produk turunan, mempublikasikan dan menyebar-luaskan sebagian atau keseluruhan secara terus menerus, worldwide, tanpa royalti, dari informasi yang Anda berikan. Kuasa tersebut dapat diterapkan pada berbagai bentuk, media, atau teknologi yang telah ada atau yang akan dikembangkan.</li>
		    <li>Mitra menjamin bahwa Mitra memiliki hak baik secara moral dan secara hukum sehubungan dengan pemberian kuasa kepada Goemas untuk memotong komisi dari setiap transaksi sesuai dengan ketentuan Goemas.</li>
		    <li>Mitra memahami dan setuju bahwa Goemas memiliki hak untuk menolak menampilkan atau menghapus atau membatasi akses atas informasi yang Mitra berikan tanpa pemberitahuan sebelumnya.</li>
		    <li>Mitra secara tegas menyatakan setuju bahwa penggunaan oleh Mitra, atau ketidakmampuan Mitra untuk menggunakan Situs dan aplikasi, sepenuhnya merupakan resiko Mitra dan Goemas tidak bertanggung jawab atas kerugian yang dialami Mitra atas penggunaan atau ketidakmampuan Mitra tersebut.</li>
		    <li>Mitra sepenuhnya bertanggung jawab untuk melakukan pengamanan (back up) terhadap sistem Mitra sendiri.</li>
		    <li>Mitra setuju untuk memberikan ganti rugi dan membebaskan Goemas serta direksi, pejabat, karyawan, afiliasi, agen, kontraktor, prinsipal, dan pemberi lisensi dari Goemas, dari segala klaim yang muncul karena pelanggaran Mitra terhadap Syarat dan Ketentuan ini.</li>
		    <li>Mitra menyatakan setuju dan mengerti bahwa Goemas merupakan Situs dan aplikasi jual beli yang tidak menawarkan dan/atau memberikan keuntungan apapun kepada Mitra dalam transaksi antara Mitra dan user.</li>
		    <li>Mitra menyatakan setuju dan mengerti bahwa Barang yang diperjual-belikan oleh Goemas berupa Emas dan Perak yang harganya dapat berubah setiap saat sesuai dengan fluktuasi harga Emas dan Perak global, dan perubahan harga tersebut diluar kontrol Goemas sehingga Goemas tidak bertanggung jawab atas dampak atas perubahan harga tersebut.</li>
		    <li>Mitra menyatakan setuju dan mengerti bahwa saat transaksi Pembelian, Mitra hanya membayar harga Barang yang telah disetujui antara Mitra dan User dan menyelesaikan transaksi tersebut didalam aplikasi Mitra Goemas.</li>
			</ol>

			<h3>11. Batas Tanggung Jawab Goemas</h3>
			<ol>
		    <li>Mitra dan Goemas dengan ini mengetahui dan sepakat bahwa terhadap Barang Mitra yang telah dibeli. Goemas tidak bertanggung jawab atas kerugian yang timbul setelah transaksi tersebut.</li>
		    <li>Semua saldo Mitra dapat diwariskan kepada ahli waris sesuai dengan instruksi tertulis dari Mitra kepada Goemas. Goemas dengan ini tidak bertanggung jawab atas pembagian harta waris Mitra ke ahli waris Mitra.</li>
		    <li>Dalam hal spesifikasi Barang yang diterima oleh Mitra dari user tidak sesuai dengan pesanan Mitra, ataupun Barang yang diterima adalah palsu, maka Mitra dapat membatalkan pembelian dari user dan menginformasikan alasannya kepada Goemas sepanjang Mitra dapat memberikankan bukti yang cukup.</li>
			</ol>

			<h3>12.	Transaksi Jual-Beli</h3>
			<ol>
		    <li>Harga beli dan harga jual Barang, termasuk Emas, Perak, atau Barang-barang lainnya dapat berubah sewaktu-waktu tanpa pemberitahuan terlebih dahulu, sesuai dengan harga dan kondisi di pasaran saat dilakukannya transaksi, dimana akan diumumkan pada Situs dan Aplikasi Goemas.</li>
		    <li>Perjanjian jual beli dianggap telah terjadi apabila Mitra telah menyetujui jumlah dan harga Barang sesuai data user yang telah diberikan dengan metode elektronik yang berlaku di situs dan aplikasi Goemas.</li>
		    <li>Mitra wajib membayar jumlah harga Barang yang dibelinya sesuai dengan jumlah dan harga Barang yang telah disetujui. Goemas akan menarik komisi pada akun Saldo Mitra yang ada dari akun untuk melakukan transaksi jual beli dengan user. Mitra hanya dapat berpartisipasi lelang yang sesuai dengan jumlah komisi yang akan dipotong dari Saldo akun Mitra.</li>
		    <li>Setiap pembayaran yang dilakukan Mitra atas pembelian Barang, akan menjadikan Barang tersebut milik Mitra setelah melakukan pembayaran sesuai dengan jumlah transaksi kepada user.</li>
			</ol>

			<h3>13.	Hak atas Kekayaan Intelektual</h3>
			<ol>
		    <li>Segala hak cipta dan semua informasi yang dapat dilindungi sebagai hak kekayaan intelektual dalam Situs ini termasuk video, desain, teks, hasil pencarian, grafik, gambar, file suara dan informasi lainnya yang secara hukum dapat dilindungi sebagai hak kekayaan intelektual, serta pemilihan dan pengaturan dan penyusunan informasi, merupakan mutlak milik Goemas dan/atau pemberi lisensinya, dan dilindungi oleh peraturan perudang-undangan yang berlaku di Indonesia termasuk namun tidak terbatas kepada Undang-Undang Republik Indonesia Nomor 19 Tahun 2002 tentang Hak Cipta.</li>
		    <li>Mitra diberikan kebebasan atau lisensi terbatas untuk mengakses Situs dan aplikasi ini, menggunakan layanan dan mencetak bahan untuk penggunaan pribadi, non-komersial, dan informasi saja. Goemas berhak, tanpa pemberitahuan dan kebijakan Goemas, untuk mengakhiri lisensi Mitra untuk menggunakan Situs dan aplikasi, dan untuk memblokir atau mencegah akses Mitra untuk menggunakan Situs dan Aplikasi.</li>
			</ol>

			<h3>14.	Kerahasiaan dan Kebijakan Privasi</h3>
			<ol>
				<li>Informasi Rahasia</li>
				<ol>
					<li>Para Pihak mengetahui dan menyetujui bahwa selama jangka waktu Perjanjian, Mitra akan mendapat informasi-informasi dari Goemas yang bersifat rahasia, baik diberikan secara langsung ataupun secara sengaja dalam kegiatan transaksi bisnis sehari-hari oleh Goemas.</li>
					<li>Mitra bertanggung jawab atas kerahasiaan Informasi Rahasia dan Mitra bertanggung jawab atas pelanggaran terhadap ketentuan dalam Pasal ini yang dilakukan dirinya sendiri ataupun kuasanya. Bilamana Informasi Rahasia secara hukum Informasi Rahasia perlu untuk diungkapkan kepada pihak ketiga lainnya, Mitra akan Mitraikan pemberitahuan kepada Goemas dengan segera, dan menjamin bahwa Informasi Rahasia yang diungkapkan akan mendapatkan perlindungan kerahasiaan oleh pihak ketiga lainnya tersebut.</li>
				</ol>
				<li>Kebijakan Privasi Mitra</li>
				<ol>
					<li>Goemas akan menjaga privasi setiap data Mitra sesuai ketentuan Perjanjian ini dan peraturan perundang-undangan yang berlaku di Indonesia.
					<li>Mitra wajib melindungi kerahasiaan akun maupun email terkait dalam pendaftaran akun.</li>
					<li>Data yang telah diserahkan kepada Goemas tidak dapat diubah tanpa permintaan Mitra, dengan tujuan untuk menghindari penyalahgunaan akun Mitra oleh pihak lain.</li>
					<li>Goemas dapat mengungkapkan informasi dan data mengenai Mitra, bilamana: (a) dipersyaratkan oleh peraturan perundang-undangan, publik, dan pihak-pihak berwenang di Indonesia, (b) cukup beralasan untuk menegakkan syarat dan ketentuan Goemas atau melindungi operasi dan usaha Goemas, (c) terjadi reorganisasi, penggabungan, atau penjualan kepada pihak ketiga.</li>
				</ol>
			</ol>

			<h3>15.	Force Majeure</h3>
			<p class="mb-3 text-14 font-regular ">Mitra akan membebaskan Goemas dari segala tuntutan apapun, dalam hal terjadinya kejadian-kejadian di luar kekuasaan atau kemampuan Goemas termasuk namun tidak terbatas pada bencana alam, perang, huru-hara, sistem yang tidak berfungsi, gangguan listrik, gangguan telekomunikasi, kebijakan pemerintah serta kejadian-kejadian lainnya.</p>

			<h3>16.	Perubahan Perjanjian</h3>
			<ol>
				<li>Goemas memiliki hak untuk, pada setiap waktu, mengubah dan/atau Mitraikan tambahan atas Syarat dan Ketentuan ini dan untuk menerapkan Syarat dan Ketentuan baru tersebut.</li>
				<li>Perubahan tersebut akan diberitahukan melalui Situs dan akan dianggap telah diketahui oleh Mitra setelah 5 (lima) hari sejak pemberitahuan dipasangkan pada Situs.</li>
				<li>Perubahan Syarat dan Ketentuan baru tersebut akan segera berlaku efektif dan bersifat mengikat antara Mitra dan Goemas. Pemakaian Mitra yang berkelanjutan terhadap fasilitas dan program yang disediakan oleh Goemas akan dianggap sebagai persetujuan Mitra untuk tunduk pada perubahan serta syarat dan ketentuan baru atau tambahan tersebut</li>
			</ol>

			<h3>17.	Pilihan Hukum</h3>
			<ol>
				<li>Perjanjian yang berbentuk Syarat dan Ketentuan ini tunduk pada Hukum Negara Republik Indonesia.</li>
				<li>Segala perselisihan yang tidak dapat diselesaikan secara kekeluargaan akan diselesaikan melalui Pengadilan Negeri Denpasar</li>
			</ol>

			<h3>18.	Ganti Rugi akibat Pelanggaran</h3>
			<p class="mb-3 text-14 font-regular">Mitra setuju untuk melakukan ganti rugi dan membebaskan Goemas serta direksi, pejabat, karyawan, afiliasi, agen, kontraktor, prinsipal, dan pemberi lisensi dari Goemas, dari segala klaim yang muncul karena pelanggaran Mitra terhadap Syarat dan Ketentuan ini.</p>

			<h3>19.	Ketentuan Umum Transaksi Antara Mitra dan Goemas</h3>
			<ol>
				<li>Mitra dengan ini mengetahui bahwa pembelian Emas atau Barang dengan fasilitas atau program yang diberikan oleh Goemas dimana nilai emas atau Barangnya dapat berubah atau kehilangan nilainya sesuai dengan kondisi di pasar atau masyarakat.</li>
				<li>Mitra dengan ini mengetahui dan setuju bahwa Goemas tidak terikat dan bertanggung jawab kepada Mitra, untuk semua keuntungan, kerugian atau kehilangan baik secara langsung ataupun tidak langsung (termasuk tidak terbatas kepada kerugian/kehilangan laba, goodwill, pemakaian, data ataupun kehilangan atas hal yang tidak bergerak (walaupun yang telah diberitahukan dan sudah diantisipasi sebelumnya), yang diakibatkan dari:</li>
				<ol>
					<li>Pemakaian atau ketidakpahaman pemakaian layanan Goemas;</li>
					<li>Biaya untuk mendapatkan data dan/atau layanan dari transaksi yang terjadi dalam layanan kami</li>
					<li>Perubahan data yang dilakukan oleh pihak lain yang tidak mendapatkan persetujuan Mitra</li>
					<li>Pernyataan atau tindakan terhadap layanan Goemas yang diberikan oleh pihak ketiga</li>
					<li>Naik atau turunnya harga emas, logam mulia atau Barang lain sesuai dengan Transaksi</li>
					<li>Pernyataan atau tindakan terhadap layanan Goemas dari pihak ketiga; atau</li>
					<li>Hilang atau rusaknya Barang akibat Force Majeure.</li>
				</ol>
				<li>Goemas tidak bertanggung jawab atas segala advice atau saran yang diberikan atas berita - berita atau analisa yang disiarkan oleh Goemas. Segala berita dan analisa sifatnya hanya bersifat sebagai informasi. Segala tindakan yang diambil Mitra atau individu atau badan atas analisa dan berita Goemas tidak menjadi tanggung jawab Goemas dan menjadi tanggung jawab Mitra atau individu atau badan sepenuhnya baik itu menghasilkan kerugian maupun keuntungan.</li>
				<li>Kondisi pasar adalah hal diluar kontrol Goemas. Selalu ada resiko dalam setiap pembelian Emas, Perak atau produk lainnya. Mitra sebagai pembeli wajib mengetahui bahwa segala kerugian maupun keuntungan akibat kondisi pasar adalah menjadi tanggung jawab Mitra sepenuhnya.</li>
				<li>Goemas tidak bertanggung jawab atas order transaksi yang tidak diterima baik dikarenakan kegagalan sistem maupun kesalahan sistem Mitra. Goemas juga dibebaskan dari tanggung jawab atas segala kerugian materiil maupun immateriil yang disebabkan akibat kerusakan, bug, kegagalan sistem Goemas yang mengakibatkan sistem tidak berjalan sebagaimana mestinya, maupun pembebasan dari kerugian atau keuntungan atas transaksi yang dilakukan Mitra melalui sistem Goemas.</li>
				<li>Goemas selalu menggunakan dan mengambil langkah-langkah keamanan dalam melindungi sistem, keamanan dan kenyamanan pengguna sistem. Adapun celah keamanan akibat kesalahan Mitra menjadi tanggung jawab Mitra itu sendiri.</li>
				<li>Keamanan Mitra sangat bergantung kepada keamanan sistem aplikasi Mitra. Goemas tidak bertanggung jawab atas aplikasi Mitra yang diretas (hack) atau disalahgunakan oleh pihak lain akibat kelalaian Mitra dalam menjaga kerahasiaan aplikasi tersebut. Goemas juga tidak bertanggung jawab atas segala kerugian ataupun keuntungan akibat kelalaian Mitra yang mendapatkan aplikasi diretas (hack) atau disalahgunakan oleh pihak lain.</li>
			</ol>
			<p class="py-3 mb-0 font-regular text-11">Dengan ini saya setuju dan mengikatkan diri terhadap Syarat dan Ketentuan sebagaimana diatur oleh Goemas beserta semua perubahan-perubahan terhadap Syarat dan Ketentuan ini, tanpa pengecualian.</p>
		</div> -->
		<div class="container px-4">
			<div v-html="term_conditions"></div>
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
				term_conditions: '',
				scrollPosition: null,
				is_load: false,
			}
		},
		mounted(){
			document.getElementById('top').scrollIntoView({
        behavior: 'smooth'
      });
    	window.addEventListener('scroll', this.updateScroll);
    	this.getTermsConditions()
		},
		methods:{
			updateScroll() {
	      this.scrollPosition = window.scrollY
	    },
	    getTermsConditions(){
	    	this.is_load = true
	    	axios
	    		.get(config.API+'/general-setting-term')
	    		.then(response => {
	    			this.term_conditions = response.data.term_and_conditions
	    			this.is_load = false
	    		})
	    }
		}
	}
</script>
<style scope>
	h3{
		padding-top: 12px;
	}
	p,span{
		font-size: 14px;
	  font-family: Poppins-Regular;
	}
</style>