import React, { useState } from "react";

function PasswordInput({ value, onChange, placeholder }) {
//   const [isShowPassword, setIsShowPassword] = useState(false);

//   const toggleShowPassword = () => {
//     setIsShowPassword(!isShowPassword);
//   };

  return (
    <div className="bg-white w-full rounded-full">
      <input
        type={"password"}
        className="rounded-full py-1.5 px-5 text-primary w-full"
        placeholder={placeholder || "Password"}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default PasswordInput;
