import { useState, useEffect } from "react";
import { setLoaderHandler } from "../services/loaderService";

export const LoaderProvider = ({ children }: any) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoaderHandler(setLoading);
  }, []);

  return (
    <>
      {loading && (
        <div className="full-loader">
          <div className="spinner"></div>
        </div>
      )}
      {children}
    </>
  );
};