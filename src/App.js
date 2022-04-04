
import './App.css';

function App() {
  return (
    <div className='container'>
    <form>
    <div className='col-75'>
      Enter your name: <div>
        <input type="text" name='name'/>
        </div>
        </div><div className='col-75'>
        
      Enter your password:<div>
        <input type="text" name='password'/>
        </div>
        </div>

        <div className='col-75'>
        
      Address:<div>
        <input type="text" name='password'/>
        </div>
        </div>
        
        <div className='row'>
    <input type="submit" value="Submit"  />
  </div>
    </form>
    </div>
  );
}

export default App;
