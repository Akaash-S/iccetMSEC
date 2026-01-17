import { Calendar, CheckCircle, Clock, FileText, UserCheck } from "lucide-react";

const dates = [
    {
        label: "Abstract Submission",
        date: "31 Oct 2025",
        icon: FileText,
        color: "bg-blue-50 text-blue-600",
    },
    {
        label: "Paper Submission",
        date: "10 Apr 2026",
        icon: FileText,
        color: "bg-indigo-50 text-indigo-600",
    },
    {
        label: "Acceptance Notification",
        date: "15 May 2026",
        icon: CheckCircle,
        color: "bg-green-50 text-green-600",
    },
    {
        label: "Registration / Camera Ready",
        date: "31 May 2026",
        icon: UserCheck,
        color: "bg-orange-50 text-orange-600",
    },
    {
        label: "Conference Date",
        date: "12 Aug 2026",
        icon: Calendar,
        color: "bg-purple-50 text-purple-600",
        highlight: true
    },
];

export function ImportantDatesSection() {
    return (
        <section className="py-20 bg-dark text-white" id="dates">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                        Important <span className="text-primary">Dates</span>
                    </h2>
                    <p className="text-gray-400">Mark your calendar for these key deadlines.</p>
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                    {dates.map((item, index) => (
                        <div
                            key={index}
                            className={`
                bg-white/5 backdrop-blur-sm border p-6 rounded-2xl flex flex-col items-center text-center w-full md:w-[220px] transition-all
                ${item.highlight ? 'border-primary shadow-glow bg-white/10 scale-105' : 'border-white/10 hover:bg-white/10'}
              `}
                        >
                            <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mb-4`}>
                                <item.icon size={24} />
                            </div>
                            <h3 className="text-gray-300 font-medium mb-2 uppercase tracking-wide text-xs h-8 flex items-center">{item.label}</h3>
                            <p className="text-xl font-bold text-white">{item.date}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
