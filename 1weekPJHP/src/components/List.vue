<template>
<div class="List">
<FadeInComponent>
<h1>List of Productions</h1>
    <div class="d-flex justify-content-start">
        <p>
            <img src="@/assets/img/company.jpg">
            <img src="@/assets/img/company.jpg">
            <img src="@/assets/img/company.jpg">
        </p>
    </div>
</FadeInComponent>
</div>
</template>

<style>
img {
    width: 400px;
    height: 300px;
}
</style>

<script>
import FadeInComponent from '@/components/FadeInComponent.vue'
export default {
  name: 'What',
  components: {
    FadeInComponent
  }
}
</script>