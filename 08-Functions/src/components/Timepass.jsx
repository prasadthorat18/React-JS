import React from "react";

const Timepass = () => {
  const PageScrolling = (elem)=> {
    console.log("page scrolling at spped", elem);
  }

  return (
    <div
      onWheel={function (elem) {
        PageScrolling(elem.deltaY);
      }}
    >
      <div className="Page1">Page 1</div>
      <div className="Page2">Page 2</div>
      <div className="Page3">Page 3</div>
    </div>
  );
};

export default Timepass;
