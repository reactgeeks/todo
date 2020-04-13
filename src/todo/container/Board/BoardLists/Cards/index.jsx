import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import EditCard from "./EditCard";

const Cards = (props) => {
  return (
    <div>
      <div className="card">
        <span className="card-edit-button">
          <FontAwesomeIcon icon={faPen} />
        </span>
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
