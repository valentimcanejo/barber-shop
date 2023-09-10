import { FirstSectionCardProps, firstSectionCards } from "@/constants/photos";
import SectionSubtitle from "../SectionSubtitle";
import SectionTitle from "../SectionTitle";
import Card from "./_components/Card";

const FirstSection = () => {
  return (
    <section
      className={`p-8 bg-slate-800 items-center flex w-full md:h-full relative md:py-32`}
    >
      <div
        className="bg-cover top-0 left-0 right-0 bottom-0 brightness-50 bg-no-repeat absolute"
        style={{ backgroundImage: "url('/images/image 9.jpg')" }}
      />
      <div className="w-full flex md:w-10/12 mx-auto gap-8 flex-col">
        <div className="flex flex-col text-center gap-4">
          <SectionTitle size="lg" text="Alexandre Barber Shop" />
          <SectionSubtitle size="lg" text="Cabelereiro profissional" />
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 z-10">
          {firstSectionCards?.map((cardProps: FirstSectionCardProps) => (
            <Card
              key={cardProps.title}
              iconUrl={cardProps.iconUrl}
              title={cardProps.title}
              subtitle={cardProps.subtitle}
              imageUrl={cardProps.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
