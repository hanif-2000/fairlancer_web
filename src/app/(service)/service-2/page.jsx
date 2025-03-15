import Breadcumb3 from "@/components/breadcumb/Breadcumb3";
import Breadcumb4 from "@/components/breadcumb/Breadcumb4";
import Footer from "@/components/footer/Footer";
import Header20 from "@/components/header/Header20";

import Listing2 from "@/components/section/Listing2";
import TabSection1 from "@/components/section/TabSection1";

export const metadata = {
    title: "fairlancer - Freelance Marketplace React/Next Js Template | Service 2",
};

export default function page() {
    return (
        <>
            <Header20 />
            <TabSection1 />
            <Breadcumb3 path={["Home", "Services", "Design & Creative"]} />
            <Breadcumb4 />
            <Listing2 />
            <Footer />
        </>
    );
}
