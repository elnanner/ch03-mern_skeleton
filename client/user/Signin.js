import React, { useState } from 'react';
import { Redirect } from 'react-router'
import { signin } from '../auth/api-auth'
import auth from '../auth/auth-helper'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon'
import { makeStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 600,
        margin: 'auto',
        textAlign: 'center',
        marginTop: theme.spacing(5),
        paddingBottom: theme.spacing(2)
    },
    error: {
        verticalAlign: 'middle'
    },
    title: {
        marginTop: theme.spacing(2),
        color: theme.palette.openTitle
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 300
    },
    submit: {
        margin: 'auto',
        marginBottom: theme.spacing(2)
    }
}))

const Signin = (props) => {

    const classes = useStyles()

    const [values, setValues] = useState({
        email: '',
        password: '',
        error: '',
        redirectToReferrer: false,
        open: false
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }

    const clickSubmit = () => {
        const user = {
            email: values.email || undefined,
            password: values.password || undefined
        }

        signin(user).then((data) => {
            if (data.error) {
                setValues({ ...values, error: data.error })
            } else {
                auth.authenticate(data, () => {
                    setValues({ ...values, error: '', redirectToReferrer: true })
                })
            }
        })
    }

    const { from } = props.location.state || {
        from: {
            pathname: '/'
        }
    }

    const { redirectToReferrer } = values
    if (redirectToReferrer) {
        return <Redirect to={from} />
    }

    return <div>
        <Card className={classes.card} >
            <CardContent>
                <Typography variant='h6' className={classes.title}>
                    Sign In
                </Typography>

                <TextField id="email" type="email" label="Email"
                    className={classes.textField}
                    value={values.email} onChange={handleChange('email')}
                    margin="normal" />
                <br />
                <TextField id="password" type="password" label="Password"
                    className={classes.textField} value={values.password}
                    onChange={handleChange('password')} margin="normal" />
                <br />
                {
                    values.error && (<Typography component="p" color="error">
                        <Icon color="error"
                            className={classes.error}>error</Icon>
                        {values.error}</Typography>)
                }
            </CardContent>

            <CardActions>
                <Button color='primary' variant='contained'
                    onClick={clickSubmit}
                    className={classes.submit}
                >Submit</Button>
            </CardActions>
        </Card>

        <Dialog open={values.open} disableBackdropClick={true}>
            <DialogTitle>New Account</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    New account successfully created.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Link to="/signin">
                    <Button color="primary" autoFocus="autoFocus"
                        variant="contained">
                        Sign In
                    </Button>
                </Link>
            </DialogActions>
        </Dialog>
    </div>;
};

export default Signin;
