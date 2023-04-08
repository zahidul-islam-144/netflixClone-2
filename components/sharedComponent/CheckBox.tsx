/* eslint-disable @next/next/no-img-element */
import React from "react";
import { TiTick } from "react-icons/ti";

interface ICheckboxProps {
  className?: string;
  id: string;
  label?: string;
  isChecked?: boolean;
  type: string;
  name: string;
  onChange?: (params: any) => any;
}
const CheckBox: React.FC<ICheckboxProps> = ({
  className,
  isChecked,
  id,
  label,
  name,
  type,
  onChange,
}: ICheckboxProps) => {
    console.log("💛submittedData:", isChecked);
  return (
    <label
      className={isChecked ?'checkBox_active':'checkBox'}
      htmlFor={id}
    >
      <span className="checkBox-Inner">
        <span className="checkBox-Icon">
         <TiTick className="text-white cursor-pointer"/>
        </span>
        <input
          checked={isChecked}
          id={id}
          name={label}
          type={type}
          value={label}
          onChange={onChange}
        />
      </span>
    </label>
  );
};

export default CheckBox;
