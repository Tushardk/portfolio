<template>
  <div>
    <section class="main-section">
      <section class="left-section">
        <LeftPanel />
      </section>
      <section class="right-section">
        <RightPanel />
      </section>
    </section>
  </div>
</template>

<script>
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
export default {
  name: "HomeSection",
  components: {
    LeftPanel,
    RightPanel
  }
};
</script>

<style lang="scss" scoped>
.main-section {
  display: flex;
  margin: 0 auto;
  max-width: 1200px;
  min-height: 100vh;
  box-shadow: 0 0 20px #333;

  .left-section {
    flex: 3;
    background: #333333;
    color: #ffffff;
    padding: 2rem 0;
  }

  .right-section {
    flex: 7;
    background: #ffffff;
    color: #333333;
    padding: 2rem 1rem;
    color: #1e477b;
  }

}
</style>
