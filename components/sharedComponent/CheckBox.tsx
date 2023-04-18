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
  return (
    <label className={isChecked ? "checkBox_active" : "checkBox"} htmlFor={id}>
      <span className="checkBox_Inner">
        <TiTick className="text-white cursor-pointer checkBox-Icon" />
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
