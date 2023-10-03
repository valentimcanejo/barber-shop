import FirstSection from "./_components/FirstSection";
import SecondSection from "./_components/SecondSection";
import ThirdSection from "./_components/ThirdSection";

const HomePage = () => {
  return (
    <main className="flex flex-col h-full">
      <FirstSection />
      <SecondSection />
      {/* <ThirdSection /> */}
    </main>
  );
};

export default HomePage;
