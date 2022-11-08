import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import {teamsList} from './components/teams-list'
import Card from './components/Card'

function App() {
  console.log(teamsList);
  return (
  <div>
   <Hero />;
   {teamsList.map((item, index) => (
      <div className="card-wrapper" key={index}>
          <Card image={item.image} h2={item.h2} p={item.p}  />
      </div>
  ))
   }
   </div> 
  )
}
export default App;
