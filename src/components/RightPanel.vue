<template>
  <div>
    <NameProfile />
    <ProfessionalSummery />
    <WorkExperience />
    <SkillsSection />
    <EducationDetails />
    <AdditionalDetails />
  </div>
</template>

<script>
import NameProfile from "./NameProfile";
import ProfessionalSummery from "./ProfessionalSummery";
import WorkExperience from "./WorkExperience";
import SkillsSection from "./SkillsSection";
import EducationDetails from "./EducationDetails";
import AdditionalDetails from "./AdditionalDetails";

export default {
  name: "RightPanel",
  components: {
    NameProfile,
    ProfessionalSummery,
    WorkExperience,
    SkillsSection,
    EducationDetails,
    AdditionalDetails,
  },
};
</script>
