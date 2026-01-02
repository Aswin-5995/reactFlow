import { BaseNode } from "./baseNode";

export const MathNode = ({ id }) => (
  <BaseNode title="Math" inputs={[`${id}-a`, `${id}-b`]} outputs={[`${id}-out`]}>
    <span>Add / Multiply</span>
  </BaseNode>
);
