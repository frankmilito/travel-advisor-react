import GoogleMapReact from "google-map-react"
import {Paper, Typography, useMediaQuery} from "@mui/material"
import {LocationOnOutlined} from "@mui/icons-material"
import {Rating} from "@mui/lab"
import useStyles from "./styles"
import {mapStyles} from "./mapStyles"
const Map = ({
  setCoordinates,
  setBounds,
  coordinates,
  places,
  setChildClicked,
  weatherData,
}) => {
  const classes = useStyles()
  const isDesktop = useMediaQuery("(min-width:600px)")
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_MAP_API_KEY}}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={12}
        margin={[50, 50, 50, 50]}
        options={{disableDefaultUI: true, zoomControl: true, styles: mapStyles}}
        onChange={e => {
          setCoordinates({lat: e.center.lat, lng: e.center.lng})
          setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw})
        }}
        onChildClick={child => setChildClicked(child)}
      >
        {places?.map((place, index) => (
          <div
            className={classes.markerContainer}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={index}
          >
            {!isDesktop ? (
              <LocationOnOutlined color="primary" fontSize="large" />
            ) : (
              <Paper elevation={3} className={classes.paper}>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  className={classes.typography}
                >
                  {place.name}
                </Typography>
                <img
                  className={classes.pointer}
                  src={
                    place.photo
                      ? place.photo.images.large.url
                      : "https://media-cdn.tripadvisor.com/media/photo-s/04/0e/df/1c/wakkis.jpg"
                  }
                  alt={place.name}
                />
                <Rating size="small" value={Number(place.rating)} readOnly />
              </Paper>
            )}
            {weatherData?.list?.map((data, i) => (
              <div key={i} lat={data.coord.lat} lng={data.coord.lon}>
                <img
                  src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png `}
                />
              </div>
            ))}
          </div>
        ))}
      </GoogleMapReact>
    </div>
  )
}

export default Map
