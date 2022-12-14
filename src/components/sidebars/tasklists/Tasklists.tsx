import { useState } from "react";
import { Tasklist } from "../../../model";
import Item from "./Item";

type Props = {
  tasklists: Tasklist[];
  onTaskSelected: (id: number) => void;
};

export default function (props: Props) {
  const [selectedTasklist, setSelectedTasklist] = useState<number>();
  const handleTasklistSelection = (id: number) => {
    setSelectedTasklist(id);
    props.onTaskSelected(id);
  };
  const { tasklists } = props;
  return (
    <div>
      {tasklists.map((list) => (
        <Item
          id={list.id}
          isSelected={list.id === selectedTasklist}
          onItemClick={(key) => handleTasklistSelection(key)}
          value={list.name}
          key={list.id}
        />
      ))}
    </div>
  );
}
