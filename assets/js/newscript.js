const projectArray = [
  astroPlanner = {
  image: "./assets/images/astroplanner.png",
  url: "https://fiskoal.github.io/astroplanner"
  },
  rotmgTools = {
  image: "./assets/images/rotmg.png",
  url: "https://fiskoal.github.io/rotmg-tools"
  },
  weatherDashboard = {
  image: "./assets/images/weather.png",
  url: "https://fiskoal.github.io/weather-dashboard"
  },
];

function renderProjects() {
  for (i=0; i<projectArray.length; i++) {
    $("#work").append(
      `
      <div class="row d-flex justify-content-center m-3 work-image-container">
        <a class="work-url" href="${projectArray[i].url}" target="blank">
          <image src="${projectArray[i].image}" class="work-image image-thumbnail">
        </a>
      </div>
      `
    )};
};

function init() {
  renderProjects();
};

init();