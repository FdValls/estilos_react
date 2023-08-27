import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import "../App.css"

export default function Home() {
  return (
    <div className="container">
      <h1 >Welcome to the Home Page</h1>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component='img'
          height='140'
          image='https://via.placeholder.com/150'
          alt='Kitten'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            Kitten Card
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            This is a cute kitten card using Material-UI styles.
          </Typography>
          <CardMedia>
            <Button variant='contained'>Agregar</Button>
            <Button color='error'>Eliminar</Button>
          </CardMedia>
        </CardContent>
      </Card>
    </div>
  );
}