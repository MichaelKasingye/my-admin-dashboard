import React from "react";
import BodyTitle from "../Components/BodyTitle";
import DisplayTable from "../Components/Display-Table";
import { useRegistrationData } from "../hooks/useRegistrationData";
// import Cards from "../Components/Card";

function FeaturesPage() {
  // let infoData;
  const onSuccess = (data) => {
    // infoData = { data: data.data.data };
    console.log({ message: "success" });
  };
  const onError = (error) => {
    console.log({ error });
  };
  const { isLoading,data, isError, error } = useRegistrationData(onSuccess, onError);
  // console.log(data);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <>
      <BodyTitle title="Entries" />

      <div style={{ margin: "150px 0 20px 0" }}>
        <DisplayTable 
        data = {data}
        number="#" 
        column1 = "Contact"
        column2 = "Time Created"
        column3 = ""
        column4 = ""
        column5 = ""/>
      </div>
    </>
  );
}

export default FeaturesPage;
