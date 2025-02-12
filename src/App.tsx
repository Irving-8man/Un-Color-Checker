import { Route } from "wouter";
import { Toaster } from "@/components/ui/toaster"
import Header from "./components/sections/Header";
import HomePage from "./views/HomePage";
import MatrizAccesible from "./views/MatrizAccesible";
import "./index.css";
import VistaPrevia from "./views/VistaPrevia";

export default function App() {
    return (
        <>
            <Header />
            <Route path="/" component={HomePage} />
            <Route path="/matriz-accesibilidad" component={MatrizAccesible} />
            <Route path="/vista-previa" component={VistaPrevia} />
            <Toaster />
        </>
    )
}


