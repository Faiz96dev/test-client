import React, {useEffect} from "react";
import {checkToken} from "../../services/auth.service";
import Container from "@material-ui/core/Container";
import Navbar from "../Navbar/Navbar";
import TextField from "@material-ui/core/TextField";
import Grid from '@material-ui/core/Grid';
import './Main.css'
import Button from "@material-ui/core/Button";
import CreateIcon from '@material-ui/icons/Create';
import UserData from './UserData'
import {Box} from "@material-ui/core";


function Main(props) {

    useEffect(() => {
        f()
    }, [])

    async function f() {
        await checkToken().then((res) => {
            if (res) {
                props.getUser()
            }
        })
    }

    function f1() {
        props.saveNewFieldsDb(props.newFields)
    }

    return (
        <Box className="container">
            <Navbar out={props.Logout}/>
            <Container>
                <div className="split"></div>
                <Grid spacing={3} container
                      direction="column"
                      justify="flex-end"
                      alignItems="center">
                    <UserData setFields={props.SetNewFields} data={props.userData}/>
                    <Grid container xs={4} spacing={1} justify="center">
                        <Button onClick={() => f1()} variant="contained" color="primary">
                            Save Changes
                        </Button>
                    </Grid>
                </Grid>
            </Container>

        </Box>

    );
}

export default Main
