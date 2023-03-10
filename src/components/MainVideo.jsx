import { Card, Button, Stack } from 'react-bootstrap';
import channelIcon from './Apple_logo.png'

const MainVideo = ({ videoRef }) => {
  if (videoRef === undefined) return <h1>Loading . . .</h1>
  console.log(videoRef.videoId)
  const videoSrc = `https://www.youtube.com/embed/${videoRef.id.videoId}`

  return <Card className="mt-5">
    <iframe width="100%" height="100%" src={videoSrc}></iframe>
    <Card.Title>{videoRef.snippet.title}</Card.Title>
    <Card.Body>
      {/* <a href={videoRef.snippet.channelTitle}>{videoRef.snippet.channelTitle}</a>  */}
      <Stack direction="horizontal" gap={2}>
          <Card.Img src={videoRef.snippet.thumbnails.high.url} alt="@" className="channelIcon" />
        <h6>{videoRef.snippet.channelTitle}</h6>
        <Button variant="danger">Subscribe</Button>
      </Stack>

    </Card.Body>
  </Card>
}
export default MainVideo;