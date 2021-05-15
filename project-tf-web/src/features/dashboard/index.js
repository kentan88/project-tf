/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'
import { useEffect} from "react"
import { useDispatch, useSelector } from "react-redux";
import { sagaActions } from "../../sagaActions";
import PipelineGroupBox from "../../components/PipelineGroupBox";

const groupBy = key => array =>
  array.reduce((objectsByKeyValue, obj) => {
    const value = obj[key];
    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
    return objectsByKeyValue;
  }, {});

const Dashboard = () => {
  const dispatch = useDispatch();
  const pipelineGroups = useSelector(state => groupBy('group')(state.pipelines.pipelines));

  useEffect(() => {
    dispatch({ type: sagaActions.FETCH_PIPELINES })
  }, [])

  return (
      <div tw="grid grid-cols-1 gap-4">
        {
          Object.keys(pipelineGroups).map((group) => {
            return (
              <PipelineGroupBox key={group} group={group} pipelines={pipelineGroups[group]} />
            )
          })
        }
      </div>
  )
}

export default Dashboard