window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
    showNavOnScroll()
}

function showNavOnScroll() {
    if(scrollY > 0) {
        document.querySelector("#navigation").classList.add("scroll")
    } else {
        document.querySelector("#navigation").classList.remove("scroll")
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

document.addEventListener('DOMContentLoaded', function() {
    let currentPage = 1;
    const totalPages = 4;
    
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    function showPage(pageNumber) {
        console.log(`Showing page ${pageNumber}`);
        for (let i = 1; i <= totalPages; i++) {
            document.getElementById(`page${i}`).style.display = (i === pageNumber) ? 'block' : 'none';
        }
        prevBtn.style.display = (pageNumber === 1) ? 'none' : 'inline-block';
        nextBtn.style.display = (pageNumber === totalPages) ? 'none' : 'inline-block';
    }
    
    prevBtn.addEventListener('click', function() {
        console.log('Previous button clicked');
        if (currentPage > 1) {
            currentPage--;
            showPage(currentPage);
        }
    });
    
    nextBtn.addEventListener('click', function() {
        console.log('Next button clicked');
        if (currentPage < totalPages) {
            currentPage++;
            showPage(currentPage);
        }
    });
    
    showPage(currentPage);
});

