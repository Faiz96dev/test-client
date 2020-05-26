import Grid from "@material-ui/core/Grid";
import CreateIcon from "@material-ui/icons/Create";
import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";
import {decodeTokenToEmail} from "../../services/cookies.service";

const UserData = props => {
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [sex, setSex] = useState('');
    const [lastName, setLast] = useState('');
    const [firstName, setFirst] = useState('');

   async function handleChanges(key, value, e) {
       console.log(e)
        if (e !== '') {
            switch (key) {
                case 'email':
                    setEmail(e);
                    break;
                case 'sex':
                    setSex(e);
                    break;
                case 'lastName':
                    setLast(e)
                    break;
                case 'firstName':
                    setFirst(e)
                    break;
                case 'age':
                    setAge(e)
                    break;
                default:
            }
            let token = await decodeTokenToEmail()
            let data = {
                email,
                age,
                lastName,
                firstName,
                sex,
                searchField: token
            }
            props.setFields(data)
        }
    }

    const links = props.data;
    const items = Object.entries(links).map(([key, value]) => {
        return (
            <Grid key={key.id} container item xs={4} spacing={1} justify="center" alignItems="center">
                <TextField
                    id="outlined-helperText"
                    label={key}
                    defaultValue={value}
                    variant="outlined"
                    onChange={(e) => handleChanges(key, value, e.target.value)}
                />
            </Grid>
        );
    });
    return (
        items
    )
}
export default UserData
