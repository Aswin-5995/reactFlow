import { useEffect, useRef, useState } from "react";
import { BaseNode } from "./baseNode";

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || "{{value}}");
  const [variables, setVariables] = useState([]);
  const textareaRef = useRef(null);


  useEffect(() => {
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height =
      textareaRef.current.scrollHeight + "px";
  }, [text]);

 
  useEffect(() => {
    const matches = [...text.matchAll(/{{\s*([a-zA-Z_$][\w$]*)\s*}}/g)];
    const vars = [...new Set(matches.map((m) => m[1]))];
    setVariables(vars);
  }, [text]);


  const inputHandles = variables.length > 0 ? variables.map((v) => `${id}-${v}`) : [`${id}-input`];

  return (
    <BaseNode
      title="Text"
      inputs={inputHandles}
      outputs={[`${id}-output`]}
      width={300}
    >
      <textarea
        ref={textareaRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ width: "100%", resize: "none" }}
      />
    </BaseNode>
  );
};
