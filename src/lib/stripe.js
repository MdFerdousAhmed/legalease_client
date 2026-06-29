import 'server-only'

import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export const PLAN_PRICE_ID = {
  'user_pro' : 'price_1TnM4YFmvowKSLPtho8jw8H6', 
}