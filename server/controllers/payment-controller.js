import Stripe from 'stripe';

const paymentController = (app) => {

    const stripe_obj = new Stripe(process.env.STRIPE_API_KEY)

    app.get('/products', async (req, res) => {
        let products = await stripe_obj.products.list()
        res.json(products.data)
    });

    app.post('/checkout', async (req, res) => {
        const body = req.body.params
        const url = body.url

        let customer_search = await stripe_obj.customers.search({
            query:`metadata['discord_id']:'${body.userId}'`,
            limit:1
        })

        console.log(body)

        let customer;
        if (customer_search.data.length !== 0) {
            customer = customer_search.data
        }
        else {
            customer = await stripe_obj.customers.create({name:body.userName, metadata:{'discord_id': body.userId}})
        }

        console.log(customer)
        console.log(body)

        const checkout_session = await stripe_obj.checkout.sessions.create({
            success_url: url,
            cancel_url: url,
            line_items: [
                {price: body.defaultPrice, quantity: 1}
            ],
            mode: 'payment',
            customer: customer.id,
            metadata: {
                'discord_id': body.userId,
                'guild_id': body.guildId
            }

        }).catch(e => console.log(e))

        return res.json(checkout_session)

    });



}
export default paymentController;