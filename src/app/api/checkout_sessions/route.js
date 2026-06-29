import { NextResponse } from "next/server";
// ✅ Import your shared stripe instance and prices from your utility file
// Adjust the relative import path ('../../lib/stripe' etc.) to point to your actual file location
import { stripe, PLAN_PRICE_ID } from "@/lib/stripe"; 

export async function POST(req) {
  try {
    const body = await req.json();
    const { type } = body;

    const origin = req.headers.get("origin") || "http://localhost:3000";

    let sessionOptions = {
      payment_method_types: ["card"],
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cancel`,
    };

    if (type === "subscription") {
      // ✅ Use your exact key mapping 'user_pro' from your file
      const priceId = PLAN_PRICE_ID['user_pro'];

      if (!priceId) {
        console.error("Stripe Error: PLAN_PRICE_ID for 'user_pro' is undefined.");
        return NextResponse.json(
          { success: false, message: "Server configuration missing price layout mappings." },
          { status: 500 }
        );
      }

      sessionOptions.mode = "subscription";
      sessionOptions.line_items = [
        {
          price: priceId, 
          quantity: 1,
        },
      ];
    } else {
      sessionOptions.mode = "payment";
      sessionOptions.line_items = [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Premium Account Feature Access",
            },
            unit_amount: 2999, 
          },
          quantity: 1,
        },
      ];
    }

    const session = await stripe.checkout.sessions.create(sessionOptions);

    return NextResponse.json({ url: session.url });

  } catch (error) {
    console.error("Stripe Checkout Session Error:", error.message);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}