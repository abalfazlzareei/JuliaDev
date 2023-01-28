import * as React from 'react';


export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onDragStart = (event:any, nodeType:any) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
        <div className='flex flex-col w-20'>
          <div className='w-72 h-10 rounded-lg bg-white border-2 border-bg-black font-mono font-bold flex items-center justify-center' draggable="true" onClick={handleClose} onDragStart={(event)=>onDragStart(event, 'DayPlanner')}>
                 Day Planner
          </div>
          <div className='w-72 h-10 rounded-lg bg-white border-2 border-bg-black font-mono font-bold flex items-center justify-center'  draggable="true" onClick={handleClose} onDragStart={(event)=>onDragStart(event, 'DayPlanner')}>
                 Task List
          </div>
          <div className='w-72 h-10 rounded-lg bg-white border-2 border-bg-black font-mono font-bold flex items-center justify-center'  draggable="true" onClick={handleClose} onDragStart={(event)=>onDragStart(event, 'DayPlanner')}>
                 Timer
          </div>
          <div className='w-72 h-10 rounded-lg bg-white border-2 border-bg-black font-mono font-bold flex items-center justify-center'  draggable="true" onClick={handleClose} onDragStart={(event)=>onDragStart(event, 'Diary')}>
                 Diary
          </div>

        </div>

  );
}