import { Container, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import CarsCard from './CarsCard';
import CreditInput from './CreditInput';

function ChoiceAuto() {
  const [notes, setNotes] = useState([]);
  const key = 'xMjRSheumFDOR3KhqDuV81Ytp9OZSAhRpQRsZo5A';
  useEffect(() => {
    fetch(`http://api.auto.ria.com/categories/2/marks/9/models?api_key=${key}`)
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);
  const handleDelete = async (id) => {
    await fetch(
      `http://api.auto.ria.com/categories/2/marks/9/models?api_key=${key}/` +
        id,
      {
        method: 'DELETE',
      }
    );
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };
  return (
    <div>
      <Container>
        <h4 className="choice_title">Выберите авто</h4>
        <CreditInput />
        <Grid container spacing={3}>
          {notes.map((note, id) => (
            <Grid item key={id} xs={12} md={6} lg={4}>
              <CarsCard note={note} handleDelete={handleDelete} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default ChoiceAuto;
