import { Container,Row,Col,Card } from "react-bootstrap";

const Video=({videoDetail, setMainVideo})=>{
//console.log(setMainVideo)
    return <Container>
<Row className="mt-3" onClick={()=>setMainVideo(videoDetail)}>
<Col sm={4}>
<Card.Img variant="top" src={videoDetail.snippet.thumbnails.high.url} />
</Col>
<Col sm={8}>
<p>{videoDetail.snippet.title}</p>
</Col>
</Row>
    </Container>
    }
export default Video;