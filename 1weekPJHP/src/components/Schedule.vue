<template>
<div class="schedule">
    <FadeInComponent>
    <h1>Streeming schedule</h1>
    <p>
        ・5/23(Mon) 15:00～<br>
        ・5/26(Thu) 23:30～<br>
        ・5/28(Sat) 15:00～<br>
        and more!
    </p>
    </FadeInComponent>
</div>
</template>

<script>
import FadeInComponent from '@/components/FadeInComponent.vue'
export default {
  name: 'What',
  components: {
    FadeInComponent
  }
}
</script>