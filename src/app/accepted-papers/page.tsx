export default function AcceptedPapersPage() {
    return (
        <div className="pt-10 pb-20">
            <header className="bg-gray-100 py-16 mb-12">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold font-heading text-dark mb-4">Accepted Papers</h1>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </div>
            </header>

            <div className="container mx-auto px-4 text-center">
                <p className="text-xl text-gray-600 mb-8">
                    The list of accepted papers for the 14th ICCET 2026 will be published here.
                </p>
                <div className="p-12 border-2 border-dashed border-gray-300 rounded-xl bg-gray-50 inline-block">
                    <span className="text-gray-400 font-medium">PDF Document Coming Soon</span>
                </div>
            </div>
        </div>
    );
}
