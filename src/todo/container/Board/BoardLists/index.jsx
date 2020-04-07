import React from "react";
import PropTypes from "prop-types";
import Cards from "./Cards";
import AddCard from "./Cards/AddCard";

const BoardLists = props => {
  return (
    <div>
      <div className="boards-list">
        <div className="board-title">
          board title1
          <span className="board-delete">Delete</span>
        </div>

        <Cards />

        <AddCard />

        <div className="add-new-card">+ Add new card</div>
      </div>
    </div>
  );
};

BoardLists.propTypes = {};

export default BoardLists;
