interface Props {
  img: string;
  text: string;
}

const VitaminCard = ({ img, text }: Props) => {
  return (
    <div className="border-radius-lg p-1 pb-3 bg-white vitamin-card mb-[30px] group">
      <div>
        <div className="w-full overflow-hidden rounded-tl-[35px] rounded ">
          <img
            src={img}
            alt="vitamin"
            className="w-full duration-200 group-hover:scale-110"
          />
        </div>
        <div className="mt-4 text-center">
          <p className="text-base text-lightGreen font-bold">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default VitaminCard;
