/**
 * 
 */

window.onload = function() {
	
	const menu = document.getElementById("menu");
	const sidebar = document.getElementById("sidebar");
	
	const systemImgHover1 = document.getElementById("system-img-hover1");
	const systemImgHover2 = document.getElementById("system-img-hover2");
	const systemImgHover3 = document.getElementById("system-img-hover3");
 
	const systemImg1 = document.getElementById("system-img1");
	const systemImg2 = document.getElementById("system-img2");
	const systemImg3 = document.getElementById("system-img3");
	
	const productABack = document.getElementById("product-back");
	const productAFor = document.getElementById("product-forward");
	const productDiv = document.querySelectorAll(".product-carousel-div");
	
	const productPopupDiv = document.getElementById("product-popupdiv");
	const productButton = document.getElementById("product-button");
	const productPopup = document.querySelectorAll(".product-popup");
	const productClose = document.querySelectorAll(".product-popup-close");
	
	menu.addEventListener("click", function() {
		sidebar.style.transform = "translateX(-100%)";
	})
	
	const systemImg1Out = function() {
		systemImgHover1.style.display = "none";
		systemImg1.style.filter = "brightness(100%)"
	}
	const systemImg2Out = function() {
		systemImgHover2.style.display = "none";
		systemImg2.style.filter = "brightness(100%)"
	}
	const systemImg3Out = function() {
		systemImgHover3.style.display = "none";
		systemImg3.style.filter = "brightness(100%)"
	}
	const systemImg1Over = function() {
		systemImg1.style.filter = "brightness(50%)"
		systemImgHover1.style.display = "block";	
	}
	const systemImg2Over = function() {
		systemImg2.style.filter = "brightness(50%)"
		systemImgHover2.style.display = "block";	
	}
	const systemImg3Over = function() {
		systemImg3.style.filter = "brightness(50%)"
		systemImgHover3.style.display = "block";	
	}
 
	systemImg1.addEventListener("mouseover", systemImg1Over);
	systemImg1.addEventListener("mouseover", systemImg2Out);
	systemImg1.addEventListener("mouseover", systemImg3Out);
	systemImg1.addEventListener("mouseout", systemImg1Out);
	systemImgHover1.addEventListener("mouseover", systemImg1Over);	
	
	systemImg2.addEventListener("mouseover", systemImg1Out);
	systemImg2.addEventListener("mouseover", systemImg2Over);
	systemImg2.addEventListener("mouseover", systemImg3Out);
	systemImg2.addEventListener("mouseout", systemImg2Out);
	systemImgHover2.addEventListener("mouseover", systemImg2Over);	
	
	systemImg3.addEventListener("mouseover", systemImg1Out);
	systemImg3.addEventListener("mouseover", systemImg2Out);
	systemImg3.addEventListener("mouseover", systemImg3Over);
	systemImg3.addEventListener("mouseout", systemImg3Out);
	systemImgHover3.addEventListener("mouseover", systemImg3Over);	
	
	let productIndex = 0;
	
	productABack.addEventListener("click", function() {
		if (productIndex == 0) productIndex = 2;
		else productIndex--;
		productDiv.forEach(function(img) {
			img.style.transform = "translateX(" + productIndex * -800 + "px)"
		})
	})
	
	productAFor.addEventListener("click", function() {
		if (productIndex == 2) productIndex = 0;
		else productIndex++;
		productDiv.forEach(function(img) {
			img.style.transform = "translateX(" + productIndex * -800 + "px)"
		})
	})
	
	productButton.addEventListener("click", function() {
		productPopupDiv.style.display = "block";
		productPopup[productIndex].style.display = "flex";
		productClose[productIndex].addEventListener("click", function(){
			productPopupDiv.style.display = "none";
			productPopup[productIndex].style.display = "none";
		})
	});
	
}

	
