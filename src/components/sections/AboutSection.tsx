import Link from "next/link";
import { Download } from "lucide-react";

export function AboutSection() {
    return (
        <section className="py-20 bg-white" id="about">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-primary inline-block relative pb-2 font-heading">
                        ABOUT US
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-accent rounded-full"></span>
                    </h2>
                    <h3 className="text-xl font-medium text-gray-500 mt-4 uppercase tracking-wider">
                        ABOUT THE CONFERENCE
                    </h3>
                </div>

                {/* Content */}
                <div className="text-justify text-gray-700 leading-relaxed text-lg space-y-6">
                    <p>
                        <strong>ICTAGI 2026</strong> (International Conference on Transformative AI for Global Impact) is a premier gathering of researchers, practitioners, and industry experts. The conference focuses on exploring how Artificial Intelligence transforms industries, society, and sustainability.
                    </p>
                    <p>
                        The conference will be held at <strong>Meenakshi Sundararajan Engineering College, Chennai, India</strong> from <strong>August 12th – 14th, 2026</strong>. It provides a premier interdisciplinary platform to discuss the most recent innovations, trends, and concerns as well as practical challenges encountered and solutions adopted in the fields of Artificial Intelligence and its global impact.
                    </p>

                    <div className="flex justify-center mt-10">
                        <Link
                            href="/MSEC-conference.pdf"
                            target="_blank"
                            download
                            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-all shadow-lg hover:shadow-primary/30"
                        >
                            <Download size={20} />
                            Download Brochure
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
