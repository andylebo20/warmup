import React, { CSSProperties, useEffect, useState } from "react";

type Props = {
  imgUrls: string[];
  name: string;
  onLike: () => void;
  onNext: () => void;
};

export const Person = ({ imgUrls, name, onLike, onNext }: Props) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [name]);

  return (
    <div
      style={
        {
          ...styles.container,
          backgroundImage: `url(${imgUrls[currentImageIndex]})`,
          backgroundSize: "cover",
        } as CSSProperties
      }
      onClick={() =>
        setCurrentImageIndex(
          currentImageIndex === imgUrls.length - 1
            ? currentImageIndex
            : currentImageIndex + 1
        )
      }
    >
      <label style={{ fontSize: 40, color: "white", fontWeight: "bold" }}>
        {name}
      </label>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 20,
          width: "100%",
          paddingBottom: 30,
        }}
      >
        <button style={{ ...styles.button, marginLeft: 30 }} onClick={onLike}>
          Like
        </button>
        <button style={{ ...styles.button, marginRight: 30 }} onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: 300,
    height: 600,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  button: {
    outline: "none",
    border: "none",
    color: "black",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 15,
    cursor: "pointer",
  },
};
