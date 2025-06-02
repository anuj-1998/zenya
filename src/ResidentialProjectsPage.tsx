import { useLocation } from "react-router-dom";
import residential26 from "../src/assets/project_images/26.jpeg";
import residential28 from "../src/assets/project_images/28.jpeg";
import blinton from "../src/assets/project_images/blinton.jpg";
import { useEffect } from "react";


// Example residential project data
const residentialProjects = [
    {
        image: residential26,
        title: "Sanctuary Villa Project",
        text: "This residential project is the Sanctuary Villa project. Developed in 1997, the project was completed in 2 years, consisting of 32 units of detached houses & 142 units of semidetached. All units are sold.",
        reverse: false,
    },
    {
        image: residential28,
        title:
            "The 27-storey condominium – The Pinnacle consists of 86 units of residential unit with a total land size of 3.80 acres while 27-storey service apartment consists of 168 units of residential units and 7 units of commercial space with a total land size of approximately 3.50 acres. (Ongoing project)",
        text: `
      <p>The Pinnacle condominium presents spectacular panoramic views of South China Sea and Bintulu town centre as the condominium is one of the two tallest residential blocks in the whole of Sarawak. Visually contemporary and upscale, the 27-Storey Pinnacle offers an integrated lifestyle in an exclusive residential haven.</p>
      <br>
      <p>Located adjacent to Parkcity Everly Hotel, the Pinnacle is conveniently in the vicinity of upcoming shopping and entertainment hubs of Parkcity commercial centre, Berjaya commercial centre and Medan Jaya commercial centre. In addition, the Pinnacle is located just approximately 25 kilometers (25 minutes’ drive) from Bintulu Hospital and Bintulu Airport.</p>
      <br>
      <p>Spread over 7.3 acres, the Pinnacle site shares immediate frontage with Bintulu Waterfront Promenade, which is beautifully landscaped with themed pavilions, children’s playgrounds, exercise stations, jogging and bicycle tracks spanning 2.8 kilometers, accessible to both residents and guests of the Pinnacle condominium.</p>
      <br>
      <p>The Pinnacle was also the first condominium that came with a Sky Garden equipped with a 36-seater movie theatre, a library with indoor and outdoor reading areas, a children’s games and computer room, a series of lounges set amidst lush greenery, a Sky Bar and a gymnasium.</p>
      <br>
      <p>As an exclusive residential haven, the Pinnacle offers a combination of three-bedroom, duplex and penthouse suites with expansive living and dining areas.</p>
      <br>
      <p>Each suite comes with LED lighting to reduce electricity consumption, and double-glazed-tempered glass windows infilled with inert gas to reduce heat gain while enjoying uncompromised views all-round.</p>
    `,
        reverse: false,
    },
    {
        image: blinton,
        title: "Brighton Condominium",
        text: "<p>The Brighton is Miri's first luxury condominium, located at Brighton next to the Parkcity Everly hotel, overlooking the Miri River and offering panoramic views of the South China Sea and its beautiful seaside sunsets. It was the first major development to strategically complement the Miri Resort City master plan.</p> <br> The 20-storey condominium features major luxurious facilities which includes a clubhouse, gymnasium, tennis courts, adult & children's swimming pools, jogging tracks landscaped gardens and residents' parking bays.",
        reverse: false,
    }
];

const ResidentialProjectsPage = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <div className="min-h-screen bg-[#f7f3ef] p-8">
            <h1 className="text-4xl font-bold text-center mb-12">Residential Projects</h1>
            <div className="max-w-6xl mx-auto space-y-16">
                {residentialProjects.map((project, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center gap-8"
                        style={{ boxShadow: "0 2px 3px -1px rgba(0, 0, 0, 0.1)" }}
                    >
                        <img
                            src={project.image}
                            alt={`Residential Project ${index + 1}`}
                            className="w-[500px] max-w-full rounded-lg shadow-lg"
                        />
                        <div className="w-full max-w-[500px] text-center">
                            <h6 className="text-2xl font-bold mb-4" style={{ textAlign: "justify" }}>
                                {project.title}
                            </h6>
                            {typeof project.text === "string" && project.text.includes("<p>") ? (
                                <div
                                    className="text-lg"
                                    style={{ textAlign: "justify" }}
                                    dangerouslySetInnerHTML={{ __html: project.text }}
                                />
                            ) : (
                                <p className="text-lg" style={{ textAlign: "justify" }}>
                                    {project.text}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ResidentialProjectsPage;
