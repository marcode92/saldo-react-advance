import React from "react";
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";

export function Saldo(){

    return (
        <div>
           <TextField
                            size="medium"
                            required
                            id="outlined-required"
                            label="saldo"
                            variant="filled"
                        />
        </div>
    )
}