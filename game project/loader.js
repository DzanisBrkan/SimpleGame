let spinnerWrapper = document.querySelector('.spinner-wrapper');

window.addEventListener('load', function () {
    // spinnerWrapper.style.display = 'none';
    // prvu liniju koda nismo koristili jer nakon loadinga ostaje div na stranici dok sa drugom ne ostaje
    spinnerWrapper.parentElement.removeChild(spinnerWrapper);
});