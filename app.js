// Espera a que el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
	const splash = document.getElementById('splash');
	const mainMenu = document.getElementById('main-menu');

	// Duración del splash (en ms, debe coincidir con la animación CSS)
	const splashDuration = 1800;

	setTimeout(() => {
		// Mantener el mismo fondo durante la transición
		document.body.style.background = 'linear-gradient(135deg, #ffe066 0%, #ff9900 100%)';
		splash.style.background = 'linear-gradient(135deg, #ffe066 0%, #ff9900 100%)';
		mainMenu.style.background = 'linear-gradient(135deg, #ffe066 0%, #ff9900 100%)';
		splash.style.opacity = '0';
		setTimeout(() => {
			splash.style.display = 'none';
			mainMenu.style.display = 'flex';
			// Asegura que el fondo se mantenga igual después de la transición
			document.body.style.background = 'linear-gradient(135deg, #ffe066 0%, #ff9900 100%)';
			mainMenu.style.background = 'linear-gradient(135deg, #ffe066 0%, #ff9900 100%)';
		}, 800); // Espera a que termine el fadeout
	}, splashDuration);

	// Menú hamburguesa para móviles
	const navHamburger = document.getElementById('nav-hamburger');
	const navLinks = document.getElementById('nav-links');
	const navOverlay = document.getElementById('nav-overlay');
	if (navHamburger && navLinks && navOverlay) {
		navHamburger.addEventListener('click', () => {
			const isOpen = navLinks.classList.toggle('open');
			navOverlay.classList.toggle('open', isOpen);
		});
		// Cierra el menú al hacer clic en un enlace
		navLinks.querySelectorAll('a').forEach(link => {
			link.addEventListener('click', () => {
				navLinks.classList.remove('open');
				navOverlay.classList.remove('open');
			});
		});
		// Cierra el menú al hacer clic fuera
		navOverlay.addEventListener('click', () => {
			navLinks.classList.remove('open');
			navOverlay.classList.remove('open');
		});
	}
});
