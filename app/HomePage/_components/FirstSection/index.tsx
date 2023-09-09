import SectionSubtitle from "../SectionSubtitle";
import SectionTitle from "../SectionTitle";
import Card from "./_components/Card";

const FirstSection = () => {
  return (
    <section
      className={`p-8 bg-slate-800 w-full h-full bg-cover bg-no-repeat`}
      style={{ backgroundImage: "url('/images/image 9.jpg')" }}
    >
      <div className="w-full md:w-10/12 mx-auto h-full flex flex-col">
        <div className="flex flex-col">
          <SectionTitle size="lg" text="Alexandre Barber Shop" />
          <SectionSubtitle size="lg" text="Cabelereiro profissional" />
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          <Card title="Título" subtitle="Subtítulo" />
          <Card title="Título" subtitle="Subtítulo" />
          <Card title="Título" subtitle="Subtítulo" />
          <Card title="Título" subtitle="Subtítulo" />
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
