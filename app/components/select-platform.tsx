import React, { useState, useEffect, useRef } from "react";
import { FaGithub, FaYoutube, FaLinkedin } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

interface Option {
  value: string;
  label: string;
  icon: React.ReactNode;
}

const options: Option[] = [
  { value: "github", label: "GitHub", icon: <FaGithub /> },
  { value: "youtube", label: "YouTube", icon: <FaYoutube /> },
  { value: "linkedin", label: "LinkedIn", icon: <FaLinkedin /> },
];

interface CustomSelectProps {
  value: string;
  onChange: (value: string) => void;
  getValue: (value: string) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  value,
  onChange,
  getValue,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (option: Option) => {
    onChange(option.value);
    setIsOpen(false);
    getValue(option.value);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const selectedOption = options.find((option) => option.value === value);

  return (
    <div ref={dropdownRef} className="relative bg-white">
      <button
        type="button"
        className="w-full py-2 border rounded-md flex justify-between items-center"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {selectedOption ? (
          <span className="flex items-center gap-2">
            {selectedOption.icon}
            {selectedOption.label}
          </span>
        ) : (
          "Select Platform"
        )}
        <MdKeyboardArrowDown className="text-[#633CFF]" />
      </button>
      {isOpen && (
        <div className="absolute w-full border bg-white rounded-md mt-1 z-10">
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              className="w-full py-2 flex items-center gap-2 px-2 hover:bg-gray-100"
              onClick={() => handleSelect(option)}
            >
              {option.icon}
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
