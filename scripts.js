document.addEventListener('DOMContentLoaded', () => {
    const searchIcon = document.querySelector('.fa-search');
    const searchInput = document.getElementById('search-input');
    const cards = document.querySelectorAll('.card');

    searchIcon.addEventListener('click', () => {
        searchInput.classList.toggle('d-none');
        searchInput.focus();
    });

    searchInput.addEventListener('input', (event) => {
        const searchTerm = event.target.value.toLowerCase();

        for (const card of cards) {
            const cardTitle = card.querySelector('.card-title').textContent.toLowerCase();
            if (cardTitle.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        }
    });
});
