import './App.css';

function App() {
  return (
    <main>
      <h1>$400<span>.00</span></h1>
      <form>
          <input type="text" placeholder={'+5 chicken rice'}/>
          <input type="date-time-local"/>
          <input type="text" placeholder={'description'}/>
      </form>
    </main>
  );
}

export default App;
