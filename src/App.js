import './App.css';
import Greetings from './components/Greetings';
import IdCard from './components/IdCard';
import RdmNum from './components/RdmNum';

function App() {
  return (
    <div className="App">
      <h1>IdCard</h1>
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={1.78}
        birth="1992-07-14"
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={1.72}
        birth="1988-05-11"
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      {/* TUDO QUE É PASSADO ENTRA A TAG DE ABERTURA E FECHAMENTO DO COMPONENTE */}
      <h1>Greetings</h1>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      <h1>Random</h1>
      <RdmNum min={1} max={6} />
      <RdmNum min={1} max={100} />
    </div>
  );
}

export default App;
