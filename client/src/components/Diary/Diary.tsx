import React, { useState } from 'react'
import { memo } from 'react';
import { Handle, Position } from 'reactflow';

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

function Diary({data}:Props) {
  const [showDiary, setShowDiary] = useState(false);
  const [wordCount, setWordCount] = useState(0);

  return (
    <>
    <NodeResizeControl style={controlStyle} minWidth={100} minHeight={50}>
    </NodeResizeControl>



    {showDiary && (
        <div
          className='absolute w-[1000px] h-[500px] -top-[450px] -left-[900px] '
          onClick={() => setShowDiary(false)}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "80%",
              height: "80%",
              background: "white",
              border: "1px solid black",
            }}
            onClick={e => e.stopPropagation()}
          >
            <textarea
              className='h-full w-full font-mono text-2xl p-2 '
              placeholder="Write your diary here"
              onChange={e => setWordCount(e.target.value.split(" ").length)}
            />
            <div className='font-mono text-sm pr-5  ' style={{ position: "absolute", bottom: "0", right: "0" }}>
              words: {wordCount}
            </div>
            <button className='pl-2 hover:bg-gray-100 text-gray-400 rounded-full text-sm'
            style={{ position: "absolute", bottom: "0", left: "0" }}
                   >add to google calendar</button>


          </div>
        </div>
      )}
      <button className='flex items-center justify-center w-20 h-full hover:bg-gray-100' onClick={() => setShowDiary(!showDiary)}>Diary</button>




  </>
  )
}

export default Diary