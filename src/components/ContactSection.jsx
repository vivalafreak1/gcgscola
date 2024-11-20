import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <div
      id="kontak"
      className="flex items-center justify-center min-h-screen py-10 mt-8"
    >
      <section
        id="kontak"
        className="flex flex-col w-full max-w-screen-xl px-4 space-y-8 md:flex-row md:space-y-0 md:space-x-8"
      >
        <ContactInfo />
        <ContactForm />
      </section>
    </div>
  );
};

export default ContactSection;
