/** @format */
var typed = new Typed('#element', {
    strings: ['Mahmoud Nayel', 'a Developer', 'a Designer'],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});
// Function to change the navbar background on scroll
function checkScroll() {
	const navbar = document.getElementById("navbar-example");
	if (window.scrollY > window.innerHeight) {
		// When scrolled past 100vh
		navbar.classList.add("scrolled");
	} else {
		navbar.classList.remove("scrolled");
	}
}

// Listen to the scroll event
window.addEventListener("scroll", checkScroll);

// Function to animate the counting
function countUp() {
	const counters = document.querySelectorAll(".count");
	counters.forEach((counter) => {
		const target = +counter.getAttribute("data-target");
		let count = 0;
		const increment = Math.ceil(target / 200); // Speed of counting

		const updateCount = () => {
			if (count < target) {
				count += increment;
				counter.textContent = count > target ? target : count; // Ensure we don't exceed target
				requestAnimationFrame(updateCount);
			} else {
				counter.textContent = target; // Ensure the final count is the target
			}
		};

		updateCount();
	});
}

// Start counting when the section is in the viewport
const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			countUp();
			observer.unobserve(entry.target); // Stop observing after counting
		}
	});
});

observer.observe(document.querySelector("#clients")); // Observe the clients section
