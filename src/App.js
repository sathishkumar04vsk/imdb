import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import { NearMeOutlined } from "@mui/icons-material";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Movies />
    </div>
  );
}

export default App;

const Movies = () => {
  const movies = [
    {
      id: "100",
      name: "RRR",
      poster:
        "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
      rating: 8.8,
      summary:
        "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
      trailer: "https://www.youtube.com/embed/f_vbAtFSEc0",
      like: 0,
      dislike: 0,
    },
    {
      id: "101",
      name: "Iron man 2 ",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
      rating: 7,
      summary:
        "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
      trailer: "https://www.youtube.com/embed/wKtcmiifycU",
      like: 0,
      dislike: 0,
    },
  ];

  return (
    <div className="movie-list">
      {movies.map(({ name, poster, rating, summary, like, dislike }, index) => (
        <Card className="card">
          <img className="poster" src={poster} />
          <CardContent>
            <div className="card-title">
              <h1 className="title">{name}</h1>
              <h2>{rating}</h2>
            </div>
            <p className="summary">{summary}</p>
          </CardContent>
          <CardActions>
            <IconButton>{like}</IconButton>
            <IconButton>{dislike}</IconButton>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};
