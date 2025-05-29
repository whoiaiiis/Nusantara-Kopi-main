import React from 'react';
import { Coffee, Flame, Truck, Users, User, Handshake } from "lucide-react"; 

function About() {
  return (
    <div className="overflow-hidden">


      <section className="bg-[#6A2E1E] text-yellow-200 text-center py-16 px-6">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">Tentang Kopi Nusantara</h2>
        <p className="text-lg sm:text-xl">Perjalanan kami dalam menghadirkan kopi terbaik dari berbagai penjuru Nusantara</p>
      </section>

      <section className="bg-[#FFFDE8] text-[#6A2E1E] px-6 md:px-16 py-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12">
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold mb-6">Cerita Kami</h3>
            <p className="mb-4">
              Kopi Nusantara didirikan pada tahun 2015 oleh sekelompok pecinta kopi yang memiliki misi untuk memperkenalkan kekayaan cita rasa kopi Indonesia ke seluruh dunia.
            </p>
            <p className="mb-4">
              Berawal dari sebuah kedai kecil di Jakarta, kami mulai menjelajahi berbagai daerah penghasil kopi di Indonesia untuk menemukan biji kopi terbaik dan menjalin kerjasama langsung dengan para petani lokal.
            </p>
            <p>
              Hari ini, Kopi Nusantara telah berkembang menjadi salah satu pemasok kopi premium terkemuka yang tetap menjunjung tinggi kualitas, keberlanjutan, dan kesejahteraan petani.
            </p>
          </div>

          <div className="lg:w-1/2">
            <img
              src="/hot-co.jpg"
              alt="Latte Art"
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </section>

    
<section className="bg-[#FFF4C4] text-[#6A2E1E] px-6 md:px-16 py-16">
  <div className="max-w-7xl mx-auto text-center">
    <h3 className="text-2xl font-bold mb-12">Nilai-nilai Kami</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

      
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="bg-yellow-200 w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-4">
         
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-[#6A2E1E]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8a4 4 0 004-4v-1H4v1a4 4 0 004 4z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 8v2a8 8 0 0016 0V8" />
            </svg>
        </div>
        <h4 className="text-lg font-semibold mb-2">Kualitas Premium</h4>
        <p className="text-gray-700 text-sm">Kami hanya menyediakan biji kopi terbaik yang dipilih dengan teliti.</p>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="bg-yellow-200 w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-4">
          
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-[#6A2E1E]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 4a9 9 0 0112.45 12.45" />
          </svg>
        </div>
        <h4 className="text-lg font-semibold mb-2">Keberlanjutan</h4>
        <p className="text-gray-700 text-sm">Praktik pertanian yang ramah lingkungan dan berkelanjutan.</p>
      </div>

     
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="bg-yellow-200 w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-4">
         
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-[#6A2E1E]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 20H4v-2a4 4 0 013-3.87" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 7a4 4 0 100-8 4 4 0 000 8z" />
          </svg>
        </div>
        <h4 className="text-lg font-semibold mb-2">Kemitraan</h4>
        <p className="text-gray-700 text-sm">Kerjasama yang adil dan menguntungkan dengan petani lokal.</p>
      </div>

      
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="bg-yellow-200 w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-4">
          
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-[#6A2E1E]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5a12.08 12.08 0 01-6.16-10.922L12 14z" />
          </svg>
        </div>
        <h4 className="text-lg font-semibold mb-2">Autentisitas</h4>
        <p className="text-gray-700 text-sm">Menjaga keaslian cita rasa kopi dari setiap daerah.</p>
      </div>

    </div>
  </div>
</section>

      <section className="bg-yellow-50 py-12">
        <h2 className="text-3xl font-bold text-center text-amber-900 mb-10">Proses Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
          {[
            {
              icon: <Coffee className="w-12 h-12 mx-auto text-amber-800 mb-4" />,
              title: "Seleksi Biji Kopi",
              desc: "Kami memilih biji kopi terbaik langsung dari petani di berbagai daerah di Indonesia.",
            },
            {
              icon: <Flame className="w-12 h-12 mx-auto text-amber-800 mb-4" />,
              title: "Proses Sangrai",
              desc: "Biji kopi disangrai dengan hati-hati untuk menghasilkan profil rasa yang optimal.",
            },
            {
              icon: <Truck className="w-12 h-12 mx-auto text-amber-800 mb-4" />,
              title: "Pengiriman Segar",
              desc: "Kopi dikirim dalam kemasan khusus untuk menjaga kesegaran hingga sampai ke tangan Anda.",
            },
          ].map((step, index) => (
            <div key={index}>
              {step.icon}
              <h3 className="font-semibold text-amber-900 text-lg">{step.title}</h3>
              <p className="text-gray-700">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-yellow-100 py-16">
  <h2 className="text-4xl font-bold text-center text-amber-900 mb-12">Tim Kami</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto px-6">
    {[
      {
        image: "/team/calvin.jpg",
        name: "Calvin",
        role: "Pendiri & CEO",
        story: "Calvin terinspirasi dari kenangan masa kecil bersama kakeknya di kebun kopi. Dari situlah ia mendirikan Kopi Nusantara untuk mengangkat kopi lokal ke panggung dunia.",
      },
      {
        image: "/aisyah.png",
        name: "Aisyah",
        role: "Kepala Roaster",
        story: "Aisyah telah mengabdikan hidupnya untuk seni sangrai kopi. Setiap biji ia proses dengan presisi demi menghasilkan rasa yang sempurna.",
      },
      {
        image: "/sutan.png",
        name: "Sutan",
        role: "Manajer Operasional",
        story: "Dengan latar belakang logistik dan supply chain, Sutan memastikan setiap proses berjalan lancar dari kebun ke cangkir Anda.",
      },
      {
        image: "/annisa.jpg",
        name: "Annisa",
        role: "Hubungan Kemitraan",
        story: "Annisa membangun jembatan kemitraan dengan petani kopi lokal, memastikan keadilan dan keberlanjutan dalam setiap langkah bisnis.",
      },
    ].map((member, index) => (
      <div
        key={index}
        className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 border border-amber-200"
      >
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-60 object-cover"
        />
        <div className="p-6 text-center">
          <h3 className="text-xl font-bold text-amber-900">{member.name}</h3>
          <p className="text-amber-700 font-medium mb-3">{member.role}</p>
          <p className="text-sm text-gray-600">{member.story}</p>
        </div>
      </div>
    ))}
  </div>
</section>


    </div>
  );
}

export default About;
