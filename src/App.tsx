import "./index.css";
import Carousel from "./Carousel";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../src/assets/logo.png';
import homepage from '../src/assets/homepage.jpg';
import { Link, Element } from 'react-scroll';

const menuLinks = [
  { label: "HOME", to: "home" },
  { label: "ABOUT US", to: "about" },
  { label: "PROJECTS", to: "projects" },
  { label: "GALLERY", to: "gallery" },
  { label: "CONTACT US", to: "contact" },
];

function App() {
  return (
    <>
      {/* Top Nav Bar */}
      <nav
        className="w-full bg-white/80 backdrop-blur sticky top-0 z-30 shadow-sm border-b border-[#eee]"
        style={{
          background: 'linear-gradient(90deg, rgba(17, 42, 64, 1) 10%, rgba(17, 42, 64, 1) 30%, rgba(205, 129, 106, 1) 100%)'
        }}
      >
        <div className="max-w-7xl h-20 mx-auto flex items-center justify-between px-4 gap-8">
          <a href="/">
            <img
              src={logo}
              alt="Menu Logo M-Zenya"
              className="h-14"
            />
          </a>
          <ul className="flex items-center gap-4 xl:gap-7">
            {menuLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={100}
                  className="cursor-pointer text-[#1f3441] font-semibold text-white hover:text-black text-sm xl:text-base px-2 py-1 rounded hover:bg-[#f7e6d5] transition"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li key="register">
              <a
                href="https://m-zenya.com.my/#register"
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full font-bold bg-[#dcbba4] hover:bg-[#be946d] text-[#1f3441] shadow ml-2 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://ext.same-assets.com/1549166357/2999530113.png"
                  className="h-6"
                  alt="register now"
                />
                REGISTER
              </a>
            </li>
          </ul>
        </div>
      </nav>
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
          <section className="w-full px-4 py-12 bg-transparent flex flex-col lg:flex-row items-center max-w-6xl mx-auto gap-12">
            <div className="flex-1 lg:pr-8">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4 tracking-tighter">
                Perched between vibrancy and serenity
              </h2>
              <div className="bg-[#dcbba4]/20 rounded-lg p-6 text-lg max-w-xl shadow-sm mb-3">
                <p>
                  Sarawak Land (Kemena Park) Sdn Bhd (“Sarawak Land”), the property arm of the Samling Strategic Corporation Sdn. Bhd. was incorporated in Malaysia on 14 May 1993. <strong>Sarawak Land (Kemena Park)</strong> Sdn Bhd has undertake numerous development in Bintulu Town Development which covers Commercial, Residential and Government Projects.
                </p>
              </div>
            </div>
            <div className="flex-1">
              <img
                src="https://ext.same-assets.com/1549166357/2517988317.png"
                alt="M Zenya Pool Render"
                className="w-full rounded-lg shadow-2xl object-contain"
              />
            </div>
          </section>
        </Element>
        {/* Features & Facility Tiles */}
        <Element name="projects">
          <section className="w-full py-10 px-4 bg-[#fff8f2] relative">
            <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6">
              {/* Tile 1 */}
              <div className="flex flex-col items-center justify-center">
                <img
                  src="https://ext.same-assets.com/1549166357/1916657042.png"
                  alt="Accessibility"
                  className="h-14 mb-3"
                />
                <span className="text-center text-sm font-semibold">
                  Excellent Accessibility to Highways and MRT
                </span>
              </div>
              {/* Tile 2 */}
              <div className="flex flex-col items-center justify-center">
                <img
                  src="https://ext.same-assets.com/1549166357/1653454076.png"
                  alt="View"
                  className="h-14 mb-3"
                />
                <span className="text-center text-sm font-semibold">
                  Priceless view of crystalline lake and park
                </span>
              </div>
              {/* Tile 3 */}
              <div className="flex flex-col items-center justify-center">
                <img
                  src="https://ext.same-assets.com/1549166357/1335953297.png"
                  alt="Greenery"
                  className="h-14 mb-3"
                />
                <span className="text-center text-sm font-semibold">
                  Surrounded by Greenery
                </span>
              </div>
              {/* Tile 4 */}
              <div className="flex flex-col items-center justify-center">
                <img
                  src="https://ext.same-assets.com/1549166357/1457041475.png"
                  alt="Security"
                  className="h-14 mb-3"
                />
                <span className="text-center text-sm font-semibold">Multi-tier Security</span>
              </div>
              {/* Tile 5 */}
              <div className="flex flex-col items-center justify-center">
                <img
                  src="https://ext.same-assets.com/1549166357/1234361292.png"
                  alt="EV Charging"
                  className="h-14 mb-3"
                />
                <span className="text-center text-sm font-semibold">EV Charging Stations</span>
              </div>
              {/* Tile 6 */}
              <div className="flex flex-col items-center justify-center">
                <img
                  src="https://ext.same-assets.com/1549166357/4107301636.png"
                  alt="Waste Collection"
                  className="h-14 mb-3"
                />
                <span className="text-center text-sm font-semibold">
                  Automated Waste Collection System
                </span>
              </div>
              {/* Tile 7 */}
              <div className="flex flex-col items-center justify-center">
                <img
                  src="https://ext.same-assets.com/1549166357/1058367503.png"
                  alt="Shops"
                  className="h-14 mb-3"
                />
                <span className="text-center text-sm font-semibold">
                  Shops &amp; F&amp;B with Lake Frontage
                </span>
              </div>
              {/* Tile 8 */}
              <div className="flex flex-col items-center justify-center">
                <img
                  src="https://ext.same-assets.com/1549166357/589207322.png"
                  alt="Smart Community"
                  className="h-14 mb-3"
                />
                <span className="text-center text-sm font-semibold">Smart Community</span>
              </div>
            </div>
          </section>
        </Element>
        <Element name="gallery">
          <Carousel />
        </Element>
        {/* Registration Form & Award */}
        <Element name='contact'>
          <section className="py-16 px-4 bg-[#e0eaea] flex flex-col md:flex-row items-start justify-center gap-16">
            {/* <div className="bg-[#1f3441] text-white rounded-lg shadow-lg p-8 flex flex-col items-center min-w-[340px] max-w-[400px] w-full">
            <img
              src="https://ext.same-assets.com/1549166357/1718387563.png"
              alt="GreenRE Bronze"
              className="h-20 mb-5"
            />
            <span className="text-lg font-bold mb-2">
              M Zenya has been awarded Bronze Provisional GreenRE Certification
            </span>
          </div> */}
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
                    I hereby consent to Mah Sing Group contacting me.{" "}
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
            <div className="flex items-center gap-x-7">
              <a
                href="https://www.facebook.com/mahsing/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://ext.same-assets.com/1549166357/3942360046.png"
                  alt="Facebook"
                  className="h-8"
                />
              </a>
              <a
                href="https://www.instagram.com/mahsinggroup/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://ext.same-assets.com/1549166357/3942360046.png"
                  alt="Instagram"
                  className="h-8 opacity-50"
                />
              </a>
              <a
                href="https://www.youtube.com/user/MahSingGroup"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://ext.same-assets.com/1549166357/3942360046.png"
                  alt="YouTube"
                  className="h-8 opacity-70"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/mah-sing-group-berhad"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://ext.same-assets.com/1549166357/3942360046.png"
                  alt="LinkedIn"
                  className="h-8 opacity-40"
                />
              </a>
            </div>
          </div>
          <div className="max-w-5xl mx-auto pt-6 mt-8 border-t border-slate-700 text-xs text-[#dcbba4]">
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
          </div>
        </footer>
      </main>
      {/* BOTTOM BANNER: Mah Sing Homeownership-Season Promotional */}
      <a
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
      </a>
    </>
  );
}

export default App;
