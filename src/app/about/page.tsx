import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About | ICTAGI 2026",
};

export default function AboutPage() {
    return (
        <div className="pt-10 pb-20">
            <header className="bg-gray-100 py-20 mb-12">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold font-heading text-dark mb-4">About ICTAGI 2026</h1>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </div>
            </header>

            <div className="container mx-auto px-4 max-w-4xl space-y-16">
                <section>
                    <h2 className="text-2xl font-bold text-secondary mb-6 flex items-center gap-3">
                        <span className="w-8 h-1 bg-secondary inline-block"></span>
                        About the Conference
                    </h2>
                    <div className="prose prose-lg text-gray-700">
                        <p className="mb-4">
                            <strong>ICTAGI 2026</strong> (International Conference on Transformative AI for Global Impact) is a premier gathering of researchers, practitioners, and industry experts. The conference focuses on exploring how Artificial Intelligence transforms industries, society, and sustainability.
                        </p>
                        <p className="mb-4">
                            The conference will be held at <strong>Meenakshi Sundararajan Engineering College, Chennai, India</strong> from <strong>August 12th – 14th, 2026</strong>.
                        </p>
                        <p>
                            It provides a premier interdisciplinary platform to discuss the most recent innovations, trends, and concerns as well as practical challenges encountered and solutions adopted in the fields of Artificial Intelligence and its global impact.
                        </p>
                    </div>
                </section>

                <section id="msec">
                    <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                        <span className="w-8 h-1 bg-primary inline-block"></span>
                        About MSEC
                    </h2>
                    <div className="text-gray-700 bg-orange-50 p-8 rounded-2xl border border-orange-100 leading-relaxed text-lg">
                        <h3 className="text-xl font-bold mb-4 text-dark">Meenakshi Sundararajan Engineering College</h3>
                        <p className="mb-4">
                            <strong>Meenakshi Sundararajan Engineering College (MSEC)</strong> was established by the IIET Society in 2001. This institution is a part of the prestigious KRS Group of Institutions which also includes the renowned IIET (Indian Institute of Engineering Technology) established in 1947 by our Founder <strong>Late Shri K.R. Sundararajan</strong>, the well-known Meenakshi College for Women and the more recently established Meenakshi Sundararajan School of Management.
                        </p>
                        <p className="mb-4">
                            The institutions on the KRS Campus are known for the quality education they impart and their stringent levels of discipline. We have consistently outshone all our peers, not only in academics, but in co-curricular activities as well.
                        </p>
                        <p>
                            We are dedicated to imparting Engineering education to young men and women, grooming their overall personality with the highest emphasis on ethical values and honing them to face the challenges of the industry and the nation at large.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
}
