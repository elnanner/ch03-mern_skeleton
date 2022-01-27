// create user
const create = async (user) => {
    try {
        let response = await fetch('/api/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })

        return await response.json()
    } catch (error) {
        console.log(error);
    }
}

// list users
const list = async (signal) => {
    try {
        let response = await fetch('/api/users', {
            method: 'GET',
            signal: signal
        })

        return response.json()
    } catch (error) {
        console.log(error);
    }
}

// read user
const read = async (params, credentials, signal) => {
    try {
        let response = await fetch('/api/users/' + params.userId, {
            method: 'GET',
            signal: signal,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + credentials.t
            }
        })

        return await response.json()
    } catch (error) {
        console.log(error);
    }
}

// update user
const update = async (params, credentials, user) => {
    try {
        let response = await fetch('/api/users/' + params.userId, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + credentials.t
            },
            body: user
        })

        return await response.json()
    } catch (error) {
        console.log(error);
    }
}

// remove user
const remove = async (params, credentials) => {
    try {
        let response = await fetch('/api/users/' + params.userId, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + credentials.t
            }
        })

        return await response.json()
    } catch (error) {
        console.log(error);
    }
}

// follow an user
const follow = async (params, credentials, followId) => {
    try {
        let response = await fetch('/api/users/follow/', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + credentials.t
            },
            body: JSON.stringify({ userId: params.userId, followId: followId })
        })
        return await response.json()
    } catch (err) {
        console.log(err);
    }
}

//unfollow an user
const unfollow = async (params, credentials, unfollowId) => {
    try {
        let response = await fetch('/api/users/unfollow/', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + credentials.t
            },
            body: JSON.stringify({ userId: params.userId, unfollowId: unfollowId })
        })
        return await response.json()
    } catch (err) {
        console.log(err);
    }
}

// fetch users to follow
const findPeople = async (params, credentials, signal) => {
    try {
        let response = await fetch('/api/users/findpeople/' + params.userId, {
            signal: signal,
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + credentials.t
            }
        })
        return await response.json()
    } catch (err) {
        console.log(err);
    }
}
export { create, list, read, update, remove, follow, unfollow, findPeople }