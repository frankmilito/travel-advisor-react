import GoogleMapReact from "google-map-react"
import {Paper, Typography, useMediaQuery} from "@mui/material"
import {LocationOnOutlined} from "@mui/icons-material"
import Rating from "@mui/lab"
import useStyles from "./styles"
const Map = () => {
  const classes = useStyles()
  const isMobile = useMediaQuery("(min-width:600px)")
  const coordinates = {lat: 0, lng: 0}
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{key: "AIzaSyBq79gle0XmaLEe3BUVljrThsBgf6XrxrU"}}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={2}
        margin={[50, 50, 50, 50]}
        // options={""}
        // onChange={""}
        // onChildClick={""}
      ></GoogleMapReact>
    </div>
  )
}

export default Map
