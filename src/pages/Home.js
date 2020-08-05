import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import styled from 'styled-components';

import './Loading.css';

const Container = styled.div`
text-align: center;
`

const Row = styled.div`
display: flex;
flex-wrap: wrap;
text-align: center;
`

const Card = styled.div`
display: flex;
flex-direction: column;
justify-content: end;
`

const Image = styled.img`
object-fit: cover;
border-radius: 6px;
width: 80%;
height: 210px;
`

const Title = styled.span`
margin: 16px 0 8px;
font-size: 16px;
font-weight: 600;
`

const Desc = styled.p`
margin-bottom: 16px;
font-size: 15px;
max-width: 330px;
`

const Home = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Axios.get('https://api.giphy.com/v1/gifs/search?q=spiderman+meme&api_key=TgCIGWCJNPI34YrFxjdl9BUlABvaLZ6Q&limit=12')
        .then(function (response) {
            setNews(response.data.data);
            // console.log(response.data.articles);
            setLoading(false);
        }).catch(error => console.log(error.message))
    },[]);
    console.log(news.length);
    return (
        <Container>
            <h1>Spiderman Meme</h1>
            <Row>
                {
                    loading ? (
                        <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                    ) :             
                    news.map((data,index) => 
                        <Card key={index}>
                            <Image src={data.images.original.url} alt={data.title}></Image>
                            <Title>{data.title}</Title>
                            <Desc>{data.type}</Desc>
                        </Card>
                    )
                }
            </Row>
        </Container>
    )
}

export default Home;