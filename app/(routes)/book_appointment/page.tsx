import dynamic from "next/dynamic";

const BookAppointment = dynamic(() => import("./content"));

export const metadata = {
    title: "Book an Appointment",
    description: `Schedule your appointment with ${process.env.NEXT_PUBLIC_SITE_NAME} today and take the next step.`,
};

export default function Page() {
    return <BookAppointment />
}