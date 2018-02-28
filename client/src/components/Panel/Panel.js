import React from "react";
import "./Panel.css";

const Panel = ({children}) => 

<div className="infopanel">
<div className="panel panel-info">
  <div className="panel-heading">
    <h3 className="panel-title">Panel default</h3>
  </div>
  <div className="panel-body">
    {children}
  </div>
 </div>
</div>;

export default Panel;


