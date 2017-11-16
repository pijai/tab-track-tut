<template>
  <panel title="YouTube Video">
    <youtube
      :video-id="youtubeId"
      :player-width="800"
      :player-height="330">
    </youtube>
  </panel>
</template>

<script>
import Panel from '@/components/Panel'

export default {
  components: {
    Panel
  },
  props: [
    'youtubeId'
  ]
}
</script>

<style scoped>
</style>