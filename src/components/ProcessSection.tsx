export default function ProcessSection() {
  const steps = [
    {
      title: "Konsultasi kebutuhan usaha",
      description: "Ngobrol santai tentang kendala yang sedang dialami usaha Anda saat ini."
    },
    {
      title: "Audit masalah digital UMKM",
      description: "Kami menganalisa bagian mana yang paling butuh dirapikan secara digital."
    },
    {
      title: "Pilih solusi yang paling cocok",
      description: "Menentukan paket atau fitur yang sesuai dengan budget dan kebutuhan operasional."
    },
    {
      title: "Pembuatan website atau sistem",
      description: "Proses pengerjaan cepat dan terukur, tidak mengganggu operasional harian Anda."
    },
    {
      title: "Launching dan pendampingan",
      description: "Kami pandu cara pakainya sampai Anda dan tim benar-benar lancar menggunakannya."
    }
  ];

  return (
    <section id="alur-kerja" className="py-20 bg-surface-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Alur Kerja yang Mudah
          </h2>
          <p className="text-lg text-primary-600">
            Proses yang transparan dan anti ribet.
          </p>
          <div className="w-20 h-1.5 bg-accent-orange mx-auto rounded-full mt-6"></div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-surface-200"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Number Indicator */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center w-12 h-12 bg-primary-900 text-white rounded-full font-bold text-xl border-4 border-surface-50 z-10 shadow-lg">
                  {index + 1}
                </div>

                {/* Content Box */}
                <div className={`w-full pl-20 md:pl-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'}`}>
                  <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-surface-200 hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold text-primary-900 mb-2">{step.title}</h3>
                    <p className="text-primary-600">{step.description}</p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
