import React, {useState} from "react";
import Grid from "@mui/material/Grid";
import {Card, FormControl, MenuItem, Select, Slider, TextField} from "@mui/material";
import Button from "@mui/material/Button";

const defaultValues = {
    name: "",
    age: 0,
    os: "",
    favoriteNumber: 0,
};
const Form = () => {
    const [formValues, setFormValues] = useState(defaultValues);
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };
    const handleSliderChange = (name) => (e, value) => {
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formValues);
    };
    return (
        <div style={{display: 'grid', placeContent: 'center', width: "100%", height: "100vh"}}>
            <Card sx={{maxWidth: 445, padding: 10}}>
                <form onSubmit={handleSubmit}>
                    <Grid container direction="column">
                        <Grid item>
                            <TextField
                                sx={{width: "400px"}}
                                id="name-input"
                                name="name"
                                label="Name"
                                type="text"
                                value={formValues.name}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item sx={{marginTop: 5}}>
                            <TextField
                                sx={{width: "400px"}}
                                id="age-input"
                                name="age"
                                label="Age"
                                type="number"
                                value={formValues.age}
                                onChange={handleInputChange}
                            />
                        </Grid>

                        <Grid item sx={{marginTop: 5}}>
                            <FormControl>
                                <Select
                                    sx={{width: "400px"}}
                                    name="os"
                                    placeholder={'System'}
                                    value={formValues.os}
                                    onChange={handleInputChange}
                                >
                                    <MenuItem key="mac" value="mac">
                                        Mac
                                    </MenuItem>
                                    <MenuItem key="windows" value="windows">
                                        Windows
                                    </MenuItem>
                                    <MenuItem key="linux " value="linux">
                                        Linux
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item sx={{marginTop: 5, marginBottom: 5}}>
                            <div style={{width: "400px"}}>
                                Favorite Number
                                <Slider
                                    value={formValues.favoriteNumber}
                                    onChange={handleSliderChange("favoriteNumber")}
                                    defaultValue={1}
                                    step={1}
                                    min={1}
                                    max={5}
                                    marks={[
                                        {
                                            value: 1,
                                            label: "1",
                                        },
                                        {
                                            value: 2,
                                            label: "2",
                                        },
                                        {
                                            value: 3,
                                            label: "3",
                                        },
                                        {
                                            value: 4,
                                            label: "4",
                                        },
                                        {
                                            value: 5,
                                            label: "5",
                                        },
                                    ]}
                                    valueLabelDisplay="off"
                                />
                            </div>
                        </Grid>
                        <Button variant="contained" color="primary" type="submit">
                            Submit
                        </Button>
                    </Grid>
                </form>
            </Card>
        </div>
    );
};
export default Form;
