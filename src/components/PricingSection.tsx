import Link from "next/link";
import { Check } from "lucide-react";

export default function PricingSection() {
  const packages = [
    {
      name: "Starter Digital",
      description: "Cocok untuk UMKM yang baru ingin tampil profesional.",
      features: [
        "Landing page 1 halaman",
        "Profil usaha",
        "Tombol WhatsApp",
        "Link sosial media",
        "Copywriting singkat"
      ],
      ctaText: "Pilih Paket Starter",
      popular: false,
      color: "blue"
    },
    {
      name: "Katalog Online",
      description: "Cocok untuk UMKM yang punya banyak produk.",
      features: [
        "Website katalog produk",
        "Kategori produk",
        "Detail produk",
        "Tombol order WhatsApp otomatis",
        "Bisa update produk mandiri"
      ],
      ctaText: "Pilih Paket Katalog",
      popular: true,
      color: "green"
    },
    {
      name: "Dashboard UMKM",
      description: "Cocok untuk usaha yang ingin pencatatan lebih rapi.",
      features: [
        "Input penjualan harian",
        "Data pelanggan",
        "Catatan pemasukan & pengeluaran",
        "Laporan omzet sederhana",
        "Grafik produk terlaris"
      ],
      ctaText: "Konsultasi Paket Dashboard",
      popular: false,
      color: "orange"
    }
  ];

  return (
    <section id="paket" className="py-20 bg-surface-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Paket Layanan
          </h2>
          <p className="text-lg text-primary-600 font-medium">
            Mulai dari paket ringan sesuai kebutuhan usaha.
          </p>
          <div className="w-20 h-1.5 bg-primary-600 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-3xl p-8 border ${
                pkg.popular ? 'border-accent-green shadow-xl scale-105 md:-translate-y-4 z-10' : 'border-surface-200 shadow-md'
              } flex flex-col`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-accent-green text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
                  Paling Diminati
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-primary-900 mb-3">{pkg.name}</h3>
                <p className="text-primary-600 h-12">{pkg.description}</p>
              </div>
              
              <div className="flex-1 space-y-4 mb-8">
                {pkg.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start">
                    <Check className={`w-5 h-5 mr-3 shrink-0 ${pkg.popular ? 'text-accent-green' : 'text-blue-500'}`} />
                    <span className="text-primary-800">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Link
                href={`https://wa.me/628XXXXXXXXXX?text=Halo%20Partner%20UMKM%2C%20saya%20tertarik%20dengan%20${encodeURIComponent(pkg.name)}`}
                target="_blank"
                className={`w-full text-center py-4 rounded-xl font-bold transition-all ${
                  pkg.popular 
                    ? 'bg-accent-green text-white hover:bg-green-600 shadow-lg shadow-green-200' 
                    : 'bg-surface-100 text-primary-900 hover:bg-surface-200'
                }`}
              >
                {pkg.ctaText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
