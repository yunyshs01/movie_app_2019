import React from 'react';

function Food({name}){
  return <h3>I like {name}</h3>;
}


const foodIlike =[
  {id:1, a: '1sdf23'},
  {id:2 , a: '345sdf345'},
  {id:3 , a: '234gsdfdfs'},
  {id:4 , a: '234ghfsdfhd'}
];


function renderFood(dish){
  
  return <Food key = {dish.id} name={dish.a} />
}


function App() {
  return (
    <div className="App">
      <h1>HEllo!!!</h1>
      {console.log(foodIlike.map(renderFood))}
      {foodIlike.map(renderFood)}
    </div>
  );
}

export default App;
