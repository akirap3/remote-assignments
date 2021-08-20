import React from "react";

const ContentSection = (props) => {
  const arr = Array(4)
    .fill()
    .map((x, i) => i + 1);
  const content = arr.map((number) => (
    <div key={Math.random() * 100 + number} className="content">
      <h3>Content Box {number}</h3>
    </div>
  ));
  return <section className="content-section">{content}</section>;
};

export default ContentSection;
