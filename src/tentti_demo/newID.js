

const giveNewID = () => {
    let max = 1000000
    let min = 0
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export default giveNewID