import {
  Box,
  Button,
  CardMedia,
  CardContent,
  Card,
  CardActions,
  Chip,
  Typography,
} from "@mui/material"
import {LocationOnOutlined, Phone} from "@mui/icons-material"
import {Rating} from "@mui/lab"
import useStyles from "./styles"

const PlaceDetails = ({place, selected, refProp}) => {
  console.log({selected, refProp})
  const classes = useStyles()
  if (selected)
    refProp?.current?.scrollIntoView({behavior: "smooth", block: "start"})
  return (
    <Card elevation={6}>
      <CardMedia
        style={{height: 350}}
        image={
          place.photo
            ? place.photo.images.large.url
            : "https://media-cdn.tripadvisor.com/media/photo-s/04/0e/df/1c/wakkis.jpg"
        }
        title={place.name}
      />
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {place.name}
        </Typography>
        <Box display="flex" justifyContent="space-between">
          <Rating size="small" value={Number(place.rating)} readOnly />
          <Typography variant="subtitle1">
            out of {place.num_reviews} reviews
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Price</Typography>
          <Typography variant="subtitle1">{place.price_level}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Ranking</Typography>
          <Typography variant="subtitle1">{place.ranking}</Typography>
        </Box>
        {place?.awards?.map(award => (
          <Box
            my={1}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <img src={award.images.small} alt={award.display_name} />
            <Typography variant="subtitle2" color="textSecondary">
              {award.display_name}
            </Typography>
          </Box>
        ))}
        {place?.cuisine?.map(({name}) => (
          <Chip key={name} size="small" label={name} className={classes.chip} />
        ))}
        {place?.address && (
          <Typography
            variant="body2"
            gutterBottom
            color="textSecondary"
            className={classes.subtitle}
          >
            <LocationOnOutlined /> <span>{place.address}</span>
          </Typography>
        )}
        {place?.phone && (
          <Typography
            variant="body2"
            gutterBottom
            color="textSecondary"
            className={classes.spacing}
          >
            <Phone /> <span>{place.phone}</span>
          </Typography>
        )}
        <CardActions>
          <Button
            variant="small"
            color="primary"
            onClick={() => window.open(place.web_url, "_blank")}
          >
            Trip Advisor{" "}
          </Button>
          <Button
            variant="small"
            color="primary"
            onClick={() => window.open(place.website, "_blank")}
          >
            {" "}
            Website{" "}
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  )
}

export default PlaceDetails
