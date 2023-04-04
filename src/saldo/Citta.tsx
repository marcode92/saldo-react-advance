import React from "react";
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";

export function Citta(){

    return (
        <div>
                   <FormControl variant="filled" sx={{ minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-filled-label">CITTA'</InputLabel>
                            <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                label="CITTA'"
                            >
                                <MenuItem value={'uomo'}>catania</MenuItem>
                                <MenuItem value={'donna'}>roma</MenuItem>
                            </Select>
                        </FormControl>
        </div>
    )
}