<template>
<div class="Media">
    <FadeInComponent>
    <h1>Media</h1>
    <p>
        comi's Portfolio<br>
        Twitter<br>
        Youtube<br>
        Github
    </p>
    </FadeInComponent>
</div>
</template>

<script>
import FadeInComponent from '@/components/FadeInComponent.vue'
export default {
  name: 'Media',
  components: {
    FadeInComponent
  }
}
</script>