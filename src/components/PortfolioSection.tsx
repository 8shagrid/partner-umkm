import { Briefcase, Link as LinkIcon } from "lucide-react";

export default function PortfolioSection() {
  const portfolios = [
    {
      name: "Seraya ERP",
      description: "Sistem penjualan, produksi, reseller, cashflow, dan laporan bisnis terintegrasi.",
      color: "bg-blue-600"
    },
    {
      name: "Seraya.my.id",
      description: "Platform pembuatan undangan digital yang mudah dan elegan.",
      color: "bg-purple-600"
    },
    {
      name: "SiapTempur.id",
      description: "Platform belajar online dan persiapan ujian untuk siswa.",
      color: "bg-orange-600"
    },
    {
      name: "PejuangKampus.co.id",
      description: "Platform edukasi dan informasi masuk perguruan tinggi.",
      color: "bg-green-600"
    }
  ];

  return (
    <section id="portofolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-2xl mb-6">
            <Briefcase className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6 leading-tight">
            Dibangun Berdasarkan Pengalaman Membuat Produk Digital Nyata
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {portfolios.map((item, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl border border-surface-200 bg-surface-50 p-8 hover:shadow-lg transition-all"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <LinkIcon className="w-24 h-24" />
              </div>
              <div className="relative z-10">
                <div className={`inline-block px-3 py-1 rounded-md text-white text-sm font-bold mb-4 ${item.color}`}>
                  {item.name}
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-2">{item.name}</h3>
                <p className="text-primary-600 font-medium">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-primary-900 rounded-3xl p-8 md:p-12 text-center shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-green opacity-10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
          
          <p className="text-xl md:text-2xl font-medium text-white relative z-10 leading-relaxed max-w-4xl mx-auto">
            &quot;Pengalaman ini digunakan untuk membantu UMKM mendapatkan solusi yang lebih praktis dan berdampak nyata, bukan sekadar tampilan website biasa.&quot;
          </p>
        </div>
      </div>
    </section>
  );
}
