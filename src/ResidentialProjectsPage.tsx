import residential26 from "../src/assets/project_images/26.jpeg";
import residential27 from "../src/assets/project_images/27.jpeg";
import residential28 from "../src/assets/project_images/28.jpeg";

// Example residential project data
const residentialProjects = [
    {
        image: residential26,
        title: '',
        text: "Residential project undertaken is the Santuary Villa project. Developed in 1997, the project was completed in 2 years which consists of 32 units of detached houses & 142 units of semi-detached which is 100% sold.",
        reverse: false,
    },
    {
        image: residential27,
        title: 'Parkcity Everly Hotel',
        text: "This 4-star hotel was built up in 1997 and completed in 1999 and consists of 228 rooms.",
        reverse: true,
    },
    {
        image: residential28,
        title: '27-storey Strata Titled Condominium (The Pinnacle) and 27-storey Strata Titled Service Apartment',
        text: "The 27-storey condominium – The Pinnacle consists of 86 units of residential unit with a total land size of 3.80 acres while 27-storey service apartment consists of 168 units of residential units and 7 units of commercial space with a total land size of approximately 3.50 acres.",
        reverse: false,
    },
];

const ResidentialProjectsPage = () => {
    return (
        <div className="min-h-screen bg-[#f7f3ef] p-8">
            <h1 className="text-4xl font-bold text-center mb-12">Residential Projects</h1>
            <div className="max-w-6xl mx-auto space-y-16">
                {residentialProjects.map((project, index) => (
                    <div
                        key={index}
                        className={`flex flex-col md:flex-row ${project.reverse ? "md:flex-row-reverse" : ""
                            } items-center gap-8`}
                    >
                        <img
                            src={project.image}
                            alt={`Residential Project ${index + 1}`}
                            className="w-full md:w-1/2 rounded-lg shadow-lg"
                        />
                        <div className="md:w-1/2">
                            <h6 className="text-2xl font-bold mb-4">{project.title}</h6>
                            <p className="text-lg">{project.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ResidentialProjectsPage;
