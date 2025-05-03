import dynamic from "next/dynamic";

const CheckoutPage = dynamic(() => import("./content"));

export const metadata = {
    title: "Checkout",
    description: `Complete your purchase and place your order on ${process.env.NEXT_PUBLIC_SITE_NAME}.`,
};

export default function Page(){
    return <CheckoutPage />
}