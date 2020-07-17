<template>
  <div>
    <NameProfile />
    <ProfessionalSummery />
    <WorkExperience />
    <SkillsSection />
  </div>
</template>

<script>

import NameProfile from "./NameProfile";
import ProfessionalSummery from "./ProfessionalSummery";
import WorkExperience from "./WorkExperience";
import SkillsSection from "./SkillsSection";



export default {
  name: "RightPanel",
  components: {
    NameProfile,
    ProfessionalSummery,
    WorkExperience,
    SkillsSection
  }
};
</script>
