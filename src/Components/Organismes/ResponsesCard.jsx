import ResponseOne from "../Molecules/ResponseOne";
import React from 'react';

export default function ResponsesCard({ data, handleOptionChange }) {
  console.log("Response Card recieve this documentData.questions:", data);
  return (
    <div>
      {data &&
        data.map((d) => (
          <ResponseOne
            key={d.id}
            questions={d.id}
            title={d.title}
            options={d.options}
            handleOptionChange={handleOptionChange}
            data={data}
          />
        ))}
    </div>
  );
}

