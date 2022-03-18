const { Router } = require('express');
const db = require("./db.js")
const router = Router();

router.get('/users', (req, res) => {
    const arr = await db.obtenerLista();
    res.json(arr)
})

router.post('/users', (req, res) => {
    db.ingresar(req.body)
    res.json({ "message": "Exitoso" })
})

router.delete('/users/:id', (req, res) => {
    const { id } = req.params
    db.eliminar(id)
    res.json({'message': 'Exitoso'})
})

module.exports = router