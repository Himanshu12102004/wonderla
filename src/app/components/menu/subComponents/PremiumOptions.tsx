type PropType = {
  data: {
    bgColor: string;
    imageSrc: string;
    description: string;
    name: string;
    textColor: string;
  };
};
const PremiumOptions: React.FC<PropType> = ({ data }) => {
  return (
    <div
      className={`flex-1 p-2 rounded-2xl`}
      style={{ backgroundColor: data.bgColor, color: data.textColor }}
    >
      <div className="flex items-center gap-4">
        <div>
          <img className="h-10" src={data.imageSrc} alt="" />
        </div>
        <div>
          <div className="text-xl font-normal mb-1">{data.name}</div>
          <div
            className="text-xs text-gray-600"
            style={{
              color: data.textColor.includes('255') ? data.textColor : '',
            }}
          >
            {data.description}
          </div>
        </div>
      </div>
    </div>
  );
};
export default PremiumOptions