//codigo de fullpage js
const myFullpage = new fullpage('#fullpage', {
	// Navigation
	menu: '#menu',
	lockAnchors: true,
	anchors:['Inicio', 'Papeleria','Arte'],
	navigation: true,
	navigationPosition: 'right',
	navigationTooltips: ['Inicio', 'Papeleria','Arte'],
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
	sectionsColor: ['#ccc', '#fff'],
	paddingTop: '3em',
	paddingBottom: '10px',
	fixedElements: '#header, .footer',
	responsiveWidth: 0,
	responsiveHeight: 0,
	responsiveSlides: false,
	parallax: false,
	parallaxOptions: { type: 'reveal', percentage: 62, property: 'translate' },
	dropEffect: false,
	dropEffectOptions: { speed: 2300, color: '#F82F4D', zIndex: 9999 },
	waterEffect: false,
	waterEffectOptions: { animateContent: true, animateOnMouseMove: true },
	cards: false,
	cardsOptions: { perspective: 100, fadeContent: true, fadeBackground: true },

	// Custom selectors
	sectionSelector: '.section',
	slideSelector: '.slide',

	lazyLoading: true,
	observer: true,
	credits: { enabled: true, label: 'Made with fullPage.js', position: 'right' },

	// Events
	beforeLeave: function (origin, destination, direction, trigger) { },
	onLeave: function (origin, destination, direction, trigger) { },
	afterLoad: function (origin, destination, direction, trigger) { },
	afterRender: function () { },
	afterResize: function (width, height) { },
	afterReBuild: function () { },
	afterResponsive: function (isResponsive) { },
	afterSlideLoad: function (section, origin, destination, direction, trigger) { },
	onSlideLeave: function (section, origin, destination, direction, trigger) { },
	onScrollOverflow: function (section, slide, position, direction) { }
});
//array de los productos de la seccion productos de papeleria
const productos = [
	{
		id:1,
		img: "https://acdn.mitiendanube.com/stores/002/250/387/products/d_nq_np_946505-mco48286939822_112021-o1-dc3bddaf9b51a90ae316607747469496-640-0.jpg",
		title: "Cartulina",
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
		price: 6900
	}
	,
	{
		id:2,
		img: "https://panamericana.vtexassets.com/arquivos/ids/417378/colores-prismacolor-x-24-unidades-70530014860.jpg?v=637729599795300000",
		title: "Colores",
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
		price: 2800
	}
	,
	{
		id:3,
		img: "https://acdn.mitiendanube.com/stores/399/204/products/841-c5c78c743417d7ebd716343038558699-640-0.png",
		title: "Taja Lapiz",
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
		price: 3100
	}
	, {
		id:4,
		img: "https://static.wixstatic.com/media/18f543_61749c8ba9764e69807c9ed99c59f6d1~mv2.jpg/v1/fill/w_980,h_980,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/18f543_61749c8ba9764e69807c9ed99c59f6d1~mv2.jpg",
		title: "Borrador",
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
		price: 8500
	}
	, {
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmNPqH_GxcFACrA09kuuQ6CV0ARxxqAYOQog&usqp=CAU",
		title: "Lapiceros",
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
		price: 900
	}

]
//logica para crear las cartas de la seccion de productos de papeleria
productos.forEach(producto => {
	document.addEventListener("DOMContentLoaded", function () {
		const cards = document.getElementsByClassName("cards")[0];
		const nuevoDiv = document.createElement("div");
		nuevoDiv.className = 'card';
		nuevoDiv.style.width = "21rem";
		nuevoDiv.style.marginRight = "2rem";

		const img = document.createElement("img");
		img.className = "card-img-top";
		img.src = producto.img;

		const carBody = document.createElement("div")
		carBody.className = 'card-body';

		const title = document.createElement('h5')
		title.className = 'card-title'
		title.textContent = producto.title;

		const paragraph = document.createElement('p')
		paragraph.className = 'card-text'
		paragraph.textContent = producto.description;

		const price = document.createElement('p')
		price.className = 'card-text-price'
		price.textContent = producto.price;

		const containerbutton = document.createElement("div")
		containerbutton.className = "containerbutton"

		const button1 = document.createElement('a')
		button1.className = "btn add"
		button1.textContent = "agregar"
		button1.style.color = "white";
		button1.setAttribute('onclick', 'addCart(this); switchAddElemtToDelet(this);');

/*
		const button2 = document.createElement('a')
		button2.className = "btn delete"
		button2.textContent = "eliminar"
		button2.style.color = "white";
		button2.setAttribute('onclick', 'deleteCart()');
*/

		cards.appendChild(nuevoDiv);
		nuevoDiv.appendChild(img);
		nuevoDiv.appendChild(carBody)
		nuevoDiv.appendChild(title)
		nuevoDiv.appendChild(paragraph)
		nuevoDiv.appendChild(price)
		nuevoDiv.appendChild(containerbutton)
		containerbutton.appendChild(button1)
		containerbutton.appendChild(createItemContainer())

	});
});

//array de los productos de la seccion productos de arte
const productospintura = [
	{
		id:5,
		img: "https://http2.mlstatic.com/D_NQ_NP_899518-MCO40819857965_022020-O.webp",
		title: "Kit Vinilos",
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
		price: 2300
	}
	,
	{
		id:6,
		img: "https://bricolaje.co/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBOUxvQnc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--e700edb5b9ed723749da954577a07d88fd491805/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmtDSUFOcEFpQUQiLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--70dc4abb6ac52505d9b5c972f6eb61cd265c8cf9/332532124_744708503642595_4489651278333940899_n.jpg?locale=es",
		title: "Kit Pinceles",
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
		price: 3000
		
	}
	,
	{
		id:7,
		img: "https://http2.mlstatic.com/D_NQ_NP_865524-MCO69606078856_052023-O.webp",
		title: "Lienzos",
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
		price: 5000
        
	}
	, {
		id:8,
		img: "https://panamericana.vtexassets.com/arquivos/ids/269469/caballete-tripode-tipo-cajon-de-140-cm-512424.jpg?v=636386530451270000",
		title: "Caballetes",
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
		price: 4300
		

	}
	, {
		id:9,
		img: "https://jberlyart.com/tienda/wp-content/uploads/maniqui-de-dibujo-30-cm.jpg",
		title: "Maniqui",
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
		price: 1500
		
	}

]
//logica para crear las cartas de la seccion de productos de arte
productospintura.forEach(producto => {
	document.addEventListener("DOMContentLoaded", function () {
		const cards = document.getElementsByClassName("cards-Pintura")[0];
		const nuevoDiv = document.createElement("div");
		nuevoDiv.className = 'card';
		nuevoDiv.style.width = "21rem";
		nuevoDiv.style.marginRight = "2rem";

		const img = document.createElement("img");
		img.className = "card-img-top";
		img.src = producto.img;

		const carBody = document.createElement("div")
		carBody.className = 'card-body';

		const title = document.createElement('h5')
		title.className = 'card-title'
		title.textContent = producto.title;

		const paragraph = document.createElement('p')
		paragraph.className = 'card-text'
		paragraph.textContent = producto.description;

		const price = document.createElement('p')
		price.className = 'card-text-price'
		price.textContent = producto.price;

		const containerbutton = document.createElement("div")
		containerbutton.className = "containerbutton"

		const button1 = document.createElement('a')
		button1.className = "btn"
		button1.textContent = "agregar"
		button1.style.color = "white";
		button1.setAttribute('onclick', 'addCart(this); switchAddElemtToDelet(this);');
		

		/*
				const button2 = document.createElement('a')
		button2.className = "btn "
		button2.textContent = "eliminar"
		button2.style.color = "white";
		button2.setAttribute('onclick', 'deleteCart()');
		*/

		cards.appendChild(nuevoDiv);
		nuevoDiv.appendChild(img);
		nuevoDiv.appendChild(carBody)
		nuevoDiv.appendChild(title)
		nuevoDiv.appendChild(paragraph)
		nuevoDiv.appendChild(price)
		nuevoDiv.appendChild(containerbutton)
		containerbutton.appendChild(button1)
		containerbutton.appendChild(createItemContainer())

	});
});

//logica del carito
const carrito = [];

const cart = document.querySelector(".nav-car");
const paragraph = document.createElement('p');
paragraph.className = "cont-cart"
paragraph.style.color = "white"



//funcion para actualizar el contador de los productos
function actualizarContador() {
    paragraph.textContent = carrito.length;
}

actualizarContador();
cart.appendChild(paragraph);

//funcion para aumentar la cantidad de productos en el numero del carrito
function addCart(elem, clickedFrom = 'main-btn') {

	let card = '';

	switch(clickedFrom) {
		case 'main-btn':
			card = elem.parentElement.parentElement;
			break;
		case 'plus-icon':
			card = elem.parentElement.parentElement.parentElement.parentElement
			break;
	}
	
	let productTitle = card.querySelector('h5.card-title').innerText.trim();
	let productPrice = card.querySelector('p.card-text-price').innerText.trim();


    carrito.push({
		[productTitle] : parseInt(productPrice)
	});

	if (clickedFrom === "plus-icon") {
		let itemCount = card.querySelector('span#item-count');
		countItems = countObjectsWithKey(carrito, productTitle);
		itemCount.innerText = `${countItems} unidades`;
	}

	closeShopResume();
    actualizarContador(); 
}


//funcion para eliminar los productos
 function deleteCart(elem) {

	let card = elem.parentElement.parentElement.parentElement.parentElement;
	let productTitle = card.querySelector('h5.card-title').innerText.trim();

	for (let i = 0; i < carrito.length; i++) {
		const name = Object.keys(carrito[i])[0];

		if (productTitle === name) {
			carrito.splice(i, 1);
			break;
		}
	}

	countItems = countObjectsWithKey(carrito, productTitle);

	if (countItems > 0) {
		let itemCount = card.querySelector('span#item-count');
		
		if (countItems == 1) {
			itemCount.innerText = `${countItems} unidad`;
		} else {
			itemCount.innerText = `${countItems} unidades`;
		}
	} else {
		elem.parentElement.parentElement.parentElement.querySelector('.btn.btn-primary').style.display = "inline-block";
		elem.parentElement.parentElement.style.display = 'none';
	}

    actualizarContador(); 

	console.log(carrito);
 }
 
 function switchAddElemtToDelet(elem) {  
	elem.nextElementSibling.style.display = "inline-block";
	elem.style.display = 'none';
  }

 function createItemContainer() {
	// Crear el div con la clase "item-container"
	const itemContainer = document.createElement('div');
	itemContainer.className = 'item-container';
   itemContainer.style.display = 'none';
  
	// Crear el div con la clase "item"
	const item = document.createElement('div');
	item.className = 'item';
  
	// Crear el icono de basura
	const deleteIcon = document.createElement('i');
	deleteIcon.className = 'fas fa-trash';
	deleteIcon.setAttribute('onclick','deleteCart(this)');
  
	// Crear el span para mostrar el conteo
	const itemCountSpan = document.createElement('span');
	itemCountSpan.id = 'item-count';
	itemCountSpan.textContent = '1 unidad';
  
	// Crear el icono de más
	const plusIcon = document.createElement('i');
	plusIcon.className = 'fas fa-plus';
	plusIcon.setAttribute('onclick', "addCart(this, 'plus-icon')");
  
	// Agregar los elementos al div "item"
	item.appendChild(deleteIcon);
	item.appendChild(itemCountSpan);
	item.appendChild(plusIcon);
  
	// Agregar el div "item" al div "item-container"
	itemContainer.appendChild(item);
  
	return itemContainer;
  }
  
  function deleteItem() {
	const itemContainer = document.querySelector('.item-container');
	const addButton = document.querySelector('.add-btn');
  
	itemContainer.style.display = 'none';
	addButton.style.display = 'inline-block';
  }
  
  function increaseCount() {
	itemCount++;
	const itemCountSpan = document.getElementById('item-count');
	itemCountSpan.textContent = itemCount + ' unidades';
  }


  function countObjectsWithKey(array, key) {
	let count = 0;
  
	array.forEach(object => {
	  if (object.hasOwnProperty(key)) {
		count++;
	  }
	});
  
	return count;
  }

  function showCardResume() {
	const shopResume = agruparProductos(carrito);
	
	if (shopResume.productos.length > 0) {
		renderizarListaProductos(shopResume, 'div.resume-card');
		document.querySelector('div.resume-card').style.display = 'flex';
	}
  }


  function agruparProductos(productos) {
	const agrupados = {};
  
	// Recorre el array y agrupa los productos por nombre
	productos.forEach(producto => {
	  const nombre = Object.keys(producto)[0];
	  const precio = producto[nombre];
  
	  if (!agrupados[nombre]) {
		agrupados[nombre] = {
		  producto: nombre,
		  count: 0,
		  unitPrice: precio,
		  total: 0
		};
	  }
  
	  agrupados[nombre].count++;
	  agrupados[nombre].total += precio;
	});
  
	const resultado = Object.values(agrupados);
	const totalProductos = resultado.reduce((total, producto) => total + producto.total, 0);
  
	return { productos: resultado, totalProducts: totalProductos };
  }


  function renderizarListaProductos(resultado, contenedor) {
	const divContenedor = document.querySelector(contenedor);
	divContenedor.style.background = 'white';
	// Crear el icono de cierre (X)
	const closeIcon = document.createElement('div');
	closeIcon.className = 'close-icon';
	closeIcon.innerHTML = '&#10006;'; // Puedes usar un icono o texto como X
  
	// Crear la lista desordenada (ul)
	const ul = document.createElement('ul');
  
	// Recorrer la lista de productos y crear elementos li para cada uno
	resultado.productos.forEach(producto => {
	  const li = document.createElement('li');
	  li.textContent = `${producto.producto} | Count: ${producto.count} | Unit Price: $${producto.unitPrice} | Total: $${producto.total}`;
	  ul.appendChild(li);
	});
  
	// Crear un elemento para mostrar el total de todos los productos
	const totalProductsElement = document.createElement('p');
	totalProductsElement.textContent = `Total: $${resultado.totalProducts}`;
  
	// Agregar un manejador de eventos al icono para borrar el contenido del div
	closeIcon.addEventListener('click', function () {
		closeShopResume();
	});
  
	// Agregar el icono y los elementos al div contenedor
	divContenedor.appendChild(closeIcon);
	divContenedor.appendChild(ul);
	divContenedor.appendChild(totalProductsElement);
  }


  function closeShopResume(){
	const resumeContainer = document.querySelector('div.resume-card');
	resumeContainer.innerHTML = '';
	resumeContainer.style.display = 'none';
	resumeContainer.style.background = 'none';
  }