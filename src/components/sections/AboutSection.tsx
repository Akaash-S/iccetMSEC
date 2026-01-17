import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AboutSection() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div>
                        <div className="flex items-center gap-4 mb-4">
                            <h2 className="text-3xl md:text-4xl font-bold font-heading text-dark">
                                About <span className="text-primary">ICCET 2026</span>
                            </h2>
                            <div className="h-1 flex-1 bg-gradient-to-r from-primary to-transparent rounded-full opacity-50"></div>
                        </div>

                        <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                            <p>
                                <strong className="text-dark">ICCET 2026</strong> is an annual
                                International conference covering research in Contemporary
                                Engineering and Technology. The 14th International Conference on
                                Contemporary Engineering and Technology 2026 (ICCET) will be held in{" "}
                                <Link
                                    href="/venue"
                                    className="text-primary hover:underline font-medium"
                                >
                                    Prince Shri Venkateshwara Padmavathy Engineering College
                                </Link>
                                , Chennai, India on{" "}
                                <span className="text-dark font-semibold">
                                    March 22nd – 23rd, 2026
                                </span>
                                .
                            </p>
                            <p>
                                ICCET 2026 conference is held in collaboration with{" "}
                                <Link
                                    href="#"
                                    className="text-primary hover:underline font-medium"
                                >
                                    Samarkand State University, Uzbekistan
                                </Link>
                                . The conference aims to bring together leading academic
                                scientists, researchers and research scholars to exchange and share
                                their experiences and research results on all aspects of Engineering
                                and Technology.
                            </p>

                            <div className="pt-4">
                                <Link href="/about" className="group inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                                    Read More About ICCET <ArrowRight size={20} />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Image/Visuals */}
                    <div className="relative">
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-100 rounded-lg -z-0"></div>
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-100 rounded-lg -z-0"></div>

                        <div className="relative bg-white p-2 rounded-2xl shadow-xl z-10 rotate-1 hover:rotate-0 transition-transform duration-500">
                            {/* Replace with actual image */}
                            <div className="w-full h-[400px] bg-gray-200 rounded-xl flex items-center justify-center overflow-hidden">
                                <span className="text-gray-400 font-medium">Conference Image / College Campus</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
