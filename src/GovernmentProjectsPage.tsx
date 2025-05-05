import government29 from "../src/assets/project_images/29.jpeg";
import government30 from "../src/assets/project_images/30.jpeg";
import government31 from "../src/assets/project_images/31.jpeg";
import government32 from "../src/assets/project_images/32.jpeg";
import government33 from "../src/assets/project_images/33.jpeg";
import government35 from "../src/assets/project_images/35.jpeg";
import government36 from "../src/assets/project_images/36.jpeg";
import government37 from "../src/assets/project_images/37.jpeg";
import government38 from "../src/assets/project_images/38.jpeg";
import government39 from "../src/assets/project_images/39.jpeg";
import government40 from "../src/assets/project_images/40.jpeg";
import government41 from "../src/assets/project_images/41.jpeg";
import government42 from "../src/assets/project_images/42.jpeg";
import government43 from "../src/assets/project_images/43.jpeg";
import government44 from "../src/assets/project_images/44.jpeg";
import government45 from "../src/assets/project_images/45.jpeg";
import government46 from "../src/assets/project_images/46.jpeg";
import government47 from "../src/assets/project_images/47.jpeg";
import government48 from "../src/assets/project_images/48.jpeg";
import government49 from "../src/assets/project_images/49.jpeg";
import government50 from "../src/assets/project_images/50.jpeg";
import government51 from "../src/assets/project_images/51.jpeg";
import government52 from "../src/assets/project_images/52.jpeg";
import government53 from "../src/assets/project_images/53.jpeg";
import government54 from "../src/assets/project_images/54.jpeg";

// Example government project data
const governmentProjects = [
    {
        image: government29,
        title: "1-Malaysia Bus Terminal",
        text: "This Design, Construction and completion of 2-storey bus terminal cum food court project is a Turkey Project approved by Bintulu Development Authority “BDA”. The building is completed in June, 2009 and handed over to BDA in March, 2010.",
        reverse: false,
    },
    {
        image: government30,
        title: "Bintulu Waterfront Promenade",
        text: "The latest attraction to Bintulu is this 120-acre Bintulu Waterfront Promenade, the state's longest waterfront attraction similar to the one in Kuching. It is situated near the delta of Kemena River and the Parkcity Everly Hotel. The Waterfront Development Master Plan involved the partial reclamation of river bank, turning it into a 2.5km stretch of public waterfront feature. The Bintulu Waterfront Promenade's landscaped space is conducive to a variety of outdoor activities. The waterfront promenade is ideal for strolling, running, skate- boarding, photography and more. The project commenced in June 2005, and was duly completed in March 2010.",
        reverse: false,
    },
    {
        image: government31,
        title: "Miri Marina Land Reclaimation",
        text: "Mr Troy Yaw’s has contributed tremendously to the uplifting of Miri city towards a Resort city through the development of Miri Marina City which is a 550 acres of reclaimed land. This development included Shop buildings (250 units) in Marina Phase 1, and Phase 2 The Marina Lagoon Land, and the Miri Public Central park and The iconic Seahorse landmark.",
        reverse: true,
    },
    {
        image: government32,
        title: "",
        text: "",
        reverse: false,
    },
    {
        image: government33,
        title: "",
        text: "",
        reverse: false,
    },
    {
        image: government35,
        title: "",
        text: "",
        reverse: false,
    },
    {
        image: government36,
        title: "",
        text: "",
        reverse: false,
    },
    {
        image: government37,
        title: "",
        text: "",
        reverse: false,
    },
    {
        image: government38,
        title: "",
        text: "",
        reverse: false,
    },
    {
        image: government39,
        title: "",
        text: "",
        reverse: false,
    },
    {
        image: government40,
        title: "",
        text: "",
        reverse: false,
    },
    {
        image: government41,
        title: "",
        text: "",
        reverse: false,
    },
    {
        image: government42,
        title: "",
        text: "",
        reverse: false,
    },
    {
        image: government43,
        title: "",
        text: "",
        reverse: false,
    },
    {
        image: government44,
        title: "",
        text: "",
        reverse: false,
    },
    {
        image: government45,
        title: "",
        text: "",
        reverse: false,
    },
    {
        image: government46,
        title: "",
        text: "",
        reverse: false,
    },
    {
        image: government47,
        title: "",
        text: "",
        reverse: false,
    },
    {
        image: government48,
        title: "",
        text: "",
        reverse: false,
    },
    {
        image: government49,
        title: "",
        text: "",
        reverse: false,
    },
    {
        image: government50,
        title: "",
        text: "",
        reverse: false,
    },
    {
        image: government51,
        title: "",
        text: "",
        reverse: false,
    },
    {
        image: government52,
        title: "",
        text: "",
        reverse: false,
    },
    {
        image: government53,
        title: "",
        text: "",
        reverse: false,
    },
    {
        image: government54,
        title: "",
        text: "",
        reverse: false,
    },
];

const GovernmentProjectsPage = () => {
    return (
        <div className="min-h-screen bg-[#f7f3ef] p-8" style={{ textAlign: 'justify' }}>
            <h1 className="text-4xl font-bold text-center mb-12">Government Projects</h1>
            <div className="max-w-6xl mx-auto space-y-16">
                {governmentProjects.map((project, index) => (
                    <div key={index} className="flex flex-col items-center gap-8">
                        <img
                            src={project.image}
                            alt={`Government Project ${index + 1}`}
                            className="w-[500px] max-w-full rounded-lg shadow-lg"
                        />
                        <div className="w-full max-w-[500px] text-center">
                            <h6 className="text-2xl font-bold mb-4" style={{ textAlign: 'justify' }}>{project.title}</h6>
                            <p className="text-lg" style={{ textAlign: 'justify' }}>{project.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default GovernmentProjectsPage;
