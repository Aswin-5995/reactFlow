import { BaseNode } from "./baseNode";

export const ConditionNode = ({ id }) => (
  <BaseNode
    title="Condition"
    inputs={[`${id}-cond`]}
    outputs={[`${id}-true`, `${id}-false`]}
  >
    <span>If / Else</span>
  </BaseNode>
);
