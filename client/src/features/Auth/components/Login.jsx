import React, { useState } from "react";
import FormInput from "../../../shared/components/FormInput";
import Loading from "../../../shared/components/Loading";
import Error from "../../../shared/components/Error";
import useLoginFormHandler from "../hook/useLoginFormHandler";

const Login = ({ onLogin }) => {
  const {
    handleSubmit,
    handleChange,
    formValues,
    loading: loginLoading,
    error,
    onRetry,
  } = useLoginFormHandler();

  if (error) return <Error message={error} onRetry={onRetry} />;

  if (loginLoading)
    return <Loading message="we are logging you, please wait..." />;

  return (
    <>
      <h2 className="font-semibold text-2xl py-3">Login to your account</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          placeholder="Enter your registered email"
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={formValues.password}
          onChange={handleChange}
          placeholder="Enter your password"
        />

        <div className="flex justify-center">
          <button
            type="submit"
            className="mt-4 w-full rounded-2xl bg-emerald-300 px-4 py-3 text-sm font-semibold text-slate-800 transition hover:bg-emerald-400"
          >
            Login
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
