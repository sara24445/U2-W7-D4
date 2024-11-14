const API_KEY = 'E0zR58cvhs2S2JAKAYEAX2tPwfUSzfhzyCNPo2RMagicZJBlUJyW4qaH'
const BASE_URL = 'https://api.pexels.com/v1/photos/'

const params = new URLSearchParams(window.location.search)
const imageId = params.get('id')

const loadImageDetails = async () => {
  const response = await fetch(`${BASE_URL}${imageId}`, {
    headers: {
      Authorization: API_KEY,
    },
  })

  const photo = await response.json()
  const imageDetail = document.getElementById('imageDetail')
  imageDetail.innerHTML = `
        <img src="${photo.src.large}" alt="${photo.alt}" />
        <h2>${photo.photographer}</h2>
        <a href="${photo.photographer_url}" target="_blank">View photographer</a>
    `
}

document.getElementById('backBtn').addEventListener('click', () => {
  window.history.back()
})

loadImageDetails()
