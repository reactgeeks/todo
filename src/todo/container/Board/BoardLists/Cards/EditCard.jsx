import React from "react";
import PropTypes from "prop-types";

const EditCard = props => {
  return (
    <div>
      <div className="card-description">
        <textarea name="description" rows="4" cols="35">
          Enter description here...
        </textarea>
        <div>
          <button type="button">Save</button>
          <button type="button">Delete</button>
          <span className="add-card-cancel">X</span>
        </div>
      </div>
    </div>
  );
};

EditCard.propTypes = {};

export default EditCard;
