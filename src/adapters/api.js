/**
 * Here are all api calls to get all kind of user informations
 */


/**
 * Check api response code
 * @param response - the response from api call
 */
function checkError(response){
    if (!response.ok){
        throw new Error(`An error has occurred : ${response.status}`) ;
    }
}

/**
 * @param userId
 * @returns {Promise<*>} - user informations
 */
export async function getUserInformations(userId){
    let response =
        await fetch(
            `http://localhost:3000/user/${userId}`,
            {
                method: "get"
                }) ;

    checkError(response) ;

    let userInformations = await response.json() ;

    return userInformations.data ;
}

/**
 *
 * @param userId
 * @returns {Promise<*[]>} - user activity
 */
export async function getUserActivity(userId){
    let response =
        await fetch(
            `http://localhost:3000/user/${userId}/activity`,
            {
                method: "get"
            }) ;

    checkError(response) ;

    let data = await response.json() ;

    let userActivity = [] ;
    let startDay = 0 ;

    for (let i = 0; i < data.data.sessions.length; i++) {
        userActivity.push(
            {
                day: startDay + 1,
                kilogram: data.data.sessions[i].kilogram,
                calories: data.data.sessions[i].calories
            }
        )
        startDay += 1 ;
    }
    return userActivity ;
}

/**
 *
 * @param userId
 * @returns {Promise<*[]>} - user average sessions
 */
export async function getUserAverageSessions(userId){
    let response = await fetch(
        `http://localhost:3000/user/${userId}/average-sessions`,
        {
            method: "get"
        }
    )

    checkError(response) ;

    let data = await response.json() ;

    let userAverageSessions = [] ;
    let days = ["L", "M", "M", "J", "V", "S", "D"] ;

    for (let i = 0; i < data.data.sessions.length; i++) {
        userAverageSessions.push(
            {
                day: days[i],
                sessionLength: data.data.sessions[i].sessionLength
            }
        )
    }
    return userAverageSessions ;
}

/**
 *
 * @param userId
 * @returns {Promise<*[]>} - user performance
 */
export async function getUserPerformance(userId){
    let response = await fetch(
        `http://localhost:3000/user/${userId}/performance`,
        {
            method: "get"
        }
    )

    checkError(response) ;

    let rawData = await response.json() ;

    let userPerformance = [] ;

    for (let i = 0; i < rawData.data.data.length; i++) {
        userPerformance.push(
            {
                kind: rawData.data.kind[i + 1],
                value: rawData.data.data[i].value
            }
        )
    }

    return userPerformance ;
}

