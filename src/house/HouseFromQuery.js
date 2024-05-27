import { useRef } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import House from "./index.js";
import { useContext } from "react";
import HouseContext from "../context/housesContext.js";
const HouseFromQuery = () => {
  const allHouses = useContext(HouseContext);
  const { id } = useParams();
  const house = allHouses.find((h) => h.id === parseInt(id));
  if (!house) return <div>House not found</div>;
  return <House house={house} />;
};

export default HouseFromQuery;
