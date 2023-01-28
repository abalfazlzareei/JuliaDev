import React, { useCallback, useRef, useState } from 'react'
import ReactFlow, {

  Background,
  BackgroundVariant,
  Controls,
  useEdgesState,
  useNodesState,
} from 'reactflow';

import 'reactflow/dist/style.css';
import Daddy from '../components/Daddy/Daddy';
import DayPlanner from '../components/DayPlanner/DayPlanner';
import { v4 as uuidv4 } from 'uuid';

const nodeTypes = {
  DayPlanner
};





function Home() {
  const reactFlowWrapper:any = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [contextMenuVisible, setContextMenuVisible] = React.useState(false);
  const [contextMenuPosition, setContextMenuPosition] = React.useState({ x: 0, y: 0 });

  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    setContextMenuPosition({ x: event.clientX, y: event.clientY });
    setContextMenuVisible(true);
  };

  const handleClick = (event: MouseEvent) => {
    setContextMenuVisible(false);
};

React.useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
        document.removeEventListener('click', handleClick);
    };
}, []);

  const ContextMenu: React.FC = () => {
    return contextMenuVisible ? (
      <div style={{ position: 'absolute', left: contextMenuPosition.x, top: contextMenuPosition.y }}
      >
      <Daddy/>
      </div>
    ) : null;
  };



  const onDragOver = useCallback((event:any) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event:any) => {
      event.preventDefault();
      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer
        .getData("application/reactflow")
      console.log(type)




      const newNode = {
          id: uuidv4(),
          type: `${type}`,
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
        };

      setNodes((nds:any) => nds.concat(newNode));


    },
    [
      reactFlowInstance
    ]
  );
  return (
    <div className='w-full h-screen'
    ref={reactFlowWrapper}
    onContextMenu={handleContextMenu}>

      <ReactFlow
            minZoom={0.01}
            maxZoom={5}
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onDrop={onDrop}
            onDragOver={onDragOver}
            nodeTypes={nodeTypes}
            fitView
      >
      <Background variant={BackgroundVariant.Dots} />
      <Controls />
    </ReactFlow>
    <ContextMenu/>
    </div>
  )
}

export default Home