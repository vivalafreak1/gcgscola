import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;

    // Apply specific validations for each field
    let newValue = value;

    if (id === "name" && newValue.length > 30) {
      newValue = newValue.slice(0, 30); // Limit to 30 characters
    } else if (id === "email") {
      newValue = newValue.replace(/\s/g, ""); // Remove spaces from email
      if (newValue.length > 30) {
        newValue = newValue.slice(0, 30); // Limit to 30 characters
      }
    } else if (id === "phone") {
      newValue = newValue.replace(/[^0-9]/g, ""); // Only allow numbers
      if (newValue.length > 16) {
        newValue = newValue.slice(0, 16); // Limit to 16 characters
      }
    } else if (id === "message" && newValue.length > 100) {
      newValue = newValue.slice(0, 100); // Limit to 100 characters
    }

    setFormData((prevState) => ({
      ...prevState,
      [id]: newValue,
    }));
  };

  // Static handleSubmit function, no email sending logic
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("This is a static form for preview purposes.");
    // Optionally, you can reset the form after submission
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="flex-1 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="mb-4 text-3xl font-bold">Formulir Pendaftaran</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block mb-2" htmlFor="name">
            Nama
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-2 border rounded-lg"
            placeholder="Nama Anda"
            value={formData.name}
            onChange={handleChange}
            maxLength="30"
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
            value={formData.email}
            onChange={handleChange}
            maxLength="30"
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
            value={formData.phone}
            onChange={handleChange}
            maxLength="16"
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
            value={formData.message}
            onChange={handleChange}
            maxLength="100"
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
