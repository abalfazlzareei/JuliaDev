import React from 'react'
import ReactFlow, {
  MiniMap,
  Background,
  BackgroundVariant,
  Controls,

  Edge,
} from 'reactflow';

import 'reactflow/dist/style.css';

import DayPlanner from '../components/DayPlanner/DayPlanner';


const nodeTypes = {
  DayPlanner
};

const initialNodes = [

  {
    id: '1',
    type: 'DayPlanner',
    data: { label: 'DayPlanner ' },
    position: { x: 150, y: 150 },
    style: {
      background: 'white',
      fontSize: 12,
      border: '1px solid black',
      padding: 5,
      borderRadius: 5,
      height: 200,
    },
  },
];

const initialEdges:Edge[] = [];


function Home() {
  return (
    <div className='w-full h-screen'>

      <ReactFlow
            defaultNodes={initialNodes}
            defaultEdges={initialEdges}
            minZoom={0.2}
            maxZoom={4}
            fitView
            nodeTypes={nodeTypes}
    >
      <Background variant={BackgroundVariant.Dots} />
      <Controls />
    </ReactFlow>
    End
    </div>
  )
}

export default Home