import {
  FaWhatsapp,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaTiktok,
  FaMapMarkerAlt,
} from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="flex-1 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="mb-4 text-3xl font-bold">Hubungi Kami Sekarang!</h1>
      <p className="mb-6">
        Bergabunglah bersama GCG Scola dalam Memaksimalkan Kinerja dan Layanan
        Sekolah Anda
      </p>

      <h2 className="pb-2 mb-4 text-2xl font-bold border-b-2 border-blue-950">
        Kontak Kami
      </h2>
      <div className="flex items-center mb-4 space-x-2">
        <div className="flex items-center justify-center p-2 text-white rounded bg-blue-950">
          <FaWhatsapp />
        </div>
        <span>Whatsapp: +6281511001239</span>
      </div>
      <div className="flex items-center mb-4 space-x-2">
        <div className="flex items-center justify-center p-2 text-white rounded bg-blue-950">
          <FaEnvelope />
        </div>
        <span>Email: sales@gcgsalus.id</span>
      </div>

      <h2 className="pb-2 mb-4 text-2xl font-bold border-b-2 border-blue-950">
        Sosial Media
      </h2>
      <div className="flex mb-4 space-x-4">
        <a
          href="https://www.instagram.com/gcg.id/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="text-4xl text-blue-950" />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-4xl text-blue-950" />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="text-4xl text-blue-950" />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <FaTiktok className="text-4xl text-blue-950" />
        </a>
      </div>

      <h2 className="pb-2 mb-4 text-2xl font-bold border-b-2 border-blue-950">
        Alamat Kami
      </h2>
      <div className="flex items-center mb-4 space-x-2">
        <div className="flex items-center justify-center p-2 text-white rounded bg-blue-950">
          <FaMapMarkerAlt />
        </div>
        <span>
          Graha Cibinong . JL. Raya Jakarta - Bogor Km 43 Blok H No. 08,
          Cirimekar, Kec. Cibinong, Kab. Bogor, Jawa Barat 16917
        </span>
      </div>

      {/* Embedded Google Maps */}
      <div className="h-64 overflow-hidden rounded">
        <iframe
          title="Google Maps"
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.383292373008!2d106.84539478516056!3d-6.473038176807272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c364bf366913%3A0x5b0fce620bb69f57!2sPT%20Gema%20Cendekia%20Gemilang!5e0!3m2!1sid!2sid!4v1731987100041!5m2!1sid!2sid"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactInfo;
