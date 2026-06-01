import { useState } from "react";
import { createUserAPI } from "../services/services";

const useFormHandler = function (onSuccess) {
  const formInputs = {
    fullName: "",
    email: "",
    purpose: [],
    skills: "",
    password: "",
    confirmPassword: "",
  };

  const [formData, setFormData] = useState(formInputs);

  const [isLoading, setIsLoading] = useState(false);

  const [fieldErrors, setFieldErrors] = useState(formInputs);

  const [error, setError] = useState(null);

  const retry = function () {
    setFormData(formInputs);
    setError(null);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTagInputChange = (e, name) => {
    setFormData((data) => {
      return { ...data, [name]: JSON.parse(e.detail.value) };
    });
  };

  console.log(formData);

  const createUserHandler = async function () {
    try {
      setFieldErrors(formInputs);
      if (formData.password !== formData.confirmPassword)
        return setFieldErrors((errors) => {
          return {
            ...errors,
            confirmPassword: "Password not matching, please match the password",
          };
        });

      if (formData.fullName.length < 2)
        return setFieldErrors((errors) => {
          return { ...errors, fullName: "Please write correct name" };
        });

      setIsLoading(true);

      const response = await createUserAPI({
        fullName: formData.fullName,
        email: formData.email,
        purpose: formData.purpose[0].value,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      });

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.data));

      setFormData({
        fullName: "",
        email: "",
        password: "",
        phone: "",
        confirmPassword: "",
      });
      onSuccess();
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserHandler(formData);
  };

  return {
    isLoading,
    formData,
    setFormData,
    handleChange,
    handleSubmit,
    fieldErrors,
    error,
    retry,
    handleTagInputChange,
  };
};

export default useFormHandler;
