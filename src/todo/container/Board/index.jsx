import React from "react";
import PropTypes from "prop-types";
import BoardLists from "./BoardLists";
import "./index.css";

const Board = props => {
  return (
    <div>
      <div className="boards">
        <BoardLists />
      </div>
      <div className="boards">
        <div className="boards-list">
          <div className="board-title">
            board title2
            <span className="board-delete">Delete</span>
          </div>
          <div className="card">
            <p>content for card two</p>
          </div>
          <div className="card">
            <p>content for card two</p>
          </div>
          <div className="card">
            <p>content for card two</p>
          </div>
          <div className="card">
            <p>content for card two</p>
          </div>
          <div className="card">
            <p>content for card two</p>
          </div>
          <div className="card">
            <p>content for card two</p>
          </div>
          <div className="add-new-card">+ Add new card</div>
        </div>
      </div>
    </div>
  );
};

Board.propTypes = {};

export default Board;
