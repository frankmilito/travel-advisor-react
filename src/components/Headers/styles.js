import {makeStyles} from "@mui/styles"

export default makeStyles(theme => ({
  title: {
    color: "#fff",
    marginRight: "10px !important",
  },
  appbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  toolbar: {
    display: "flex",
  },
  search: {
    display: "flex",
    padding: "5px 15px",
    background: "#418cca",
    alignItems: "center",
    transition: "200ms ease-in-out",
    "&:hover": {
      background: "#5fa4dd",
    },
    borderRadius: "5px",
  },
  inputInput: {
    color: "#fff !important",
  },
  searchIcon: {
    marginRight: "5px",
  },
}))
