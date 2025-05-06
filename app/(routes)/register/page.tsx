import dynamic from "next/dynamic";

const RegistrationPage = dynamic(() => import("./content"));

export const metadata = {
    title: "Register to become a Kedi Distributor today",
    description: `Register now and join ${process.env.NEXT_PUBLIC_SITE_NAME} to start your journey as a Kedi Distributor.`,
};

export default function Page(){
    return <RegistrationPage />
}