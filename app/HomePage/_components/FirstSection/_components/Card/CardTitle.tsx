interface CardTitle {
  text: string;
}

const CardTitle = ({ text }: CardTitle) => {
  return <h1 className="text-4xl">{text}</h1>;
};

export default CardTitle;
