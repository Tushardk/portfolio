<template>
  <div>
    <section class="main-section">
      <section class="left-section">
        <Left />
      </section>
      <section class="right-section">
        <Right />
      </section>
    </section>
  </div>
</template>

<script>
import Left from "./Left";
import Right from "./Right";
export default {
  name: "Home",
  components: {
    Left,
    Right
  }
};
</script>

<style lang="scss" scoped>
.main-section {
  display: flex;
  margin: 0 auto;
  max-width: 1000px;
  min-height: 100vh;
  box-shadow: 0 0 20px #333;

  .left-section {
    flex: 4;
    background: #333333;
    color: #ffffff;
    padding: 2rem 0;
  }

  .right-section {
    flex: 6;
    background: #ffffff;
    color: #333333;
    padding: 2rem 1rem;
  }

}
</style>
