const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const documentCards = document.querySelectorAll('.document-card');

function filterDocuments() {
    const query = searchInput.value.toLowerCase().trim();

    documentCards.forEach(card => {
        const title = card.querySelector('.doc-title').textContent.toLowerCase();
        const tag = card.querySelector('.course-tag').textContent.toLowerCase();
        
        if (title.includes(query) || tag.includes(query)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

searchInput.addEventListener('input', filterDocuments);
searchBtn.addEventListener('click', filterDocuments);