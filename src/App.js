import {useEffect, useState} from "react"
import {CssBaseline, Grid} from "@mui/material"
import Header from "./components/Headers/Header"
import Map from "./components/Map/Map"
import List from "./components/List/List"
import {getPlacesData, getWeatherData} from "./api/index"

const App = () => {
  const [places, setPlaces] = useState([])
  const [filteredPlaces, setfilteredPlaces] = useState([])

  const [coordinates, setCoordinates] = useState({})
  const [bounds, setBounds] = useState(null)

  const [childClicked, setChildClicked] = useState(null)
  const [isLoading, setisLoading] = useState(false)

  const [type, setType] = useState("restaurants")
  const [rating, setRating] = useState("")

  const [weatherData, setWeatherData] = useState([])

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({coords: {latitude, longitude}}) =>
        setCoordinates({lat: latitude, lng: longitude})
    )
  }, [])

  useEffect(() => {
    if (bounds?.ne && bounds?.sw) {
      setisLoading(true)

      getWeatherData(coordinates.lat, coordinates.lng).then(data =>
        setWeatherData(data)
      )

      getPlacesData(type, bounds.sw, bounds.ne).then(data => {
        setPlaces(data?.filter(place => place.name && place.num_reviews > 0))
        setfilteredPlaces([])
        setisLoading(false)
      })
    }
  }, [bounds, type])

  useEffect(() => {
    const filteredPlaces = places.filter(place => place.rating > rating)
    setfilteredPlaces(filteredPlaces)
  }, [rating])
  return (
    <>
      <CssBaseline />
      <Header setCoordinates={setCoordinates} />
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
            weatherData={weatherData}
          />
        </Grid>
      </Grid>
    </>
  )
}

export default App
