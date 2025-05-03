
export const metadata = {
    title: "Contact Us",
    description: `Get in touch with ${process.env.NEXT_PUBLIC_SITE_NAME} for inquiries, support, or feedback. We're here to help!`,
};

import dynamic from "next/dynamic";

const ContactPage = dynamic(() => import("./content"));

export default function Page(){
    return <ContactPage />
}