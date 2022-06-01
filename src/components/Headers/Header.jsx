import {Autocomplete} from "@react-google-maps/api"
import {AppBar, Toolbar, Typography, InputBase, Box} from "@mui/material"
import {Search} from "@mui/icons-material"
import useStyles from "./styles"
const Header = () => {
  const classes = useStyles()
  return (
    <AppBar position="static">
      <Toolbar className={classes.appbar}>
        <Typography variant="h5" className={classes.title}>
          Trip Advisor
        </Typography>
        <Box className={classes.toolbar}>
          <Typography variant="h6" className={classes.title}>
            Explore new places
          </Typography>
          {/* <Autocomplete> */}
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <Search />
            </div>
            <InputBase
              placeholder="Search..."
              classes={{root: classes.inputRoot, input: classes.inputInput}}
            />
          </div>
          {/* </Autocomplete> */}
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
