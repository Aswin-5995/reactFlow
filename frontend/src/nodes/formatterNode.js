import { BaseNode } from "./baseNode";

export const FormatterNode = ({ id }) => (
  <BaseNode title="Formatter" inputs={[`${id}-text`]} outputs={[`${id}-out`]}>
    <span>Format Text</span>
  </BaseNode>
);
