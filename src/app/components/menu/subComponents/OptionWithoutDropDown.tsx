type PropType = {
  data: {
    imageSrc: string;
    name: string;
    description: string;
  };
};

const OptionWithoutDropDown: React.FC<PropType> = ({ data }) => {
  return (
    <div className="flex-1 cursor-pointer">
      <div className="flex items-center gap-3">
        <div>
          <img className="h-7" src={data.imageSrc} alt="" />
        </div>
        <div>
          <div className="text-xl font-normal mb-1">{data.name}</div>
          <div className="text-xs text-gray-600">{data.description}</div>
        </div>
      </div>
      <div>
        <div className="h-4"></div>
        <hr className="border-t-1 border-gray-200" />
        <div className="h-4"></div>
      </div>
    </div>
  );
};
export default OptionWithoutDropDown