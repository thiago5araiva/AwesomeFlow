import React, { useCallback, useState, useEffect } from "react";
import { Handle, Node, Position } from "react-flow-renderer";

const handleStyle = { left: 10 };

const TextNodeComponent = ({ data, onNodesChange }: any): JSX.Element => {
  const [value, setValue] = useState<string>("");
  const [name, setName] = useState<string>("");

  const onChange = useCallback((evt: React.SyntheticEvent): void => {
    const target = evt.target as HTMLInputElement;
    setValue(target.value);
  }, []);
  console.log(data);

  useEffect(() => {
    setName(data.label);
  }, []);

  return (
    <div className="text-updater-node">
      <Handle type="target" position={Position.Top} />
      <div>
        <label htmlFor="text">{name}</label>
        <input
          id="text"
          name="text"
          onChange={(event) => onChange(event)}
          onBlur={() => setName(value)}
        />
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        id="a"
        style={handleStyle}
      />
      <Handle type="source" position={Position.Bottom} id="b" />
    </div>
  );
};

export default TextNodeComponent;
