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
});
