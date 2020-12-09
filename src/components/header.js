import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { 
	AppBar, 
	Toolbar, 
	Typography, 
	Button, 
	useMediaQuery,
	Menu,
	MenuItem,
	IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'gatsby'
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  toolbar: {
		display: 'flex',
		justifyContent: 'flex-start'			
	},
	buttons: {
		color: 'white',
		padding: 20,
		fontWeight: 'bold'
	},
	logo: {
		marginRight: 20,
		color: 'white'
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	menuIcon: {
		paddingRight: 25
	},
	menuItem: {
		fontWeight: 'bold',
		marginTop: -10,
		padding: 10,
		color: 'black'
	},
	link: {
		textDecoration: 'none'		
	}
}));

const Header = ({ menuLinks }) => {
	const classes = useStyles();
	
	const theme = useTheme()
	const isMobile = useMediaQuery(theme.breakpoints.down('xs'))
	
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);

	const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
	}

  return (     
		<AppBar position="static" elevation={0}>
			<Toolbar className={classes.toolbar}>
				{isMobile ? (<> 
					<IconButton
						aria-label="pages"
						aria-controls="menu-appbar"
						aria-haspopup="true"
						onClick={handleMenu}
						color="inherit"
						className={classes.menuIcon}
						>
						<MenuIcon />
					</IconButton>
					<Menu
						id="menu-appbar"
						anchorEl={anchorEl}
						anchorOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						keepMounted
						transformOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						open={open}
						onClose={handleClose}
						>
						{menuLinks.map((item, i) => (
							
							<Link className={classes.link} to={item.link} key={i}>
								<MenuItem className={classes.menuItem} onClick={handleClose}>
									{item.name}
								</MenuItem>
							</Link>
						))}
					</Menu>
					<Link className={classes.link} to='/'>
						<Typography 
							variant='h4' 
							align='center'
							className={classes.logo} 							
							>
							FLAVOUR CULTURE
						</Typography>
					</Link>					
				</>) : (<>
					<Link className={classes.link} to='/'>
						<Typography 
						variant='h4' 
						align='center'
						className={classes.logo}>FLAVOUR CULTURE</Typography>
					</Link>
					{menuLinks.map((item, i) => (
						<Link className={classes.link} to={item.link} key={i}>
						<Button size='large' className={classes.buttons}>{item.name}</Button>
						</Link>
					))}
				</>)
			}
			
			</Toolbar>
		</AppBar>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

 
export default Header;