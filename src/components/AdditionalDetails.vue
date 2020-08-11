<template>
  <div class="additional-details-section">
    <SectionTitle>
      <template v-slot:icon>
        <i class="fas fa-info-circle"></i>
      </template>
      <template v-slot:title>&nbsp;ADDITIONAL DETAILS</template>
    </SectionTitle>
    <div class="section-details">
      <!-- Full Name -->
      <div id="full-name">
        <span id="label">Full Name</span>
        <span id="value">Tushar Diliprao Kshirsagar</span>
      </div>

      <!-- Date Of Birth -->
      <div id="date-of-birth">
        <span id="label">Date Of Birth</span>
        <span id="value">1st July 1989</span>
      </div>

      <!-- Languages Known -->
      <div id="date-of-birth">
        <span id="label">Languages Known</span>
        <span id="value">English, Hindi and Marathi</span>
      </div>

      <!-- Email Address -->
      <div id="date-of-birth">
        <span id="label">Email Address</span>
        <span id="value">kshirsagartd@gmail.com</span>
      </div>

      <!-- Contact No -->
      <div id="date-of-birth">
        <span id="label">Contact No</span>
        <span id="value">+91-9503789589, 9284747129</span>
      </div>

      <!-- Current Address -->
      <div id="date-of-birth">
        <span id="label">Current Address</span>
        <span id="value">Flat No 128, Building No 6, Ram Society, Yerwada, Pune 411006.</span>
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from "./utils/SectionTitle";

export default {
  name: "AdditionalDetails",
  components: {
    SectionTitle,
  },
};
</script>

<style lang="scss" scoped>
.additional-details-section {
  margin-bottom: 30px;

  .section-details {
    padding: 10px 30px;

    & > div {
      display: flex;
      padding: 4px 0;

      #label {
        flex: 3;
      }
      #value {
        flex: 7;
      }
    }
  }
}
</style>
