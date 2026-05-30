import { MessageSquareOff, ListOrdered, Edit3, Store, TrendingDown, Globe2 } from "lucide-react";

export default function ProblemSection() {
  const problems = [
    {
      title: "Produk ditanya satu-satu",
      description: "Habis waktu untuk membalas pertanyaan yang sama lewat chat.",
      icon: <MessageSquareOff className="w-8 h-8 text-orange-500" />
    },
    {
      title: "Order tercecer di WhatsApp",
      description: "Sering terlewat pesanan karena chat menumpuk dan tidak ada sistem.",
      icon: <ListOrdered className="w-8 h-8 text-orange-500" />
    },
    {
      title: "Catatan masih manual",
      description: "Pembukuan penjualan masih di buku tulis atau tercecer di kertas.",
      icon: <Edit3 className="w-8 h-8 text-orange-500" />
    },
    {
      title: "Kurang terlihat profesional",
      description: "Bisnis belum punya identitas digital yang meyakinkan pelanggan baru.",
      icon: <Store className="w-8 h-8 text-orange-500" />
    },
    {
      title: "Sulit pantau produk laku",
      description: "Tidak tahu pasti produk mana yang paling banyak terjual bulan ini.",
      icon: <TrendingDown className="w-8 h-8 text-orange-500" />
    },
    {
      title: "Belum punya katalog digital",
      description: "Pelanggan susah melihat daftar produk, harga, dan promo terbaru.",
      icon: <Globe2 className="w-8 h-8 text-orange-500" />
    }
  ];

  return (
    <section id="masalah" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Masih Mengalami Hal Ini di Usaha Kamu?
          </h2>
          <div className="w-20 h-1.5 bg-accent-orange mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="bg-surface-50 p-8 rounded-2xl border border-surface-200 hover:shadow-lg hover:border-orange-200 transition-all group"
            >
              <div className="bg-orange-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {problem.icon}
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">{problem.title}</h3>
              <p className="text-primary-600 leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-orange-50 rounded-2xl p-8 border border-orange-100 max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl font-semibold text-orange-800">
            &quot;Kalau iya, berarti usaha kamu sudah waktunya mulai dirapikan secara digital.&quot;
          </p>
        </div>
      </div>
    </section>
  );
}
