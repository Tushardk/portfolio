<template>
  <div>
    <div class="name-profile">
      <div class="name-big">TUSHAR KSHIRSAGAR</div>
      <div class="profile">FRONT END DEVELOPER</div>
    </div>
    <div class="work-experience">
      <div class="icon-heading">
        <span class="icon">
          <i class="fa fa-briefcase"></i>
        </span>
        <span class="heading">WORK EXPERIENCE</span>
      </div>
      <hr />
    </div>
    <div class="company-details">
      <div class="ubhi-line-cont">
        <div class="ubhi-line"></div>
      </div>
      <div class="tenure">FEB-2016 - Till Date</div>
      <div class="work-details">
        <div class="company-name">Quinstreet India Private Limited</div>
        <ul>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, eos.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus qui voluptatem obcaecati!</li>
          <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam totam soluta perferendis incidunt quod, quisquam quae sequi laborum</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss" scoped>
.name-profile {
  margin: 1rem 0 4rem 0;

  .name-big {
    font-size: 2.5rem;
    font-weight: bold;
  }
  .profile {
    font-size: 1rem;
    letter-spacing: 0.4rem;
    margin: 1rem 0;
    font-weight: bold;
  }
}

.work-experience {
  .icon-heading {
    margin: 0 0 1rem 0;
    .icon {
      border: 2px solid #333333;
      border-radius: 50%;
      padding: 0.5rem;
      font-size: 1rem;
    }
    .heading {
      margin: 0 0 0 1rem;
      letter-spacing: 0.5rem;
    }
  }
  hr {
    width: 91%;
    margin-left: auto;
    height: 0.1rem;
    background: #333;
  }
}

.company-details {
  display: flex;

  .ubhi-line-cont {
    flex: 2;
    position: relative;
    .ubhi-line {
      border-left: 0.1rem solid #333333;
      margin: 20% 0 0 50%;
      width: 50%;
      height: 100%;
      &::before {
        content: "O";
        position: absolute;
        top: 1%;
        left: 43%;
        color: #333;
        font-size: 1.5rem;
      }
    }
  }
  .tenure {
    flex: 2;
  }
  .work-details {
    flex: 6;
    .company-name {
      font-size: 1rem;
      font-weight: bold;
      margin: 0.5rem 0;
    }
  }
}
</style>
