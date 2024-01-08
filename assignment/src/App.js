import {TestComponent} from './components/TestComponent'
import {AddExercise} from './components/AddExercise'
import {ExerciseList} from './components/ExerciseList'
import {Settings} from './components/Settings'

function App() {
  
  return (
    <div>
      <TestComponent/>
      <AddExercise />
      <ExerciseList />
      <Settings />
    </div>
  );
}

export default App;
