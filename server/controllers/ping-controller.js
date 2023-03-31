const pingController = (app) => {
    app.get('/', (req, res) => {
        res.send('Hello World!')
    });
}
export default pingController;