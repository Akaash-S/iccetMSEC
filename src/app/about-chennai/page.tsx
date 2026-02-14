export default function AboutChennaiPage() {
    const places = [
        { title: "Marina Beach", desc: "Iconic coastline of Chennai.", color: "bg-blue-100" },
        { title: "Kapaleeswarar Temple", desc: "Historic Dravidian architecture.", color: "bg-orange-100" },
        { title: "Santhome Basilica", desc: "Major Christian landmark.", color: "bg-gray-100" },
        { title: "DakshinaChitra Heritage Museum", desc: "Living museum of South Indian heritage and culture.", color: "bg-emerald-100" },
        { title: "Guindy National Park", desc: "One of the smallest national parks in India.", color: "bg-green-100" },
        { title: "Cholamandalam Artists Village", desc: "Historic artists' commune and contemporary art center.", color: "bg-rose-100" },
        { title: "Chennai Skyline", desc: "Modern growing metro hub.", color: "bg-purple-100" },
        { title: "Valluvar Kottam", desc: "Monument honoring Thiruvalluvar.", color: "bg-yellow-100" },
        { title: "Mahabalipuram", desc: "UNESCO World Heritage site.", color: "bg-stone-100" },
    ];

    return (
        <div className="pt-10 pb-20">
            <header className="bg-gray-100 py-16 mb-12">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold font-heading text-dark mb-4">About Chennai</h1>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </div>
            </header>

            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-2xl font-bold mb-4 text-secondary">"A coastal metropolis where tradition meets a modern lifestyle."</h2>
                    <p className="text-gray-600 text-lg">
                        Chennai, the capital of Tamil Nadu, is a vibrant city known for its rich cultural heritage, classical arts, temples, and modern IT industry.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {places.map((place, i) => (
                        <div key={i} className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer h-64">
                            {/* Image Placeholder */}
                            <div className={`absolute inset-0 ${place.color} flex items-center justify-center`}>
                                <span className="text-gray-400 font-bold opacity-50">{place.title} Image</span>
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>

                            <div className="absolute bottom-0 left-0 p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform">
                                <h3 className="text-xl font-bold mb-1">{place.title}</h3>
                                <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity">{place.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
