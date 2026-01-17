import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About | ICCET 2026",
};

export default function AboutPage() {
    return (
        <div className="pt-10 pb-20">
            <header className="bg-gray-100 py-20 mb-12">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold font-heading text-dark mb-4">About ICCET 2026</h1>
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
                            ICCET 2026 is an annual International conference covering research in Contemporary Engineering and Technology.
                            The 14th International Conference on Contemporary Engineering and Technology 2026 (ICCET) will be held in
                            Prince Shri Venkateshwara Padmavathy Engineering College, Chennai, India on March 22nd – 23rd, 2026.
                        </p>
                        <p>
                            ICCET 2026 conference is held in collaboration with Samarkand State University, Uzbekistan.
                            The conference aims to bring together leading academic scientists, researchers and research scholars to exchange
                            and share their experiences and research results on all aspects of Engineering and Technology.
                            It also provides a premier interdisciplinary platform for researchers, practitioners and educators to present
                            and discuss the most recent innovations, trends, and concerns as well as practical challenges encountered
                            and solutions adopted in the fields of Contemporary Engineering and Technology.
                        </p>
                    </div>
                </section>

                <section id="psvpec">
                    <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                        <span className="w-8 h-1 bg-primary inline-block"></span>
                        About PSVPEC
                    </h2>
                    <div className="prose prose-lg text-gray-700 bg-orange-50 p-8 rounded-2xl border border-orange-100">
                        <h3 className="text-xl font-bold mb-4 text-dark">Prince Shri Venkateshwara Padmavathy Engineering College</h3>
                        <p className="mb-4">
                            Prince Educational Society was established in 1978 by our Founder - Chairman Dr. K. Vasudevan, M.A., B.Ed., Ph.D.
                            He is a Educationist, Philanthropist and a Visionary. Over the years, the society has grown into a major educational
                            group with several Arts and Science Colleges, Engineering Colleges, and Schools.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 mt-8">
                            <div>
                                <h4 className="font-bold text-lg mb-2 text-dark">Vision</h4>
                                <p className="text-sm">
                                    The main aim of Prince Shri Venkateshwara Padmavathy Engineering College is to meet the challenges and aspirations of society
                                    and nation and to realize the vision of the founder Chairman Dr. K. Vasudevan.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-2 text-dark">Mission</h4>
                                <p className="text-sm">
                                    To provide goal-oriented, quality-based and value-added education through state-of-the-art technologies and methodologies.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
