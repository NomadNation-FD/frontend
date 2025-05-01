import { Toolbar } from "@/public/components/Toolbar";
import { Route, Routes } from "react-router";
import { OfferDetails } from "./offers/components/OfferDetails";
import { Home } from "./public/pages/Home";
import { IAMContextProvider } from "./iam/contexts/IamContextProvider";
import { LoginForm } from "./iam/components/LoginForm";
import { RegisterForm } from "./iam/components/RegisterForm";

export function App() {
    return (
        <IAMContextProvider>
            {/* <Toolbar /> */}
            <Routes>
                {/* <Route path="/" element={<Home />} /> */}
                <Route path="/sign-in" element={<LoginForm />} />
                {/* <Route path="/sign-up" element={<RegisterForm />} /> */}
                {/* <Route path="/offers/:offerId" element={<OfferDetails />} /> */}
            </Routes>
        </IAMContextProvider>
    );
}