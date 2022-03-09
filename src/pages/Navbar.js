import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <Row className="mb-4">
            <Col className="bg-success"><Link to="/personal-info">Personal</Link></Col>
            <Col><Link to="/technical-issues">Technical</Link></Col>
            <Col><Link to="/covid">Covid</Link></Col>
            <Col><Link to="/redberry-internal">Redberry</Link></Col>
            <Col><Link to="/submit">Submit</Link></Col>
        </Row>
    )
}

export default Navbar;