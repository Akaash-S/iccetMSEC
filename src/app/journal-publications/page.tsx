export default function JournalPublicationsPage() {
    return (
        <div className="pt-10 pb-20">
            <header className="bg-gray-100 py-16 mb-12">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold font-heading text-dark mb-4">Journal Publications</h1>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </div>
            </header>

            <div className="container mx-auto px-4 max-w-4xl">
                <div className="space-y-12">

                    <section id="options" className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-primary">
                        <h2 className="text-2xl font-bold mb-6 text-dark">Publication Options</h2>
                        <p className="mb-4 text-gray-600">
                            High-quality papers presented at the conference will be considered for publication in the following indexed journals (additional fee applies):
                        </p>
                        <ul className="grid md:grid-cols-2 gap-4">
                            {["Scopus Journal", "Scopus Book Chapter", "Web of Science", "SCI", "ESCIE", "UGC Care Listed", "Annexure 1 & 2"].map((item) => (
                                <li key={item} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                    <span className="w-2 h-2 bg-secondary rounded-full"></span>
                                    <span className="font-semibold text-gray-800">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section id="previous">
                        <h2 className="text-2xl font-bold mb-6 text-dark">Previous Year Publications (2025)</h2>
                        <div className="p-8 border border-gray-200 rounded-xl bg-gray-50 text-center">
                            <p className="text-gray-500 mb-4">List of papers published in 2025 is available for download.</p>
                            <button className="px-6 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-100">
                                Download 2025 List (PDF)
                            </button>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
}
