"use client";

import Image from "next/image";

const chiefPatrons = [
    { name: "Dr. K. S. Lakshmi", role: "Correspondent, MSEC" },
    { name: "Prof. N. Sreekanth", role: "Secretary, MSEC" },
    { name: "Prof. U. Deepa", role: "Director, MSEC" }
];

const patrons = [
    { name: "Dr. S. V. Saravanan", role: "Principal, MSEC" },
    { name: "Dr. Poongothai", role: "Dean-Research, MSEC" }
];

const chairs = [
    { name: "Dr. R. Arivazhagan", role: "Head-Research, MSEC" },
    { name: "Dr. V.J. Arul Karthick", role: "Dean-IQAC, MSEC" }
];

const coChairs = [
    { name: "Mr. Mohan Raj Vijayan", role: "Assistant Professor, IT, MSEC" },
    { name: "Dr. S. Sowmya", role: "Associate Professor, ECE, MSEC" }
];

export function AboutCollegeSection() {
    return (
        <section className="py-20 bg-gray-50 border-t border-gray-200" id="committee-overview">
            <div className="container mx-auto px-4 max-w-6xl">

                {/* About MSEC */}
                <div className="mb-20 text-center">
                    <h2 className="text-4xl font-bold text-primary mb-6 font-heading">
                        ABOUT MSEC
                    </h2>
                    <div className="text-justify text-gray-700 leading-relaxed max-w-4xl mx-auto">
                        <p>
                            Meenakshi Sundararajan Engineering College (MSEC) was established by the IIET Society in 2001. This institution is a part of the prestigious KRS Group of Institutions which also includes the renowned IIET (Indian Institute of Engineering Technology) established in 1947 by our Founder Late Shri K.R.Sundararajan, the well-known Meenakshi College for Women and the more recently established Meenakshi Sundararajan School of Management. The institutions on the KRS Campus are known for the quality education they impart and their stringent levels of discipline. We have consistently outshone all our peers, not only in academics, but in co-curricular activities as well. imparting Engineering education to young men and women, grooming their overall personality with the highest emphasis on ethical values and honing them to face the challenges of the industry and the nation at large.
                        </p>
                    </div>
                </div>

                {/* About Chennai */}
                <div className="mb-20 text-center">
                    <h2 className="text-4xl font-bold text-primary mb-6 font-heading">
                        ABOUT CHENNAI
                    </h2>
                    <div className="text-justify text-gray-700 leading-relaxed max-w-4xl mx-auto mb-10">
                        <p>
                            Chennai, formerly Madras, is the capital city of Tamil Nadu, India. Located on the Coromandel Coast of the Bay of Bengal, it is one of the largest cultural, economic, and educational centers of South India. Known as the &quot;Gateway to South India,&quot; Chennai is famous for its rich heritage, classical music, dance forms, and delicious cuisine.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { name: "Marina Beach", img: "/images/chennai/marina_beach.jpg", desc: "Iconic coastline of Chennai, one of the longest urban beaches in the world." },
                            { name: "Kapaleeswarar Temple", img: "/images/chennai/kapaleeswarar_temple.jpg", desc: "Historic Dravidian architecture dedicated to Lord Shiva in Mylapore." },
                            { name: "Santhome Basilica", img: "/images/chennai/santhome_basilica.jpg", desc: "Major Christian landmark built over the tomb of St. Thomas." },
                            { name: "Modern Chennai Skyline", img: "/images/chennai/chennai_skyline.jpg", desc: "A growing metro hub showcasing the city's development." },
                            { name: "Ripon Building", img: "/images/chennai/ripon_building.jpg", desc: "Iconic Indo-Saracenic landmark and Chennai Corporation headquarters." },
                            { name: "Valluvar Kottam", img: "/images/chennai/valluvar_kottam.jpg", desc: "Monument honoring the great Tamil poet Thiruvalluvar." },
                            { name: "Vandalur Zoo", img: "/images/chennai/vandalur_zoo.jpg", desc: "One of India's largest zoological parks with diverse wildlife." },
                            { name: "Mahabalipuram", img: "/images/chennai/mahabalipuram.jpg", desc: "UNESCO World Heritage site known for ancient rock-cut temples." },
                            { name: "Sharadambal Temple", img: "/images/chennai/sharadambal.jpg", desc: "Dedicated to Goddess Sharadambal in varying architectural styles." },
                        ].map((place, idx) => (
                            <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-gray-100 group">
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={place.img}
                                        alt={place.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-4 text-left">
                                    <h4 className="font-bold text-primary mb-1">{place.name}</h4>
                                    <p className="text-xs text-gray-600 leading-snug">{place.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Committee Structure */}
                <div className="space-y-16">

                    {/* Chief Patrons */}
                    <div>
                        <div className="text-center mb-10 relative">
                            <h3 className="text-2xl font-bold text-primary inline-block bg-gray-50 px-4 relative z-10">
                                CHIEF PATRONS
                            </h3>
                            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-red-200 -z-0"></div>
                        </div>

                        <div className="flex flex-wrap justify-center gap-8">
                            {chiefPatrons.map((p, i) => (
                                <div key={i} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all text-center border-t-4 border-primary w-64">
                                    <h4 className="text-lg font-bold text-primary mb-1">{p.name}</h4>
                                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wide mt-1">{p.role}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Patrons */}
                    <div>
                        <div className="text-center mb-10 relative">
                            <h3 className="text-2xl font-bold text-primary inline-block bg-gray-50 px-4 relative z-10">
                                CO-PATRONS
                            </h3>
                            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-red-200 -z-0"></div>
                        </div>

                        <div className="flex flex-wrap justify-center gap-8">
                            {patrons.map((p, i) => (
                                <div key={i} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all text-center border-t-4 border-secondary w-64">
                                    <h4 className="text-lg font-bold text-primary mb-1">{p.name}</h4>
                                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wide mt-1">{p.role}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Chairs & Co-Chairs */}
                    <div>
                        <div className="text-center mb-10 relative">
                            <h3 className="text-2xl font-bold text-primary inline-block bg-gray-50 px-4 relative z-10">
                                GENERAL CHAIRS
                            </h3>
                            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-red-200 -z-0"></div>
                        </div>

                        <div className="flex flex-wrap justify-center gap-8 mb-12">
                            {chairs.map((p, i) => (
                                <div key={i} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all text-center border-t-4 border-accent w-72">
                                    <h4 className="text-lg font-bold text-primary mb-1">{p.name}</h4>
                                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wide mt-1">{p.role}</p>
                                    <p className="text-xs text-gray-900 font-medium mt-2">Contact: 9003116690</p>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mb-10 relative">
                            <h3 className="text-2xl font-bold text-primary inline-block bg-gray-50 px-4 relative z-10">
                                CO-CHAIRS
                            </h3>
                            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-red-200 -z-0"></div>
                        </div>

                        <div className="flex flex-wrap justify-center gap-8">
                            {coChairs.map((p, i) => (
                                <div key={i} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all text-center border-t-4 border-accent w-72">
                                    <h4 className="text-lg font-bold text-primary mb-1">{p.name}</h4>
                                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wide mt-1">{p.role}</p>
                                    {p.name.includes("Mohan") && <p className="text-xs text-gray-900 font-medium mt-2">Contact: 7358058584</p>}
                                    {p.name.includes("Sowmya") && <p className="text-xs text-gray-900 font-medium mt-2">Contact: 9884392869</p>}
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
