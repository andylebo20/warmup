import React from "react";

type Props = {
  goBack: () => void;
  goEdit: () => void;
};


export const ProfileScreen = ({ goBack, goEdit }: Props) => (
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
    <img src="https://a.espncdn.com/combiner/i?img=/i/headshots/college-football/players/full/4427455.png&w=350&h=254"/>
    <label style={{ fontSize: 23, paddingTop: 16, fontWeight: 600 }}>
      Cade McNamara
    </label>
    <label style={{ paddingTop: 15, paddingBottom: 8, fontWeight: 500 }}>
      Interests:
    </label>
    <label>1. Football!</label>
    <label>2. Eating new and exciting foods</label>
    <label>3. Traveling the world</label>
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
    <button
      style={{
        outline: "none",
        cursor: "pointer",
        border: "none",
        backgroundColor: "grey",
        color: "white",
        borderRadius: 8,
        marginTop: 12,
        padding: 6,
      }}
      onClick={goEdit}
    >
      Edit my profile
    </button>
  </div>
  
);
