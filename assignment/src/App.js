//import {TestComponent} from './components/TestComponent'<TestComponent/>
import {AddExercise} from './components/AddExercise'
import {ExerciseList} from './components/ExerciseList'
import {Settings} from './components/Settings'
import './App.css'

function App() {
  
  return (
    <div class='app'>
      <h1 class= 'title'>Jormas exercise planner</h1>
    
      <AddExercise />
      <ExerciseList />
      <Settings />
    </div>
  );
}

export default App;
