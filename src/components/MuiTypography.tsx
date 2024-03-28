import React from 'react';
import { Typography } from '@mui/material';
import '@fontsource/work-sans';

const MuiTypography: React.FC = () => {
  return (
    <>
      <Typography fontFamily="'Work sans'" fontWeight={900} variant='h1'> h1 Heading </Typography>
      <Typography fontFamily="sans" fontWeight={900} variant='h1'> h1 Heading </Typography>
      <Typography fontFamily="sans-serif" fontWeight={900} variant='h1'> h1 Heading </Typography>
      <Typography fontFamily="sans" fontWeight={900} variant='h1'> h1 Heading </Typography>
      <Typography fontWeight={700}  variant='h1' component="h3"> h1 Heading </Typography>
      <Typography fontWeight={500} variant='h1'> h1 Heading </Typography>
      <Typography fontWeight={300} variant='h1'> h1 Heading </Typography>
      <Typography fontWeight={100} variant='h1'> h1 Heading </Typography>
      <Typography variant='h2'> h2 Heading </Typography>
      <Typography variant='h3'> h3 Heading </Typography>
      <Typography variant='h4'> h4 Heading </Typography>
      <Typography variant='h5'> h5 Heading </Typography>
      <Typography variant='h6'> h6 Heading </Typography>
      <Typography variant='subtitle1'> subtitle1 Subtitle </Typography>
      <Typography variant='subtitle2'> subtitle2 Subtitle </Typography>    
      <Typography fontWeight={600} variant='body1'> 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu felis velit. Nullam 
        sit amet metus ac nisi laoreet pretium vel ac nisi. Nulla tempor ligula risus. Quisque vel molestie elit. Nulla at massa tristique, tempus ante ut, elementum lacus. Nullam condimentum, felis eget 
        volutpat varius, nulla lectus vehicula felis, et convallis diam urna in lectus. Vestibulum eget varius est. Phasellus consequat non lectus vel 
        congue. Sed eleifend lobortis sollicitudin. Vestibulum tempor blandit porttitor. In augue velit, vehicula at molestie vitae, scelerisque vitae 
        augue. Proin lorem justo, rutrum viverra diam id, tincidunt porta libero. Nam egestas bibendum laoreet. 
      </Typography>
      <Typography variant='body2'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu felis velit. Nullam 
        sit amet metus ac nisi laoreet pretium vel ac nisi. Nulla tempor ligula risus. Quisque vel molestie elit. Nulla at massa tristique, tempus ante ut, elementum lacus. Nullam condimentum, felis eget 
        volutpat varius, nulla lectus vehicula felis, et convallis diam urna in lectus. Vestibulum eget varius est. Phasellus consequat non lectus vel 
        congue. Sed eleifend lobortis sollicitudin. Vestibulum tempor blandit porttitor. In augue velit, vehicula at molestie vitae, scelerisque vitae 
        augue. Proin lorem justo, rutrum viverra diam id, tincidunt porta libero. Nam egestas bibendum laoreet.   
      </Typography>
    </>
  );
}

export default MuiTypography;