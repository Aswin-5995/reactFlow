import { BaseNode } from "./baseNode";

export const APINode = ({ id }) => (
  <BaseNode title="API" inputs={[`${id}-req`]} outputs={[`${id}-res`]}>
    <span>REST API</span>
  </BaseNode>
);
