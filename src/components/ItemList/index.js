import Item from "../Item";
import {Container} from 'react-bootstrap';
import './styles.css';

const ItemList = ({ products }) => {
  return (
    <Container fluid="bg" className="cards-container">
      {products.map((p) => (
        <Item product={p} key={p.id} />
      ))}
    </Container>
  );
};

export default ItemList;
