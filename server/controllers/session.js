import axios from "axios";

Date.prototype.addDays = function (days) {
  const date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

const sessionController = (app) => {
  app.post("/api/session/set/", (req, res) => {
    const data = req.body.params.data;

    for (const prop in data) {
      req.session[prop] = data[prop];
    }

    res.send(req.session);
  });

  app.get("/api/session/get/", async (req, res) => {
    if (req.session?.auth) {
      const until = new Date(req.session.auth.until);
      if (until < new Date()) {
        req.session.auth = undefined;
      } else if (until.addDays(2) < new Date()) {
        console.log("Re-authing");
        const params = new URLSearchParams({
          client_id: process.env.CLIENT_ID,
          client_secret: process.env.CLIENT_SECRET,
          grant_type: "refresh_token",
          refresh_token: req.session.auth.refresh_token,
        });

        const config = {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        };

        await axios
          .post(`https://discord.com/api/oauth2/token`, params, config)
          .catch((error) => {
            console.log("Error ", error);
          })
          .then((resp) => {
            if (resp?.data) {
              req.session.auth = resp.data;
              const until = new Date();
              until.setSeconds(
                until.getSeconds() + req.session.auth.expires_in
              );
              req.session.auth.until = until;
            }
          });
      }
    }

    res.send(req.session);
  });

  app.get("/api/session/reset", (req, res) => {
    req.session.destroy();
    res.send(200);
  });

  app.post("/api/session/auth/", async (req, res) => {
    const code = req.body.params.code;

    const params = new URLSearchParams({
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      grant_type: "authorization_code",
      code: code,
      redirect_uri: process.env.DISCORD_REDIRECT_URI,
    });

    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    await axios
      .post(`https://discord.com/api/oauth2/token`, params, config)
      .catch((error) => {
        console.log("Error ", error);
      })
      .then((resp) => {
        if (resp?.data) {
          req.session.auth = resp.data;
          const until = new Date();
          until.setSeconds(until.getSeconds() + req.session.auth.expires_in);
          req.session.auth.until = until;
        }
      });
    res.send(req.session.auth);
  });
};
export default sessionController;
