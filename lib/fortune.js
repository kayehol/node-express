const fortuneCookies = [
    'Conquer your fears',
    'Rivers need springs',
    `Don't fear what you don't know`,
    'Whenever possible, keep it simple',
    'You will have a pleasant surprise',
]

exports.getFortune = () => {
    const idx = Math.floor(Math.random()*fortuneCookies.length)
    return fortuneCookies[idx]
}