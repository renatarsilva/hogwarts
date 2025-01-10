import { FaHatWizard } from "react-icons/fa";
import { loading } from "../assets";

const Generating = ({ className }) => {
  return (
    <div
      className={`flex gap-2 items-center h-[3.5rem] px-8
    bg-n-8/80 rounded-[1.7rem] text-color-6 ${className || ""} text-base`}
    >
      <FaHatWizard className="text-hogwarts-gold animate-pulse text-xl" />
      Sorting Hat is Thinking...
    </div>
  );
};

export default Generating;
