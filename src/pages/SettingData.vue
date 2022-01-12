<template>
	<div class="w-100">
		<div class="wrapper">
		<nav id="sidebar" class="sidebar js-sidebar">
			<div class="sidebar-content js-simplebar">
				<router-link class="sidebar-brand" to="/">
          <span class="align-middle">Decision Support System</span>
        </router-link>

				<ul class="sidebar-nav">
					<li class="sidebar-item">
						<router-link class="sidebar-link" to="/">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calculator-fill" viewBox="0 0 16 16">
  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm2 .5v2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5zm0 4v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zM4.5 9a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM4 12.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zM7.5 6a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM7 9.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zm.5 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM10 6.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zm.5 2.5a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-1z"/>
</svg> <span class="align-middle">SAW</span>
            </router-link>
					</li>

					<li class="sidebar-item active">
						<router-link class="sidebar-link" to="/setting-data">
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
  <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
</svg> <span class="align-middle">Pengaturan</span>
            </router-link>
					</li>

				</ul>
			</div>
		</nav>

		<div class="main">
			

			<main class="content">
				<div class="container p-0">
					<h1 class="h3 mb-3"><strong>Pengaturan</strong></h1>

					<!-- SAW Alternatif Pengaturan-->
					<!-- <h5>Pengaturan Data Alternatif</h5> -->
					<div class="p-3 bg-white mb-5 w-100">
						<table class="table table-striped table-bordered">
						  <thead>
						    <tr>
						      <th scope="col" colspan="2" width="800">Alternatif</th>
						      <th scope="col">C1 (Benefit) <br> <input type="number" v-model="persen.c1" class="persen"> % </th>
						      <th scope="col">C2 (Benefit) <br> <input type="number" v-model="persen.c2" class="persen"> % </th>
						      <th scope="col">C3 (Benefit) <br> <input type="number" v-model="persen.c3" class="persen"> % </th>
						      <th scope="col">C4 (Benefit) <br> <input type="number" v-model="persen.c4" class="persen"> % </th>
						      <th scope="col">C5 (Cost) <br> <input type="number" v-model="persen.c5" class="persen"> % </th>
						    </tr>
						  </thead>
						  <tbody>
						    <tr>
						      <th scope="row">L1</th>
						      <th scope="row">
						      	<input type="text" placeholder="Masukkan alternatif 1" v-model="alternatif.l1">
						      </th>
						      <td><input type="number" v-model="c1.l1"></td>
						      <td><input type="number" v-model="c2.l1"></td>
						      <td><input type="number" v-model="c3.l1"></td>
						      <td><input type="number" v-model="c4.l1"></td>
						      <td><input type="number" v-model="c5.l1"></td>
						    </tr>
						    <tr>
						      <th scope="row">L2</th>
						      <th scope="row">
						      	<input type="text" placeholder="Masukkan alternatif 2" v-model="alternatif.l2">
						      </th>
						      <td><input type="number" v-model="c1.l2"></td>
						      <td><input type="number" v-model="c2.l2"></td>
						      <td><input type="number" v-model="c3.l2"></td>
						      <td><input type="number" v-model="c4.l2"></td>
						      <td><input type="number" v-model="c5.l2"></td>
						    </tr>
						    <tr>
						      <th scope="row">L3</th>
						      <th scope="row">
						      	<input type="text" placeholder="Masukkan alternatif 3" v-model="alternatif.l3">
						      </th>
						      <td><input type="number" v-model="c1.l3"></td>
						      <td><input type="number" v-model="c2.l3"></td>
						      <td><input type="number" v-model="c3.l3"></td>
						      <td><input type="number" v-model="c4.l3"></td>
						      <td><input type="number" v-model="c5.l3"></td>
						    </tr>
						    <tr>
						      <th scope="row">L4</th>
						      <th scope="row">
						      	<input type="text" placeholder="Masukkan alternatif 4" v-model="alternatif.l4">
						      </th>
						      <td><input type="number" v-model="c1.l4"></td>
						      <td><input type="number" v-model="c2.l4"></td>
						      <td><input type="number" v-model="c3.l4"></td>
						      <td><input type="number" v-model="c4.l4"></td>
						      <td><input type="number" v-model="c5.l4"></td>
						    </tr>
						    <tr>
						      <th scope="row">L5</th>
						      <th scope="row">
						      	<input type="text" placeholder="Masukkan alternatif 5" v-model="alternatif.l5">
						      </th>
						      <td><input type="number" v-model="c1.l5"></td>
						      <td><input type="number" v-model="c2.l5"></td>
						      <td><input type="number" v-model="c3.l5"></td>
						      <td><input type="number" v-model="c4.l5"></td>
						      <td><input type="number" v-model="c5.l5"></td>
						    </tr>
						  </tbody>
						</table>
						<button class="button-primary px-4" @click="togglePost()">Simpan</button>
					</div>

				</div>
			</main>
		</div>
	</div>
	</div>
</template>
<script>
  import {mapGetters,mapMutations} from 'vuex';
  import config from '@/config/index.js'
  import axios from 'axios'

	export default{
		components: {
		},
		data(){
			return{
        alternatif: JSON.parse(JSON.stringify(this.getAlternatif())),
        persen: JSON.parse(JSON.stringify(this.getPersen())),
        c1: JSON.parse(JSON.stringify(this.getC1())),
        c2: JSON.parse(JSON.stringify(this.getC2())),
        c3: JSON.parse(JSON.stringify(this.getC3())),
        c4: JSON.parse(JSON.stringify(this.getC4())),
        c5: JSON.parse(JSON.stringify(this.getC5())),
        xValues: ["C1", "C2", "C3", "C4", "C4"],
				yValues: [55, 49, 44, 24, 15],
				barColors: ["black", "green","blue","orange","brown"],
			}
		},
		computed:{
			max_c1(){
				return Math.max(this.c1.l1,this.c1.l2,this.c1.l3,this.c1.l4,this.c1.l5)
			},
			max_c2(){
				return Math.max(this.c2.l1,this.c2.l2,this.c2.l3,this.c2.l4,this.c2.l5)
			},
			max_c3(){
				return Math.max(this.c3.l1,this.c3.l2,this.c3.l3,this.c3.l4,this.c3.l5)
			},
			max_c4(){
				return Math.max(this.c4.l1,this.c4.l2,this.c4.l3,this.c4.l4,this.c4.l5)
			},
			max_c5(){
				return Math.max(this.c5.l1,this.c5.l2,this.c5.l3,this.c5.l4,this.c5.l5)
			},


			min_c1(){
				return Math.min(this.c1.l1,this.c1.l2,this.c1.l3,this.c1.l4,this.c1.l5)
			},
			min_c2(){
				return Math.min(this.c2.l1,this.c2.l2,this.c2.l3,this.c2.l4,this.c2.l5)
			},
			min_c3(){
				return Math.min(this.c3.l1,this.c3.l2,this.c3.l3,this.c3.l4,this.c3.l5)
			},
			min_c4(){
				return Math.min(this.c4.l1,this.c4.l2,this.c4.l3,this.c4.l4,this.c4.l5)
			},
			min_c5(){
				return Math.min(this.c5.l1,this.c5.l2,this.c5.l3,this.c5.l4,this.c5.l5)
			},
		},
		mounted(){
			this.Chart()
		},
		methods:{
			...mapGetters([
				'getAlternatif',
				'getPersen',
				'getC1',
				'getC2',
				'getC3',
				'getC4',
				'getC5',
			]),
			...mapMutations([
				'setAlternatif',
				'setPersen',
				'setC1',
				'setC2',
				'setC3',
				'setC4',
				'setC5',
			]),
			togglePost(){
				this.toggleAlternatif()
				this.togglePersen()
				this.toggleC1()
				this.toggleC2()
				this.toggleC3()
				this.toggleC4()
				this.toggleC5()
				this.$router.go()
			},
			toggleAlternatif(){
				let post = {
					l1: this.alternatif.l1,
		    	l2: this.alternatif.l2,
		    	l3: this.alternatif.l3,
		    	l4: this.alternatif.l4,
		    	l5: this.alternatif.l5
				}
				this.setAlternatif(JSON.parse(JSON.stringify(post)))
			},
			togglePersen(){
				let post = {
					c1: this.persen.c1,
		    	c2: this.persen.c2,
		    	c3: this.persen.c3,
		    	c4: this.persen.c4,
		    	c5: this.persen.c5
				}
				this.setPersen(JSON.parse(JSON.stringify(post)))
			},
			toggleC1(){
				let post = {
					l1: this.c1.l1,
		    	l2: this.c1.l2,
		    	l3: this.c1.l3,
		    	l4: this.c1.l4,
		    	l5: this.c1.l5
				}
				this.setC1(JSON.parse(JSON.stringify(post)))
			},
			toggleC2(){
				let post = {
					l1: this.c2.l1,
		    	l2: this.c2.l2,
		    	l3: this.c2.l3,
		    	l4: this.c2.l4,
		    	l5: this.c2.l5
				}
				this.setC2(JSON.parse(JSON.stringify(post)))
			},
			toggleC3(){
				let post = {
					l1: this.c3.l1,
		    	l2: this.c3.l2,
		    	l3: this.c3.l3,
		    	l4: this.c3.l4,
		    	l5: this.c3.l5
				}
				this.setC3(JSON.parse(JSON.stringify(post)))
			},
			toggleC4(){
				let post = {
					l1: this.c4.l1,
		    	l2: this.c4.l2,
		    	l3: this.c4.l3,
		    	l4: this.c4.l4,
		    	l5: this.c4.l5
				}
				this.setC4(JSON.parse(JSON.stringify(post)))
			},
			toggleC5(){
				let post = {
					l1: this.c5.l1,
		    	l2: this.c5.l2,
		    	l3: this.c5.l3,
		    	l4: this.c5.l4,
		    	l5: this.c5.l5
				}
				this.setC5(JSON.parse(JSON.stringify(post)))
			},
			sortSaw(){
				var v1 = parseFloat(((this.c1.l1/this.max_c1)*(this.persen.c1/100)).toFixed(4))+parseFloat(((this.c2.l1/this.max_c2)*(this.persen.c2/100)).toFixed(4))+parseFloat(((this.c3.l1/this.max_c3)*(this.persen.c3/100)).toFixed(4))+parseFloat(((this.c4.l1/this.max_c4)*(this.persen.c4/100)).toFixed(4))+parseFloat(((this.min_c5/this.c5.l1)*(this.persen.c5/100)).toFixed(4));
				var v2 = parseFloat(((this.c1.l2/this.max_c1)*(this.persen.c1/100)).toFixed(4))+parseFloat(((this.c2.l2/this.max_c2)*(this.persen.c2/100)).toFixed(4))+parseFloat(((this.c3.l2/this.max_c3)*(this.persen.c3/100)).toFixed(4))+parseFloat(((this.c4.l2/this.max_c4)*(this.persen.c4/100)).toFixed(4))+parseFloat(((this.min_c5/this.c5.l2)*(this.persen.c5/100)).toFixed(4));
				var v3 = parseFloat(((this.c1.l3/this.max_c1)*(this.persen.c1/100)).toFixed(4))+parseFloat(((this.c2.l3/this.max_c2)*(this.persen.c2/100)).toFixed(4))+parseFloat(((this.c3.l3/this.max_c3)*(this.persen.c3/100)).toFixed(4))+parseFloat(((this.c4.l3/this.max_c4)*(this.persen.c4/100)).toFixed(4))+parseFloat(((this.min_c5/this.c5.l3)*(this.persen.c5/100)).toFixed(4));
				var v4 = parseFloat(((this.c1.l4/this.max_c1)*(this.persen.c1/100)).toFixed(4))+parseFloat(((this.c2.l4/this.max_c2)*(this.persen.c2/100)).toFixed(4))+parseFloat(((this.c3.l4/this.max_c3)*(this.persen.c3/100)).toFixed(4))+parseFloat(((this.c4.l4/this.max_c4)*(this.persen.c4/100)).toFixed(4))+parseFloat(((this.min_c5/this.c5.l4)*(this.persen.c5/100)).toFixed(4));
				var v5 = parseFloat(((this.c1.l5/this.max_c1)*(this.persen.c1/100)).toFixed(4))+parseFloat(((this.c2.l5/this.max_c2)*(this.persen.c2/100)).toFixed(4))+parseFloat(((this.c3.l5/this.max_c3)*(this.persen.c3/100)).toFixed(4))+parseFloat(((this.c4.l5/this.max_c4)*(this.persen.c4/100)).toFixed(4))+parseFloat(((this.min_c5/this.c5.l5)*(this.persen.c5/100)).toFixed(4));

				const points = [v1, v2, v3, v4, v5];
				points.sort(function(a, b){return b-a});
				return points;
			},
			referensiSaw(){
				var v1 = parseFloat(((this.c1.l1/this.max_c1)*(this.persen.c1/100)).toFixed(4))+parseFloat(((this.c2.l1/this.max_c2)*(this.persen.c2/100)).toFixed(4))+parseFloat(((this.c3.l1/this.max_c3)*(this.persen.c3/100)).toFixed(4))+parseFloat(((this.c4.l1/this.max_c4)*(this.persen.c4/100)).toFixed(4))+parseFloat(((this.min_c5/this.c5.l1)*(this.persen.c5/100)).toFixed(4));
				var v2 = parseFloat(((this.c1.l2/this.max_c1)*(this.persen.c1/100)).toFixed(4))+parseFloat(((this.c2.l2/this.max_c2)*(this.persen.c2/100)).toFixed(4))+parseFloat(((this.c3.l2/this.max_c3)*(this.persen.c3/100)).toFixed(4))+parseFloat(((this.c4.l2/this.max_c4)*(this.persen.c4/100)).toFixed(4))+parseFloat(((this.min_c5/this.c5.l2)*(this.persen.c5/100)).toFixed(4));
				var v3 = parseFloat(((this.c1.l3/this.max_c1)*(this.persen.c1/100)).toFixed(4))+parseFloat(((this.c2.l3/this.max_c2)*(this.persen.c2/100)).toFixed(4))+parseFloat(((this.c3.l3/this.max_c3)*(this.persen.c3/100)).toFixed(4))+parseFloat(((this.c4.l3/this.max_c4)*(this.persen.c4/100)).toFixed(4))+parseFloat(((this.min_c5/this.c5.l3)*(this.persen.c5/100)).toFixed(4));
				var v4 = parseFloat(((this.c1.l4/this.max_c1)*(this.persen.c1/100)).toFixed(4))+parseFloat(((this.c2.l4/this.max_c2)*(this.persen.c2/100)).toFixed(4))+parseFloat(((this.c3.l4/this.max_c3)*(this.persen.c3/100)).toFixed(4))+parseFloat(((this.c4.l4/this.max_c4)*(this.persen.c4/100)).toFixed(4))+parseFloat(((this.min_c5/this.c5.l4)*(this.persen.c5/100)).toFixed(4));
				var v5 = parseFloat(((this.c1.l5/this.max_c1)*(this.persen.c1/100)).toFixed(4))+parseFloat(((this.c2.l5/this.max_c2)*(this.persen.c2/100)).toFixed(4))+parseFloat(((this.c3.l5/this.max_c3)*(this.persen.c3/100)).toFixed(4))+parseFloat(((this.c4.l5/this.max_c4)*(this.persen.c4/100)).toFixed(4))+parseFloat(((this.min_c5/this.c5.l5)*(this.persen.c5/100)).toFixed(4));

				const points = [v1, v2, v3, v4, v5];
				return points;
			},
			Chart(){

				new Chart("myChart", {
				  type: "bar",
				  data: {
				    labels: this.xValues,
				    datasets: [{
				      backgroundColor: this.barColors,
				      data: this.referensiSaw()
				    }]
				  },
				  options: {
				    legend: {display: false},
				    title: {
				      display: true,
				      text: "Nilai Preferensi SAW"
				    }
				  }
				});
			}
		}
	}
</script>

<style scoped>
	input[type=number].persen{
		width: 75px!important;
	}
	input[type=number]{
		width: 100px!important;
	}
	.alternatif-show input{
		pointer-events: none;
		border: none;
		background: transparent;
	}
	th{
		text-align: left!important;
    vertical-align: sub!important;
	}
	.table > :not(:last-child) > :last-child > * {
		width: 65px!important;
	}
</style>