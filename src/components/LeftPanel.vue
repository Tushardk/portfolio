<template>
  <div>
    <div class="profile-picture">
      <img src="../assets/profile-pic.jpg" alt="Tushar Kshirsagar" />
    </div>
    <div class="info">
      <h1 class="info-heading">INFO</h1>
      <hr />
      <div class="name">
        <i class="fas fa-user"></i>
        <div class="label">Name</div>
        <div class="value">Tushar Kshirsagar</div>
      </div>
      <div class="email">
        <i class="fas fa-envelope"></i>
        <div class="label">Email</div>
        <div class="value">kshirsagartd@gmail.com</div>
      </div>
      <div class="website">
        <i class="fas fa-desktop"></i>
        <div class="label">Website</div>
        <div class="value">
          <a
            href="https://tushardk.github.io/profile/index.html"
          >https://tushardk.github.io/profile/index.html</a>
        </div>
      </div>
      <div class="phone">
        <i class="fas fa-phone-alt"></i>
        <div class="label">Phone</div>
        <div class="value">+91 9503789589</div>
      </div>
      <div class="address">
        <i class="fas fa-map-marker-alt"></i>
        <div class="label">Address</div>
        <div class="value">Yerwada, Pune, India - 411006</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Left"
};
</script>

<style lang="scss" scoped>
.profile-picture {
  text-align: center;
  margin: 0 0 4rem 0;

  & img {
    clip-path: circle(50% at 50% 50%);
  }
}
.info {
  padding: 0 0.4rem 0 2rem;

  .info-heading {
    letter-spacing: 0.2rem;
    margin: 0 0 1rem 0;
  }
}
.name,
.email,
.website,
.phone,
.address {
  margin: 1rem 0 0 0;

  .label {
    display: inline-block;
    padding: 0 0 0.5rem 1rem;
  }
  .value {
    padding: 0 0 0.5rem 2rem;
  }
}
</style>
