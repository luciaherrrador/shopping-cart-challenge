import React from "react";
import PropTypes from "prop-types";

function Panel({ title, className = "", children }) {
  return (
    <section className={className}>
      <h1 className="main">{title}</h1>
      {children}
    </section>
  );
}

Panel.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string
};

export default Panel;
