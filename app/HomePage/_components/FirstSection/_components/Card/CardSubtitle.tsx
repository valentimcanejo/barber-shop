interface CardSubtitle {
  text: string;
}

const CardSubtitle = ({ text }: CardSubtitle) => {
  return <h3 className="text-lg">{text}</h3>;
};

export default CardSubtitle;
