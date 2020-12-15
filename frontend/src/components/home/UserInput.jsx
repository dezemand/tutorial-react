import React, {useState} from "react";
import styles from "./UserInput.scss";

export const UserInput = ({onSubmit}) => {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value !== "") {
      onSubmit(value);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          className={styles.input}
          placeholder="Enter a GitHub name..."
        />
        <button type="submit" className={styles.submit} />
      </form>
    </div>
  );
};
