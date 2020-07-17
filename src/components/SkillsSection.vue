<template>
  <div class="skills-section">
    <div class="section-title">
      <i class="fas fa-list"></i> SKILLS
    </div>
    <div class="section-details">
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Bootstrap</li>
        <li>Javascript (ECMAScript)</li>
        <li>JQuery</li>
        <li>Vue JS</li>
        <li>Vue CLI</li>
        <li>JSON</li>
        <li>AJAX</li>
        <li>Webpack</li>
        <li>Git</li>
        <li>Github</li>
        <li>Basic Image Editing</li>
        <li>Responsive Designs</li>
        <li>Web User Interfaces</li>
        <li>Web Development Projects</li>
        <li>Software Best Practices</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkillsSection"
};
</script>

<style lang="scss" scoped>
li {
  display: inline-block;
  margin: 0.4rem 0.4rem;
  background-color: #e6e3de;
  padding: 0.4rem 1rem;
  border-radius: 1rem;
}

.skills-section {
  margin-bottom: 30px;

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

  .section-details {
    display: flex;
    padding: 10px 30px;
  }
}
</style>
