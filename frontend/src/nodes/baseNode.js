import { Handle, Position } from "reactflow";

export const BaseNode = ({
  title,
  inputs = [],
  outputs = [],
  children,
  width = 220
}) => {
  return (
    <div
      style={{
        width,
        minHeight: 80,
        padding: 10,
        borderRadius: 8,
        background: "#ffffff",
        border: "1px solid #ccc",
        boxShadow: "0 4px 8px rgba(0,0,0,0.08)",
        fontSize: 12
      }}
    >
      
      {inputs.map((input, index) => (
        <Handle
          key={input}
          type="target"
          position={Position.Left}
          id={input}
          style={{ top: `${((index + 1) * 100) / (inputs.length + 1)}%` }}
        />
      ))}

      
      <div style={{ fontWeight: "bold", marginBottom: 6 }}>
        {title}
      </div>

     
      <div>{children}</div>

      
      {outputs.map((output, index) => (
        <Handle
          key={output}
          type="source"
          position={Position.Right}
          id={output}
          style={{ top: `${((index + 1) * 100) / (outputs.length + 1)}%` }}
        />
      ))}
    </div>
  );
};
