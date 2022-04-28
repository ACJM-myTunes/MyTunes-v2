import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";

const AddReview = (props) => {
const location  = useLocation();

    const defaultValues = {
        title: props.trackName ? props.trackName : location.state.title,
        rating: 5,
        review: ''
    };

    const [formValues, setFormValues] = useState(defaultValues);    
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
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

    const handleSubmit = () => {
        if (formValues.title === '' || formValues.review === '') {
            setError('Invalid or missing input fields');
        }
        else  {
            const reqBody = {
                trackId: props.trackID ? props.trackID : location.state.trackID,
                rating: formValues.rating,
                review: formValues.review,
                title: formValues.title
            }
    
            fetch(`/api/reviews/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json; charset=utf-8' },
                body: JSON.stringify(reqBody),
            })
                .then(res => { 
                    if (!res.ok) throw new Error('Invalid or missing input fields');
                })
                .catch(err => { setError(`${err}`) })
        }
    }

    return(
        <div id="form">
        <Grid container alignItems="center" justify="center" direction="column" style={{ gridGap: 40 }}>
            <Grid item>
            <TextField
                name="title"
                label="Title"
                disabled
                style = {{ width: 400 }}
                type="text"
                value={formValues.title}
            />
            </Grid>
            <Grid item>
            <div style={{ width: "400px" }}>
                <Slider
                value={formValues.rating}
                onChange={handleSliderChange("rating")}
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
            <Grid item>
                <TextField
                    style = {{ width: 500 }}
                    name="review"
                    label="Review"
                    type="text"
                    multiline={true}
                    rows={10}
                    value={formValues.review}
                    onChange={handleInputChange}
                />
            </Grid>
            {error && <div id="error">{error}</div>}
            <Link to="/myreviews"><Button variant='contained' mt={10} onClick={handleSubmit} size="medium" type="submit">
            SUBMIT
            </Button></Link>
        </Grid>
        </div>
    )
}

export default AddReview;