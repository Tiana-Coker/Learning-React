import Fruit from './Fruit.jsx'

function FruitsList(){
  const fruits = [
    {name: 'Apple', color: 'Red'},
    {name: 'Banana', color: 'Yellow'},
    {name: 'Grapes', color: 'Purple'}
  ];

  return(
    <div>
      {fruits.map((fruit, index) => (
        <Fruit key={index} name={fruit.name} color={fruit.color}/>
      ))}
      
    </div>
  );
 
}
export default FruitsList