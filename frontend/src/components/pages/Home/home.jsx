import Cards from "./cardSection";
import Herosection from "./herosection";
import Map from "./map";
import Services from "./services";

export default function Home() {
    
    return (
        <main className="px-4">
            <Herosection />
            <Cards />
            <Services/>
            <Map />
        </main>
    )
}