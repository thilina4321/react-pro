import './App.css';
import BurgerController from './container/BurgerController';
import Layout from './Layout/Layout';

function App() {
  return (
    <div className="app__layout">
      <Layout >

        

        <div className="app__burger__ctrl">
          <BurgerController ></BurgerController>
        </div>

      </Layout>
    </div>
  );
}

export default App;
