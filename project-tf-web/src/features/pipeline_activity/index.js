/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'
import PipelineInstanceBox from "../../components/PipelineInstanceBox";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {sagaActions} from "../../sagaActions";
import { withRouter } from "react-router-dom"

const PipelineInstances = (props) => {
  const { match: { params: { pipelineId } } } = props;

  const dispatch = useDispatch();
  const pipeline_instances = useSelector(state => state.pipeline_activity.pipeline_instances);
  const pipeline = useSelector(state => state.pipeline_activity.pipeline);

  console.log("pipeline_instances", pipeline_instances);

  useEffect(() => {
    dispatch({ type: sagaActions.FETCH_PIPELINE_ACTIVITY, pipelineId: pipelineId })
  }, [])

  return (
    <>
      <div tw="mb-4">
        <h1 tw="text-3xl font-bold text-gray-900">Pipeline Activity [{pipeline.name}]</h1>
      </div>

      <main>
        <div tw="grid grid-cols-1 gap-4">
          {
            pipeline_instances.map((pipelineInstance) => {
              return (
                <PipelineInstanceBox key={pipelineInstance.id}  pipeline={pipeline} pipelineInstance={pipelineInstance} />
              )
            })
          }
        </div>
      </main>
    </>
  )
}

export default withRouter(PipelineInstances)