const { Router } = require('express')
const db = require('./db.js')
const router = Router()
const bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({ extended: true }))

router.get('/', async (_, res) => {
    const arr = await db.obtenerLista();
    console.log(arr)
    res.render('home', { usuarios: arr })
})

router.get('/user-create', (_, res) => {
    res.render('creaUsuario')
})

router.get('/nuevoUsuarios', (req, res) => {
    //db.ingresar(req.body)
    console.log(req.body)
    res.redirect('/')
})

router.get('/user-delete/:id', (req, res) => {
    const { id } = req.params
    const usuario = fakeUsers.find(u => u.id === id)
    res.render('eliminaUsuario', { usuario })
})

module.exports = router