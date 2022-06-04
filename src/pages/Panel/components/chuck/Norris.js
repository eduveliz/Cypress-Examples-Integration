import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

function Norris() {
    return (
        <div style={{padding: '3%', height: '100vh', backgroundColor: '#66213d'}}>

            <Paper elevation={3} style={{backgroundColor: '#b7474b', padding: '3%'}}>
                <p style={{fontSize: '40rem'}}> "Chuck Norris keeps a stable full of miniature miniature horses in his
                    beer cooler."</p>
            </Paper>

            <div style={{width: '100%', display: 'grid', placeContent: 'center', marginTop:'3rem'}}>
                <Button variant="outlined" style={{color: '#ffac59', fontSize: '2rem'}}>Get new joke </Button>
            </div>


        </div>
    );
}

export default Norris;
