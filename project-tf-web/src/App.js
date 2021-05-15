/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'
import TopNavBar from "./components/TopNavBar"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Dashboard from './features/dashboard'
import PipelineInstances from './features/pipeline_activity'
import PipelineForm from './features/pipeline_form'
import ValueStreamMap from './features/vsm'
import './App.css';

function App() {
  return (
    <Router>
      <TopNavBar />
      <div tw="bg-gray-50 h-full">
        <div tw="p-4">
          <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/pipelines/new">
              <PipelineForm />
            </Route>
            <Route path="/pipelines/:pipelineId">
              <PipelineInstances />
            </Route>
            <Route path="/vsm">
              <ValueStreamMap />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App;
