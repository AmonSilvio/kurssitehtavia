

const giveNewID = (previous) => {
    let min = previous * 2
    let max = previous * 3
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export default giveNewID