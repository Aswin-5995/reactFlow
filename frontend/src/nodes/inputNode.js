import { useState } from "react";
import { BaseNode } from "./baseNode";

export const InputNode = ({ id, data }) => {
  const [name, setName] = useState(data?.inputName || "input");

  return (
    <BaseNode title="Input" outputs={[`${id}-value`]}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ width: "100%" }}
      />
    </BaseNode>
  );
};
