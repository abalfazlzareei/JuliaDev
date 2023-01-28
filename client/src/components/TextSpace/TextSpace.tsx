import React from 'react'
import { NodeResizeControl } from '@reactflow/node-resizer';
import '@reactflow/node-resizer/dist/style.css';


interface Props {
  data: {
    label: string;
  };
}

const controlStyle = {
  background: 'transparent',
  border: 'none',
};


function TextSpace() {
  return (
    <>     <NodeResizeControl style={controlStyle} minWidth={100} minHeight={50}>
    </NodeResizeControl>
    <textarea
    className='h-full w-full flex justify-start items-start font-mono text-sm p-2 '

  />
  </>
  )
}

export default TextSpace