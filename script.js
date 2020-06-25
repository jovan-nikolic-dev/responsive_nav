	const burgerBtn = document.getElementById("burger-btn");
	const navLinksWrapper = document.getElementById("nav-links-wrapper");

const navSlide = () => {


	burgerBtn.addEventListener("click", () => {
		navLinksWrapper.classList.toggle("nav-active");
	});


};



navSlide();


window.addEventListener("resize", function() {

	if (window.innerWidth >= 720) {
		navLinksWrapper.classList.remove("nav-active");
	}
	console.log(111);
})

