import 'server-only'

import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export const PLAN_PRICE_ID = {
  'seeker_pro' : 'price_1Tg7lFFmvowKSLPtTaVvsBdq',
  'seeker_premium' : 'price_1TgGXoFmvowKSLPtzx8jV07y',
  'recruiter_growth' : 'price_1TgGa4FmvowKSLPtRI21dQCh',
  'recruiter_enterprise' : 'price_1TgGadFmvowKSLPtFaRN1IHf',
}