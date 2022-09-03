
import './App.css';
import Profile from './profile/Profile';

function App() {
  const handlealert=(name)=>{alert(name)}
  return (
    <div className="App">
      <Profile fullName="Zaghdoudi Chaima" bio= "learn Js" profession="Web Marketing" handlename={handlealert}>
        <img src="img.svg" alt=""/>
      </Profile>
    </div>
  );
}

export default App;
