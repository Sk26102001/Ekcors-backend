// app/tracking/page.jsx
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  MapPin,
  Fuel,
  Truck,
  Bell,
  FileText,
  TrendingUp,
  Activity,
  Gauge,
  History,
  BarChart3,
  NotebookText,
  Clock,
  AlertTriangle,
  CheckCircle2,
  Navigation,
  Settings,
  ChevronRight,
  Zap,
} from "lucide-react";


export const metadata = {
  title: "Fleet Tracking | EK CORS Equipment Telematics",
  description: "Real-time equipment tracking, utilization reports, and smart alerts for your construction fleet. Powered by EK CORS Trackers.",
};

export default function TrackingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="sm:min-h-48 min-h-40 bg-[url('/images/about-hero.jpg')] bg-cover bg-center bg-no-repeat flex justify-center items-center relative py-10 ">
        <div className="absolute bg-black/50 backdrop-blur-[2px] inset-0"></div>
        <div className="h-full w-full flex flex-col justify-center items-center relative z-10 space-y-2 ">
          <h1 className="text-white text-3xl font-bold uppercase tracking-wider">Our Tracker</h1>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="text-gray-300 hover:text-yellowClr">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-yellowClr">Tracking</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      <div className="bg-neutral-900 text-white">
        <div className="container mx-auto px-4 py-12">
          
          {/* Intro Description */}
          <div className="max-w-5xl mx-auto text-center mb-16">
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              Every rental machine with <span className="text-yellowClr font-semibold">EK CORS</span> rental is powered by 
              <span className="text-yellowClr font-semibold"> Trackers</span>, a smart technology and telematics solution built specially for contractors and equipment owners. 
              Tracking gives you access to unprecedented insights about your equipment. View utilization rates, invoices and real-time equipment GPS location.
            </p>
          </div>

          <h2 className="text-center text-2xl md:text-3xl font-bold mb-12 text-white">SEE EVERY MACHINE IN REAL TIME</h2>

          {/* Section 1: Connect Every Assets */}
          <div className="grid md:grid-cols-2 gap-10 items-center mb-24">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-yellowClr">Connect Every Assets</h3>
              <ul className="space-y-4">
                {[
                  "Monitor Equipment’s work hours and time",
                  "Real time location of your machine, vehicle and materials",
                  "Get Equipment Utilization report easily.",
                  "Digital Work Order",
                  "Historical Data"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-200">
                    <CheckCircle2 className="w-5 h-5 text-yellowClr" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-gray-500 italic mt-4">
                #1 heavy equipment rental digital platform in Bangladesh
              </p>
            </div>
            <div className="rounded-xl overflow-hidden border-2 border-yellowClr/20 shadow-2xl">
              <img 
                src="https://bdrentz.com/media/photos/Admin/2/largest%20equipment%20company%20in%20bd.jpeg" 
                alt="Construction site tracking" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Section 2: Analyze Data */}
          <div className="grid md:grid-cols-2 gap-10 items-center mb-24">
            <div className="order-2 md:order-1 rounded-xl overflow-hidden border-2 border-yellowClr/20 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" 
                alt="Analyzing data" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2 space-y-6 text-right md:text-left">
              <h3 className="text-2xl font-bold text-yellowClr">Get More Work Done by analyzing the data</h3>
              <ul className="space-y-4">
                {[
                  "Manage your mixed fleet, monitor hours worked.",
                  "Engine Status and runtime of connected machines.",
                  "Location of every machine.",
                  "Status of Every Digital work Order of your fleet.",
                  "Detailed report on utilization, trips, and rentals.",
                  "Build Custom reports for the insights you want."
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-200 md:flex-row-reverse lg:flex-row">
                    <Activity className="w-5 h-5 text-yellowClr hidden lg:block" />
                    <span>{item}</span>
                    <TrendingUp className="w-5 h-5 text-yellowClr lg:hidden" />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section 3: Alerts & Dashboard */}
          <div className="grid md:grid-cols-2 gap-6 mb-20 mt-10">
            {/* Alerts */}
            <div className="bg-neutral-800/50 p-8 rounded-2xl border border-neutral-700">
              <div className="flex items-center gap-3 mb-6">
                <Bell className="w-8 h-8 text-yellowClr" />
                <h3 className="text-2xl font-bold">Alerts</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-yellowClr/20 p-1 rounded"><Settings className="w-4 h-4 text-yellowClr" /></div>
                  <p className="text-gray-300">Set Custom Alerts to know every time your machine enters or exits a Geofence.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-yellowClr/20 p-1 rounded"><Fuel className="w-4 h-4 text-yellowClr" /></div>
                  <p className="text-gray-300">Push Alerts of fuel levels and engine health.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-yellowClr/20 p-1 rounded"><Gauge className="w-4 h-4 text-yellowClr" /></div>
                  <p className="text-gray-300">Speeding, Engine Data and more.</p>
                </li>
              </ul>
              <div className="mt-8 pt-6 border-t border-neutral-700">
                <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop" className="rounded-lg h-48 w-full object-cover opacity-60" alt="Alerts Visual" />
              </div>
            </div>

            {/* Dashboard */}
            <div className="bg-neutral-800/50 p-8 rounded-2xl border border-neutral-700">
              <div className="flex items-center gap-3 mb-6">
                <BarChart3 className="w-8 h-8 text-yellowClr" />
                <h3 className="text-2xl font-bold">Dashboard</h3>
              </div>
              <ul className="space-y-5">
                <li className="flex items-center justify-between text-gray-200">
                  <span className="flex-1">Digital work order, Digital log sheet simplify and streamline business operations.</span>
                  <FileText className="w-5 h-5 text-yellowClr ml-4" />
                </li>
                <li className="flex items-center justify-between text-gray-200">
                  <span className="flex-1">Identify recurring issues across your fleet.</span>
                  <AlertTriangle className="w-5 h-5 text-yellowClr ml-4" />
                </li>
                <li className="flex items-center justify-between text-gray-200">
                  <span className="flex-1">Stay productive and save money.</span>
                  <Zap className="w-5 h-5 text-yellowClr ml-4" />
                </li>
              </ul>
              <div className="mt-8">
                <div className="bg-neutral-900 p-4 rounded-lg border border-yellowClr/30">
                   <div className="flex justify-between items-center mb-4">
                      <span className="text-sm font-bold">Live Map Preview</span>
                      <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">Online</span>
                   </div>
                   <div className="h-32 bg-neutral-800 rounded flex items-center justify-center relative overflow-hidden">
                      <MapPin className="text-yellowClr w-8 h-8 animate-bounce z-10" />
                      <div className="absolute inset-0 opacity-30 bg-[url('https://www.google.com/maps/d/u/0/thumbnail?mid=1_4yFqU0pX9I0Y-P8v_L8S8n-9I0')] bg-cover"></div>
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Branding Tagline */}
          <div className="text-center space-y-2 py-10 border-t border-neutral-800">
            <p className="text-yellowClr font-medium uppercase tracking-widest text-sm">EKCORS Telematics</p>
            <p className="text-gray-500 text-xs">Largest nationwide heavy equipment rental suppliers in India</p>
          </div>

        </div>
      </div>
    </>
  );
}