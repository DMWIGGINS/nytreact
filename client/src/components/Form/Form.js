import React from "react";
import "./Form.css";

const Form = () =>

<form className="form-horizontal">

<div className="form-group">
      <label for="topic" class="col-lg-2 control-label">Topic</label>
      <div className="col-lg-10">
        <input className="form-control" rows="3" id="text"></input>
      </div>
    </div>
  
    <div className="form-group">

      <label for="inputStartDate" class="col-lg-2 control-label">Start Date</label>
      <div className="col-lg-10">
        <input type="text" className="form-control" id="inputStartDate" placeholder="YYYYMMDD">
      </input>
      </div>
    </div>

    <div className="form-group">
      <label for="inputEndDate" class="col-lg-2 control-label">End Date</label>
      <div class="col-lg-10">
        <input type="text" class="form-control" id="inputEndDate" placeholder="YYYYMMDD">
        </input>
    </div>
      </div>
  
    <div className="form-group">
      <div className="col-lg-10 col-lg-offset-2">
        <button type="submit" className="btn btn-primary">Submit</button>
      </div>
    </div>
  
</form>;

export default Form;