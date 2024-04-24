import PersonDetailsArrayOfObject from "./components/PersonDetailsArrayOfObject";
import PassingPropsToComp from "./components/PassingPropsToComp";
import "./App.css";
import { Counter } from "./components/Counter";
import { Todo } from "./components/TodoApp/Todo";
import { TabModule } from "./components/Tab/TabModule";

function App() {
  const personDetails = [
    {
      name: "Karan Parmar",
      age: "30",
      gender: "Male",
    },
    {
      name: "Chandni parmar",
      age: "27",
      gender: "Female",
    },
    {
      name: "Prakash Parmar",
      age: "62",
      gender: "Male",
    }
  ]



  return (
    <>
      <section className="pad40">
        <div className="container">
            <PassingPropsToComp title="person details are below:" /><br/>
            <PersonDetailsArrayOfObject personDetails={personDetails} />
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
    </>
  );
}

export default App;
