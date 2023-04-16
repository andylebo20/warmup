import React, { CSSProperties, useState } from "react";
import "./App.css";
import { Person } from "./Person";
import { ProfileScreen } from "./ProfileScreen";

const people = [
  {
    imgUrls: [
      "https://i.insider.com/5d24eee5a17d6c19ad14874c?width=750&format=jpeg&auto=webp",
      "https://c4.wallpaperflare.com/wallpaper/335/280/913/portrait-display-earth-space-wallpaper-preview.jpg",
    ],
    name: "Jessica",
  },
  {
    imgUrls: [
      "https://www.bwillcreative.com/wp-content/uploads/2020/05/portrait-orientation-zion-national-park.jpg",
      "https://www.dummies.com/wp-content/uploads/285015.image0.jpg",
    ],
    name: "Sophia",
  },
  {
    imgUrls: [
      "https://c4.wallpaperflare.com/wallpaper/663/700/853/nature-landscape-portrait-display-hd-wallpaper-preview.jpg",
      "https://www.bwillcreative.com/wp-content/uploads/2020/05/portrait-orientation-for-landscape-photography.jpg",
    ],
    name: "Kayla",
  },
  {
    imgUrls: [
      "https://w0.peakpx.com/wallpaper/148/185/HD-wallpaper-nature-landscape-portrait-display-leaves-fallen-leaves-dirt-road-trees-forest-fall.jpg",
      "https://wallpapercave.com/wp/wp4937501.jpg",
    ],
    name: "Allison",
  },
];

function App() {
  const [isProfileScreenOpen, setIsProfileScreenOpen] =
    useState<boolean>(false);
  const [currentPersonIndex, setCurrentPersonIndex] = useState<number>(0);
  return isProfileScreenOpen ? (
    <ProfileScreen goBack={() => setIsProfileScreenOpen(false)} />
  ) : (
    <div style={styles.container}>
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
        onClick={() => setIsProfileScreenOpen(true)}
      >
        View my profile
      </button>
      {currentPersonIndex >= people.length ? (
        <label>No more people to swipe through. Check back later!</label>
      ) : (
        <Person
          imgUrls={people[currentPersonIndex].imgUrls}
          name={people[currentPersonIndex].name}
          onLike={() => setCurrentPersonIndex(currentPersonIndex + 1)}
          onNext={() => setCurrentPersonIndex(currentPersonIndex + 1)}
        />
      )}
    </div>
  );
}

const styles = {
  container: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  } as CSSProperties,
};

export default App;
