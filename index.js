const express = require('express')
const app = express()
app.use(express.json())
const port = 3010

const bebidas = [
    {id: 1, nombre: "coca-cola"},
    {id: 2, nombre: "Pepsi"},
    {id: 3, nombre: "Big-cola"},
]

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/', (req, res) => {
  res.send(bebidas)
})

app.get('/:id', (req, res) => {
  const {id} = req.params
  const {nombre} = req.body;
  const encontrado = bebidas.find(element => element.id == id)
  res.send(encontrado)
  if(encontrado == NULL){
    res.send("Dato no encontrado")
  }
})

app.post('/', (req, res) => {
  bebidas.push({id: req.body.id, nombre: req.body.nombre})
  res.send("bebidda agregada")
})

 app.patch('/:id', (req, res) => {
  const {id} = req.params
  const {nombre} = req.body
  const elemento = bebidas.find(element => element.id == id)
  elemento.nombre = nombre
  res.send("Listo :D")
    //Busca elemento que tenga id req.params.id y modificar con el conteniddo de req.body.nombre
 })

 app.delete('/:id', (req, res) => {
  const {id} = req.params
  const {nombre} = req.body

  //Opcion 1: con delete
  const elemento = bebidas.find(element => element.nombre == nombre)
  delete elemento.id
  delete elemento.nombre

  //Opcion 2:con filter                    no me salio xd
  // const bebidasRes = bebidas.filter(element => element.nombre != nombre) 
  res.send("Dato borrao :D")

  //Busca elemento que tenga id req.params.id y eliminar con el conteniddo de req.body.nombre
  //como usar metodo filter (bebidass.filter)
 }) 

