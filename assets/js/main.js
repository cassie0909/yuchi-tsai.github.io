/*
	Dopetrope by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

///////////////// importing JS template

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			noOpenerFade: true,
			alignment: 'center'
		});

	// Nav.

		// Title Bar.
			$(
				'<div id="titleBar">' +
					'<a href="#navPanel" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

///////////////// My JS Script

	var modal = document.getElementById('modal');
	var modalImage = document.getElementById('modal-image');
	var closeModalButton = document.getElementById('close');

	// Function to show the modal
	function openModal(imageSrc) {
	  modalImage.src = imageSrc;
	  modal.style.display = 'block';
	}

	// Function to close the modal
	function closeModal() {
	  modal.style.display = 'none';
	}

	var clickableImages = document.getElementsByClassName('clickable-image');

	const toggleButtons = document.getElementsByClassName("toggle-button");

    const triangleRight = '&blacktriangleright;';
    const triangleDown = '&blacktriangledown;';


	window.onclick = function(event) {
		if (event.target == closeModalButton || event.target == modal || event.target == modalImage) {
			closeModal();
		}
		else {
			for (var i = 0; i < toggleButtons.length; i++) {
				if (event.target == toggleButtons[i]) {
					const targetId = toggleButtons[i].getAttribute('data-target');
					const hiddenContainer = document.getElementById(targetId);
					const customWord = toggleButtons[i].getAttribute('data-word');
					if (hiddenContainer.style.display === "none" ||
						hiddenContainer.style.display === "") {
						hiddenContainer.style.display = "block"; // Show the container
						toggleButtons[i].textContent = "Hide " + customWord + " \u25BC";
					} else {
						hiddenContainer.style.display = "none"; // Hide the container
						toggleButtons[i].textContent = "Show " + customWord + " \u25B6";
					}
				}
			}
			for (var i = 0; i < clickableImages.length; i++) {
				if (event.target == clickableImages[i]) {
					var imageSrc = clickableImages[i].getAttribute('data-image');
					openModal(imageSrc);
				}
			}
		}
	}

})(jQuery);