<template>
  <div class="skills-section">
    <SectionTitle>
      <template v-slot:icon>
        <i class="fas fa-list"></i>
      </template>
      <template v-slot:title>&nbsp;SKILLS</template>
    </SectionTitle>

    <div class="section-details">
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Bootstrap</li>
        <li>Javascript (ECMAScript)</li>
        <li>JQuery</li>
        <li>Vue JS</li>
        <li>Vuex</li>
        <li>Vue CLI</li>
        <li>Vue Router</li>
        <li>Vue SSR(Nuxt.js)</li>
        <li>JSON</li>
        <li>AJAX</li>
        <li>Webpack</li>
        <li>Babel JS</li>
        <li>Node JS</li>
        <li>Npm</li>
        <li>Npx</li>
        <li>ESLint</li>
        <li>Vetur</li>
        <li>VS Code</li>
        <li>Prettier</li>
        <li>Emmet</li>
        <li>Git</li>
        <li>Github</li>
        <li>Basic Image Editing</li>
        <li>Responsive Web Design</li>
      </ul>
    </div>
  </div>
</template>

<script>
import SectionTitle from "./utils/SectionTitle";

export default {
  name: "SkillsSection",
  components: {
    SectionTitle,
  },
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

  .section-details {
    display: flex;
    padding: 10px 30px;
  }
}
</style>
