import "./App.css";
import PersonDetailsArrayOfObject from "./components/PersonDetailsArrayOfObject";
import PassingPropsToComp from "./components/PassingPropsToComp";
import { Counter } from "./components/Counter";
import { Todo } from "./components/TodoApp/Todo";
import { TabModule } from "./components/Tab/TabModule";
import PersonDetailsData from "./components/PersonDetailsData";
import DynamicButton from "./components/DynamicButton/DynamicButton";
import SpreadOperatorExample from "./components/SpreadOperatorExample"
import TwoWayBinding from "./components/TwoWayBinding/TwoWayBinding";


function App() {

  // Usage with spread operator
  const userInfo = { name: 'John', age: 30, location: 'New York' };
 
  return (
    <>
      <section className="pad40">
        <div className="container">
            <PassingPropsToComp title="person details are below:" /><br/>
            <PersonDetailsArrayOfObject personDetails={PersonDetailsData} />
        </div>        
      </section>
      <section className="pad40 gray-back">
        <div className="container">
            <h2>Below Example of Counter value Increment & Decrement using State Hook</h2>
            <Counter></Counter>
        </div>
      </section>
      <section className='todo-app-sec pad40 text-center'>
        <div className="container">
          <h2>Basic Todo app example</h2>
          <Todo></Todo>                    
        </div>
      </section>
      <section className='pad40 tab-sec gray-back'>
        <div className="container">
          <h2 className='text-center'>Tab Module Example</h2>
          <TabModule></TabModule>
        </div>
      </section>
      <section className="pad40">
        <div className="container">
            <DynamicButton></DynamicButton>
        </div>
      </section>
      <section className="pad40 gray-back">
        <div className="container">
            <h2>Prop Spreading in Components</h2>
            <SpreadOperatorExample {...userInfo}/>            
        </div>
      </section>
      <section className="pad40">
        <div className="container">
          <h2 className='text-center'>Two Way Data Binding Example</h2>          
          <TwoWayBinding />
        </div>
      </section>
    </>
  );
}

export default App;
