import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import BoardLists from "./BoardLists";
import "./index.css";

const Board = (props) => {
  return (
    <div className="scrollbar-auto">
      <div className="boards">
        <BoardLists />
      </div>
      <div className="boards">
        <div className="boards-list">
          <div className="board-title">
            board title2
            <span className="board-delete">
              <FontAwesomeIcon icon={faTrash} />
            </span>
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
