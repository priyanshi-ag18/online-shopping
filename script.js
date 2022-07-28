
let http = new XMLHttpRequest();
http.open('get', 'products.json', true);
http.send();

http.onload = function(){
	
	if(this.readyState == 4 && this.status == 200){
		
		let products = JSON.parse(this.responseText);

	
		let output = "";
		for(let item of products){
			output += `
				<style>
				
					.product:hover{
						transform: scale(1.05);
						transition: all 0.5s;
					}
				</style>
				<div class="text-center col-lg-3 col-md-4 col-12 product" >
					<img data-toggle="modal" data-target="#${item.name}+${item.id}" class = "img-fluid" src="${item.image}" alt="${item.description}">
				
					<h5 class="p-name my-auto" style="font-weight:bold;">${item.name}</h5>
					<div class="star text-center my-auto" style="color:goldenrod;">
				<i class="fas fa-solid fa-star"></i>
				<i class="fas fa-solid fa-star"></i>
				<i class="fas fa-solid fa-star"></i>
				<i class="fas fa-solid fa-star"></i>
				<i class="fas fa-solid fa-star"></i>
				</div>
					<p class="price text-center my-auto">
						<span>$${item.price}</span>
					</p>
					<button class = "container btn mx-auto" onclick="clickCounter('${item.id}', '${item.image}', '${item.Description}', '${item.name}', '${item.price}', '${item.category}', '${item.total}')" style="background-color:coral;">Add to cart <i class="bx bx-cart-alt"></i></button>
				</div>
				<div class="modal" id="${item.name}+${item.id}">
    <div class="modal-dialog container">
      <div class="modal-content">
        <!-- Modal body -->
        <div class="modal-body" style="background-color:#white; ">
		<h2 id="exampleModalLabel" class = "text-center" style = "font-family:'Brush Script'; font-weight:bolder;">${item.name}</h5>
		<br>
		<img src = "${item.image}" style = "height:22vw; width: 100%; border-radius:20px; box-shadow: 0px 9px 12px #707070;">
		<br> <br>
		<p class="Category text-center" style = "font-family:'Georgia'; ; font-weight:bolder;">Category : ${item.category}</p>
		<p class="price text-center">
			<span style = "font-family:'Georgia'; ; font-weight:bolder;">Price : $${item.price}</span>
		</p>
		<p class = "description text-center" style = "font-family:'Georgia'; ; font-weight:bolder;"> Description: Sizes available - UK 9, 10, 11, 12</p>
        </div>
        
        <!-- Modal footer -->
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
        </div>
        
      </div>
    </div>
  </div>
  
			`;
		}
		
		document.querySelector(".products").innerHTML = output;
	}
} 

let http1 = new XMLHttpRequest();
http1.open('get', 'newArrival.json', true);
http1.send();
http1.onload = function(){
	
	if(this.readyState == 4 && this.status == 200){
		let products = JSON.parse(this.responseText);

	
		let output = "";
		for(let item of products){
			output += `
				<style>
					.product:hover{
						transform: scale(1.05);
						transition: all 0.5s;
					}
					
				</style>
				<div class="product text-center col-lg-3 col-md-4 col-12">
				<img src="${item.image}" alt="" class="img-fluid mb-3">
				<div class="star" style="color:goldenrod;">
				<i class="fas fa-solid fa-star"></i>
				<i class="fas fa-solid fa-star"></i>
				<i class="fas fa-solid fa-star"></i>
				<i class="fas fa-solid fa-star"></i>
				<i class="fas fa-solid fa-star"></i>
				</div>
				<h5 class="p-name">${item.name}</h5>
				<h4 class="p-price">$${item.price}</h4>
				<button class="buy-btn mx-auto" onclick="clickCounter()">ADD TO CART</button>
				</div>
			`;
		}
		document.querySelector(".newArrival").innerHTML = output;
	}
}

// carousel
var left = 1;
var right = 3;
function show() {
    for (i = left; i <= right; i++) {
        document.getElementById("blog" + i).style.display = "inline-block";
    }
};

function moveRight() {
    if (left <= 3 && right <= 5) {
        document.getElementById("blog" + left).style.display = "none";
        left += 1;
        right += 1;
        for (i = left; i <= right; i++) {
            document.getElementById("blog" + i).style.display = "inline-block";
        }
    }
    else {
        return;
    }
};


function moveLeft() {
    if (left >= 2 && right <= 6) {
        console.log("working");
        document.getElementById("blog" + right).style.display = "none";
        left -= 1;
        right -= 1;
        for (i = left; i <= right; i++) {
            document.getElementById("blog" + i).style.display = "inline-block";
        }
    }
    else {
        return;
    }
};


function showAll(){
	fetch('./newArrival.json').then((data)=>{
		return data.json();
	}).then((data) =>{
		let html="";
		data.forEach(item =>{
			html+=`
			<div class="product text-center col-lg-3 col-md-4 col-12">
			<img src="${item.image}" alt="" class="img-fluid mb-3">
			<div class="star" style="color:goldenrod;">
			<i class="fas fa-solid fa-star"></i>
			<i class="fas fa-solid fa-star"></i>
			<i class="fas fa-solid fa-star"></i>
			<i class="fas fa-solid fa-star"></i>
			<i class="fas fa-solid fa-star"></i>
			</div>
			<h5 class="p-name">${item.name}</h5>
			<h4 class="p-price">$${item.price}</h4>
			<button class="buy-btn mx-auto" onclick="clickCounter()">ADD TO CART</button>
			</div>
			`;
		});
		document.querySelector(".newArrival").innerHTML = html;
	});
}

//women
function showWomen(){
	fetch('./newArrival.json').then((data)=>{
		return data.json();
	}).then((data) =>{
		let html="";
		data.forEach(item =>{
			let category=item.category;
			category=category.toLowerCase();
			if(category.includes("woman")){
			html+=`
			<div class="product text-center col-lg-3 col-md-4 col-12">
			<img src="${item.image}" alt="" class="img-fluid mb-3">
			<div class="star" style="color:goldenrod;">
			<i class="fas fa-solid fa-star"></i>
			<i class="fas fa-solid fa-star"></i>
			<i class="fas fa-solid fa-star"></i>
			<i class="fas fa-solid fa-star"></i>
			<i class="fas fa-solid fa-star"></i>
			</div>
			<h5 class="p-name">${item.name}</h5>
			<h4 class="p-price">$${item.price}</h4>
			<button class="buy-btn mx-auto" onclick="clickCounter()">ADD TO CART</button>
			</div>
			`;
			}
		});
		document.querySelector(".newArrival").innerHTML = html;
	});
}

//men
function showMen(){
	fetch('./newArrival.json').then((data)=>{
		return data.json();
	}).then((data) =>{
		let html="";
		data.forEach(item =>{
			let category=item.category;
			category=category.toLowerCase();
			if(category.includes("men")){
			html+=`
			<div class="product text-center col-lg-3 col-md-4 col-12">
			<img src="${item.image}" alt="" class="img-fluid mb-3">
			<div class="star" style="color:goldenrod;">
			<i class="fas fa-solid fa-star"></i>
			<i class="fas fa-solid fa-star"></i>
			<i class="fas fa-solid fa-star"></i>
			<i class="fas fa-solid fa-star"></i>
			<i class="fas fa-solid fa-star"></i>
			</div>
			<h5 class="p-name">${item.name}</h5>
			<h4 class="p-price">$${item.price}</h4>
			<button class="buy-btn mx-auto" onclick="clickCounter()">ADD TO CART</button>
			</div>
			`;
			}
		});
		document.querySelector(".newArrival").innerHTML = html;
	});
}

//accessories
function showAcc(){
	fetch('./newArrival.json').then((data)=>{
		return data.json();
	}).then((data) =>{
		let html="";
		data.forEach(item =>{
			let category=item.category;
			category=category.toLowerCase();
			if(category.includes("accessories")){
			html+=`
			<div class="product text-center col-lg-3 col-md-4 col-12">
			<img src="${item.image}" alt="" class="img-fluid mb-3">
			<div class="star" style="color:goldenrod;">
			<i class="fas fa-solid fa-star"></i>
			<i class="fas fa-solid fa-star"></i>
			<i class="fas fa-solid fa-star"></i>
			<i class="fas fa-solid fa-star"></i>
			<i class="fas fa-solid fa-star"></i>
			</div>
			<h5 class="p-name">${item.name}</h5>
			<h4 class="p-price">$${item.price}</h4>
			<button class="buy-btn mx-auto" onclick="clickCounter()">ADD TO CART</button>
			</div>
			`;
			}
		});
		document.querySelector(".newArrival").innerHTML = html;
	});
}

//products
function showCategory(){
	var choice=document.getElementById("category");
	if(choice.value=="all"){
	fetch('./products.json').then((data)=>{
		return data.json();
	}).then((data) =>{
		let html="";
		data.forEach(item =>{
			// let category=item.category;
			// category=category.toLowerCase();
			
			html+=`
			<div class="product text-center col-lg-3 col-md-4 col-12">
			<img src="${item.image}" alt="" class="img-fluid mb-3">
			<div class="star" style="color:goldenrod;">
			<i class="fas fa-solid fa-star"></i>
			<i class="fas fa-solid fa-star"></i>
			<i class="fas fa-solid fa-star"></i>
			<i class="fas fa-solid fa-star"></i>
			<i class="fas fa-solid fa-star"></i>
			</div>
			<h5 class="p-name">${item.name}</h5>
			<h4 class="p-price">$${item.price}</h4>
			<button class="buy-btn mx-auto" onclick="clickCounter()">ADD TO CART</button>
			</div>
			`;
			
		});
		document.querySelector(".products").innerHTML = html;
	});
}
else if(choice.value=="woman"){
	fetch('./products.json').then((data)=>{
		return data.json();
	}).then((data) =>{
		let html="";
		data.forEach(item =>{
			let category=item.category;
			category=category.toLowerCase();
			if(category.includes("woman")){
			html+=`
			<div class="product text-center col-lg-3 col-md-4 col-12">
			<img src="${item.image}" alt="" class="img-fluid mb-3">
			<div class="star" style="color:goldenrod;">
			<i class="fas fa-solid fa-star"></i>
			<i class="fas fa-solid fa-star"></i>
			<i class="fas fa-solid fa-star"></i>
			<i class="fas fa-solid fa-star"></i>
			<i class="fas fa-solid fa-star"></i>
			</div>
			<h5 class="p-name">${item.name}</h5>
			<h4 class="p-price">$${item.price}</h4>
			<button class="buy-btn mx-auto" onclick="clickCounter()">ADD TO CART</button>
			</div>
			`;
			}
		});
		document.querySelector(".products").innerHTML = html;
	});
}
else if(choice.value=="men"){
	fetch('./products.json').then((data)=>{
		return data.json();
	}).then((data) =>{
		let html="";
		data.forEach(item =>{
			let category=item.category;
			category=category.toLowerCase();
			if(category.includes("men")){
			html+=`
			<div class="product text-center col-lg-3 col-md-4 col-12">
			<img src="${item.image}" alt="" class="img-fluid mb-3">
			<div class="star" style="color:goldenrod;">
			<i class="fas fa-solid fa-star"></i>
			<i class="fas fa-solid fa-star"></i>
			<i class="fas fa-solid fa-star"></i>
			<i class="fas fa-solid fa-star"></i>
			<i class="fas fa-solid fa-star"></i>
			</div>
			<h5 class="p-name">${item.name}</h5>
			<h4 class="p-price">$${item.price}</h4>
			<button class="buy-btn mx-auto" onclick="clickCounter()">ADD TO CART</button>
			</div>
			`;
			}
		});
		document.querySelector(".products").innerHTML = html;
	});
}
else if(choice.value=="accessories"){
	fetch('./products.json').then((data)=>{
		return data.json();
	}).then((data) =>{
		let html="";
		data.forEach(item =>{
			let category=item.category;
			category=category.toLowerCase();
			if(category.includes("accessories")){
			html+=`
			<div class="product text-center col-lg-3 col-md-4 col-12">
			<img src="${item.image}" alt="" class="img-fluid mb-3">
			<div class="star" style="color:goldenrod;">
			<i class="fas fa-solid fa-star"></i>
			<i class="fas fa-solid fa-star"></i>
			<i class="fas fa-solid fa-star"></i>
			<i class="fas fa-solid fa-star"></i>
			<i class="fas fa-solid fa-star"></i>
			</div>
			<h5 class="p-name">${item.name}</h5>
			<h4 class="p-price">$${item.price}</h4>
			<button class="buy-btn mx-auto" onclick="clickCounter()">ADD TO CART</button>
			</div>
			`;
			}
		});
		document.querySelector(".products").innerHTML = html;
	});
}
}

//accessories
function showAcc1(){
	fetch('./products.json').then((data)=>{
		return data.json();
	}).then((data) =>{
		let html="";
		data.forEach(item =>{
			let category=item.category;
			category=category.toLowerCase();
			if(category.includes("accessories")){
			html+=`
			<div class="product text-center col-lg-3 col-md-4 col-12">
			<img src="${item.image}" alt="" class="img-fluid mb-3">
			<div class="star" style="color:goldenrod;">
			<i class="fas fa-solid fa-star"></i>
			<i class="fas fa-solid fa-star"></i>
			<i class="fas fa-solid fa-star"></i>
			<i class="fas fa-solid fa-star"></i>
			<i class="fas fa-solid fa-star"></i>
			</div>
			<h5 class="p-name">${item.name}</h5>
			<h4 class="p-price">$${item.price}</h4>
			<button class="buy-btn mx-auto" onclick="clickCounter()">ADD TO CART</button>
			</div>
			`;
			}
		});
		document.querySelector(".products").innerHTML = html;
	});
}

//all
function showAll1(){
	fetch('./products.json').then((data)=>{
		return data.json();
	}).then((data) =>{
		let html="";
		data.forEach(item =>{
			html+=`
			<div class="product text-center col-lg-3 col-md-4 col-12">
			<img src="${item.image}" alt="" class="img-fluid mb-3">
			<div class="star" style="color:goldenrod;">
			<i class="fas fa-solid fa-star"></i>
			<i class="fas fa-solid fa-star"></i>
			<i class="fas fa-solid fa-star"></i>
			<i class="fas fa-solid fa-star"></i>
			<i class="fas fa-solid fa-star"></i>
			</div>
			<h5 class="p-name">${item.name}</h5>
			<h4 class="p-price">$${item.price}</h4>
			<button class="buy-btn mx-auto" onclick="clickCounter()">ADD TO CART</button>
			</div>
			`;
		});
		document.querySelector(".products").innerHTML = html;
	});
}
// fetch("products.json").then(function(response){
// 	return response.json();
// }).then(function(data){
// 	localStorage.setItem("products", JSON.stringify(data));
// 	if(!localStorage.getItem("cart")){
// 		localStorage.setItem("cart","[]");
// 	}
// });

// let product= JSON.parse(localStorage.getItem("products"));
// let cart= JSON.parse(localStorage.getItem("cart"));

// //adding product in the cart
// function addItem(productID){

// }

//sorting by price
	function sortPrice(){ 
		var choice=document.getElementById("price");
		if(choice.value=="default"){
			fetch('./products.json').then((data) =>{
				return data.json();
			}).then((data)=>{
				let html="";
				data.forEach(item =>{
					html+=`
					<div class="product text-center col-lg-3 col-md-4 col-12">
			<img src="${item.image}" alt="" class="img-fluid mb-3">
			<div class="star" style="color:goldenrod;">
			<i class="fas fa-solid fa-star"></i>
			<i class="fas fa-solid fa-star"></i>
			<i class="fas fa-solid fa-star"></i>
			<i class="fas fa-solid fa-star"></i>
			<i class="fas fa-solid fa-star"></i>
			</div>
			<h5 class="p-name">${item.name}</h5>
			<h4 class="p-price">$${item.price}</h4>
			<button class="buy-btn mx-auto" onclick="clickCounter()">ADD TO CART</button>
			</div>
					`;
				});
				document.querySelector(".products").innerHTML = html;
			});
			
		}

		else if(choice.value=="asc"){
			fetch('./products.json').then((data)=>{
				return data.json();
			}).then((data)=>{
				data.sort(function(a,b){
					return a.price - b.price
				});
				let html="";
				data.forEach(item =>{
					html+=`
					<div class="product text-center col-lg-3 col-md-4 col-12">
			<img src="${item.image}" alt="" class="img-fluid mb-3">
			<div class="star" style="color:goldenrod;">
			<i class="fas fa-solid fa-star"></i>
			<i class="fas fa-solid fa-star"></i>
			<i class="fas fa-solid fa-star"></i>
			<i class="fas fa-solid fa-star"></i>
			<i class="fas fa-solid fa-star"></i>
			</div>
			<h5 class="p-name">${item.name}</h5>
			<h4 class="p-price">$${item.price}</h4>
			<button class="buy-btn mx-auto" onclick="clickCounter()">ADD TO CART</button>
			</div>
					`;
				});
				document.querySelector(".products").innerHTML = html;
				// document.querySelector('.sorter').innerHTML = "Sort By: Low to High";
	});
			
		
		}
		else if(choice.value=="dsc"){
			fetch('./products.json').then((data)=>{
				return data.json();
			}).then((data)=>{
				data.sort(function(a,b){
					return b.price - a.price
				});
				let html="";
				data.forEach(item =>{
					html+=`
					<div class="product text-center col-lg-3 col-md-4 col-12">
			<img src="${item.image}" alt="" class="img-fluid mb-3">
			<div class="star" style="color:goldenrod;">
			<i class="fas fa-solid fa-star"></i>
			<i class="fas fa-solid fa-star"></i>
			<i class="fas fa-solid fa-star"></i>
			<i class="fas fa-solid fa-star"></i>
			<i class="fas fa-solid fa-star"></i>
			</div>
			<h5 class="p-name">${item.name}</h5>
			<h4 class="p-price">$${item.price}</h4>
			<button class="buy-btn mx-auto" onclick="clickCounter()">ADD TO CART</button>
			</div>
					`;
				});
				document.querySelector(".products").innerHTML = html;
	});
}
}

//modal
function loadModal(product){ 
	let SHOES = JSON.parse("./products.json"); 
	SHOES=SHOES.filter(x=>x.id == product); 
	let output = ""; 
	let id=0; 
	for(let product of SHOES){ 
	output += ` 
	
	`; 
	p_id = product.id; 
	} 
	document.querySelector('.modal-body').innerHTML=output; 
	 
	output = ""; 
	output+=`<button type="button" class="btn btn-dark" style="padding-right:41.5%; padding-left:41%;" onclick ="cart(${id})">Add to Cart</button>`; 
	document.querySelector('.modal-footer').innerHTML = output; 
	console.log("settled"); 
	}