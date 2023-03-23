interface Props {
  text: string;
}

const UsefulPropertiesCard = ({ text }: Props) => {
  return (
    <div
      className="w-full rounded-full sm:p-4 px-4 pt-8 pb-4 sm:mb-3 mb-10 relative"
      style={{
        background: "rgba(255, 255, 255, 0.1)",
      }}
    >
      <div className="sm:flex sm:items-center">
        <div className="min-w-[40px] max-w-[40px] hidden sm:block">
          <img src="/icons/check-icon.png" alt="icon" />
        </div>
        <div className="min-w-[40px] max-w-[40px] sm:hidden absolute left-1/2 -translate-x-1/2 -top-5">
          <img src="/icons/check-icon.png" alt="icon" />
        </div>
        <div className="sm:ml-5 ml-0">
          <p className="text-base font-bold text-white sm:text-left text-center">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UsefulPropertiesCard;
