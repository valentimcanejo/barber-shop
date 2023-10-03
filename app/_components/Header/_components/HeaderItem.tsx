interface HeaderItemProps {
  text: string;
}

const HeaderItem = ({ text }: HeaderItemProps) => {
  return (
    <div className="mx-4 rounded-lg mt-2">
      <span>{text}</span>
    </div>
  );
};

export default HeaderItem;
