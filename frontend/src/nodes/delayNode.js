import { BaseNode } from "./baseNode";

export const DelayNode = ({ id }) => (
  <BaseNode title="Delay" inputs={[`${id}-in`]} outputs={[`${id}-out`]}>
    <span>Delay Execution</span>
  </BaseNode>
);
