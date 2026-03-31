const navbar = document.getElementById("navbar");
const backTop = document.getElementById("backTop");

window.addEventListener("scroll", () => {
	const scrolled = window.scrollY > 80;
	navbar.classList.toggle("scrolled", scrolled);
	backTop.classList.toggle("visible", scrolled);
});

function toggleMenu() {
	const menu = document.getElementById("mobileMenu");
	menu.classList.toggle("open");
	document.body.style.overflow = menu.classList.contains("open")
		? "hidden"
		: "";
}

const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				const delay =
					parseFloat(entry.target.style.transitionDelay) * 1000 || 0;
				setTimeout(() => entry.target.classList.add("visible"), delay);
				observer.unobserve(entry.target);
			}
		});
	},
	{ threshold: 0.12 },
);

document
	.querySelectorAll(".reveal, .reveal-left, .reveal-right")
	.forEach((el) => observer.observe(el));

const heroStats = document.querySelector(".hero-stats");
if (heroStats) {
	new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) return;
				entry.target.querySelectorAll(".hero-stat-num").forEach((el) => {
					const text = el.textContent;
					const num = parseInt(text);
					const suffix = text.replace(/[0-9]/g, "");
					let start = null;
					const step = (ts) => {
						if (!start) start = ts;
						const progress = Math.min((ts - start) / 1800, 1);
						const eased = 1 - Math.pow(1 - progress, 3);
						el.textContent = Math.floor(eased * num) + suffix;
						if (progress < 1) requestAnimationFrame(step);
					};
					requestAnimationFrame(step);
				});
				entry.target._statsObserver?.unobserve(entry.target);
			});
		},
		{ threshold: 0.5 },
	).observe(heroStats);
}
