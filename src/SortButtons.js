import React from "react";

const SortButtons = (props) => (
  <>
    <button onClick={() => props.onChangeSort("temperature")}>
      Sortera på temperatur
    </button>
    <button onClick={() => props.onChangeSort("date")}>
      Sortera på datum i fallande ordning
    </button>
  </>
);

export default SortButtons;