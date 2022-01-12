<template>
  <div id="app">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <div class="w-100" style="background-color: #f4f4f4">
      <b-row class="justify-content-center w-100" no-gutters>
        <b-col cols="12">
          <div class="bg-white" style="min-height: 100vh">
            <router-view/>

          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
	metaInfo() {
    return {
      title: 'Decision Support System',
      meta: [
        { name: 'description', content: 'Decision Support System'},
        { property: 'og:title', content: 'Decision Support System'},
        { property: 'og:site_name', content: 'Decision Support System'},
        { property: 'og:description', content: 'Decision Support System'},
        { property: 'og:type', content: 'profile'},
        { property: 'og:image', content: '' }    
      ]
    }
  },
  name: 'App'
}
</script>
