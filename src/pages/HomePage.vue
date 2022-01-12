<template>
	<div class="w-100">
		<Desktop></Desktop>
	</div>
</template>
<script>
	import Desktop from '@/pages/HomePageDesktop';
	export default{
		components: {
			Desktop,
		},
		data(){
			return {
				is_desktop: true
			}
		},
		created() {
			if (window.innerWidth > 768) {
				this.is_desktop = true
			}else{
				this.is_desktop = false
			}
		}
	}
</script>
