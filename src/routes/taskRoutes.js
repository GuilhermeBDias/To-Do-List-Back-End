const routes = (app) =>{
   // app.use(express.json());
    app.get('/', (req, res) =>{
        res.send('hello, world!')
    })
}

export default routes;