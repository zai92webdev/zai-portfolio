import React, { useRef } from 'react'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core'
import './Cards.css'



function Cards({image,description,github,title,url}) {
    const urlRef= useRef()
    const gitRef = useRef()

    const handleGit=() => {
        gitRef.current.click()
    }

    const handleUrl=() => {
        urlRef.current.click()
    }

    return (
        <div className='card'>
        <Card>
            <CardActionArea>
                <CardMedia 
                    component="img"
                    alt="jpg"
                    height="250"
                    image={image}
                    title="media"
                />

                <CardContent>
                    <Typography variant='h5'>
                        {title}
                    </Typography>
                    <Typography>
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" onClick={handleGit}>
                    Github
                </Button>
                <a href={github} ref={gitRef} hidden target="_blank" rel="noopener noreferrer">test</a>


                <Button size="medium" color="primary" onClick={handleUrl} >
                    Live Demo
                </Button>
                <a href={url} ref={urlRef} hidden target="_blank" rel="noopener noreferrer">test</a>
            </CardActions>
        </Card>
    </div>
    )
}

export default Cards
