import React from 'react'
import { memo } from 'react';
import { Handle, Position } from 'reactflow';

import { NodeResizeControl } from '@reactflow/node-resizer';
import '@reactflow/node-resizer/dist/style.css';
import EditableText from './EditableText';



interface Props {
  data: {
    label: string;
  };
}

const controlStyle = {
  background: 'transparent',
  border: 'none',
};

function DayPlanner({data}:Props) {
  return (
    <>
    <NodeResizeControl style={controlStyle} minWidth={100} minHeight={50}>
    </NodeResizeControl>

    <div className='flex flex-col max-w-xs'>
        <div className='text-[10px]'>{data.label}</div>

        <div className='flex flex-row w-full'>
            <div className='w-2/6 text-[10px] flex justify-center items-center'> time </div>
            <div className='w-2/6  text-[10px] flex justify-center items-center'> task </div>
            <div className='w-2/6  text-[10px] flex justify-center items-center'> play </div>
        </div>

        <div className='flex flex-row'>
            <div className='w-2/6 text-[10px] flex justify-center items-center'> <EditableText initialValue={"HHH"}/> </div>
            <div className='w-2/6  text-[10px] flex justify-center items-center'> <EditableText initialValue={"HHH"}/> </div>
            <div className='w-2/6  text-[10px] flex justify-center items-center'> <EditableText initialValue={"HHH"}/> </div>
        </div>


    </div>
  </>
  )
}

export default DayPlanner