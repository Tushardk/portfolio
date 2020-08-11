<template>
  <div class="education-details-section">
    <SectionTitle>
      <template v-slot:icon>
        <i class="fas fa-book"></i>
      </template>
      <template v-slot:title>&nbsp;EDUCATION DETAILS</template>
    </SectionTitle>

    <!-- 1st  -->
    <div class="section-details">
      <div class="duration-ball-line">
        <div class="duration-ball"></div>
        <div class="duration-line"></div>
      </div>
      <div class="passout-year">July 2014</div>
      <div class="degree-details">
        <div class="degree-name">Master of Computer Applications (MCA)</div>
        <div class="university-name">Pune University</div>
      </div>
      <div class="place">Baramati, Maharashtra</div>
    </div>

    <!-- 2nd  -->
    <div class="section-details">
      <div class="duration-ball-line">
        <div class="duration-ball"></div>
        <div class="duration-line"></div>
      </div>
      <div class="passout-year">April 2011</div>
      <div class="degree-details">
        <div class="degree-name">Bachelor of Computer Applications (BCA)</div>
        <div class="university-name">Swami Ramanand Teerth Marathwada University</div>
      </div>
      <div class="place">Nanded, Maharashtra</div>
    </div>
  </div>
</template>

<script>
import SectionTitle from "./utils/SectionTitle";

export default {
  name: "EducationDetails",
  components: {
    SectionTitle,
  },
};
</script>

<style lang="scss" scoped>
.education-details-section {
  margin-bottom: 30px;

  .section-details {
    display: flex;
    padding: 10px 30px;
    .duration-ball-line {
      flex: 1;
      display: flex;
      position: relative;
      justify-content: center;
      .duration-ball {
        position: absolute;
        width: 10px;
        height: 10px;
        border-radius: 100%;
        border: 2px solid #868181;
        background: #fff;
        z-index: 1;
      }
      .duration-line {
        position: absolute;
        width: 2px;
        height: 102%;
        bottom: 0;
        background-color: #868181;
      }
    }
    .passout-year {
      flex: 2;
      align-self: center;
      display: block;
    }

    .degree-details {
      flex: 5;
      .degree-name {
        font-size: 1rem;
        font-weight: bold;
      }
      .university-name {
        font-style: italic;
        margin: 0.5rem 0;
        font-size: 0.9rem;
      }
    }
    .place {
      flex: 2;
      align-self: center;
      display: block;
      font-style: italic;
    }
  }
}
</style>
