import React, { useState } from "react";

function PasswordInput({ value, onChange, placeholder }) {
//   const [isShowPassword, setIsShowPassword] = useState(false);

//   const toggleShowPassword = () => {
//     setIsShowPassword(!isShowPassword);
//   };

  return (
    <div className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full">
      <input
        type={"password"}
        className="w-full bg-gray-200 focus:outline-none"
        placeholder={placeholder || "Password"}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default PasswordInput;
