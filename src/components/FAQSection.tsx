"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const faqs = [
    {
      question: "Apakah layanan ini cocok untuk usaha kecil atau rumahan?",
      answer: "Sangat cocok! Solusi kami memang didesain khusus untuk UMKM yang ingin mulai tampil lebih profesional tanpa harus memikirkan hal-hal teknis yang rumit."
    },
    {
      question: "Apakah saya harus langsung membuat sistem yang lengkap?",
      answer: "Tidak harus. Anda bisa mulai dari yang paling sederhana dulu, misalnya membuat landing page atau katalog produk, sesuai budget dan kebutuhan operasional saat ini."
    },
    {
      question: "Apakah bisa jika saya hanya ingin membuat katalog produk?",
      answer: "Tentu bisa. Paket Katalog Online kami dibuat khusus agar pelanggan Anda bisa melihat produk, detail harga, dan langsung memesan tanpa harus banyak tanya."
    },
    {
      question: "Apakah sistem ini bisa terhubung langsung ke WhatsApp?",
      answer: "Ya! Semua pesanan dari website atau katalog digital akan otomatis diformat dan dikirimkan langsung ke nomor WhatsApp Anda, sehingga lebih mudah dikelola."
    },
    {
      question: "Apakah nanti sistemnya bisa dikembangkan lagi?",
      answer: "Bisa. Jika bisnis Anda sudah membesar dan membutuhkan pencatatan yang lebih kompleks, kami bisa mengembangkan sistem Anda menjadi Dashboard UMKM yang lebih lengkap."
    },
    {
      question: "Apakah saya perlu paham tentang coding atau teknologi?",
      answer: "Sama sekali tidak. Anda hanya perlu tahu cara membalas WhatsApp atau menggunakan aplikasi biasa. Kami yang akan mengurus semua kebutuhan teknisnya."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Pertanyaan yang Sering Diajukan
          </h2>
          <div className="w-20 h-1.5 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'border-blue-500 shadow-md bg-blue-50/30' : 'border-surface-200 bg-white hover:border-blue-300'}`}
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-lg text-primary-900 pr-4">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-primary-600 shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-blue-500' : ''}`} 
                />
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-primary-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
