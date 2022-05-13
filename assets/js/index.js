var PROJECTS = [
    { name: 'Nagalingeshwara', img: 'assets/img/pim/p8.jpeg', type: 'Web App', filter: 'web', url: 'https://nagalingeshwara.com' },
    { name: 'Sanguine LPU', img: 'assets/img/pim/sanguine1.png', type: 'Web App', filter: 'web', url: 'https://sanguinelpu.com' },
    { name: 'Weather forecast app', img: 'assets/img/pim/weather1.png', type: 'Web App', filter: 'app', url: 'https://saiadithya3.github.io/weather-forecast/' },
    { name: 'Expenses tracker app', img: 'assets/img/pim/expinco2.png', type: 'Web App', filter: 'app', url: 'https://expinco.netlify.app' },
    { name: 'Career consulting website',img: 'assets/img/pim/careerclue2.png', type: 'Web App', filter: 'web', url: 'https://careerclue.com' },
    { name: 'Virtual safari', img: 'assets/img/pim/p5.jpeg', type: 'Web App', filter: 'game', url: '#' },
    { name: 'Rock paper scissors', img: 'assets/img/pim/p4.jpeg', type: 'Web App', filter: 'game', url: '#' },
    { name: 'Search Engine', img: 'assets/img/pim/p7.jpeg', type: 'Web App', filter: 'web', url: '#' },
    { name: 'Covid 19 tracker', img: 'assets/img/pim/p3.jpeg', type: 'Web App', filter: 'web', url: 'https://saiadithya3.github.io/covidvaccine/' },
    { name: 'Local server chatting app', img: 'assets/img/pim/p2.jpeg', type: 'Web App', filter: 'app', url: '#' },
    { name: 'Automobile garage application', img: 'assets/img/pim/p1.jpeg', type: 'Web App', filter: 'web', url: '#' },
    { name: 'web page for sweet store ', img: 'assets/img/pim/p6.jpeg', type: 'Web App', filter: 'web', url: '#' },
    
];



function HTMLProject(con) {


    return `
    <div class="col-lg-4 col-md-6 portfolio-item filter-${PROJECTS[con-1].filter}">
    <div class="portfolio-wrap">
      <img src="${PROJECTS[con-1].img}" class="img-fluid" alt="">
      <div class="portfolio-info">
        <h4>${PROJECTS[con - 1].name}</h4>
        <p>${PROJECTS[con-1].type}</p>
        <div class="portfolio-links">
          <a href="${URL}" data-gallery="portfolioGallery" class="portfolio-lightbox" title="${PROJECTS[con-1].name}"><i class="bx bx-plus"></i></a>
          <a href="${PROJECTS[con-1].url}" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" class="portfolio-details-lightbox" title="Portfolio Details"><i class="bx bx-link"></i></a>
        </div>
      </div>
    </div>
  </div>
    
    `
}





function render() {
    for (let index = 1; index <= 12; index++) {
        projectDiv.innerHTML += `${HTMLProject(index)}`;
    }

};