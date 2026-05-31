import React from "react";

const FormInput = ({
  label,
  value,
  onChange,
  placeholder,
  name,
  type,
  error,
}) => {
  return (
    <div className="py-2">
      <label className="block text-sm font-medium text-slate-700">
        {label}
      </label>
      <input
        className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
      />
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
};

export default FormInput;
