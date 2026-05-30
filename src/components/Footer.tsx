import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-950 text-white pt-16 pb-8 border-t border-primary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-2">
            <Link href="#" className="text-3xl font-heading font-extrabold tracking-tighter text-white mb-4 block">
              Partner<span className="text-accent-orange">.</span>UMKM
            </Link>
            <p className="text-primary-300 mb-6 max-w-sm leading-relaxed">
              Partner digitalisasi UMKM lokal. Membantu usaha tampil lebih profesional, rapi, dan siap naik kelas.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-800 flex items-center justify-center hover:bg-primary-700 hover:text-accent-orange transition-colors" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-800 flex items-center justify-center hover:bg-primary-700 hover:text-accent-orange transition-colors" aria-label="TikTok">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-primary-800 pb-2 inline-block">Menu Singkat</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-primary-300 hover:text-white transition-colors">Beranda</Link></li>
              <li><Link href="#layanan" className="text-primary-300 hover:text-white transition-colors">Layanan</Link></li>
              <li><Link href="#paket" className="text-primary-300 hover:text-white transition-colors">Paket</Link></li>
              <li><Link href="#portofolio" className="text-primary-300 hover:text-white transition-colors">Portofolio</Link></li>
              <li><Link href="#faq" className="text-primary-300 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-primary-800 pb-2 inline-block">Hubungi Kami</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://wa.me/628XXXXXXXXXX" 
                  target="_blank"
                  className="flex items-center space-x-3 text-primary-300 hover:text-white transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-colors">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <span>+62 8XX XXXX XXXX</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:email@placeholder.com" 
                  className="flex items-center space-x-3 text-primary-300 hover:text-white transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span>hello@partnerumkm.com</span>
                </a>
              </li>
            </ul>
          </div>
          
        </div>

        <div className="pt-8 border-t border-primary-800 text-center text-primary-400 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} Partner UMKM. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Dibuat khusus untuk kemajuan UMKM Lokal</p>
        </div>
      </div>
    </footer>
  );
}
