import React from "react";
import PropTypes from "prop-types";

const AddCard = props => {
  return (
    <div>
      <div className="card-description">
        <textarea name="description" rows="4" cols="35">
          Enter description here...
        </textarea>
        <div>
          <button type="button">Add Card</button>{" "}
          <span className="add-card-cancel">X</span>
        </div>
      </div>
    </div>
  );
};

AddCard.propTypes = {};

export default AddCard;
