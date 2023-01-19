import { indexAthlete, createAthlete, showAthlete } from './api.js'
import {
	onIndexAthleteSuccess,
	onFailure,
	onCreateAthleteSuccess,
	onShowAthleteSuccess,
} from './ui.js'

const createAthleteForm = document.querySelector('#create-athlete-form')
const indexAthleteContainer = document.querySelector('#index-athlete-container')

indexAthlete()
    .then(res => res.json())
    .then(res => {
        console.log(res)
        onIndexAthleteSuccess(res.athletes)
    })
    .catch(onFailure)


createAthleteForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const athleteData = {
			athlete: {
				firstName: event.target['firstName'].value,
				lastName: event.target['lastName'].value,
				sport: event.target['sport'].value,
				speed: event.target['speed'].value,
			},
		}


    createAthlete(athleteData)
			.then(onCreateAthleteSuccess)
			.catch(onFailure)
})

indexAthleteContainer.addEventListener('click', (event) => {
    const id = event.target.getAttribute('data-id')
   

    showAthlete(id)
			.then((res) => res.json())
			.then((res) => onShowAthleteSuccess(res.athlete))
			.catch(onFailure)
})