const indexAthleteContainer = document.querySelector('#index-athlete-container')
const messageContainer = document.querySelector('#message-container')
const showAthleteContainer = document.querySelector('#show-athlete-container')

export const onIndexAthleteSuccess = (athletes) => {
    athletes.forEach(athlete => {
        const div = document.createElement('div')
        div.innerHTML = `
            <h3>${athlete.firstName}  ${athlete.lastName}</h3>
            <button data-id="${athlete._id}" >Show Athlete</button>
        `

        indexAthleteContainer.appendChild(div)
    })
}

export const onFailure = (error) => {
    messageContainer.innerHTML = `
        <h3>You've got an error! :(</h3>
        <p>${error}</p>
    `
}

export const onCreateAthleteSuccess = () => {
    messageContainer.innerText = 'You have created an athlete! :)'
}

export const onShowAthleteSuccess = (athlete) => {
    const div = document.createElement('div')
    div.innerHTML = `
        <h3>${athlete.firstName}  ${athlete.lastName}</h3>
        <p>${athlete.sport}</p>
        <p>${athlete.speed}</p>
        <p>${athlete._id}</p>

        <form data-id="${athlete._id}">
        <input type="text" name="firstName" value="${athlete.firstName}" />
        <input type="text" name="lastName" value="${athlete.lastName}" />
        <input type="text" name="sport" value="${athlete.sport}" />
        <input type="number" name="speed" value="${athlete.speed}" />
        <input type="submit" value="Update Athlete" />
    </form>

    <button data-id="${athlete._id}">Delete Athlete</button>
    `
    showAthleteContainer.appendChild(div)
}

export const onUpdateAthleteSuccess = () => {
    messageContainer.innerText = 'Update was successful :)'
}

export const onDeleteAthleteSuccess = () => {
    messageContainer.innerText = 'Delete was successful :)'
}