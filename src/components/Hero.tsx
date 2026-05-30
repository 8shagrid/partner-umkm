import Link from "next/link";
import { CheckCircle2, ArrowRight, Smartphone, Laptop } from "lucide-react";

export default function Hero() {
  const trustPoints = [
    "Cocok untuk UMKM lokal",
    "Bisa mulai dari landing page sederhana",
    "Terhubung langsung ke WhatsApp",
    "Bisa dikembangkan jadi dashboard bisnis",
  ];

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-4 overflow-hidden bg-linear-to-b from-surface-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full mb-6 text-sm font-semibold">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span>Solusi Digital Terbaik untuk UMKM</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 leading-tight mb-6">
              Bantu UMKM Naik Kelas Lewat <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-accent-green">Website & Sistem Order</span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-600 mb-8 leading-relaxed">
              Ubah usaha yang masih serba manual menjadi lebih rapi, profesional, dan mudah dijangkau pelanggan dengan solusi digital yang sederhana dan sesuai kebutuhan UMKM.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="https://wa.me/628XXXXXXXXXX?text=Halo%20Partner%20UMKM%2C%20saya%20mau%20konsultasi%20digitalisasi%20UMKM"
                target="_blank"
                className="inline-flex items-center justify-center bg-accent-green text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-600 transition-all shadow-lg shadow-green-500/30"
              >
                Konsultasi Gratis via WA
              </Link>
              <Link
                href="#paket"
                className="inline-flex items-center justify-center bg-white border-2 border-surface-200 text-primary-900 px-8 py-4 rounded-xl font-semibold text-lg hover:border-primary-900 transition-all group"
              >
                Lihat Paket Layanan
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {trustPoints.map((point, index) => (
                <div key={index} className="flex items-center space-x-2 text-primary-600">
                  <CheckCircle2 className="h-5 w-5 text-accent-green shrink-0" />
                  <span className="text-sm font-medium">{point}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Visual Hero Mockup */}
          <div className="relative mt-10 lg:mt-0">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-linear-to-tr from-blue-100 to-green-50 rounded-[3rem] transform rotate-3 scale-105 -z-10"></div>
            
            <div className="relative bg-white border border-surface-200 shadow-2xl rounded-2xl overflow-hidden p-2">
              <div className="bg-surface-50 rounded-xl overflow-hidden border border-surface-200 h-[400px] md:h-[500px] flex items-center justify-center relative">
                
                {/* Abstract Dashboard Mockup */}
                <div className="absolute inset-0 p-6 flex flex-col space-y-4">
                  {/* Mockup Header */}
                  <div className="flex justify-between items-center border-b border-surface-200 pb-4">
                    <div className="w-32 h-6 bg-surface-200 rounded-md"></div>
                    <div className="flex space-x-2">
                      <div className="w-8 h-8 bg-surface-200 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Mockup Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-surface-100 h-24 flex flex-col justify-between">
                       <div className="w-16 h-3 bg-surface-200 rounded-sm"></div>
                       <div className="w-24 h-6 bg-blue-100 rounded-sm"></div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-surface-100 h-24 flex flex-col justify-between">
                       <div className="w-20 h-3 bg-surface-200 rounded-sm"></div>
                       <div className="w-20 h-6 bg-green-100 rounded-sm"></div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-surface-100 h-24 flex flex-col justify-between">
                       <div className="w-12 h-3 bg-surface-200 rounded-sm"></div>
                       <div className="w-16 h-6 bg-orange-100 rounded-sm"></div>
                    </div>
                  </div>
                  
                  {/* Mockup Chart/Table */}
                  <div className="flex-1 bg-white rounded-lg shadow-sm border border-surface-100 p-4">
                    <div className="w-40 h-4 bg-surface-200 rounded-sm mb-4"></div>
                    <div className="space-y-3">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="flex justify-between items-center border-b border-surface-50 pb-2">
                           <div className="flex space-x-3 items-center">
                             <div className="w-8 h-8 bg-surface-200 rounded-md"></div>
                             <div className="w-32 h-3 bg-surface-100 rounded-sm"></div>
                           </div>
                           <div className="w-16 h-3 bg-surface-100 rounded-sm"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Floating Mobile Element */}
                <div className="absolute -bottom-6 -right-6 md:right-[-20px] bg-white p-2 rounded-4xl border-4 border-surface-200 shadow-xl w-[180px] h-[360px] transform -rotate-6 hidden sm:block">
                  <div className="bg-surface-50 h-full w-full rounded-3xl border border-surface-200 overflow-hidden relative">
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-surface-200 rounded-full"></div>
                    <div className="p-4 mt-6">
                      <div className="w-20 h-4 bg-surface-200 rounded-sm mb-6"></div>
                      <div className="space-y-4">
                        <div className="h-24 bg-white rounded-lg shadow-sm border border-surface-100"></div>
                        <div className="h-24 bg-white rounded-lg shadow-sm border border-surface-100"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
