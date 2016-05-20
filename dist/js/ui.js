/*
 grunt-getting-started 2016-05-20 
*/
var myData={skillsTicker:{skills:["HTML, CSS & JavaScript","Responsive Web Design","Bootstrap","SASS","MVC Frameworks","AngularJS","KnockoutJS","GitHub","PhotoShop","Illustrator"],elementID:"skills"},projects:{ids:["hubTransit","brewFiend","arcade","optimization"],modal:"projectWindow",projectInfo:{hubTransit:{title:"HubTransit",date:"March 2016",link:"http://www.hubtransit.com",github:"https://github.com/bw120/MBTA-Commuter",skills:"JavaScript, HTML, CSS, AngularJS",picture:"images/hubtransit_c_1x.png",description:"Using the AngularJS framework, I developed this app to easily get arrival predictions and service alerts for your commute on the MBTA (Boston transit system). The app uses the MBTA API to get information about each route. The user authentication and user data is handled through the Firebase api. This app is great for anyone that uses multiple transit lines in their commute and wants to see at a glance any service alerts, delays and arrival predictions."},brewFiend:{title:"BrewFiend",date:"October 2015",link:"http://bw120.github.io/NeighborhoodCraftBeerMap/",github:"https://github.com/bw120/NeighborhoodCraftBeerMap",skills:"JavaScript, HTML, CSS, KnockoutJS, AJAX, jQuery, Responsive Web Desgin",picture:"images/neighborhoodMap_c_1x.png",description:"This was the fifth project I did for the Udacity Front-End Web Developer Nanodegree. This web app allows you to explore craft breweries in the Boston area. The app interacts with three different 3rd party API's allowing you to search and view the details of each brewery. It was developed using the MVVM (Model Vew VewModel) architectural pattern using the jQuery and Knockout JavaScript libraries."},arcade:{title:"Arcade Game",date:"June 2015",link:"http://bw120.github.io/frontend-nanodegree-arcade-game/",github:"https://github.com/bw120/frontend-nanodegree-arcade-game",skills:"JavaScript, HTML5 Canvas",picture:"images/ArcadeGame_c_1x.png",description:"This was the third project I did for the Udacity Front-End Web Developer Nanodegree. Starting with a supplied game engine and graphic assets, I coded all the game entities including the player and enemies using Object-Oriented JavaScript. I built additional features including the ability to select a character and to accumulate points and lives by collecting the gems and hearts. As you complete each level and move on to the next the difficulty increases."},optimization:{title:"Web Optimization",date:"July 2015",link:"",github:"https://github.com/bw120/frontend-nanodegree-mobile-portfolio",skills:"Critical Rendering path, Chrome Developer tools, JavaScript, CSS, HTML",picture:"images/Optimization_c_1x.jpg",description:"While going through the Nanodegree program at Udacity, I learned a lot about measuring and optimizing web performance. In the fourth project, I was given two sites to analyze and identify performance issues. The first part of the project was a mobile portfolio page where I made adjustments to optimize the Critical Rendering Path and was able achieve a PageSpeed score of 95 for mobile and 96 for desktop.The second part of the project was a web page for a pizzeria with graphics that were animated using JavaScript. I analyzed and re-wrote the code to make it more efficient so that it could achieve 60 frames per second."}}}},ticker={setUp:function(a,b){this.element=document.getElementById(a),this.items=b,this.index=0,this.change=!0,this.run()},run:function(){var a=this;a.nextItem();setInterval(function(){a.nextItem()},2e3)},nextItem:function(){var a=this;a.element.className="skills-hidden",setTimeout(function(){a.element.className="skills",a.element.innerHTML=a.items[a.index],a.index++,a.index>a.items.length-1&&(a.index=0)},700)}},projectInfo=function(a,b){var c=this,d=window.innerWidth>document.documentElement.clientWidth,e=document.getElementsByClassName("container")[0],f=document.getElementById(a),g=(document.getElementById(h),f.getElementsByClassName("modal-close")[0]),h=f.getElementsByClassName("modal-content")[0],i=f.getElementsByClassName("screenshot")[0],j=h.getElementsByClassName("title")[0],k=h.getElementsByClassName("date")[0],l=h.getElementsByClassName("project-skills")[0],m=h.getElementsByClassName("link")[0],n=h.getElementsByClassName("github")[0],o=h.getElementsByClassName("description")[0],p=document.getElementsByTagName("body")[0];this.addListeners=function(){g.addEventListener("click",function(){c.closeModal(f)}),b.map(function(a){var b=document.getElementById(a);b.addEventListener("mouseover",function(){c.mouseOn(b.children[0])}),b.addEventListener("mouseout",function(){c.mouseOff(b.children[0])}),b.addEventListener("click",function(){c.openModal(f,h,a)})})},this.mouseOn=function(a){a.className="project-overlay"},this.mouseOff=function(a){a.className="project-overlay-hidden"},this.openModal=function(a,b,c){d&&e.classList.add("scrollPad"),i.src=myData.projects.projectInfo[c].picture,j.innerHTML=myData.projects.projectInfo[c].title,k.innerHTML=myData.projects.projectInfo[c].date,l.innerHTML=myData.projects.projectInfo[c].skills,m.innerHTML="<a href='"+myData.projects.projectInfo[c].link+"' target='_blank'>"+myData.projects.projectInfo[c].link+"</a>",n.innerHTML="<a href='"+myData.projects.projectInfo[c].github+"' target='_blank'>"+myData.projects.projectInfo[c].github+"</a>",o.innerHTML=myData.projects.projectInfo[c].description,a.className="modal-visible",p.style.overflowY="hidden"},this.closeModal=function(a){e.classList.remove("scrollPad"),a.className="modal-hidden",p.style.overflowY="auto"},this.addListeners()},scroller=function(a){event.preventDefault();var b=document.getElementById(a).offsetTop,c=Math.floor(b/20),d=window.scrollY,e=function(){if(a){if(!(b>d+c))return window.scrollTo(0,b),void cancelAnimationFrame(f);window.scrollBy(0,c),d+=c,f=requestAnimationFrame(e)}},f=requestAnimationFrame(e)},initiate=function(){ticker.setUp(myData.skillsTicker.elementID,myData.skillsTicker.skills),projectInfo("modal",myData.projects.ids),window.navigator.standalone};