$(document).ready(function() {
	const slides = {
		'hero': 1,
		'venue': 2,
		'story': 3,
		'party': 4,
		'registry': 5,
		'rsvp': 6,
		'last': 7
	};
	$('#fullpage').fullpage({
		//Navigation
		menu: '#menu',
		lockAnchors: false,
		anchors:['hero', 'venue', 'our-story', 'wedding-party', 'registry', 'rsvp', 'last'],
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: [],
		showActiveTooltip: true,
		slidesNavigation: false,
		slidesNavPosition: 'bottom',

		//Scrolling
		css3: true,
		scrollingSpeed: 700,
		autoScrolling: true,
		fitToSection: true,
		fitToSectionDelay: 1000,
		scrollBar: false,
		easing: 'easeInOutCubic',
		easingcss3: 'ease',
		loopBottom: false,
		loopTop: false,
		loopHorizontal: true,
		continuousVertical: false,
		continuousHorizontal: false,
		scrollHorizontally: false,
		interlockedSlides: false,
		dragAndMove: false,
		offsetSections: false,
		resetSliders: false,
		fadingEffect: false,
		normalScrollElements: '#element1, .element2',
		scrollOverflow: true,
		scrollOverflowReset: false,
		scrollOverflowOptions: null,
		touchSensitivity: 15,
		normalScrollElementTouchThreshold: 5,
		bigSectionsDestination: null,

		//Accessibility
		keyboardScrolling: true,
		animateAnchor: true,
		recordHistory: true,

		//Design
		controlArrows: true,
		verticalCentered: true,
		sectionsColor : ['#fff', '#fff'],
		paddingTop: '3em',
		paddingBottom: '10px',
		fixedElements: '#header, .footer',
		responsiveWidth: 768,
		responsiveHeight: 0,
		responsiveSlides: true,
		parallax: false,
		parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

		//Custom selectors
		sectionSelector: '.section',
		slideSelector: '.slide',

		lazyLoading: true,

		//events
		onLeave: function(index, nextIndex, direction){
			const menuLinks = $('.main-menu a');
			$('.main-menu li').removeClass('active-link-pink');
			$('.main-menu li').removeClass('active-link-orange');

			switch(nextIndex) {
				case slides.hero:
					menuLinks.map(el => menuLinks[el].style.color = 'pink');
					$('.menu-hero').addClass('active-link-pink');
					break;
				case slides.venue:
					menuLinks.map(el => menuLinks[el].style.color = 'white');
					$('.menu-venue').addClass('active-link-pink');
					break;
				case slides.story:
					menuLinks.map(el => menuLinks[el].style.color = 'orange');
					$('.menu-story').addClass('active-link-orange');
					break;
				case slides.party:
					menuLinks.map(el => menuLinks[el].style.color = 'white');
					$('.menu-party').addClass('active-link-pink');
					break;
				case slides.registry:
					menuLinks.map(el => menuLinks[el].style.color = 'black');
					$('.menu-registry').addClass('active-link-pink');
					break;
				case slides.rsvp:
					menuLinks.map(el => menuLinks[el].style.color = 'white');
					$('.menu-rsvp').addClass('active-link-pink');
					break;
				default:
					console.log('nothing yet');
			}
		},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
		afterResize: function(){},
		afterResponsive: function(isResponsive){},
		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
	});

	var heroClasses = ['hand-in-hand', 'ocean-side', 'init'];
	var heroIndex = 0;

	setInterval(function() {
		var prevIndex = heroIndex === 0 ? heroClasses.length - 1 : heroIndex - 1;
		$('.hero').addClass(heroClasses[heroIndex]);
		$('.hero').removeClass(heroClasses[prevIndex]);

		heroIndex++;

		if (heroIndex > heroClasses.length - 1) heroIndex = 0;

	}, 3500);

	$('.hamburger-menu').on('click', function() {
		$('.mobile-menu').toggleClass('open');
	});

	$('.another-time').on('click', function() {
		$('.another-time-video').addClass('show');
		$('video').play();
	});

	// Update RSVP Button Text
	$('#mc-embedded-subscribe')[0].value = 'RSVP';

	// prefill email in RSVP form if coming from invite email
	var queryString = window && window.location.search;
	var visitorEmail = queryString.split('?email=')[1];
	$('#mce-EMAIL')[0].value = visitorEmail || '';
});
