import ContactForm from "./_components/ContactForm";

const SecondSection = () => {
  return (
    <section
      className={`py-32 px-4 md:w-10/12 mx-auto bg-white items-center flex w-full flex-col md:h-full relative`}
    >
      <ContactForm />
    </section>
  );
};

export default SecondSection;
