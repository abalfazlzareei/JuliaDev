import Calendar from "react-calendar";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import { NodeResizeControl } from "@reactflow/node-resizer";
import "@reactflow/node-resizer/dist/style.css";

const controlStyle = {
  background: "transparent",
  border: "none",
};

function CalendarComponent() {
  const [value, onChange] = useState(new Date());
  return (
    <>
      <NodeResizeControl
        style={controlStyle}
        minWidth={350}
        minHeight={320}
      ></NodeResizeControl>
      <Calendar
        locale="en"
        maxDetail="month"
        // selectRange={true}
        activeStartDate={new Date(2023, 0, 1)}
        onChange={onChange}
        value={value}
      />
    </>
  );
}

export default CalendarComponent