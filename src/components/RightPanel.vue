<template>
  <div>
    <NameProfile />
    <ProfessionalSummery />
    <WorkExperience />
  </div>
</template>

<script>

import NameProfile from "./NameProfile";
import ProfessionalSummery from "./ProfessionalSummery";
import WorkExperience from "./WorkExperience";



export default {
  name: "RightPanel",
  components: {
    NameProfile,
    ProfessionalSummery,
    WorkExperience
  }
};
</script>
