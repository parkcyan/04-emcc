/**
 * 
 */

window.onload = function() {
	const systemImgHover1 = document.querySelector("#system-img-hover1");
	const systemImgHover2 = document.querySelector("#system-img-hover2");
	const systemImgHover3 = document.querySelector("#system-img-hover3");
 
	const systemImg1 = document.querySelector("#system-img1")
	const systemImg2 = document.querySelector("#system-img2")
	const systemImg3 = document.querySelector("#system-img3")
	
	const productPopup = document.querySelector("#product-popupdiv");
	const productButton = document.querySelector("#product-button");
	const productClose = document.querySelector("#product-popup-close");
	
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
	
	productButton.addEventListener("click", function() {
		productPopup.style.display = "block";
	});
	productClose.addEventListener("click", function() {
		productPopup.style.display = "none";
	});
}

	
