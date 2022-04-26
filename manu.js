const navicon = document.getElementById('navicon')
const nav = document.getElementById('nav')

navicon.addEventListener('click', function (event) {
    nav.classList.toggle('nav-active')
    navicon.classList.toggle('icon-th-list-outline')
    navicon.classList.toggle('icon-th-list-outline')
})
$(function() {
	$('.gallery').pignoseGallery({
		thumbnails: '.gallery-thumbnails'
	});
});	