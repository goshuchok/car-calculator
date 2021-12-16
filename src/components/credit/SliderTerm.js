import { Box, Slider, TextField } from '@material-ui/core';
import React, { useState } from 'react';

function SliderTerm() {
  const [value, setValue] = useState(30);

  return (
    <Box>
      <TextField
        label="Желаемый срок кредита"
        value={value}
        size="medium"
        fullWidth
        readOnly
        InputProps={{
          disableUnderline: true,
        }}
      />
      <Slider onChange={(_, v) => setValue(v)} defaultValue={30} step={10} />
    </Box>
  );
}
export default SliderTerm;
