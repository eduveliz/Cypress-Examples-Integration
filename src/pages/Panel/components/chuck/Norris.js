import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import {useState} from "react";
import axios from "axios";

function Norris() {

    const [joke, setJoke] = useState("Chuck Norris keeps a stable full of miniature miniature horses in his beer cooler");

    const getJoke = () => {
        axios.get(`https://api.chucknorris.io/jokes/random`)
            .then(res => {
                const joke = res.data.value;
                setJoke(joke)
            })
    }

    return (
        <div style={{padding: '3%', minHeight: '100vh', height: '100%', backgroundColor: '#66213d'}}>

            <Paper elevation={3} style={{backgroundColor: '#ffac59', padding: '3%'}}>
                <p id='joke' style={{fontSize: '5rem'}}> "{joke}"</p>
            </Paper>

            <div style={{width: '100%', display: 'grid', placeContent: 'center', marginTop: '3rem'}}>
                <Button
                    onClick={() => {
                        getJoke()
                    }}
                    name='new'
                    variant="outlined"
                    style={{color: '#ffac59', fontSize: '2rem'}}>
                    Get new joke
                </Button>
            </div>
        </div>
    );
}

export default Norris;
