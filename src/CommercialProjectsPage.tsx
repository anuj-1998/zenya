import commercial3 from "../src/assets/project_images/3.jpeg";
import commercial4 from "../src/assets/project_images/4.jpeg";
import commercial5 from "../src/assets/project_images/5.jpeg";
import commercial6 from "../src/assets/project_images/6.jpeg";
import commercial7 from "../src/assets/project_images/7.jpeg";
import commercial8 from "../src/assets/project_images/8.jpeg";
import commercial9 from "../src/assets/project_images/9.jpeg";
import commercial10 from "../src/assets/project_images/10.jpeg";
import commercial11 from "../src/assets/project_images/11.jpeg";
import commercial12 from "../src/assets/project_images/12.jpeg";
import commercial13 from "../src/assets/project_images/13.jpeg";
import commercial14 from "../src/assets/project_images/14.jpeg";
import commercial15 from "../src/assets/project_images/15.jpeg";
import commercial16 from "../src/assets/project_images/16.jpeg";
import commercial17 from "../src/assets/project_images/17.jpeg";
import commercial18 from "../src/assets/project_images/18.jpeg";
import commercial19 from "../src/assets/project_images/19.jpeg";
import commercial20 from "../src/assets/project_images/20.jpeg";
import commercial21 from "../src/assets/project_images/21.jpeg";
import commercial22 from "../src/assets/project_images/22.jpeg";
import commercial23 from "../src/assets/project_images/23.jpeg";
import commercial24 from "../src/assets/project_images/24.jpeg";
import commercial25 from "../src/assets/project_images/25.jpeg";

const projects = [
  {
    image: commercial3,
    title: 'An Aerial View of The Park City Commercial Centre',
    text: "Parkcity Commerce Square Phase I consists 96 units of 3-storey shop offices. The project was launched in 1994 and completed in 1996 and is 100% sold.",
    reverse: false,
  },
  {
    image: commercial4,
    title: '',
    text: "Parkcity Commerce Square Phase II consists of 96 units of 3-storey shop offices. The project was launched in 1996 and completed in 1998 and is 100% sold.",
    reverse: true,
  },
  {
    image: commercial5,
    title: '',
    text: "Parkcity Commerce Square Phase III consists of 44 units of 3-storey shop offices. This project was started at the end of 2001 and completed by middle of 2003 and is 100% sold.",
    reverse: false,
  },
  {
    image: commercial6,
    title: '',
    text: "Parkcity Commerce Square Phase IV consists of 79 units of 3-storey shop offices. The project started in Oct, 2003 and completed in Nov, 2005 is 100% sold.",
    reverse: true,
  },
  {
    image: commercial7,
    title: '',
    text: "Parkcity Commerce Square Phase V consists of 94 units of 3-storey shop offices. The project started in July, 2006 and completed in Nov, 2008 which is 100% sold.",
    reverse: false,
  },
  {
    image: commercial8,
    title: '',
    text: "",
    reverse: true,
  },
  {
    image: commercial9,
    title: '',
    text: "Parkcity Commerce Square Phase VI consists of 66 units of 3-storey shop offices. The project started in Dec, 2009 and completed in Oct, 2011 which is 100% sold.",
    reverse: false,
  },
  {
    image: commercial10,
    title: '',
    text: "",
    reverse: false,
  },
  {
    image: commercial11,
    title: '',
    text: "Parkcity Commerce Square Phase VI consists of 66 units of 3-storey shop offices. The project started in Dec, 2009 and completed in Oct, 2011 which is 100% sold.",
    reverse: false,
  },
  {
    image: commercial12,
    title: '',
    text: "",
    reverse: false,
  },
  {
    image: commercial13,
    title: '',
    text: "Parkcity Commerce Square Phase VII consists of 44 units of 3 storey shop offices which is 100% sold. The project started on 1/2/2011 and was completed with Occupation Permit issued in March 2015.",
    reverse: false,
  },
  {
    image: commercial14,
    title: '',
    text: "",
    reverse: false,
  },
  {
    image: commercial15,
    title: '',
    text: "",
    reverse: false,
  },
  {
    image: commercial16,
    title: '',
    text: "Parkcity Commerce Square Phase VIII consists of 24 units of 3 storey shopoffice. The project started in Jan 2013 and completed in 2015. The units are 100% sold.",
    reverse: true,
  },
  {
    image: commercial17,
    title: '',
    text: "",
    reverse: false,
  },
  {
    image: commercial18,
    title: 'Commerce Square Mall',
    text: "",
    reverse: false,
  },
  {
    image: commercial19,
    title: '',
    text: "The Commerce Square Mall, incorporating a modern and integrated commercial and hotel development, consisting of 4 blocks of 8-strorey hotel and a commercial block with 139 strata titled spacious commercial units, one bowling alley and one 6-Rooms Cineplex. It is completed in year 2015.",
    reverse: true,
  },
  {
    image: commercial20,
    title: 'Bintulu Waterfront Hotel',
    text: "The 7-storey hotel with 186 guest rooms and 1 penthouse is located next to Bintulu Waterfront Promenade and the megamall The Spring Bintulu. The hotel expected in business by end of year 2024.",
    reverse: false,
  },
  {
    image: commercial21,
    title: 'The Spring Bintulu',
    text: "Right on the other site next to the existing Everly Hotel, it is a 2-storey shopping mall. The project size is approximately 4.009ha. / 9.906 ac. tHe Spring, being the first lifestyle mall in Bintulu, has the capacity to house 127 shopping outlets spread out over two floors. It also offers a seafront esplanade for major mall events, a food court with 686 seats and a vantage point which offers a panoramic view of the South China Sea from the alfresco area.",
    reverse: false,
  },
  {
    image: commercial22,
    title: '',
    text: "",
    reverse: false,
  },
  {
    image: commercial23,
    title: '',
    text: "",
    reverse: false,
  },
  {
    image: commercial24,
    title: 'Pier 99 Commercial Centre',
    text: "Pier 99 is designed as a festive urban waterfont destination for new lifestyle attractions. The newly built 144 units of modern design commercial building considered one of the crown jewels of Bintulu Real Estate, with its superior sea views of Bintulu Waterfront. It is completed in July 2020 and February 2021.",
    reverse: false,
  },
  {
    image: commercial25,
    title: '',
    text: "",
    reverse: false,
  },
];

const CommercialProjectsPage = () => {
  return (
    <div className="min-h-screen bg-[#f7f3ef] p-8">
      <h1 className="text-4xl font-bold text-center mb-12">Commercial Projects</h1>
      <div className="max-w-6xl mx-auto space-y-16">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col items-center gap-8">
            <img
              src={project.image}
              alt={`Residential Project ${index + 1}`}
              className="w-[500px] max-w-full rounded-lg shadow-lg"
            />
            <div className="w-full max-w-[500px] text-center" >
              <h6 className="text-2xl font-bold mb-4" style={{ textAlign: 'justify' }}>{project.title}</h6>
              <p className="text-lg" style={{ textAlign: 'justify' }}>{project.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommercialProjectsPage;