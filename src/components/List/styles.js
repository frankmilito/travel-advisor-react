import {makeStyles} from "@mui/styles"

export default makeStyles(theme => ({
  formControl: {
    margin: "10px",
    minWidth: 120,
    marginBottom: "30px",
    paddingRight: "30px",
    width: "150px",
  },
  title: {
    fontSize: "20px",
    margin: "10px 0",
    fontWeight: "bold",
  },
  //   selectEmpty: {
  //     marginTop: theme.spacing(2),
  //   },
  loading: {
    height: "600px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    padding: "25px",
  },
  list: {
    height: "75vh",
    overflow: "auto",
  },
}))
