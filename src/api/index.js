import axios from "axios"

const URL = "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary"
const options = {
  params: {
    bl_latitude: "11.847676",
    tr_latitude: "12.838442",
    bl_longitude: "109.095887",
    tr_longitude: "109.149359",
  },
  headers: {
    "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
    "X-RapidAPI-Key": "e1d524c8f1msh08c7803297f7cb5p1f1800jsnd8de9838f6e0",
  },
}

export const getPlacesData = async (type, sw, ne) => {
  try {
    const {
      data: {data},
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
          "X-RapidAPI-Key": process.env.REACT_APP_REACT_TRAVEL_API_KEY,
        },
      }
    )
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getWeatherData = async (lat, lon) => {
  try {
    const {data} = await axios.get(
      `https://community-open-weather-map.p.rapidapi.com/find`,
      {
        params: {
          lon,
          lat,
        },
        headers: {
          "X-RapidAPI-Host": "community-open-weather-map.p.rapidapi.com",
          "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_WEATHER_KEY,
        },
      }
    )
    return data
  } catch (error) {
    console.log(error)
  }
}
