import {useEffect, useState} from "react"
import {CssBaseline, Grid} from "@mui/material"
import Header from "./components/Headers/Header"
import Map from "./components/Map/Map"
import List from "./components/List/List"
import {getPlacesData} from "./api/index"

const App = () => {
  const [places, setPlaces] = useState([])
  const [coordinates, setCoordinates] = useState({})
  const [bounds, setBounds] = useState(null)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({coords: {latitude, longitude}}) =>
        setCoordinates({lat: latitude, lng: longitude})
    )
  }, [])
  useEffect(() => {
    if (bounds) {
      getPlacesData(bounds.sw, bounds.ne).then(data => {
        setPlaces(data)
      })
    }
  }, [bounds, coordinates])
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{width: "100%"}}>
        <Grid item xs={12} md={4}>
          <List places={places} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={places}
          />
        </Grid>
      </Grid>
    </>
  )
}

export default App
