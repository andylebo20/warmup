import React, { CSSProperties, useState } from "react";
import "./App.css";
import { Person } from "./Person";
import { ProfileScreen } from "./ProfileScreen";
import { EditScreen } from "./EditScreen";
import Swal from "sweetalert2";

const people = [
  {
    imgUrls: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Yekaterina_Volkova.jpg/300px-Yekaterina_Volkova.jpg",
      "https://wsucougars.com/images/2013/7/7/JYJASNBISFTADKY.20130707171911.jpg",
    ],
    name: "Jessica",
  },
  {
    imgUrls: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsB1BMDaN4VuigUwJQTixwE0MZW_98v8NKJw&usqp=CAU",
      "https://www.dummies.com/wp-content/uploads/285015.image0.jpg",
    ],
    name: "Sophia",
  },
  {
    imgUrls: [
      "https://womenchurchsuitsstore.files.wordpress.com/2012/09/8374.jpg?w=584",
      "https://www.bwillcreative.com/wp-content/uploads/2020/05/portrait-orientation-for-landscape-photography.jpg",
    ],
    name: "Kayla",
  },
  {
    imgUrls: [
      "https://whitecapsproducts.com/images/product_images/popup_images/rip-curl-dawn-patrol-shorty-neoprenanzug-2mm-back-zip-damen-schwarz-weiss-2.jpg",
      "https://wallpapercave.com/wp/wp4937501.jpg",
    ],
    name: "Allison",
  },
];

function App() {
  const [isProfileScreenOpen, setIsProfileScreenOpen] =
    useState<boolean>(false);
  const [currentPersonIndex, setCurrentPersonIndex] = useState<number>(0);
  const [editScreen, setEditScreen] = useState<boolean>(false);
  return isProfileScreenOpen ? (
    <ProfileScreen goBack={() => setIsProfileScreenOpen(false)} goEdit={() => {setEditScreen(true); setIsProfileScreenOpen(false)}}/>
  ) : (
      editScreen ? (
        <EditScreen goBack={() => setEditScreen(false)} />
      ):
    
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
              onLike={() => {
                if (currentPersonIndex === 1) {
                  Swal.fire({
                    title: "You've Matched!",
                    text: `You just matched with Sophia!`,
                    icon: "success",
                  });
                }
                setCurrentPersonIndex(currentPersonIndex + 1);
              }}
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
