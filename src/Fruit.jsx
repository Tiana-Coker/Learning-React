
function Fruit(props){

  return(
    <div className="container">
      <h3>Fruit: {props.name}</h3>
      <p>Color: {props.color}</p>
    </div>
  );

}
export default Fruit