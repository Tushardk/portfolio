<template>
  <div class="porfessional-summery-section">
    <div class="section-title">
      <i class="fas fa-pen"></i> PROFESSIONAL SUMMERY
    </div>
    <div class="section-details">
      Front end developer with 5 and half years of experience, Expert in developing Responsive & Interactive websites.
      Expert in HTML, CSS, JavaScript, JQuery. Currently learning Vue JS and looking out for opportunities as a
      Vue JS front end developer.
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfessionalSummery"
};
</script>

<style lang="scss" scoped>

.porfessional-summery-section {
  .section-title {
    letter-spacing: 0.1rem;
    position: relative;
    margin-bottom: 2%;
    padding: 2% 0;
    border-bottom: 2px solid #1e477b;
    margin-bottom: 20px;
    padding: 10px 30px;
    font-size: 1.3rem;
  }

  .section-details {
    display: flex;
    padding: 10px 30px;
    .tenure-ball-line {
      flex: 1;
      display: flex;
      position: relative;
      justify-content: center;
      .tenure-ball {
        position: absolute;
        width: 10px;
        height: 10px;
        border-radius: 100%;
        border: 2px solid #868181;
        background: #fff;
        z-index: 1;
      }
      .tenure-line {
        position: absolute;
        width: 2px;
        height: 102%;
        bottom: 0;
        background-color: #868181;
      }
    }
    .tenure-dates {
      flex: 2;
    }

    .work-details {
      flex: 7;
      .company-name {
        font-size: 1rem;
        font-weight: bold;
      }
      .position-name {
        font-style: italic;
        margin: 0.5rem 0;
        font-size: 0.9rem;
      }
    }
  }
}
</style>
