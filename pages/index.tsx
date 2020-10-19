import React from "react";
import { Employee } from "../components/Employee";
import { data } from "../src/data";

type IndexProps = {
  data: any;
};

export default function Index({ data }: IndexProps) {
  console.log(data);
  const x = data?.map((employee, key) => (
    <Employee key={key} employee={employee} />
  ));

  return <>{x}</>;
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  // const res = await fetch("http://dummy.restapiexample.com/api/v1/employees");
  // const { data } = await res.json();
  // Pass data to the page via props
  return { props: { data } };
}
