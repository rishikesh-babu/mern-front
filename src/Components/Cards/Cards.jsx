import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import WritingPad from '../WritingPad/WritingPad';

function Cards({ post }) {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={process.env.REACT_APP_API_BASE_URL + "/" + post?.imagePath} />
            <Card.Body>
                <Card.Title> <h1> Title </h1>  </Card.Title>
                <Card.Text>
                    <WritingPad value={post.content} readOnly={true} theme={'bubble'} />
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Cards;