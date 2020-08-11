<template>
  <div class="section-title">
    <slot name="icon"></slot>
    <slot name="title"></slot>
  </div>
</template>

<script>
export default {
  name: "SectionTitle",
};
</script>>

<style scoped>
.section-title {
  position: relative;
  border-bottom: 2px solid #1e477b;
  margin-bottom: 20px;
  padding: 10px 30px 5px;
  font-size: 1rem;
  background-color: #e2e2f3;
  display: inline-block;
  border-radius: 20px 20px 0 0;
  transform: rotate(-10deg);
}
</style>