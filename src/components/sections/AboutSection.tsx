import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AboutSection() {
    return (
        <section className="py-20 bg-gray-50" id="about">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div>
                        <div className="flex items-center gap-4 mb-4">
                            <h2 className="text-3xl md:text-4xl font-bold font-heading text-dark">
                                About <span className="text-primary">MSEC</span>
                            </h2>
                            <div className="h-1 flex-1 bg-gradient-to-r from-primary to-transparent rounded-full opacity-50"></div>
                        </div>

                        <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                            <p>
                                <strong className="text-dark">Meenakshi Sundararajan Engineering College (MSEC)</strong> was established by the IIET Society in 2001.
                                This institution is a part of the prestigious KRS Group of Institutions which also includes the renowned IIET (Indian Institute of Engineering Technology) established in 1947 by our Founder Late Shri K.R. Sundararajan.
                            </p>
                            <p>
                                We have consistently outshone all our peers, not only in academics, but in co-curricular activities as well. imparting Engineering education to young men and women, grooming their overall personality with the highest emphasis on ethical values and honing them to face the challenges of the industry and the nation at large.
                            </p>

                            <div className="p-4 bg-white border-l-4 border-secondary rounded-r-lg shadow-sm">
                                <p className="italic text-gray-700">
                                    "To face the challenges of the industry and the nation at large."
                                </p>
                            </div>

                            <div className="pt-4">
                                <Link href="/about" className="group inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                                    Read More About MSEC <ArrowRight size={20} />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Image/Visuals */}
                    <div className="relative">
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-lg -z-0"></div>
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-100 rounded-lg -z-0"></div>

                        <div className="relative bg-white p-2 rounded-2xl shadow-xl z-10">
                            <div className="w-full h-[400px] bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl flex items-center justify-center overflow-hidden flex-col gap-4">
                                <span className="text-gray-500 font-bold text-xl">MSEC Campus</span>
                                <span className="text-xs text-gray-400">Chennai, India</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
