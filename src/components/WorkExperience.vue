<template>
  <div>
    <div class="work-experience-section">
      <div class="section-title">
        <i class="fas fa-laptop-code"></i> WORK EXPERIENCE
      </div>

      <!-- 1st -->

      <div class="section-details">
        <div class="tenure-ball-line">
          <div class="tenure-ball"></div>
          <div class="tenure-line"></div>
        </div>
        <div class="tenure-dates">
          <span class="from">Feb 2019</span> To
          <span class="to">Current</span>
        </div>
        <div class="work-details">
          <div class="company-name">Quinstreet India Private Limited</div>
          <div class="position-name">Front End Developer</div>
          <ul>
            <li>Responsible to develope product landing pages based on common platform and compatible with different browsers.</li>
            <li>Preparation of documentation for all developed products in common place for team use.</li>
            <li>Integrated Google Tag Manager into existing products in order to derive analytical findings for business users.</li>
            <li>Guided new team mates onboarding and to understand existing products and platform knowlwdge.</li>
            <li>Developed javascript utilities for common usages across different product websites.</li>
          </ul>
        </div>
      </div>

      <!-- 2nd -->

      <div class="section-details">
        <div class="tenure-ball-line">
          <div class="tenure-ball"></div>
          <div class="tenure-line">
            <!-- <svg id="chart" width="100%" height="100%">
              <line x1="20" y1="20" x2="20" y2="130" />
            </svg>-->
          </div>
        </div>
        <div class="tenure-dates">
          <span class="from">Aug 2015</span> To
          <span class="to">Jan 2016</span>
        </div>
        <div class="work-details">
          <div class="company-name">Indecomm Global Services</div>
          <div class="position-name">Front End Developer</div>
          <ul>
            <li>
              Communicated with product managers and UX designers to translate project requirements and business
              objectives into polished user interfaces.
            </li>
            <li>Designed, implemented and monitored web pages and sites for continuous improvement</li>
            <li>Created site layout and user interface using HTML and CSS practices</li>
            <li>Contributed in team by developing pixel perfect user interfaces as per client requirements</li>
            <li>Have helped team to utilize JQuery instead of vanilla Javascript</li>
            <li>Deployed developed web pages to clients FTP server using in house tools</li>
          </ul>
        </div>
      </div>

      <!-- 3rd -->

      <div class="section-details">
        <div class="tenure-ball-line">
          <div class="tenure-ball"></div>
          <div class="tenure-line">
            <!-- <svg id="chart" width="100%" height="100%">
              <line x1="20" y1="20" x2="20" y2="130" />
            </svg>-->
          </div>
        </div>
        <div class="tenure-dates">
          <span class="from">Dec 2014</span> To
          <span class="to">Jul 2015</span>
        </div>
        <div class="work-details">
          <div class="company-name">Aexonic Technologies Private Limited</div>
          <div class="position-name">Front End Developer</div>
          <ul>
            <li>
              Have worked to prepare web pages as per wire frames provided, Using technologies as HTML, CSS,
              Javascript, JQuery. etc
            </li>
            <li>Had to utilize back-end APIs and as per response, was tasked to prepare different UI components</li>
            <li>Created site layout and user interface using HTML and CSS practices</li>
            <li>Collaborated with in-house web designers to create sleek and innovative UI design</li>
            <li>Have communicated with clients, to better understand software requirement specifications</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkExperience"
};
</script>

<style lang="scss" scoped>
.work-experience-section {
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
      align-self: center;

      .from,
      .to {
        display: block;
      }
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
