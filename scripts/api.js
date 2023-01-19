export const indexAthlete = () => {
    return fetch(`http://localhost:3005/athletes`)
}

export const createAthlete = (data) => {
    return fetch(`http://localhost:3005/athletes`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

export const showAthlete = (id) => {
    return fetch(`http://localhost:3005/athletes/${id}`)
}

export const updateCharacter = (data, id) => {
    return fetch(`http://localhost:3005/athletes/${id}`, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

export const deleteCharacter = (id) => {
    return fetch(`http://localhost:3005/athletes/${id}`, {
        method: 'DELETE'
    })
}