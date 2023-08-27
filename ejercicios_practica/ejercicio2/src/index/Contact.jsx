import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import styles from "./contact.module.css";

export default function Contact() {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Contact Us</h1>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component='img'
          height='140'
          image='https://via.placeholder.com/150'
          alt='Kitten'
        />
        <CardContent>
          <Typography gutterBottom variant='h3' component='div'>
            Kitten Card in Contact
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            This is a cute kitten card with modular styles in Contact.
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