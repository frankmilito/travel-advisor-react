import {
  FormControl,
  InputLabel,
  Select,
  Typography,
  MenuItem,
  Grid,
} from "@mui/material"
import {useState} from "react"
import useStyles from "./styles"
import PlaceDetails from "../PlaceDetails/PlaceDetails"

const List = () => {
  const classes = useStyles()
  const [type, setType] = useState("restaurant")
  const [rating, setRating] = useState("")

  const places = [
    {name: "Cool Place"},
    {name: "Best Beer"},
    {name: "Best Stake"},
    {name: "Cool Place"},
    {name: "Best Beer"},
    {name: "Best Stake"},
    {name: "Cool Place"},
    {name: "Best Beer"},
    {name: "Best Stake"},
  ]
  return (
    <div className={classes.container}>
      <Typography variant="h4" className={classes.title}>
        Restaurants, Hotels and Attractions around you
      </Typography>
      <FormControl className={classes.formControl} variant="standard">
        <InputLabel>Type</InputLabel>
        <Select
          value={type}
          onChange={e => setType(e.target.value)}
          label="Type"
        >
          <MenuItem value="restaurant">Restaurant</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attraction">Attractions</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl} variant="standard">
        <InputLabel>Rating</InputLabel>
        <Select value={rating} onChange={e => setRating(e.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={0}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3} className={classes.list}>
        {places?.map((place, index) => (
          <Grid item key={index} xs={12}>
            <PlaceDetails place={place} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default List
