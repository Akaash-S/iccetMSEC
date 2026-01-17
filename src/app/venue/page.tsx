import Link from "next/link";
import { Bus, Map, Plane, Train } from "lucide-react";

export default function VenuePage() {
    return (
        <div className="pt-10 pb-20">
            <header className="bg-gray-100 py-16 mb-12">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold font-heading text-dark mb-4">Conference Venue</h1>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </div>
            </header>

            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-dark">Prince Shri Venkateshwara Padmavathy Engineering College</h2>
                        <div className="text-gray-600 text-lg space-y-2">
                            <p>Medavakkam – Mambakkam Road,</p>
                            <p>Ponmar, Chennai,</p>
                            <p>Tamil Nadu 600127, India</p>
                        </div>

                        <div className="pt-4">
                            <Link href="/about-chennai" className="text-primary font-bold hover:underline">
                                Explore Chennai City &rarr;
                            </Link>
                        </div>
                    </div>
                    <div className="h-[300px] bg-gray-200 rounded-2xl flex items-center justify-center">
                        <span className="text-gray-500">Venue Photo / College Image</span>
                    </div>
                </div>

                <h3 className="text-2xl font-bold text-center mb-10">How to Reach</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 bg-white border border-gray-100 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Plane size={32} />
                        </div>
                        <h4 className="font-bold text-lg mb-2">By Air</h4>
                        <p className="text-sm text-gray-600">
                            Chennai International Airport (MAA) is approx. 15 km from the venue. Taxi services are readily available.
                        </p>
                    </div>

                    <div className="p-6 bg-white border border-gray-100 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Train size={32} />
                        </div>
                        <h4 className="font-bold text-lg mb-2">By Train</h4>
                        <p className="text-sm text-gray-600">
                            Tambaram Railway Station is the nearest major hub (10 km). It connects to all major cities.
                        </p>
                    </div>

                    <div className="p-6 bg-white border border-gray-100 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Bus size={32} />
                        </div>
                        <h4 className="font-bold text-lg mb-2">By Bus/Road</h4>
                        <p className="text-sm text-gray-600">
                            The college is well connected by MTC buses from Tambaram and Medavakkam.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
