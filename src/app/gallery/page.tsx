export default function GalleryPage() {
    return (
        <div className="pt-10 pb-20">
            <header className="bg-gray-100 py-16 mb-12">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold font-heading text-dark mb-4">Conference Gallery</h1>
                    <p className="text-gray-500">Highlights from Previous Years (2012-2025)</p>
                </div>
            </header>

            <div className="container mx-auto px-4 text-center">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[...Array(8)].map((_, i) => (
                        <div key={i} className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">
                            Image {i + 1}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
