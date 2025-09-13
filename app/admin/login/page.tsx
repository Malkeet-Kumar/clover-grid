"use client";

import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button"; // optional, you can use normal button
import { Input } from "@/components/ui/input";
import { useStore } from "@/hooks";

// Validation Schema
const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password too short")
    .required("Password is required"),
});

const LoginPage = () => {
  const router = useRouter();
  const { auth } = useStore();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">
          Login to Your Account
        </h2>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={(values) => auth.login(values)}
        >
          {({ isSubmitting, values, handleChange, handleBlur }) => (
            <Form className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <Input
                  name="email"
                  placeholder="Email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-xs text-red-500 mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <Input
                  type="password"
                  name="password"
                  placeholder="********"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-xs text-red-500 mt-1"
                />
              </div>

              <Button
                type="submit"
                size={"lg"}
                className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md"
                disabled={isSubmitting || auth.authState.isLoading}
              >
                {isSubmitting || auth.authState.isLoading
                  ? "Logging in..."
                  : "Login"}
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginPage;
