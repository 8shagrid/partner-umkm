import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 bg-primary-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[60%] rounded-full bg-blue-600/30 blur-[100px]"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[70%] rounded-full bg-accent-green/20 blur-[120px]"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Siap Bikin Usaha Kamu Lebih <span className="text-transparent bg-clip-text bg-linear-to-r from-accent-green to-teal-400">Rapi dan Profesional?</span>
        </h2>
        
        <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
          Mulai dari landing page sederhana, katalog produk, sampai dashboard penjualan, semua bisa disesuaikan dengan kondisi dan budget UMKM Anda saat ini.
        </p>
        
        <Link
          href="https://wa.me/628XXXXXXXXXX?text=Halo%20Partner%20UMKM%2C%20saya%20mau%20konsultasi%20digitalisasi%20UMKM"
          target="_blank"
          className="inline-flex items-center justify-center bg-accent-green text-white px-8 py-4 rounded-xl font-bold text-xl hover:bg-green-500 transition-all shadow-xl shadow-green-900/50 hover:-translate-y-1"
        >
          <MessageCircle className="w-6 h-6 mr-3" />
          Konsultasi Gratis Sekarang
        </Link>
        
        <p className="mt-6 text-sm text-blue-200">
          Tidak ada komitmen untuk langsung membeli. Kita ngobrol santai dulu!
        </p>
      </div>
    </section>
  );
}
