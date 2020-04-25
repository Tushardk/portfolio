<template>
  <div>
    <section class="main-section">
      <section class="left-section">
        <div class="profile-picture">
          <img src="../assets/profile-pic.jpg" alt="Tushar Kshirsagar" />
        </div>
        <div class="info-section">
          <h1 class="info-heading">INFO</h1>
          <hr>
          <div class="name-section">
            <i class="fas fa-user"></i>
            <div class="label">Name</div>
            <div class="value">Tushar Kshirsagar</div>
          </div>
          <div class="email-section">
            <i class="fas fa-envelope-square"></i>
            <div class="label">Email</div>
            <div class="value">kshirsagartd@gmail.com</div>
          </div>
          <div class="website-section">
            <i class="fas fa-tv"></i>
            <div class="label">Website</div>
            <div class="value"><a href="https://tushardk.github.io/profile/index.html">https://tushardk.github.io/profile/index.html</a></div>
          </div>
          <div class="phone-section">
            <i class="fas fa-phone-alt"></i>
            <div class="label">Phone</div>
            <div class="value">+91 9503789589</div>
          </div>
        </div>
      </section>
      <section class="right-section">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere corporis maiores culpa, doloremque dolorum quasi aliquam laborum nesciunt, delectus aperiam ad porro iusto fugit reprehenderit dolor quis magnam unde. Temporibus?</section>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
.main-section {
    display: flex;
    margin: 0 auto;
    max-width: 1000px;
    min-height: 100vh;
    box-shadow: 0 0 20px #333;

  .left-section {
    flex: 4;
    background: #333333;
    color: #ffffff;
    padding:2rem 0;

    .profile-picture {
      text-align: center;
      margin: 0 0 4rem 0;

      & img {
        clip-path: circle(50% at 50% 50%);
      }
    }
    .info-section {
      padding: 0 0 0 3rem;

      .info-heading {
        letter-spacing: 0.2rem;
        margin: 0 0 1rem 0;
      }
    }
    .name-section, .email-section, .website-section, .phone-section {
      margin: 1rem 0 0 0;

      .label{
        display: inline-block;
        padding: 0 0 0.5rem 1rem;
      }
      .value {
        padding: 0 0 0.5rem 2rem;
      }
    }
  }

  .right-section {
    flex: 6;
    background: #ffffff;
    color: #333333;
    padding:2rem 1rem;
  }

  a {
    text-decoration: none;
    color: #ffffff;
    &:hover {
      text-decoration: underline;
    }
    &:visited {
      color: #ffffff;
    }
  }
  

}
</style>
