import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { ReactFlowProvider } from 'reactflow';

function App() {
  return (
     <ReactFlowProvider>
      <PipelineToolbar />
      <PipelineUI />
    </ReactFlowProvider>
  );
}

export default App;
