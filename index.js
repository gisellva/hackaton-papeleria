const myFullpage = new fullpage('#fullpage', {
	// Navigation
	menu: '#menu',
	lockAnchors: true,
	anchors:['inicio', 'papeleria','arte'],
	navigation: true,
	navigationPosition: 'right',
	navigationTooltips: ['inicio', 'papeleria','arte'],
	showActiveTooltip: false,
	slidesNavigation: true,
	slidesNavPosition: 'bottom',

	// Scrolling
	css3: true,
	scrollingSpeed: 700,
	autoScrolling: true,
	fitToSection: true,
	fitToSectionDelay: 600,
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
	scrollOverflowMacStyle: false,
	scrollOverflowReset: false,
	touchSensitivity: 15,
	bigSectionsDestination: null,

	// Accessibility
	keyboardScrolling: true,
	animateAnchor: true,
	recordHistory: true,

	// Design
	controlArrows: true,
	controlArrowsHTML: [
		'<div class="fp-arrow"></div>', 
		'<div class="fp-arrow"></div>'
	],
	verticalCentered: true,
	sectionsColor : ['#ccc', '#fff'],
	paddingTop: '3em',
	paddingBottom: '10px',
	fixedElements: '#header, .footer',
	responsiveWidth: 0,
	responsiveHeight: 0,
	responsiveSlides: false,
	parallax: false,
	parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
	dropEffect: false,
	dropEffectOptions: { speed: 2300, color: '#F82F4D', zIndex: 9999},
	waterEffect: false,
	waterEffectOptions: { animateContent: true, animateOnMouseMove: true},
	cards: false,
	cardsOptions: {perspective: 100, fadeContent: true, fadeBackground: true},

	// Custom selectors
	sectionSelector: '.section',
	slideSelector: '.slide',

	lazyLoading: true,
	observer: true,
	credits: { enabled: true, label: 'Made with fullPage.js', position: 'right'},

	// Events
	beforeLeave: function(origin, destination, direction, trigger){},
	onLeave: function(origin, destination, direction, trigger){},
	afterLoad: function(origin, destination, direction, trigger){},
	afterRender: function(){},
	afterResize: function(width, height){},
	afterReBuild: function(){},
	afterResponsive: function(isResponsive){},
	afterSlideLoad: function(section, origin, destination, direction, trigger){},
	onSlideLeave: function(section, origin, destination, direction, trigger){},
	onScrollOverflow: function(section, slide, position, direction){}
});

const productos=[
	{
		img:"https://acdn.mitiendanube.com/stores/002/250/387/products/d_nq_np_946505-mco48286939822_112021-o1-dc3bddaf9b51a90ae316607747469496-640-0.jpg",
		title:"Cartulina",
		description:"lorem ipsum lorem ipsum loren ipsum"
	}
	,
	{
		img:"https://panamericana.vtexassets.com/arquivos/ids/417378/colores-prismacolor-x-24-unidades-70530014860.jpg?v=637729599795300000",
		title:"Colores",
		description:"lorem ipsum lorem ipsum loren ipsum"
	}
	,
	{
		img:"https://acdn.mitiendanube.com/stores/399/204/products/841-c5c78c743417d7ebd716343038558699-640-0.png",
		title:"Taja Lapiz",
		description:"lorem ipsum lorem ipsum loren ipsum"
	}
	,{
		img:"https://static.wixstatic.com/media/18f543_61749c8ba9764e69807c9ed99c59f6d1~mv2.jpg/v1/fill/w_980,h_980,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/18f543_61749c8ba9764e69807c9ed99c59f6d1~mv2.jpg",
		title:"Borrador",
		description:"lorem ipsum lorem ipsum loren ipsum"
	}
	,{
		img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmNPqH_GxcFACrA09kuuQ6CV0ARxxqAYOQog&usqp=CAU",
		title:"Borrador",
		description:"lorem ipsum lorem ipsum loren ipsum"
	}
	
]
productos.forEach(producto=> {
	document.addEventListener("DOMContentLoaded", function () {
		const cards = document.getElementsByClassName("cards")[0];
		const nuevoDiv = document.createElement("div");
		nuevoDiv.className = 'card';
		nuevoDiv.style.width = "16rem";
		
	
		const img = document.createElement("img");
		img.className = "card-img-top";
		img.src = producto.img;
		
		const carBody=document.createElement("div")
		carBody.className = 'card-body';
		
		const title=document.createElement('h5')
		title.className='card-title'
		title.textContent = producto.title;
		
		const paragraph=document.createElement('p')
		paragraph.className='card-text'
		paragraph.textContent = producto.description;

		const containerbutton=document.createElement("div")
		containerbutton.className="containerbutton"
	
		const button1=document.createElement('a')
		button1.className="btn btn-primary"
		button1.textContent="agregar"
		
		const button2=document.createElement('a')
		button2.className="btn btn-primary"
		button2.textContent="eliminar"
	
		cards.appendChild(nuevoDiv);
		nuevoDiv.appendChild(img);
		nuevoDiv.appendChild(carBody)
		nuevoDiv.appendChild(title)
		nuevoDiv.appendChild(paragraph)
		nuevoDiv.appendChild(containerbutton)
		containerbutton.appendChild(button1)
	    containerbutton.appendChild(button2)
	
	});
});


const productospintura=[
	{
		img:"https://http2.mlstatic.com/D_NQ_NP_899518-MCO40819857965_022020-O.webp",
		title:"Kit Vinilos",
		description:"lorem ipsum lorem ipsum loren ipsum"
	}
	,
	{
		img:"https://bricolaje.co/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBOUxvQnc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--e700edb5b9ed723749da954577a07d88fd491805/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmtDSUFOcEFpQUQiLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--70dc4abb6ac52505d9b5c972f6eb61cd265c8cf9/332532124_744708503642595_4489651278333940899_n.jpg?locale=es",
		title:"Kit Pinceles",
		description:"lorem ipsum lorem ipsum loren ipsum"
	}
	,
	{
		img:"https://http2.mlstatic.com/D_NQ_NP_865524-MCO69606078856_052023-O.webp",
		title:"Lienzos",
		description:"lorem ipsum lorem ipsum loren ipsum"
	}
	,{
		img:"https://panamericana.vtexassets.com/arquivos/ids/269469/caballete-tripode-tipo-cajon-de-140-cm-512424.jpg?v=636386530451270000",
		title:"Caballetes",
		description:"lorem ipsum lorem ipsum loren ipsum"
	}
	,{
		img:"https://jberlyart.com/tienda/wp-content/uploads/maniqui-de-dibujo-30-cm.jpg",
		title:"Maniqui",
		description:"lorem ipsum lorem ipsum loren ipsum"
	}
	
]
productospintura.forEach(producto=> {
	document.addEventListener("DOMContentLoaded", function () {
		const cards = document.getElementsByClassName("cards-Pintura")[0];
		const nuevoDiv = document.createElement("div");
		nuevoDiv.className = 'card';
		nuevoDiv.style.width = "16rem";
		
	
		const img = document.createElement("img");
		img.className = "card-img-top";
		img.src = producto.img;
		
		const carBody=document.createElement("div")
		carBody.className = 'card-body';
		
		const title=document.createElement('h5')
		title.className='card-title'
		title.textContent = producto.title;
		
		const paragraph=document.createElement('p')
		paragraph.className='card-text'
		paragraph.textContent = producto.description;

		const containerbutton=document.createElement("div")
		containerbutton.className="containerbutton"
	
		const button1=document.createElement('a')
		button1.className="btn btn-primary"
		button1.textContent="agregar"
		
		const button2=document.createElement('a')
		button2.className="btn btn-primary"
		button2.textContent="eliminar"
	
		cards.appendChild(nuevoDiv);
		nuevoDiv.appendChild(img);
		nuevoDiv.appendChild(carBody)
		nuevoDiv.appendChild(title)
		nuevoDiv.appendChild(paragraph)
		nuevoDiv.appendChild(containerbutton)
		containerbutton.appendChild(button1)
	    containerbutton.appendChild(button2)
	
	});
});
