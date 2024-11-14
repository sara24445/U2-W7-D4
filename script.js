const API_KEY = 'E0zR58cvhs2S2JAKAYEAX2tPwfUSzfhzyCNPo2RMagicZJBlUJyW4qaH'
const BASE_URL = 'https://api.pexels.com/v1/search'

// Funzione per caricare le immagini
const loadImages = async (query) => {
  const response = await fetch(`${BASE_URL}?query=${query}`, {
    headers: {
      Authorization: API_KEY,
    },
  })

  const data = await response.json()
  const imageContainer = document.getElementById('imageContainer')
  imageContainer.innerHTML = '' // Pulisci prima il contenitore delle immagini

  data.photos.forEach((photo) => {
    const card = document.createElement('div')
    card.className = 'col-md-4'
    card.innerHTML = `
            <div class="card mb-4 shadow-sm">
                <a href="http://127.0.0.1:5500/detail.html=${photo.id}"> <!-- Link alla pagina di dettaglio -->
                    <img src="${photo.src.medium}" class="bd-placeholder-img card-img-top" />
                </a>
                <div class="card-body">
                    <h5 class="card-title">${photo.photographer}</h5>
                    <p class="card-text">${photo.id}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary hideBtn">Hide</button>
                        </div>
                        <small class="text-muted">${photo.id}</small>
                    </div>
                </div>
            </div>
        `

    // Gestisci il pulsante Hide
    card.querySelector('.hideBtn').addEventListener('click', () => {
      card.style.display = 'none' // Nascondi la card
    })

    imageContainer.appendChild(card)
  })
}

// Gestione del bottone Load Images
document.getElementById('loadImagesBtn').addEventListener('click', () => {
  const query = document.getElementById('searchInput').value || 'nature' // Default query
  loadImages(query)
})

// Gestione del bottone Load Secondary Images
document
  .getElementById('loadSecondaryImagesBtn')
  .addEventListener('click', () => {
    loadImages('city') // Sostituisci con la tua query secondaria
  })

// Gestione della ricerca per nuove immagini
document
  .getElementById('searchInput')
  .addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      loadImages(this.value)
    }
  })
