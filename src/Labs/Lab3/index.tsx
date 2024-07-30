import Add from "./Add";
import AddingAndRemovingToFromArrays from "./AddingAndRemovingToFromArrays";
import AddPathParameters from "./AddPathParameters";
import ArrowFunctions from "./ArrowFunctions";
import BooleanVariables from "./BooleanVariables";
import Classes from "./Classes";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import ConditionalOutputInline from "./ConditionalOutputInline";
import Destructing from "./Destructing";
import FunctionDestructing from "./FunctionDestructing";
import House from "./House";
import IfElse from "./IfElse";
import ImpliedReturn from "./ImpliedReturn";
import JsonStringify from "./JsonStringify";
import LegacyFunctions from "./LegacyFunctions";
import MapFunction from "./MapFunction";
import PathParameters from "./PathParameters";
import SimpleArrays from "./SimpleArrays";
import Spreading from "./Spreading";
import Square from "./square";
import Styles from "./Styles";
import TernaryOperator from "./TernaryOperator";
import TodoItem from "./todo/TodoItem";
import TodoList from "./todo/TodoList";
import VariablesAndConstants from "./VariablesAndConstrants";
import VariableTypes from "./VariablesTypes";
import Highlight from "./Highlight";
import DestructingImports from "./DestructingImports";
import TemplateLiterals from "./TemplateLiterals";
import ArrayIndexAndLength from "./ArrayIndexAndLength";
import ForLoops from "./ForLoops";
import FindFunction from "./FindFunction";
import FindIndex from "./FindIndex";
import FilterFunction from "./FilterFunction";
import { useSelector } from "react-redux";

export default function Lab3() {
  const { todos } = useSelector((state: any) => state.todosReducer);
    return (
      <div id="wd-lab3" className="container-fluid">
        <h2>Lab 3</h2>

        <ul className="list-group">
        {todos.map((todo: any) => (
          <li className="list-group-item" key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
      <hr />


        <VariablesAndConstants/>

        <VariableTypes />
        <br />
        <BooleanVariables />
        <br />
        <IfElse/>
        <br />
        <TernaryOperator />
        <br />
        <ConditionalOutputIfElse />
        <hr />
        <br />
        <ConditionalOutputInline/>
        <hr />
        <br />
        <LegacyFunctions />
        <br />
        <ArrowFunctions />
        <br />
        <ImpliedReturn />
        <TemplateLiterals />
        <SimpleArrays />
        <ArrayIndexAndLength />
        <AddingAndRemovingToFromArrays />
        <ForLoops />
        <MapFunction />
        <FindFunction />
        <FindIndex />
        <FilterFunction />
        <JsonStringify />
        <House />
        <TodoItem />
        <TodoList />
        <Spreading />
        <Destructing />
        <FunctionDestructing />
        <DestructingImports />

        <Classes/>
        <Styles />
        <hr />
        <Add a={3} b={4} />
        <h4>Square of 4</h4>
        <Square>4</Square>
        <hr />
        <h4>High light</h4>
        <Highlight>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
        vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
        </Highlight>
        <PathParameters />
        <hr />
      </div>
    );
  }
  