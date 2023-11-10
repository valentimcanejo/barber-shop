import FirstSection from "./_components/FirstSection";
import SecondSection from "./_components/SecondSection";
import ContactForm from "./_components/SecondSection/_components/ContactForm";
import ThirdSection from "./_components/ThirdSection";

const HomePage = () => {
  return (
    <main className="flex flex-col h-full">
      {/* <FirstSection />
      <SecondSection /> */}
      <ContactForm />
      {/* <ThirdSection /> */}
    </main>
  );
};

export default HomePage;
