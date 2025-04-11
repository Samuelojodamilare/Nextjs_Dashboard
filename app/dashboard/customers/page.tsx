import { fetchFilteredCustomers } from "@/app/lib/data";
import CustomersTable from "@/app/ui/customers/table";
import React from "react";

const page = async (props: { searchParams?: Promise<{ query?: string }> }) => {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  console.log("query", query);
  const customer = await fetchFilteredCustomers(query);
  return (
    <div>
      <CustomersTable customers={customer} />
    </div>
  );
};

export default page;
