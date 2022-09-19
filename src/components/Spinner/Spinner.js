import Spinner from 'react-bootstrap/Spinner';

function BasicSpinner({display="d-flex", width="w-100", justify="justify-content-center" }) {
  return (
    <div className={`${display} ${width} ${justify}`}>
      <Spinner animation="border" role="status" variant="warning">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}

export default BasicSpinner;