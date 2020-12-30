const express = require('express')
const expressHandlebars = require('express-handlebars')

const app = express()

const fortunes = [
    'Conquer your fears',
    'Rivers need springs',
    `Don't fear what you don't know`,
    'Whenever possible, keep it simple',
]

//config handlebars
app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main',
}))
app.set('view engine', 'handlebars')

const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/about', (req, res) => {
    const randomFortune = fortunes[Math.floor(Math.random()*fortunes.length)]
    res.render('about', { fortune: randomFortune })
})

//pg 404 personalizada
app.use((req, res) => {
    res.status(404)
    res.render('404')
})

//pg 500 personalizada
app.use((err, req, res, next) => {
    console.error(err.message)
    res.status(500)
    res.render('500')
})

app.listen(port, () => console.log(
    `Express started on http://localhost:${port}; `
    + `press Ctrl-C to terminate.`
))