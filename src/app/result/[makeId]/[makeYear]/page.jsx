"use client";

import React, { useEffect, useState } from "react";

function Page({ params }) {
  const { makeId, makeYear } = React.use(params);

  const [data, setData] = useState(null);
  const [make, setMake] = useState(null);
  let key

  useEffect(() => {
    if (makeId && makeYear) {
      fetch(
        `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${makeYear}?format=json`
      )
        .then((response) => response.json())
        .then((data) => {
          setMake(data.Results[0].Make_Name);
          setData(data);
        });
    }
  }, [makeId, makeYear]);

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold">
       Vehicles from {make} in {makeYear}
      </h1>
      {data ? (
        data.Results.map((item) => (
          <div key={key+=makeYear} className="flex flex-col items-start ml-28 mr-28 border-2 border-black rounded-lg p-4">
            <p>{item.Model_Name}</p>
          </div>
        ))
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default Page;
