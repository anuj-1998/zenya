// App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CommercialProjectsPage from "./CommercialProjectsPage";
import ResidentialProjectsPage from "./ResidentialProjectsPage";
import GovernmentProjectsPage from "./GovernmentProjectsPage";
import "./index.css";
import Carousel from "./Carousel";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../src/assets/logo.png';
import homepage from '../src/assets/homepage.jpg';
import { Link, Element } from 'react-scroll';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import ProjectsSection from "./ProjectsSection";
import Navbar from "./Navbar";
import aboutusbg from '../src/assets/aboutus_bg.jpeg';
import GalleryGrid from "./GalleryGrid";


const menuLinks = [
  { label: "HOME", to: "home" },
  { label: "ABOUT US", to: "about" },
  { label: "PROJECTS", to: "projects" },
  { label: "GALLERY", to: "gallery" },
  { label: "CONTACT US", to: "contact" },
];

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            {/* Top Nav Bar */}
            <section>
              <section>
                <Navbar menuLinks={menuLinks} logo={logo} />
              </section>
            </section>
            <main className="min-h-screen w-full bg-gradient-to-b from-[#fff3e3] to-[#e0eaea] font-sans overflow-x-hidden text-[#1f3441]">
              {/* Hero Section */}
              <Element name="home">
                <section className="w-full relative flex items-center justify-center min-h-[35rem] bg-gradient-to-b from-[#f0e1d6] via-[#fff3e3] to-[#f2f5f6]">
                  <img
                    src={logo}
                    alt="M Zenya Logo"
                    className="absolute left-8 top-8 h-20 z-10 drop-shadow"
                  />
                  <img
                    src={homepage}
                    alt="Hero Building Render"
                    className="relative z-10 w-[38rem] max-w-full object-contain shadow-2xl rounded-b-3xl"
                    style={{ marginTop: "3rem" }}
                  />
                  <a
                    href="#register"
                    className="absolute right-8 top-12 bg-[#be946d] text-white px-6 py-2 rounded-full font-bold shadow hover:bg-[#8d6b3e] transition"
                  >
                    REGISTER NOW
                  </a>
                  {/* Decorative Patterns */}
                  <img
                    src="https://ext.same-assets.com/1549166357/2419435022.png"
                    alt="Curve1"
                    className="absolute left-2 top-32 h-24 opacity-70"
                  />
                  <img
                    src="https://ext.same-assets.com/1549166357/3497995044.png"
                    alt="Cycling"
                    className="absolute bottom-[-25px] left-24 h-32 w-auto"
                  />
                  <img
                    src="https://ext.same-assets.com/1549166357/1232797557.png"
                    alt="Curve2"
                    className="absolute right-16 bottom-0 h-28 opacity-50"
                  />
                </section>
              </Element>
              {/* Perched Between Vibrancy and Serenity Section */}
              <Element name="about">
                <section className="w-full px-4 py-12 relative flex flex-col lg:flex-row items-center max-w-6xl mx-auto gap-12 overflow-hidden">
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm opacity-2 z-0"
                    style={{
                      backgroundImage: `url(${aboutusbg})`,
                    }}
                  />

                  {/* Foreground Content */}
                  <div className="relative z-10 flex-1 lg:pr-8">
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4 tracking-tighter">
                      About us
                    </h2>
                    <div className="bg-[#dcbba4]/20 rounded-lg p-6 text-lg max-w-xl shadow-sm mb-3">
                      <p>
                        Sarawak Land (Kemena Park) Sdn Bhd (“Sarawak Land”), the property arm of the Samling Strategic Corporation Sdn. Bhd. was incorporated in Malaysia on 14 May 1993.{" "}
                        <strong>Sarawak Land (Kemena Park)</strong> Sdn Bhd has undertaken numerous developments in Bintulu Town Development which covers Commercial, Residential, and Government Projects.
                      </p>
                    </div>
                  </div>
                </section>
              </Element>
              {/* Features & Facility Tiles */}
              <Element name="projects">
                <section className="relative w-full py-10 px-4 overflow-hidden">
                  <div className="relative z-10 bg-[#fff8f2]/80 backdrop-blur-sm rounded-xl p-4">
                    <ProjectsSection />
                  </div>
                </section>
              </Element>
              <Element name="gallery">
              <GalleryGrid />
              </Element>
              {/* Registration Form & Award */}
              <Element name='contact'>
                <section className="py-16 px-4 bg-[#e0eaea] flex flex-col md:flex-row items-start justify-center gap-16">
                  <h2 className="text-3xl md:text-5xl font-bold leading-tight ml-4 mt-4">
                    Contact us
                  </h2>
                  <form
                    id="register"
                    className="flex-1 min-w-[320px] max-w-lg w-full bg-[#fff3e3] rounded-lg shadow-xl p-8"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <h3 className="font-bold text-xl md:text-3xl mb-4 tracking-wide text-[#1f3441]">
                      Inquiries
                    </h3>
                    <div className="space-y-3">
                      <input
                        name="first_name"
                        placeholder="First name"
                        required
                        className="w-full border-b border-[#b57f6d] font-medium py-2 px-1 bg-transparent outline-none focus:bg-[#e0eaea]/20 transition"
                      />
                      <input
                        name="last_name"
                        placeholder="Last name"
                        required
                        className="w-full border-b border-[#b57f6d] font-medium py-2 px-1 bg-transparent outline-none focus:bg-[#e0eaea]/20 transition"
                      />
                      <input
                        name="email"
                        placeholder="Email"
                        type="email"
                        required
                        className="w-full border-b border-[#b57f6d] font-medium py-2 px-1 bg-transparent outline-none focus:bg-[#e0eaea]/20 transition"
                      />
                      <input
                        name="mobile"
                        placeholder="Phone number"
                        required
                        className="w-full border-b border-[#b57f6d] font-medium py-2 px-1 bg-transparent outline-none focus:bg-[#e0eaea]/20 transition"
                      />
                      <input
                        name="budget"
                        placeholder="Your message"
                        className="w-full border-b border-[#b57f6d] font-medium py-2 px-1 bg-transparent outline-none focus:bg-[#e0eaea]/20 transition"
                      />
                      <div className="flex items-center gap-2 mt-1">
                        <input
                          type="checkbox"
                          id="agree"
                          required
                          className="accent-[#1f3441]"
                        />
                        <label htmlFor="agree" className="text-xs text-[#6b4a3b]">
                          Please accept{" "}
                          <a href="#" className="underline">
                            Terms & Conditions
                          </a>
                          .
                        </label>
                      </div>
                    </div>
                    <button className="mt-5 w-full py-2 bg-[#1f3441] hover:bg-[#3facb6] text-white font-bold rounded shadow transition">
                      SUBMIT
                    </button>
                  </form>
                </section>
              </Element>
              {/* Footer */}
              <footer className="w-full py-10 px-8 bg-[#1f3441] text-white">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-6">
                  <div className="text-sm text-[#e0eaea]">
                    Miri Office : 271-272 Jln Brighton, Jln Temenggong Datuk Oyong Lawai Jau, Miri SWK 98000
                    <br />
                    Bintulu Office : No.461, Lot 4110, Jalan Kambar Bubin, Parkcity Commerce Square, Phase 5, Sarawak, 97008 Bintulu
                    <br />
                    <br />
                    For further enquiries, please contact:
                    <br />
                    <span className="font-bold">085-423033</span>
                    <br />
                    Email:{" "}
                    <a
                      href="mailto:hwangll@samling.com.my"
                      className="underline"
                    >
                      hwangll@samling.com.my
                    </a>
                  </div>
                  <div className="flex items-center gap-x-7 text-gray-600 text-2xl">
                    <a href="https://www.facebook.com/mahsing/" target="_blank" rel="noopener noreferrer">
                      <FaFacebookF />
                    </a>
                    <a href="https://www.instagram.com/mahsinggroup/?hl=en" target="_blank" rel="noopener noreferrer">
                      <FaInstagram />
                    </a>
                    <a href="https://www.youtube.com/user/MahSingGroup" target="_blank" rel="noopener noreferrer">
                      <FaYoutube />
                    </a>
                    <a href="https://www.linkedin.com/company/mah-sing-group-berhad" target="_blank" rel="noopener noreferrer">
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
                {/* <div className="max-w-5xl mx-auto pt-6 mt-8 border-t border-slate-700 text-xs text-[#dcbba4]">
                Star Residence Sdn. Bhd. (200601006511(726260-D)) (A wholly-owned
                subsidiary of Mah Sing Group Berhad) | Wisma Mah Sing, Penthouse Suite
                1, No. 163 Jalan Sungai Besi, 57100 Kuala Lumpur. | Tel: +603 9221 6888
                | Fax: +603 9221 8999 | Website: m-zenya.com.my | Email:
                m-zenya@mahsing.com.my
                <br />
                Developer Licence No: 11430/12-2026/1094(A) | Validity Period:
                02/12/2018 → 01/12/2026 | Advertising & Sales Permit No:
                11430-2/03-2027/0280(A)-(S) | Validity Period: 01/04/2024 – 31/03/2027
                | Building Plan Reference No: BP U1 OSC 2023 1734 | Expected Date of
                Completion: Apr 2028 | Tower A Total Unit: 619 | Min Price: RM 598,560 |
                Max Price: RM 849,360 | Built-up : 762sf, 883sf, 926sf and 1,067sf |
                Type of Property: Serviced Residences | No of Car Park per Unit: 1 or 2
                unit | Approving Authority: DBKL | Land Tenure: Leasehold (13/12/2120) |
                Lease Term: 99 years | Restrictions: The land cannot be transferred,
                leased or mortgaged without any consent from the Land Committee of
                Kuala Lumpur, Federal Territory | Land Encumbrance: RHB BANK BERHAD | This
                advertisement has been approved by National Housing Department.
              </div> */}
              </footer>
            </main>
            {/* BOTTOM BANNER: Mah Sing Homeownership-Season Promotional */}
            {/* <a
            href="https://mahsing.com.my/season/"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-0 left-0 z-50 w-full flex items-center justify-center bg-transparent shadow-none"
            aria-label="Mah Sing Homeownership Season Promotional"
          >
            <img
              src="https://ext.same-assets.com/1549166357/169215733.gif"
              className="w-full max-w-[1150px] h-auto min-h-[45px]"
              alt="Homeownership-Season-Desktop-Banner"
              style={{ borderRadius: 0, boxShadow: "0 0 24px 0 #0003" }}
            />
          </a> */}
          </>
        } />
        <Route path="/projects/commercial" element={<CommercialProjectsPage />} />
        <Route path="/projects/residential" element={<ResidentialProjectsPage />} />
        <Route path="/projects/government" element={<GovernmentProjectsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
