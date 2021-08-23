import React from "react";
import uuid from "react-uuid";

const ContentSection = () => {
  const arr = Array(4)
    .fill()
    .map((x, i) => i + 1);
  const content = arr.map((number) => (
    <div key={uuid()} className="content">
      <h3>Content Box {number}</h3>
    </div>
  ));
  return <section className="content-section">{content}</section>;
};

export default ContentSection;
