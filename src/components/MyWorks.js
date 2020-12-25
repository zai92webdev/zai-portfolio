import React,{useState}  from 'react'
import './MyWorks.css'
import Cards from './Cards'
import data from './data'
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function MyWorks() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    }


    return (
        <div className='mywork'>

            <div className='mywork__container'>
                <h1>My Works</h1>

                <Carousel  activeIndex={index} onSelect={handleSelect}>

                    <Carousel.Item className='mywork__carousel'>

                    <div className='mywork__cards'> 

                        { data && data.map( data =>(
                            <Cards key={data.id} image={data.image} description={data.description} github={data.github} title={data.title} url={data.url} />
                        ))}

                            
                    </div>

                        
                    </Carousel.Item>

                </Carousel>
                
            </div>

        </div>
    )
}

export default MyWorks
