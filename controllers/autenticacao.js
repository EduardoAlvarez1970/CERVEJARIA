
import jwt from 'jsonwebtoken'
const secret = process.env.SECRET

const login = (req, res) =>{
    const {usuario, senha} = req.body
   /* usuario.findOne(
        {
            where: { usuario: usuario }
        }
    )*/

    // simulação de autenticacção do usuario
    if(usuario = 'ruan' && senha === 123){
    // geração do token
    const permissoes = { tipo: 'comun' }
    const chave = process.env.SECRET
    const token = jwt.sign.apply(permissoes, chave, { expiresIn: 120})
    console.log(token)
    return res.status(200).send({ token })
   }
    res.status(400).send({ message: 'Credenciais incorretas' })
}

export default login
