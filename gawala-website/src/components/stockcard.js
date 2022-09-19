import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import {buystock} from '../firebase interface/getstocks'
import {userid,userstocks,usermoney} from '../firebase interface/sessionstate'

export default function MultiActionAreaCard({name,price,image,desc,numbersold,total,refrefn,sale}) {
    if(sale=="sale")
    {
        return (
            <Card sx={{ maxWidth: 400 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image={image}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                   {desc}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    {"You have : "+numbersold+' / '+total}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    {price+'$'}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" onClick={async () => {
                    await buystock(userid,usermoney,price,name)
                    refrefn()
        
                }}
        >
                  {sale}
                </Button>
              </CardActions>
            </Card>
          );

    }
    else
    {
        return (
            <Card sx={{ maxWidth: 400 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image={image}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                   {desc}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    {"Sold : "+numbersold+' / '+total}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    {price+'$'}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" onClick={async () => {
                    await buystock(userid,usermoney,price,name)
                    refrefn()
        
                }}
        >
                  {sale}
                </Button>
              </CardActions>
            </Card>
          );

    }
  
}
