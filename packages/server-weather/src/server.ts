import express from 'express'

export const app = express()

app.disable('x-powered-by')

app.get('/', (req, res) => {
    res.send({message: 'get'})
})

app.post('/', (req, res) => {
    res.send({message: 'post'})
})

const port = 3000

export const start = () => {
    app.listen(port, () => {
        console.log('server is on:', port)
    })
}