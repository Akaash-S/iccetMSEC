import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About | ICTAGI 2026",
};

export default function AboutPage() {
    return (
        <div className="pt-10 pb-20">
            <header className="bg-gray-100 py-20 mb-12">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold font-heading text-dark mb-4">About ICTAGI 2026</h1>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
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
                    <div className="text-gray-700 bg-orange-50 p-8 rounded-2xl border border-orange-100 leading-relaxed text-lg">
                        <h3 className="text-xl font-bold mb-4 text-dark">Meenakshi Sundararajan Engineering College</h3>
                        <p className="mb-4">
                            <strong>Meenakshi Sundararajan Engineering College (MSEC)</strong> was established by the IIET Society in 2001. This institution is a part of the prestigious KRS Group of Institutions which also includes the renowned IIET (Indian Institute of Engineering Technology) established in 1947 by our Founder <strong>Late Shri K.R. Sundararajan</strong>, the well-known Meenakshi College for Women and the more recently established Meenakshi Sundararajan School of Management.
                        </p>
                        <p className="mb-4">
                            The institutions on the KRS Campus are known for the quality education they impart and their stringent levels of discipline. We have consistently outshone all our peers, not only in academics, but in co-curricular activities as well.
                        </p>
                        <p>
                            We are dedicated to imparting Engineering education to young men and women, grooming their overall personality with the highest emphasis on ethical values and honing them to face the challenges of the industry and the nation at large.
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
                                    { src: "/images/chennai/marina.jpg", title: "Marina Beach", caption: "— Iconic coastline and the second longest urban beach in the world." },
                                    { src: "/images/chennai/temple.jpg", title: "Kapaleeshwarar Temple", caption: "— Masterpiece of Dravidian architecture in Mylapore." },
                                    { src: "/images/chennai/fort.jpg", title: "Fort St. George", caption: "— The first English fortress in India, housing the Secretariat." },
                                    { src: "/images/chennai/station.jpg", title: "Chennai Central", caption: "— Historic colonial-era landmark blending Gothic and Romanesque styles." },
                                    { src: "/images/chennai/tidel.jpg", title: "Tidel Park", caption: "— A symbol of the city's booming IT corridor and modern economy." },
                                    { src: "/images/chennai/mahabs.jpg", title: "Mahabalipuram", caption: "— UNESCO World Heritage site known for ancient rock-cut temples (nearby)." }
                                ].map((item, index) => (
                                    <div key={index} className="group">
                                        <div className="h-48 bg-gray-200 rounded-lg overflow-hidden mb-2 relative">
                                            {/* Placeholder for actual image */}
                                            <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-100">
                                                <span className="text-sm font-medium">Image: {item.title}</span>
                                            </div>
                                            {/* Uncomment below when images are added */}
                                            {/* <img src={item.src} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /> */}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-lg">{item.title} a.k.a Chennai</h4>
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
