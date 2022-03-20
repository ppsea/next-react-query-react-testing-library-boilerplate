import * as React from "react";
import { ReactQueryDevtools } from "react-query/devtools";
import { useRepoData } from "@src/hooks";

export function Example() {
  const { isLoading, error, data, isFetching } = useRepoData();

  if (isLoading) return <div>Loading...</div>;

  if (error instanceof Error)
    return <div>An error has occurred: {error.message}</div>;

  return (
    <div>
      <h1>name: {data?.name}</h1>
      <div>{isFetching ? "Updating..." : ""}</div>
      <ReactQueryDevtools initialIsOpen />
    </div>
  );
}