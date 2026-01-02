import { BaseNode } from "./baseNode";

export const OutputNode = ({ id }) => {
  return (
    <BaseNode title="Output" inputs={[`${id}-value`]}>
      <span>Final Output</span>
    </BaseNode>
  );
};
