import {
  FormControl,
  InputLabel,
  Select,
  Typography,
  MenuItem,
  Grid,
  Box,
  CircularProgress,
} from "@mui/material"
import {useState, useEffect, createRef} from "react"
import useStyles from "./styles"
import PlaceDetails from "../PlaceDetails/PlaceDetails"

const List = ({
  places,
  childClicked,
  isLoading,
  type,
  setType,
  rating,
  setRating,
}) => {
  const classes = useStyles()
  const [elRefs, setElRefs] = useState([])
  console.log({elRefs})

  useEffect(() => {
    const refs = Array(places?.length)
      .fill()
      .map((_, i) => elRefs[i] || createRef())
    setElRefs(refs)
  }, [places])

  return (
    <div className={classes.container}>
      <Typography variant="h4" className={classes.title}>
        Restaurants, Hotels and Attractions around you
      </Typography>
      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <>
          <Box style={{width: "100%"}}>
            <FormControl className={classes.formControl} variant="standard">
              <InputLabel>Type</InputLabel>
              <Select
                value={type}
                onChange={e => setType(e.target.value)}
                label="Type"
              >
                <MenuItem value="restaurants">Restaurant</MenuItem>
                <MenuItem value="hotels">Hotels</MenuItem>
                <MenuItem value="attractions">Attractions</MenuItem>
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
          </Box>
          <Grid container spacing={3} className={classes.list}>
            {places?.map((place, index) => (
              <Grid item key={index} xs={12}>
                <PlaceDetails
                  place={place}
                  selected={Number(childClicked) === index}
                  refProp={elRefs[index]}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </div>
  )
}

export default List
