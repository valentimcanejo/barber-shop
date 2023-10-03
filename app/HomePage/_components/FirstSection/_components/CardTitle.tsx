interface CardTitle {
  text: string;
}

const CardTitle = ({ text }: CardTitle) => {
  return <h1 className="text-2xl font-semibold">{text}</h1>;
};

export default CardTitle;
