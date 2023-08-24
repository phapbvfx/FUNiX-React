import React, { useState, useCallback, useMemo } from "react";

import DemoList from "./components/Demo/DemoList";
import Button from "./components/UI/Button/Button";

function Lab10() {
  const [listTitle, setListTitle] = useState("My List");

  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="lab10">
      <DemoList
        title={listTitle}
        items={listItems}
      />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
}

export default Lab10;
