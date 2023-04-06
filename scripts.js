// Ajoutez le dictionnaire d'URL d'images
const imageUrls = {
    'pomme': 'https://cdn.pixabay.com/photo/2016/08/14/11/56/apples-1592588_1280.jpg',
    'fraise': 'https://cdn.pixabay.com/photo/2013/04/02/21/47/strawberries-99551_1280.jpg',
    'ananas': 'https://cdn.pixabay.com/photo/2018/05/19/18/05/pineapple-3413953_1280.jpg',
    'kiwi': 'https://cdn.pixabay.com/photo/2018/02/11/19/09/kiwi-3146497_1280.jpg',
    'banane': 'https://cdn.pixabay.com/photo/2016/01/03/17/59/bananas-1119790_1280.jpg',
    'poire': 'https://cdn.pixabay.com/photo/2016/07/22/09/59/fruits-1534494_1280.jpg',
    'abricot': 'https://cdn.pixabay.com/photo/2016/07/30/10/51/apricots-1556851_1280.jpg',
    'orange': 'https://cdn.pixabay.com/photo/2012/02/19/18/05/oranges-15046_1280.jpg',
    'cerise': 'https://cdn.pixabay.com/photo/2016/06/18/22/36/cherries-1465801_1280.jpg',
    'framboise': 'https://cdn.pixabay.com/photo/2018/08/04/00/03/raspberries-3583005_1280.jpg',
    'nectarine': 'https://cdn.pixabay.com/photo/2019/07/18/14/24/eat-4346598_1280.jpg',
    'prune': 'https://cdn.pixabay.com/photo/2017/08/25/11/10/plum-2679782_1280.jpg',
    'raisin': 'https://cdn.pixabay.com/photo/2019/09/22/12/37/grapes-4495944_1280.jpg',
    'noix': 'https://cdn.pixabay.com/photo/2013/04/07/10/31/walnuts-101425_1280.jpg',
    'mangue': 'https://cdn.pixabay.com/photo/2016/03/05/22/41/mango-1239347_1280.jpg',
    'citron': 'https://cdn.pixabay.com/photo/2017/02/05/12/31/lemons-2039830_1280.jpg',
    'mandarine': 'https://cdn.pixabay.com/photo/2016/08/18/19/08/eat-1603660_1280.jpg',
    'noisette': 'https://cdn.pixabay.com/photo/2018/10/30/08/39/hazelnuts-3783066_1280.jpg',
    'grenade': 'https://cdn.pixabay.com/photo/2018/05/08/20/19/pomegranate-3383814_1280.jpg',
    'kaki': 'https://cdn.pixabay.com/photo/2015/12/19/17/38/fruit-1100023_1280.jpg',
    'ail': 'https://cdn.pixabay.com/photo/2013/02/21/19/12/garlic-84691_1280.jpg',
    'artichaut': 'https://cdn.pixabay.com/photo/2015/05/09/14/17/artichokes-759753_1280.jpg',
    'asperge': 'https://cdn.pixabay.com/photo/2018/05/29/23/14/asparagus-3440348_1280.jpg',
    'aubergine': 'https://cdn.pixabay.com/photo/2017/12/27/17/27/products-3043176_1280.jpg',
    'avocat': 'https://cdn.pixabay.com/photo/2015/08/10/12/02/avocados-882635_1280.jpg',
    'betterave_rouge': 'https://cdn.pixabay.com/photo/2018/05/29/23/05/beetroot-3440339_1280.jpg',
    'carotte': 'https://cdn.pixabay.com/photo/2016/07/11/00/18/carrots-1508847_1280.jpg',
    'chou': 'https://cdn.pixabay.com/photo/2018/10/03/21/57/cabbage-3722498_1280.jpg',
    'chou_de_bruxelles': 'https://cdn.pixabay.com/photo/2017/10/11/16/40/brussels-sprouts-2841582_1280.jpg',
    'chou_fleur': 'https://cdn.pixabay.com/photo/2014/04/07/01/46/cauliflower-318152_1280.jpg',
    'concombre': 'https://cdn.pixabay.com/photo/2017/06/27/07/17/cucumbers-2446470_1280.jpg',
    'courge': 'https://cdn.pixabay.com/photo/2018/09/18/14/01/squashes-3686251_1280.jpg',
    'courgette': 'https://cdn.pixabay.com/photo/2016/08/30/12/05/zucchini-1630518_1280.jpg',
    'endive': 'https://images.assetsdelivery.com/compings_v2/barmalini/barmalini2004/barmalini200400152.jpg',
    'fenouil': 'https://images.assetsdelivery.com/compings_v2/steidi/steidi2202/steidi220200155.jpg',
    'laitue': 'https://cdn.pixabay.com/photo/2015/05/17/14/29/salad-771056_1280.jpg',
    'navet': 'https://cdn.pixabay.com/photo/2017/04/27/21/01/kohlrabi-2266665_1280.jpg',
    'oignon': 'https://cdn.pixabay.com/photo/2016/05/16/22/47/onions-1397037_1280.jpg',
    'panais': 'https://cdn.pixabay.com/photo/2018/12/07/02/06/parsnips-3860993_1280.jpg',
    'poireau': 'https://cdn.pixabay.com/photo/2012/11/07/18/03/leek-65277_1280.jpg',
    'poivron': 'https://cdn.pixabay.com/photo/2014/10/22/21/54/bell-peppers-499068_1280.jpg',
    'pomme_de_terre': 'https://cdn.pixabay.com/photo/2014/08/06/20/32/potatoes-411975_1280.jpg',
    'radis': 'https://cdn.pixabay.com/photo/2016/08/27/11/21/radishes-1623915_1280.jpg',
    'topinambour': 'https://st.depositphotos.com/thumbs/1534655/image/3643/36439029/api_thumb_450.jpg?forcejpeg=true',
    'tomate': 'https://cdn.pixabay.com/photo/2011/03/16/16/01/tomatoes-5356_1280.jpg',
    'melon': 'https://cdn.pixabay.com/photo/2018/02/12/18/51/fruit-3148885_1280.jpg',
    'potiron': 'https://cdn.pixabay.com/photo/2013/12/14/09/13/freestyle-bite-228478_1280.jpg'
};

// Attendre que le contenu du DOM soit chargé
document.addEventListener('DOMContentLoaded', () => {
    // Sélectionner les éléments nécessaires
    const searchIcon = document.querySelector('.fa-search');
    const searchInput = document.getElementById('search-input');
    const cards = document.querySelectorAll('.card');

    createCards();

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

// page 2

// Fonction pour récupérer les paramètres de l'URL
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name) || '';
}

// Récupérez le paramètre 'categorie' de l'URL
const categorie = getUrlParameter('categorie');

// Obtenez l'URL de l'image en fonction de la catégorie
const imageUrl = imageUrls[categorie];

// Chargez les données pour la catégorie sélectionnée
chargerDonnees(categorie);

async function chargerDonnees(categorie) {
    // Chargez les données JSON depuis le fichier data.json
    const response = await fetch('data.json');
    const data = await response.json();

    console.log('Données brutes:', data);

    // Obtenez la date du jour au format "DD/MM/YYYY"
    const today = new Date();
    const todayFormatted = ('0' + today.getDate()).slice(-2) + '/' + ('0' + (today.getMonth() + 1)).slice(-2) + '/' + today.getFullYear();

    // Filtrez les objets en fonction de la catégorie et de la date
    const filteredData = data.filter(item => item.Categorie && typeof item.Categorie === 'string' && item.Categorie.toLowerCase() === categorie.toLowerCase() && item.Date === todayFormatted);

    console.log('Données filtrées:', filteredData);

    // Sélectionnez l'élément HTML où vous voulez afficher les données
    const conteneur = document.getElementById('conteneur');

    // Parcourez les données filtrées et créez les éléments HTML
    for (const produit of filteredData) {
        const divRow = document.createElement('div');
        divRow.classList.add('row', 'mb-4', 'product-container');
        const divColImg = document.createElement('div');
        divColImg.classList.add('col-md-4');

        const divColDetails = document.createElement('div');
        divColDetails.classList.add('col-md-8');

        const img = document.createElement('img');
        img.classList.add('card-img');
        img.classList.add('img-thumbnail', 'rounded-circle');
        img.style.border = '1px solid #ddd';

        const divDetails = document.createElement('div');
        divDetails.classList.add('details');

        // Ajoutez les attributs et le contenu aux éléments créés
        img.src = imageUrl;
        img.alt = produit.Libelle || 'N/A';

        divDetails.innerHTML = `
            <h3>${produit.Libelle || 'N/A'}</h3>
            <p>Date: ${produit.Date || 'N/A'}</p>
            <p>Prix: ${(produit.Prix || 0).toFixed(2)} €/${produit.Unite || 'N/A'}</p>
            <p>Origine: ${produit.Origine || 'N/A'}</p>
            <p>Catégorie: ${produit.Categorie || 'N/A'}</p>
            <p>Saisonnalité: ${produit.Saisonnalite || 'N/A'}</p>
            <p>CO2: ${produit.CO2 || 'N/A'} kgCO2e/${produit.Unite || 'N/A'}</p>
            <p>Type d'agriculture: ${produit.Type_agriculture || 'N/A'}</p>
        `;


        // Ajoutez les éléments créés au conteneur
        divColImg.appendChild(img);
        divColDetails.appendChild(divDetails);
        divRow.appendChild(divColImg);
        divRow.appendChild(divColDetails);
        conteneur.appendChild(divRow);
    }
}

// page 1

function createCards() {
    let cardsContainer = document.getElementById("fruit-vegetable-cards");

    for (let category in imageUrls) {
        let card = `
            <a href="page_fruit_legume.html?categorie=${category}">
                <div class="col-md-4 mb-3">
                    <div class="card">
                        <img src="${imageUrls[category]}" class="card-img-top" alt="${category}">
                        <div class="card-body">
                            <h5 class="card-title">${category[0].toUpperCase() + category.slice(1)}</h5>
                        </div>
                    </div>
                </div>
            </a>
        `;

        cardsContainer.innerHTML += card;
    }
}