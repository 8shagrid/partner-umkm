import { Globe, ShoppingBag, MessageCircle, LayoutDashboard } from "lucide-react";

export default function SolutionSection() {
  const solutions = [
    {
      title: "Website Profil Usaha",
      description: "Untuk membuat bisnis terlihat profesional dan mudah ditemukan pelanggan baru secara online.",
      icon: <Globe className="w-10 h-10 text-accent-green" />,
      color: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      title: "Katalog Digital",
      description: "Pelanggan bisa melihat produk, harga, dan langsung pesan dengan mudah tanpa harus ditanya satu-satu.",
      icon: <ShoppingBag className="w-10 h-10 text-blue-500" />,
      color: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      title: "Sistem Order WhatsApp",
      description: "Pesan pelanggan otomatis lebih rapi dengan format chat yang jelas, mengurangi risiko order terlewat.",
      icon: <MessageCircle className="w-10 h-10 text-green-500" />,
      color: "bg-emerald-50",
      borderColor: "border-emerald-200"
    },
    {
      title: "Dashboard Penjualan",
      description: "Pemilik usaha bisa mencatat order, pelanggan, pemasukan, dan melihat laporan sederhana di satu tempat.",
      icon: <LayoutDashboard className="w-10 h-10 text-indigo-500" />,
      color: "bg-indigo-50",
      borderColor: "border-indigo-200"
    }
  ];

  return (
    <section id="layanan" className="py-20 bg-surface-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Solusi Digital Sederhana untuk UMKM
          </h2>
          <p className="text-lg text-primary-600 mb-6">
            Layanan kami bukan sekadar membuat website, tetapi membantu UMKM punya sistem operasional yang lebih rapi dan terukur.
          </p>
          <div className="w-20 h-1.5 bg-accent-green mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className={`flex flex-col sm:flex-row items-start sm:items-center gap-6 p-8 rounded-2xl bg-white border ${solution.borderColor} hover:shadow-xl transition-shadow`}
            >
              <div className={`shrink-0 w-20 h-20 flex items-center justify-center rounded-2xl ${solution.color}`}>
                {solution.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary-900 mb-2">{solution.title}</h3>
                <p className="text-primary-600 leading-relaxed">{solution.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
