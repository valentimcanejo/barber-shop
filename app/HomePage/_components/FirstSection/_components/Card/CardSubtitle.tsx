interface CardSubtitle {
  text: string;
}

const CardSubtitle = ({ text }: CardSubtitle) => {
  return <h3>{text}</h3>;
};

export default CardSubtitle;
