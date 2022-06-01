import {
  Box,
  Button,
  CardMedia,
  CardContent,
  Card,
  CardAction,
  Chip,
} from "@mui/material"
import {LocationOnOutlined, Phone} from "@mui/icons-material"
import Rating from "@mui/lab"
import useStyles from "./styles"

const PlaceDetails = ({place}) => {
  const classes = useStyles()
  return (
    <Card elevation={6}>
      <CardMedia style={{height: 350}} image={place?.photo} />
    </Card>
  )
}

export default PlaceDetails
