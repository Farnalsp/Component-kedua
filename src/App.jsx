import ReactDOM from 'react-dom/client';
import './App.css';



function ItemComponent ({name,price}) {
  return (
      <div>
      <h2>Baju {name}</h2>
      <p>Rp {price}</p>
      </div>
  );
}

function HomeComponent(){
  return (
      <div>
          <ItemComponent />
          <ItemComponent />
      </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HomeComponent />)

export default HomeComponent;
