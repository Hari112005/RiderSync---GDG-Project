// import prisma from "../config/db.js";
// import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// export default processPayment =() =>{ async (rideId, userId, amount) => {
//   const payment = await stripe.paymentIntents.create({
//     amount: amount * 100,
//     currency: "usd",
//     payment_method_types: ["card"],
//   })};

//   return prisma.payment.create({
//     data: { rideId, userId, amount, status: "pending" },
//   });
// };
