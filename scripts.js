// Attendre que le contenu du DOM soit chargé
document.addEventListener('DOMContentLoaded', () => {
    // Sélectionner les éléments nécessaires
    const searchIcon = document.querySelector('.fa-search');
    const searchInput = document.getElementById('search-input');
    const cards = document.querySelectorAll('.card');

    // Ajouter un écouteur d'événements sur l'icône de recherche
    searchIcon.addEventListener('click', () => {
        // Basculer la visibilité de l'entrée de recherche
        searchInput.classList.toggle('d-none');
        // Mettre le focus sur l'entrée de recherche
        searchInput.focus();

        // Arrêter la propagation de l'événement
        event.stopPropagation();
    });

    // Ajouter un écouteur d'événements sur le document pour fermer la barre de recherche
    document.addEventListener('click', () => {
        if (!searchInput.classList.contains('d-none')) {
            searchInput.classList.add('d-none');
        }
    });

    // Filtrer les cartes en fonction de la valeur entrée dans la barre de recherche
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

    // Masquer la barre de recherche lorsque la touche "Entrée" est enfoncée
    searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            searchInput.classList.toggle('d-none');
        }
    });    
});

// Sélectionner les éléments nécessaires pour le filtrage
const applyFiltersButton = document.getElementById('apply-filters');
const saisonnaliteSelect = document.getElementById('saisonnalite');
const localiteSelect = document.getElementById('localite');
const typeAgricultureSelect = document.getElementById('type-agriculture');
const prixSelect = document.getElementById('prix');

// Appliquer les filtres lorsqu'on clique sur le bouton "Appliquer les filtres"
applyFiltersButton.addEventListener('click', () => {
    const saisonnalite = saisonnaliteSelect.value;
    const localite = localiteSelect.value;
    const typeAgriculture = typeAgricultureSelect.value;
    const prix = prixSelect.value;

    // Appliquez vos filtres en fonction des valeurs sélectionnées
    // Vous devrez ajouter des attributs de données ou des classes aux éléments de la carte pour pouvoir les filtrer en fonction des critères sélectionnés

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

    // Fermer le modal une fois les filtres appliqués
    $('#filterModal').modal('hide');
});

