import React from "react";

type Props = {
  goBack: () => void;
};

export const ProfileScreen = ({ goBack }: Props) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      paddingTop: 20,
    }}
  >
    <button
      style={{
        outline: "none",
        cursor: "pointer",
        border: "none",
        backgroundColor: "blue",
        color: "white",
        borderRadius: 8,
        marginBottom: 12,
        padding: 6,
      }}
      onClick={goBack}
    >
      Go back
    </button>
    <label style={{ fontSize: 23, paddingTop: 16, fontWeight: 600 }}>
      Cade McNamara
    </label>
    <label style={{ paddingTop: 15, paddingBottom: 8, fontWeight: 500 }}>
      Interests:
    </label>
    <label>1. Football</label>
    <label>2. Touchdowns</label>
    <label>3. Travel</label>
    <button
      style={{
        outline: "none",
        cursor: "pointer",
        border: "none",
        backgroundColor: "blue",
        color: "white",
        borderRadius: 8,
        marginTop: 12,
        padding: 6,
      }}
    >
      Share my profile
    </button>
  </div>
);
