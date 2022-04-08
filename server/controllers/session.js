const sessionController = (app) => {

    app.post('/api/session/set/:name/', (req, res) => {
        const name = req.params['name'];
        const body = req.body.params[name]

        req.session[name] = body;
        res.send(req.session);
    });

    app.get('/api/session/get/:name/', (req, res) => {
        const value = req.session[req.params['name']];
        res.send(value);
    });

    app.get('/api/session/get/', (req, res) => {
        console.log(req.session)
        res.send(req.session);
    });

    app.get('/api/session/reset', (req, res) => {
        req.session.destroy();
        res.send(200);
    });


}
export default sessionController;