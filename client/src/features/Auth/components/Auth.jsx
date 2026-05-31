import React, { useState } from "react";
import Registration from "./Registration";
import Login from "./Login";

const Auth = () => {
  const [isLoginForm, setIsLoginForm] = useState(false);

  const toggleForm = function () {
    setIsLoginForm((f) => !f);
  };
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-slate-50 px-4 py-10">
      <div className="w-full max-w-md">
        <div className="bg-white border border-slate-200 shadow-2xl rounded-[2rem] p-6 sm:p-8">
          <div className="mb-6 text-center">
            <div className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-sky-600 px-4 py-3 text-white shadow-lg">
              <span className="text-lg font-extrabold tracking-tight">
                Intern
              </span>
              <span className="ml-2 text-lg font-extrabold tracking-tight">
                Coll
              </span>
            </div>
            <p className="mt-4 text-sm text-slate-500">
              Find your next internship, connect with employers, and manage
              applications in one elegant dashboard.
            </p>
          </div>
          {isLoginForm ? <Login /> : <Registration />}
          <div className="mt-6 text-center text-sm text-slate-600">
            {isLoginForm ? (
              <p>
                Don&apos;t have an account yet?{" "}
                <button
                  type="button"
                  onClick={toggleForm}
                  className="font-semibold text-emerald-600 hover:text-emerald-700"
                >
                  Register here!
                </button>
              </p>
            ) : (
              <p>
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={toggleForm}
                  className="font-semibold text-emerald-600 hover:text-emerald-700"
                >
                  Login here!
                </button>
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Auth;
