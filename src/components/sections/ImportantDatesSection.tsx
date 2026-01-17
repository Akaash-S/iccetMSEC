import { Calendar, CheckCircle, Clock } from "lucide-react";

const dates = [
    {
        label: "Paper Submission Deadline",
        date: "20th March 2026",
        icon: Calendar,
        color: "bg-red-50 text-red-600",
    },
    {
        label: "Paper Status Notification",
        date: "Within 12 hours",
        subtitle: "from paper submission",
        icon: Clock,
        color: "bg-orange-50 text-orange-600",
    },
    {
        label: "Conference Dates",
        date: "22nd & 23rd March 2026",
        icon: CheckCircle,
        color: "bg-green-50 text-green-600",
    },
];

export function ImportantDatesSection() {
    return (
        <section className="py-20 bg-dark text-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                        Important <span className="text-primary">Dates</span>
                    </h2>
                    <p className="text-gray-400">Mark your calendar for these key deadlines.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {dates.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl flex flex-col items-center text-center hover:bg-white/10 transition-colors"
                        >
                            <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center mb-6`}>
                                <item.icon size={32} />
                            </div>
                            <h3 className="text-gray-300 font-medium mb-3 uppercase tracking-wide text-sm">{item.label}</h3>
                            <p className="text-2xl md:text-3xl font-bold text-white">{item.date}</p>
                            {item.subtitle && (
                                <p className="text-sm text-gray-500 mt-2 italic">{item.subtitle}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
