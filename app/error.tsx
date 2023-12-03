"use client";
import EmptyState from "./components/EmptyState";
import { useEffect } from "react";

interface ErrorProps {
  error: Error;
}

const Error: React.FC<ErrorProps> = ({ error }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return <EmptyState title="Oops" subtitle="Something went wrong." />;
};

export default Error;
