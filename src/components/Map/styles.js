import {makeStyles} from "@mui/styles"

export default makeStyles(theme => ({
  mapContainer: {
    width: "100%",
    height: "85vh",
  },
  paper: {
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100px",
  },
  pointer: {
    // maxWidth: "100%",
    cursor: "pointer",
    // width: "100px",
  },
  markerContainer: {
    position: "absolute",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
    "&:hover": {zIndex: 2},
  },
  typography: {fontSize: "14px !important"},
}))
