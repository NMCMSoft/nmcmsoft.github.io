


document.addEventListener('DOMContentLoaded', () => {
    const element = document.getElementById('scroll-cross');
    if (element) {
        element.innerHTML = "This is the new content";
    } else {
        console.error('Element with ID "specific-id" not found.');
    }
});

//Template loader
document.addEventListener('DOMContentLoaded', () => {
    /*ELEMENT CONTENT - TEMPLATE ELEMENT NAME*/
    //loadHTML('footerblock.html', 'TEMPLATE-FOOTER-BLOCK');
    //loadHTML('headerblock.html', 'TEMPLATE-HEADER-BLOCK');
    //loadHTML('sideadvertsblock.html', 'TEMPLATE-SIDEADVERT-BLOCK');
    //loadHTML('sidenavbarblock.html', 'TEMPLATE-SIDENAVBAR-BLOCK');
});


function loadHTML(file, elementId) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error loading HTML:', error));
}