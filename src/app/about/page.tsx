import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About | ICTAGI 2026",
};

export default function AboutPage() {
    return (
        <div className="pt-10 pb-20">
            <header className="relative bg-gray-900 py-24 mb-12 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/images/about_header_bg.png"
                        alt="AI Background"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
                </div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4">About ICTAGI 2026</h1>
                    <div className="w-24 h-1.5 bg-primary mx-auto rounded-full shadow-lg shadow-orange-500/50"></div>
                </div>
            </header>

            <div className="container mx-auto px-4 max-w-4xl space-y-16">
                <section>
                    <h2 className="text-2xl font-bold text-secondary mb-6 flex items-center gap-3">
                        <span className="w-8 h-1 bg-secondary inline-block"></span>
                        About the Conference
                    </h2>
                    <div className="prose prose-lg text-gray-700">
                        <p className="mb-4">
                            <strong>ICTAGI 2026</strong> (International Conference on Transformative AI for Global Impact) is a premier gathering of researchers, practitioners, and industry experts. The conference focuses on exploring how Artificial Intelligence transforms industries, society, and sustainability.
                        </p>
                        <p className="mb-4">
                            The conference will be held at <strong>Meenakshi Sundararajan Engineering College, Chennai, India</strong> from <strong>August 12th – 14th, 2026</strong>.
                        </p>
                        <p>
                            It provides a premier interdisciplinary platform to discuss the most recent innovations, trends, and concerns as well as practical challenges encountered and solutions adopted in the fields of Artificial Intelligence and its global impact.
                        </p>
                    </div>
                </section>

                <section id="msec">
                    <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                        <span className="w-8 h-1 bg-primary inline-block"></span>
                        About MSEC
                    </h2>
                    <div className="text-gray-700 bg-orange-50 p-8 rounded-2xl border border-orange-100 leading-relaxed text-lg text-justify">
                        <h3 className="text-xl font-bold mb-4 text-dark text-center">Meenakshi Sundararajan Engineering College</h3>
                        <p className="mb-4">
                            Meenakshi Sundararajan Engineering College (MSEC) was established by the IIET Society in 2001. This institution is a part of the prestigious KRS Group of Institutions, which also includes the renowned IIET (Indian Institute of Engineering Technology), established in 1947 by our Founder, Late Shri K. R. Sundararajan, a visionary educationist and philanthropist who founded the well-known Meenakshi College for Women; and the Meenakshi Sundararajan School of Management.
                        </p>
                        <p className="mb-4">
                            The institutions on the KRS Campus are known for the quality education and discipline. We have consistently outshone our peers not only in academics but also in co-curricular activities.
                        </p>
                        <p>
                            The institution is committed to imparting engineering education to young men and women, grooming their overall personality with the highest emphasis on ethical values, and preparing them to face the challenges of the industry, nation and abroad at large.
                        </p>
                    </div>
                </section>

                <section id="chennai">
                    <h2 className="text-2xl font-bold text-teal-600 mb-6 flex items-center gap-3">
                        <span className="w-8 h-1 bg-teal-600 inline-block"></span>
                        About Chennai
                    </h2>
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                        {/* Tagline */}
                        <div className="bg-teal-900 text-white p-8 text-center relative overflow-hidden">
                            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                            <h3 className="text-2xl md:text-3xl font-serif italic relative z-10 leading-relaxed">
                                "A coastal metropolis where tradition meets a modern lifestyle."
                            </h3>
                        </div>

                        <div className="p-8">
                            {/* Description */}
                            <p className="text-lg text-gray-700 leading-relaxed mb-8">
                                <strong>Chennai</strong>, the vibrant capital of Tamil Nadu, serves as the gateway to South India. Renowned for its rich Dravidian heritage, classical arts, ancient temples, and the world's second-longest urban beach, it also thrives as a major industrial and IT hub, often celebrated as the "Detroit of India." This dynamic city offers a unique blend of sandy beaches, historic colonial architecture, and a rapidly growing urban landscape, making it a fascinating destination for global visitors.
                            </p>

                            {/* Image Grid with Captions */}
                            <div className="grid md:grid-cols-2 gap-6 mb-10">
                                {[
                                    // Temples
                                    {
                                        src: "/images/chennai/vadapalani_temple.png",
                                        title: "Arulmigu Vadapalani Murugan Temple",
                                        caption: "— Major Murugan temple, famous for marriages and festival crowds; near Kodambakkam."
                                    },
                                    {
                                        src: "/images/chennai/garbarakshambigai.png",
                                        title: "Sri Vadapalani Garbarakshambigai Temple",
                                        caption: "— Popular for prayers related to childbirth; walkable from many parts of Kodambakkam."
                                    },
                                    {
                                        src: "/images/chennai/sharadambal.png",
                                        title: "Sharadambal Temple",
                                        caption: "— Calm temple with a meditation hall, finding a quieter spiritual place inside the locality."
                                    },
                                    // Parks
                                    {
                                        src: "/images/chennai/chetpet_park.png",
                                        title: "Chetpet Eco Park",
                                        caption: "— Lake-side walking/jogging track and boating; 15–20 minutes from Kodambakkam."
                                    },
                                    {
                                        src: "/images/chennai/panagal_park.png",
                                        title: "Panagal Park, T. Nagar",
                                        caption: "— Classic green space in a busy shopping hub; nice to sit after shopping."
                                    },
                                    // Cafes
                                    {
                                        src: "/images/chennai/sankaralaya.png",
                                        title: "Sankaralaya Cafe",
                                        caption: "— Budget-friendly pure veg spot on Railway Border Rd; highly rated for South Indian food."
                                    },
                                    {
                                        src: "/images/chennai/saravana_coffee.png",
                                        title: "Saravana Coffee",
                                        caption: "— Small Akbarabad spot well-known locally for strong filter coffee and snacks."
                                    },
                                    {
                                        src: "/images/chennai/curly_cravings.png",
                                        title: "Curly Cravings",
                                        caption: "— Trendy café on Arcot Rd popular for Maggi-based dishes, fries, and casual hangouts."
                                    }
                                ].map((item, index) => (
                                    <div key={index} className="group">
                                        <div className="h-48 bg-gray-200 rounded-lg overflow-hidden mb-2 relative">
                                            <img
                                                src={item.src}
                                                alt={item.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-lg leading-tight mb-1">{item.title}</h4>
                                            <p className="text-gray-600 text-sm italic">{item.caption}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Quick Facts */}
                            <div className="bg-teal-50 rounded-xl p-8 border border-teal-100">
                                <h4 className="font-bold text-teal-800 uppercase tracking-widest text-sm mb-6 border-b border-teal-200 pb-2">### Quick Facts</h4>
                                <ul className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                                    <li className="flex items-start gap-3">
                                        <span className="font-bold text-teal-700 min-w-[100px]">State:</span>
                                        <span className="text-gray-700">Tamil Nadu</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="font-bold text-teal-700 min-w-[100px]">Language:</span>
                                        <span className="text-gray-700">Tamil (English widely spoken)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="font-bold text-teal-700 min-w-[100px]">Known for:</span>
                                        <span className="text-gray-700">Temples, Classical Arts, Beaches, Automotive Industry</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="font-bold text-teal-700 min-w-[100px]">Travel:</span>
                                        <span className="text-gray-700">Chennai International Airport (MAA), Metro Rail, Major Bus Terminus (CMBT)</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
