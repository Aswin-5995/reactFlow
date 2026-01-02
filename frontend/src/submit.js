// SubmitButton.js
import { useState } from "react";
import { useReactFlow } from "reactflow";
import "./styles.css";
import { useEffect } from "react";
import GraphSummaryCard from "./components/graphSummaryCard";

export const SubmitButton = () => {
  const reactFlowInstance = useReactFlow();
  const [graphData, setGraphData] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    const nodes = reactFlowInstance.getNodes();
    const edges = reactFlowInstance.getEdges();

    try {
      const response = await fetch("http://localhost:8000/pipelines/parse", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nodes, edges }),
      });

      const data = await response.json();
      setGraphData(data);
      setError(null);
    } catch (err) {
      console.error(err);
      setError("Error submitting pipeline");
      setGraphData(null);
    }
  };

  useEffect(() => {
    if (graphData) {
      const timer = setTimeout(() => setGraphData(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [graphData]);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 10 }}>
        <button onClick={handleSubmit}>Submit</button>
      </div>

    {graphData && (
  <div className="graph-popup">
    <GraphSummaryCard
      data={graphData}
      onClose={() => setGraphData(null)}
    />
  </div>
)}


      {error && (
        <p style={{ color: "red", textAlign: "center", marginTop: 10 }}>
          {error}
        </p>
      )}
    </>
  );
};
