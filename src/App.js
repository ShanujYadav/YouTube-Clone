import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import MainVideo from './components/MainVideo';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import Youtube from './API/Youtube';
import { useEffect, useState } from 'react';



function App() {
  const [mainVideo, setMainVideo] = useState(undefined)
  const [videos, setVideos] = useState([])

  const handleSubmit = async (searchTerm) => {

    const response = await Youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: '7',
        key: 'AIzaSyC9jeNdvuQh16eHzy0JT3LSouUEPP-jsPQ',
        q: searchTerm
      }
    })
    console.log(response)
    setMainVideo(response.data.items[0])
    setVideos(response.data.items)
  }

  useEffect(()=>{
    handleSubmit('Akshay Kumar')
  },[])
  return <Container>
    <SearchBar onSubmit={handleSubmit} />
    <Row >
      <Col sm={8}>
        <MainVideo videoRef={mainVideo} />
      </Col>
      <Col sm={4}>
        <VideoList videosList={videos} setMainVideo={setMainVideo}/>
      </Col>
    </Row>

  </Container>
}

export default App;
