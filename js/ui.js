//Portfolio data
var myData = {
	skillsTicker: {
		skills: ['HTML, CSS & JavaScript', 'Responsive Web Design', 'Bootstrap', 'SASS', 'MVC Frameworks', 'AngularJS',
			'KnockoutJS', 'GitHub', 'PhotoShop', 'Illustrator'
		],
		elementID: "skills"
	},
	projects: {
		ids: ['hubTransit', 'brewFiend', 'arcade', 'optimization'],
		modal: "projectWindow",
		projectInfo: {
			hubTransit: {
				title: "HubTransit",
				date: "March 2016",
				link: "http://www.hubtransit.com",
				github: "https://github.com/bw120/MBTA-Commuter",
				skills: "JavaScript, HTML, CSS, AngularJS",
				picture: "images/hubtransit_c_1x.png",
				description: "Using the AngularJS framework, I developed this app to easily get arrival predictions and service " +
					"alerts for your commute on the MBTA (Boston transit system). The app uses the MBTA API to get information about each " +
					"route. The user authentication and user data is handled through the Firebase api. This app is great for anyone " +
					"that uses multiple transit lines in their commute and wants to see at a glance any service alerts, delays and arrival " +
					"predictions."
			},
			brewFiend: {
				title: "BrewFiend",
				date: "October 2015",
				link: "http://bw120.github.io/NeighborhoodCraftBeerMap/",
				github: "https://github.com/bw120/NeighborhoodCraftBeerMap",
				skills: "JavaScript, HTML, CSS, KnockoutJS, AJAX, jQuery, Responsive Web Desgin",
				picture: "images/neighborhoodMap_c_1x.png",
				description: "This was the fifth project I did for the Udacity Front-End Web Developer Nanodegree. " +
					"This web app allows you to explore craft breweries in the Boston area. The app interacts with three " +
					"different 3rd party API's allowing you to search and view the details of each brewery. It was developed " +
					"using the MVVM (Model Vew VewModel) architectural pattern using the jQuery and Knockout JavaScript libraries."
			},
			arcade: {
				title: "Arcade Game",
				date: "June 2015",
				link: "http://bw120.github.io/frontend-nanodegree-arcade-game/",
				github: "https://github.com/bw120/frontend-nanodegree-arcade-game",
				skills: "JavaScript, HTML5 Canvas",
				picture: "images/ArcadeGame_c_1x.png",
				description: "This was the third project I did for the Udacity Front-End Web Developer Nanodegree. Starting with " +
					"a supplied game engine and graphic assets, I coded all the game entities including the player and enemies using " +
					"Object-Oriented JavaScript. I built additional features including the ability to select a character and to accumulate points and lives by collecting the gems and hearts. As you complete each level and move on to the next the difficulty increases."
			},
			optimization: {
				title: "Web Optimization",
				date: "July 2015",
				link: "",
				github: "https://github.com/bw120/frontend-nanodegree-mobile-portfolio",
				skills: "Critical Rendering path, Chrome Developer tools, JavaScript, CSS, HTML",
				picture: "images/Optimization_c_1x.jpg",
				description: "While going through the Nanodegree program at Udacity, I learned a lot about measuring and " +
					"optimizing web performance. In the fourth project, I was given two sites to analyze and identify performance issues. " +
					"The first part of the project was a mobile portfolio page where I made adjustments to optimize the Critical Rendering " +
					"Path and was able achieve a PageSpeed score of 95 for mobile and 96 for desktop." +
					"The second part of the project was a web page for a pizzeria with graphics that were animated using JavaScript. " +
					"I analyzed and re-wrote the code to make it more efficient so that it could achieve 60 frames per second."
			}
		}
	}

};


//skills ticker. cycles through array of skills. Each fades out, changes to next item then fades in
var ticker = {

	setUp: function(element, items) {
		this.element = document.getElementById(element);
		this.items = items;
		this.index = 0;
		this.change = true;
		this.run();
	},

	//Start cysling through each item
	run: function() {
		var self = this;
		// self.nextItem();
		var interval = setInterval(function() {
			self.nextItem();
		}, 2000);
	},

	//fade out original content, change then fade in
	nextItem: function() {
		var self = this;
		self.element.className = "skills-hidden";
		//wait for CSS transition before changing content
		setTimeout(function() {
			self.element.className = "skills";
			self.element.innerHTML = self.items[self.index];
			self.index++;
			if (self.index > self.items.length - 1) {
				self.index = 0;
			}
		}, 700);
	}
};

//pops up info box when project item is hovered over and opens model when clicked
var projectInfo = {

	//get elements that will need updating
	scrollbar: window.innerWidth > document.documentElement.clientWidth,
	container: document.getElementsByClassName("container")[0],
	body: document.getElementsByTagName("body")[0],
	modal: null,

	//adds listeners to each project ID
	addListeners : function(modalID, projectIDs) {

		this.modal = document.getElementById(modalID);

		projectIDs.map(function(item) {

			var element = document.getElementById(item).children[0];

			element.addEventListener("mouseover", function() {
				projectInfo.mouseOn(element);
			});
			element.addEventListener("mouseout", function() {
				projectInfo.mouseOff(element);
			});
			element.addEventListener("click", function() {
				projectInfo.openModal(modal, item);
			});
		});
	},

	mouseOn: function(element) {
		element.className = "project-overlay";
	},

	mouseOff: function(element) {
		element.className = "project-overlay-hidden";
	},

	openModal: function(element, item) {
		var liveLink = "";
		if (myData.projects.projectInfo[item].link.length > 0) {
		 liveLink = "<span><strong>Live Link: </strong><span class='link'><a href='" + myData.projects.projectInfo[item].link + "' target='_blank'>" + myData.projects.projectInfo[item].link + "</a></span>";
		}

		var modalContent = "<div class='modal-content'>" +
			"	<div class='modal-header'>" +
			"		<div class='title'>" + myData.projects.projectInfo[item].title + "</div>" +
			"		<div class='modal-close' onclick='projectInfo.closeModal()'>close X</div>" +
			"	</div>" +
			"	<div class='modal-main'>" +
			"		<img src='" + myData.projects.projectInfo[item].picture + "' class='screenshot' alt='screenshot'>" +
			"		<p><strong>Date: </strong><span class='date'>" + myData.projects.projectInfo[item].date + "</span>" +
			"		<p><strong>Skills: </strong><br><span class='project-skills'>" + myData.projects.projectInfo[item].skills + "</span>" +
			"		<p><strong>Description: </strong>" +
			"		<br><span class='description'>" + myData.projects.projectInfo[item].description + "</span>" +
			"		<p>" + liveLink +
			"		<p><strong>GitHub: </strong><span class='github'><a href='" + myData.projects.projectInfo[item].github + "' target='_blank'>" + myData.projects.projectInfo[item].github + "</a></span>" +
			"	</div>" +
			"</div>";

		element.innerHTML = modalContent;
		if (this.scrollbar) this.container.classList.add("scrollPad");
		element.className = "modal-visible";
		this.body.style.overflowY = "hidden";
	},

	closeModal: function() {
		this.modal.className = "modal-hidden";
		this.container.classList.remove("scrollPad");
		this.body.style.overflowY = "auto";
	}

};

//scroll down to element position
var scroller = function(event, element) {
	event.preventDefault();
	var topOffset = document.getElementById(element).offsetTop;
	var scrollAmount = Math.floor(topOffset / 20);
	var totalScrolled = window.scrollY;

	var scrollDown = function() {
		if (element) {
			if (totalScrolled + scrollAmount < topOffset) {
				window.scrollBy(0, scrollAmount);
				totalScrolled = totalScrolled + scrollAmount;
				aFrame = requestAnimationFrame(scrollDown);
			} else {
				window.scrollTo(0, topOffset);
				cancelAnimationFrame(aFrame);
			}
		}
	};
	var aFrame = requestAnimationFrame(scrollDown);
};

var introAnimation = function() {
	var profile = document.getElementById("profile");
	var logo = document.getElementById("logo");
	var nav = document.getElementById("nav");
	var name = document.getElementById("name");
	var title = document.getElementById("title");

	profile.className = "profile-pic";

	setTimeout(function() {
		logo.classList.add("fade-in");
		nav.classList.add("fade-in");
		title.classList.add("fade-in");
		name.classList.add("fade-in");
	}, 1100);
};

var initiate = function() {
	introAnimation();
	projectInfo.addListeners("modal", myData.projects.ids);
	setTimeout(ticker.setUp(myData.skillsTicker.elementID, myData.skillsTicker.skills), 1100);
};