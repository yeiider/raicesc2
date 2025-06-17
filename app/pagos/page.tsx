import {Header} from "@/components/header";

import {Footer} from "@/components/footer";

import CheckoutPage from "@/components/CheckoutPage";
export default function PaymentPage()
{
    return (
        <main className="min-h-screen flex flex-col">
            <Header/>
            <CheckoutPage></CheckoutPage>
            <Footer/>

        </main>
    )
}
