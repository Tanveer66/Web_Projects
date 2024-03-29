import { useState } from "react";
import Button from "@mui/material/Button";
import "../../StyledSheets/HomePageCSS/Cards.css";
import { useNavigate } from "react-router-dom";

const Cards = () => {
  const Navigate = useNavigate();
  const [card, setCard] = useState([
    {
      id: 1,
      hostelName: "GB boys Hostel",
      img: "./img/hostel_1.jpg",
      dis: "feels like a home and Home away from home ",
      rooms: {
        room1: "./img/Rooms/room_1pic1.jpg",
        room2: "./img/Rooms/room_1pic2.jpg",
        room3:"./img/Rooms/room_1pic3.jpg",
        room4:"./img/Rooms/room_1pic4.jpg"
      },
    },
    {
      id: 2,
      hostelName: "Ali boys Hostel",
      img: "./img/hostel_2.jpg",
      dis: "Student Housing – Home away from home",
      rooms: {
        room1: "./img/Rooms/room_1pic1.jpg",
        room2: "./img/Rooms/room_1pic2.jpg",
        room3:"./img/Rooms/room_1pic3.jpg",
        room4:"./img/Rooms/room_1pic4.jpg"
      },
    },
    {
      id: 3,
      hostelName: "Marina Girls Hostel",
      img: "./img/hostel_3.jpg",
      dis: "For the scruffy & happy backpacker and Home away from home",
      rooms: {
        room1: "./img/Rooms/room_1pic1.jpg",
        room2: "./img/Rooms/room_1pic2.jpg",
        room3:"./img/Rooms/room_1pic3.jpg",
        room4:"./img/Rooms/room_1pic4.jpg"
      },
    },
    {
      id: 4,
      hostelName: "Fency Boys hostel",
      img: "./img/hostel_4.jpg",
      dis: "For the scruffy & happy backpacker and Home away from home",
      rooms: {
        room1: "./img/Rooms/room_1pic1.jpg",
        room2: "./img/Rooms/room_1pic2.jpg",
        room3:"./img/Rooms/room_1pic3.jpg",
        room4:"./img/Rooms/room_1pic4.jpg"
      },
    },
    {
      id: 5,
      hostelName: "kahir un Nas Girls  Hostel",
      img: "./img/hostel_5.jpg",
      dis: "The perfect start to your adventure & Home away from home",
      rooms: {
        room1: "./img/Rooms/room_2pic1.jpg",
        room2: "./img/Rooms/room_2pic2.jpg",
        room3:"./img/Rooms/room_2pic3.jpg",
        room4:"./img/Rooms/room_2pic4.jpg"
      },
    },
    {
      id: 6,
      hostelName: "Pine Contenetal Hostel",
      img: "./img/hostel_6.jpeg",
      dis: "It may be just the place for you!& Home away from home",

      rooms: {
        room1: "./img/Rooms/room_2pic1.jpg",
        room2: "./img/Rooms/room_2pic2.jpg",
        room3:"./img/Rooms/room_2pic3.jpg",
        room4:"./img/Rooms/room_2pic4.jpg"
      },
    },
    {
      id: 7,
      hostelName: "Pine Contenetal Hostel",
      img: "./img/hostel_6.jpeg",
      dis: "It may be just the place for you!& Home away from home",

      rooms: {
        room1: "./img/Rooms/room_2pic1.jpg",
        room2: "./img/Rooms/room_2pic2.jpg",
        room3:"./img/Rooms/room_2pic3.jpg",
        room4:"./img/Rooms/room_2pic4.jpg"
      },
    },
    {
      id: 8,
      hostelName: "Pine Contenetal Hostel",
      img: "./img/hostel_6.jpeg",
      dis: "It may be just the place for you!& Home away from home",
      rooms: {
        room1: "./img/Rooms/room_2pic1.jpg",
        room2: "./img/Rooms/room_2pic2.jpg",
        room3:"./img/Rooms/room_2pic3.jpg",
        room4:"./img/Rooms/room_2pic4.jpg"
      },
    },
  ]);

  return (
    <section className="login-div" id="card-div">
      {card.map((card) => (
        <div class="card" style={{ width: "18rem", height: "20rem" }}>
          <img
            src={card.img}
            class="card-img-top"
            alt="..."
            style={{ width: "18rem", height: "10rem" }}
          />
          <div class="card-body">
            <h5 class="card-title">{card.hostelName}</h5>
            <h6 class="card-text">{card.dis}</h6>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "rgba(255,165,64,255)",
                color: "black",
                "&:hover": {
                  backgroundColor: "black",
                  color: "rgba(255,165,64,255)",
                },
                fontStyle: "oblique",
                fontWeight: 623,
              }}
              onClick={() =>
                Navigate("/booking", { state: { cardData: card } })
              }
            >
              check Out
            </Button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Cards;
