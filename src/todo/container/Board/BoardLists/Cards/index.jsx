import React from "react";
import PropTypes from "prop-types";
import EditCard from "./EditCard";

const Cards = props => {
  return (
    <div>
      <div className="card">
        <span className="card-edit-button">Edit</span>
        <p>content for card one</p>
      </div>
      <EditCard />
      <div className="card">
        <p>content for card one</p>
      </div>
    </div>
  );
};

Cards.propTypes = {};

export default Cards;
