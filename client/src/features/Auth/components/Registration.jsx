import React from "react";
import useRegistrationFormHandler from "../hook/useRegistrationFormHandler";
import FormInput from "../../../shared/components/FormInput";
import { useNavigate } from "react-router";
import Loading from "../../../shared/components/Loading";
import Error from "../../../shared/components/Error";
import Button from "../../../shared/components/Button";
import MyTagInput from "../../../shared/components/MyTagInput";
import { purposeOptions } from "../../../constant";

const Registration = () => {
  const navigate = useNavigate();

  const {
    isLoading: userRegistrationLoading,
    formData,
    handleChange,
    handleTagInputChange,
    handleSubmit,
    fieldErrors,
    error: userRegistrationError,
    retry: userRegistrationErrorRetry,
  } = useRegistrationFormHandler(onSuccess);

  function onSuccess() {
    navigate("/app  ");
  }

  if (userRegistrationLoading)
    return (
      <section>
        <Loading message="Creating account, please wait..." />
      </section>
    );

  if (userRegistrationError)
    return (
      <section>
        <Error
          onRetry={userRegistrationErrorRetry}
          message={userRegistrationError}
        />
      </section>
    );

  return (
    <>
      <h2 className="font-semibold text-2xl py-3">Register yourself</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Name"
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Enter your full name"
          error={fieldErrors.fullName}
        />
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email address"
          error={fieldErrors.email}
        />
        <MyTagInput
          values={formData.purpose}
          onChange={(e) => handleTagInputChange(e, "purpose")}
          name="purpose"
          label="Purpose"
          whitelist={purposeOptions}
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Create a secure password"
          error={fieldErrors.password}
        />
        <FormInput
          label="Confirm password"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm the password"
          error={fieldErrors.confirmPassword}
        />
        <div className="flex justify-center">
          <Button variant="primary" className="my-2">
            Register
          </Button>
        </div>
      </form>
    </>
  );
};

export default Registration;
