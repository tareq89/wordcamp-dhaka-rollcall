<template>
  <div>
    <!-- <nuxt /> -->
      <div class="App">
        <header class="App__header">
          <div class="Logo">
            <img src="assets/images/logo.jpg" alt="Logo">
          </div>
          <div class="Heading">Volunteer List</div>
        </header>
        <main class="App__main">
          <div class="Search">
              <input class="Search__input" placeholder="Search" type="text">
          </div>
          <div class="VolunteerList" id="VolunteerList">
            <div class="VolunteerList__item VolunteerList__item--active">
              <div class="VolunteerList__imageWrapper">
                <img src="assets/images/Saif_Hassan.jpg" alt="Saif Hassan">
              </div>
              <div class="VolunteerList__copy">
                <a class="VolunteerList__name" href="tel:+8801771443388">Saif Hassan</a>
                <div class="VolunteerList__bio">Project Developmet Manager at weDevs</div>
                <div class="VolunteerList__reporting">6:30 am</div>
              </div>
              <div class="VolunteerList__status"></div>
            </div>
            <div class="VolunteerList__item VolunteerList__item--unknown VolunteerList__item--active--">
              <div class="VolunteerList__imageWrapper">
                <img src="assets/images/Saif_Hassan.jpg" alt="Saif Hassan">
              </div>
              <div class="VolunteerList__copy">
                <a class="VolunteerList__name" href="tel:+8801771443388">Saif Hassan</a>
                <div class="VolunteerList__bio">Project Developmet Manager ataa weDevs</div>
                <div class="VolunteerList__reporting">6:30 am</div>
              </div>
              <div class="VolunteerList__status"></div>
            </div>
          </div>
        </main>
      </div>
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
