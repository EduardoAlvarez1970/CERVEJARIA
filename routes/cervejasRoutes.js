import express from 'express'

import { listarCervejas, cadastrarCerveja, atualizarCerveja, listarCervejasPeloId, apagarCerveja } from '../controllers/produtos.js'
import  login  from '..controllers/autenticacao.js'

const router = express.Router()

router.get('/cervejas', listarCervejas)
router.get('/cervejas/:id', listarCervejasPeloId)
router.post('/cervejas', cadastrarCerveja)
router.put('/cervejas/:id', atualizarCerveja)
router.delete('/cervejas/:id', apagarCerveja)


router.post('/login', login)


export default router