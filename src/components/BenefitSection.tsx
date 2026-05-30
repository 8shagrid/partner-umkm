import { CheckCircle } from "lucide-react";

export default function BenefitSection() {
  const benefits = [
    "Usaha terlihat lebih profesional di mata pelanggan",
    "Pelanggan lebih mudah melihat produk tanpa banyak tanya",
    "Order pesanan lebih rapi dan tidak ada yang tercecer",
    "Promosi di sosial media lebih mudah diarahkan ke satu link",
    "Data pelanggan dan catatan penjualan lebih tertata",
    "Bisa mulai dari sistem kecil lalu dikembangkan sesuai kebutuhan"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
              Manfaat yang Akan Dirasakan UMKM
            </h2>
            <div className="w-20 h-1.5 bg-blue-500 rounded-full mb-8"></div>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-surface-50 transition-colors">
                  <div className="shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6 text-blue-500" />
                  </div>
                  <p className="text-lg text-primary-800 font-medium">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <div className="relative bg-blue-50 rounded-3xl p-8 border border-blue-100 h-full flex flex-col justify-center items-center text-center shadow-lg">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-blue-100 rounded-full blur-2xl opacity-60"></div>
              <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-32 h-32 bg-accent-green rounded-full blur-3xl opacity-20"></div>
              
              <div className="relative z-10 w-full max-w-md">
                <div className="bg-white rounded-2xl shadow-xl p-6 border border-surface-200 mb-6">
                   <div className="flex justify-between items-center mb-4 border-b border-surface-100 pb-3">
                     <span className="font-semibold text-primary-900">Total Order Hari Ini</span>
                     <span className="text-accent-green font-bold bg-green-50 px-2 py-1 rounded-md">+12%</span>
                   </div>
                   <div className="text-4xl font-bold text-primary-900 mb-2">24 Pesanan</div>
                   <div className="text-sm text-primary-600">Semua tercatat otomatis via WhatsApp</div>
                </div>
                
                <div className="bg-white rounded-2xl shadow-xl p-6 border border-surface-200 ml-auto w-11/12 transform translate-x-4">
                   <div className="flex items-center space-x-3 mb-3">
                     <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">UM</div>
                     <div>
                       <div className="font-semibold text-primary-900">Usaha Maju</div>
                       <div className="text-xs text-primary-600">Level: Profesional</div>
                     </div>
                   </div>
                   <div className="h-2 bg-surface-100 rounded-full w-full overflow-hidden">
                     <div className="h-full bg-blue-500 w-3/4"></div>
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
