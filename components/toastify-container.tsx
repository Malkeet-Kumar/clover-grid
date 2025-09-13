"use client";

import { ToastContainer, Bounce } from "react-toastify";

export const ToastifyContainer = () => {
  return <ToastContainer stacked limit={5} transition={Bounce} />;
};
