const ContactForm = () => {
  return (
    <div className="flex-1 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="mb-4 text-3xl font-bold">Formulir Pendaftaran</h1>
      <form className="space-y-4">
        <div>
          <label className="block mb-2" htmlFor="name">
            Nama
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-2 border rounded-lg"
            placeholder="Nama Anda"
            required
          />
        </div>
        <div>
          <label className="block mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border rounded-lg"
            placeholder="Email Anda"
            required
          />
        </div>
        <div>
          <label className="block mb-2" htmlFor="phone">
            Nomor HP
          </label>
          <input
            type="text"
            id="phone"
            className="w-full p-2 border rounded-lg"
            placeholder="Nomor HP anda, Contoh: 0822xxxxxxxx"
            required
          />
        </div>
        <div>
          <label className="block mb-2" htmlFor="message">
            Pesan
          </label>
          <textarea
            id="message"
            className="w-full p-2 border rounded-lg"
            rows="4"
            placeholder="Tuliskan pesan anda disini"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-2 text-white transition rounded-lg bg-blue-950 hover:bg-blue-700"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;