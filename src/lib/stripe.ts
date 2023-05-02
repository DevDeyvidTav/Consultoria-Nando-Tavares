import Stripe from "stripe";

export const apiSecret = `${process.env.STRIPE_SECRET_KEY}`
export const stripe =  new Stripe(apiSecret , {
    apiVersion: '2022-11-15',
    appInfo: {
        name: "Consultoria Nando Tavares"
    }

});