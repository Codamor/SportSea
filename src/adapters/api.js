function checkError(response){
    if (!response.ok){
        throw new Error(`An error has occurred : ${response.status}`) ;
    }
}

async function getUserInformations(userId){
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


async function getUserActivity(userId){
    let response =
        await fetch(
            `http://localhost:3000/user/${userId}/activity`,
            {
                method: "get"
            }) ;

    checkError(response) ;

    let userActivity = await response.json() ;

    return userActivity.data ;
}


async function getUserAverageSessions(userId){
    let response = await fetch(
        `http://localhost:3000/user/${userId}/average-sessions`,
        {
            method: "get"
        }
    )

    checkError(response) ;

    let userAverageSessions = await response.json() ;

    return userAverageSessions.data ;
}

async function getUserPerformance(userId){
    let response = await fetch(
        `http://localhost:3000/user/${userId}/performance`,
        {
            method: "get"
        }
    )

    checkError(response) ;

    let userPerformance = await response.json() ;

    return userPerformance.data ;
}
