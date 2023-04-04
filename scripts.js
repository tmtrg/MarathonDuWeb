document.addEventListener('DOMContentLoaded', () => {
    const searchIcon = document.querySelector('.fa-search');
    const searchInput = document.getElementById('search-input');
    const cards = document.querySelectorAll('.card');

    searchIcon.addEventListener('click', () => {
        searchInput.classList.toggle('d-none');
        searchInput.focus();

        event.stopPropagation();
    });

    document.addEventListener('click', () => {
        if (!searchInput.classList.contains('d-none')) {
            searchInput.classList.add('d-none');
        }
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

    searchInput.addEventListener('keydown', (event) => {
        // Vérifie si la touche "Entrée" est enfoncée
        if (event.key === 'Enter') {
            // Empêche l'action par défaut de la touche "Entrée"
            event.preventDefault();
    
            // Masque la barre de recherche
            searchInput.classList.toggle('d-none');
        }
    });    

});



const applyFiltersButton = document.getElementById('apply-filters');
const saisonnaliteSelect = document.getElementById('saisonnalite');
const localiteSelect = document.getElementById('localite');
const typeAgricultureSelect = document.getElementById('type-agriculture');
const prixSelect = document.getElementById('prix');

applyFiltersButton.addEventListener('click', () => {
    const saisonnalite = saisonnaliteSelect.value;
    const localite = localiteSelect.value;
    const typeAgriculture = typeAgricultureSelect.value;
    const prix = prixSelect.value;

    // Appliquez vos filtres en fonction des valeurs sélectionnées
    // Vous devrez ajouter des attributs de données ou des classes aux éléments de la carte pour pouvoir les filtrer en fonction des critères sélectionnés

    // Exemple : Ajoutez des attributs de données aux éléments de la carte, tels que data-saisonnalite="in-season", data-localite="france", etc.

    for (const card of cards) {
        const cardSaisonnalite = card.getAttribute('data-saisonnalite');
        const cardLocalite = card.getAttribute('data-localite');
        const cardTypeAgriculture = card.getAttribute('data-type-agriculture');
        const cardPrix = card.getAttribute('data-prix');

        const showCard = (saisonnalite === 'all' || saisonnalite === cardSaisonnalite) &&
            (localite === 'all' || localite === cardLocalite) &&
            (typeAgriculture === 'all' || typeAgriculture === cardTypeAgriculture) &&
            (prix === 'all' || prix === cardPrix);

        if (showCard) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    }

    // Fermez le modal une fois les filtres appliqués
    $('#filterModal').modal('hide');
});
