import axios from "axios";

const sessionController = (app) => {

    app.post('/api/session/set/:name/', (req, res) => {
        const name = req.params['name'];
        const body = req.body.params[name]

        req.session[name] = body;
        res.send(req.session);

        console.log(req.session)
    });

    app.get('/api/session/get/:name/', (req, res) => {
        const value = req.session[req.params['name']];
        res.send(value);
    });

    app.get('/api/session/get/', async (req, res) => {

        const session = req.session;
        if (session?.auth?.refresh_token) {
            const params = new URLSearchParams({
                client_id: process.env.CLIENT_ID,
                client_secret: process.env.CLIENT_SECRET,
                grant_type: 'refresh_token',
                refresh_token: session.auth.refresh_token,
            })

            const config = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }

            const resp = await axios.post(`https://discord.com/api/oauth2/token`, params, config)
            session.auth = resp.data
        }

        res.send(req.session);
        console.log(req.session)
    });

    app.get('/api/session/reset', (req, res) => {
        req.session.destroy();
        res.send(200);
    });


    app.post('/api/session/auth/', async (req, res) => {
        const code = req.body.params.code

        const params = new URLSearchParams({
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET,
            grant_type: 'authorization_code',
            code: code,
            redirect_uri: process.env.DISCORD_REDIRECT_URI
        })

        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }

        const resp = await axios.post(`https://discord.com/api/oauth2/token`, params, config)
        req.session.auth = resp.data

        res.send(req.session.auth);
    });


}
export default sessionController;