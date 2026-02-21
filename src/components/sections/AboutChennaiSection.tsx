"use client";

import Image from "next/image";

const chennaiplaces = [
    { name: "Marina Beach", img: "/images/chennai/marina_beach.jpg", desc: "Iconic coastline of Chennai, one of the longest urban beaches in the world." },
    { name: "Kapaleeswarar Temple", img: "/images/chennai/kapaleeswarar_temple.jpg", desc: "Historic Dravidian architecture dedicated to Lord Shiva in Mylapore." },
    { name: "Santhome Basilica", img: "/images/chennai/santhome_basilica.jpg", desc: "Major Christian landmark built over the tomb of St. Thomas." },
    { name: "DakshinaChitra Heritage Museum", img: "/images/chennai/dakshinachitra.jpg", desc: "Living museum showcasing South Indian heritage, art, and traditional architecture." },
    { name: "Guindy National Park", img: "/images/chennai/guindy_park.jpg", desc: "One of India's smallest national parks located within city limits, home to diverse wildlife." },
    { name: "Cholamandalam Artists Village", img: "/images/chennai/cholamandalam.jpg", desc: "Historic artists' commune and contemporary art center showcasing Indian modern art." },
    { name: "Modern Chennai Skyline", img: "/images/chennai/chennai_skyline.jpg", desc: "A growing metro hub showcasing the city's development." },
    { name: "Ripon Building", img: "/images/chennai/ripon_building.jpg", desc: "Iconic Indo-Saracenic landmark and Chennai Corporation headquarters." },
    { name: "Valluvar Kottam", img: "/images/chennai/valluvar_kottam.jpg", desc: "Monument honoring the great Tamil poet Thiruvalluvar." },
    { name: "Vandalur Zoo", img: "/images/chennai/vandalur_zoo.jpg", desc: "One of India's largest zoological parks with diverse wildlife." },
    { name: "Mahabalipuram", img: "/images/chennai/mahabalipuram.jpg", desc: "UNESCO World Heritage site known for ancient rock-cut temples." },
    { name: "Sharadambal Temple", img: "/images/chennai/sharadambal.jpg", desc: "Dedicated to Goddess Sharadambal in varying architectural styles." },
];

export function AboutChennaiSection() {
    return (
        <section className="py-20 bg-gray-50 border-t border-gray-200" id="about-chennai">
            <div className="container mx-auto px-4 max-w-6xl text-center">
                <h2 className="text-4xl font-bold text-primary mb-6 font-heading">
                    ABOUT CHENNAI
                </h2>
                <div className="text-justify text-gray-700 leading-relaxed max-w-4xl mx-auto mb-10">
                    <p>
                        Chennai, formerly Madras, is the capital city of Tamil Nadu, India. Located on the Coromandel
                        Coast of the Bay of Bengal, it is one of the largest cultural, economic, and educational centers
                        of South India. Known as the &quot;Gateway to South India,&quot; Chennai is famous for its rich
                        heritage, classical music, dance forms, and delicious cuisine.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {chennaiplaces.map((place, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-gray-100 group"
                        >
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
        </section>
    );
}
