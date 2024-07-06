import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <main className="max-w-screen-xl mx-auto mt-15 p-5">
                {children}
            </main>
            <Footer />
        </>
    )
}