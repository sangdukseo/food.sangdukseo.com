<template>
  <transition appear name="v--mask">
    <footer v-once class="blog__footer">
      <div class="signature cosmicjs">
        <a href="https://cosmicjs.com/add-bucket?import_bucket=5cad6ea5e224484fdc1c9d6f"><img src="https://s3-us-west-2.amazonaws.com/cosmicjs/51fe54d0-4f6e-11e9-9f32-8d001da69630-powered-by-cosmicjs.svg" /></a>
      </div>
    </footer>
  </transition>
</template>

<script>
export default { name: 'blog-footer' }
</script>
