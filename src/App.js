import {useEffect, useState} from "react"
import {CssBaseline, Grid} from "@mui/material"
import Header from "./components/Headers/Header"
import Map from "./components/Map/Map"
import List from "./components/List/List"
import {getPlacesData} from "./api/index"

const App = () => {
  const [places, setPlaces] = useState([])
  const [filteredPlaces, setfilteredPlaces] = useState([])

  const [coordinates, setCoordinates] = useState({})
  const [bounds, setBounds] = useState(null)

  const [childClicked, setChildClicked] = useState(null)
  const [isLoading, setisLoading] = useState(false)

  const [type, setType] = useState("restaurants")
  const [rating, setRating] = useState("")

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({coords: {latitude, longitude}}) =>
        setCoordinates({lat: latitude, lng: longitude})
    )
  }, [])

  useEffect(() => {
    setisLoading(true)
    if (bounds) {
      getPlacesData(type, bounds.sw, bounds.ne).then(data => {
        setPlaces(data)
        setfilteredPlaces([])
        setisLoading(false)
      })
    }
  }, [bounds, coordinates, type])

  useEffect(() => {
    const filteredPlaces = places.filter(place => place.rating > rating)
    setfilteredPlaces(filteredPlaces)
  }, [rating])
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{width: "100%"}}>
        <Grid item xs={12} md={4}>
          <List
            places={filteredPlaces.length ? filteredPlaces : places}
            childClicked={childClicked}
            isLoading={isLoading}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={filteredPlaces.length ? filteredPlaces : places}
            setChildClicked={setChildClicked}
          />
        </Grid>
      </Grid>
    </>
  )
}

export default App
