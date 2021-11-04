const findMatching = (driverArray, name) => {
    return driverArray.filter(match => 
        match.toLowerCase() === name.toLowerCase()
    )
}

const fuzzyMatch = (driverArray, str) => {
    return driverArray.filter(match =>
        match.toLowerCase().indexOf(str.toLowerCase()) === 0
    )
}

const matchName = (driverArray, name) => {
    return driverArray.filter(match =>
        match.name === name
    )
}
