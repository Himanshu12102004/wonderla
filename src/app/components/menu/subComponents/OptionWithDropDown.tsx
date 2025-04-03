import { useState } from "react";

type PropType = {
  data: {
    imageSrc: string;
    name: string;
    description: string;
    onExpand: React.ReactNode;
    height: number;
  };
};
const OptionWithDropDown: React.FC<PropType> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex-1 cursor-pointer">
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="flex items-center gap-3 justify-between"
      >
        <div className="flex items-center gap-3">
          <div>
            <img className="h-7" src={data.imageSrc} alt="" />
          </div>
          <div>
            <div className="text-xl font-normal mb-1">{data.name}</div>
            <div className="text-xs text-gray-600">{data.description}</div>
          </div>
        </div>
        <svg
          height="24"
          width="24"
          className=""
          viewBox="0 0 24 24"
          fill="none"
          stroke="#334DCF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9L12 15L18 9"></path>
        </svg>
      </div>
      <div
        style={{
          height: isOpen ? `${data.height}px` : 0,
        }}
        className={` overflow-hidden transform transition-all ease-out duration-350`}
      >
        {data.onExpand}
      </div>
      <div>
        <div className="h-4"></div>
        <hr className="border-t-1 border-gray-200" />
        <div className="h-4"></div>
      </div>
    </div>
  );
};
export default OptionWithDropDown