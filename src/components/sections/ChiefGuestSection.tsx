export function ChiefGuestSection() {
    return (
        <section className="py-20 bg-gray-50 border-t border-gray-200">
            <div className="container mx-auto px-4">
                <div className="flex items-center gap-4 mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-dark">
                        Chief <span className="text-primary">Guest</span>
                    </h2>
                    <div className="h-1 flex-1 bg-gradient-to-r from-primary to-transparent rounded-full opacity-50"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Guest 1 */}
                    <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-primary flex items-center gap-6 group hover:translate-x-2 transition-transform">
                        {/* Avatar Placeholder */}
                        <div className="w-20 h-20 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center text-2xl font-bold text-gray-400 group-hover:bg-orange-50 group-hover:text-primary transition-colors">
                            PB
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-dark group-hover:text-primary transition-colors">
                                Mr. Prashanth Balasubramanian
                            </h3>
                            <p className="text-gray-500 font-medium mt-1">
                                MD, Ragnar Technologies Pvt Ltd
                            </p>
                        </div>
                    </div>

                    {/* Guest 2 */}
                    <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-secondary flex items-center gap-6 group hover:translate-x-2 transition-transform">
                        {/* Avatar Placeholder */}
                        <div className="w-20 h-20 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center text-2xl font-bold text-gray-400 group-hover:bg-green-50 group-hover:text-secondary transition-colors">
                            DR
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-dark group-hover:text-secondary transition-colors">
                                Mr. Deepak Rathnam
                            </h3>
                            <p className="text-gray-500 font-medium mt-1">
                                CEO, Cetal
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
