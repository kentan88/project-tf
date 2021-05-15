/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'
import {Link} from "react-router-dom";
import {PlayIcon, StopIcon, CheckIcon} from "@heroicons/react/solid";

const PipelineBox = ({ pipeline }) => {
  return (
    <div tw="bg-white overflow-hidden border border-gray-300 divide-y divide-gray-300">
      <div tw="bg-gray-100 px-4 py-2">
        <div tw="flex justify-between">
          <div tw="text-sm leading-6 font-medium flex items-center">
            <div tw="mr-1">{ pipeline.name }</div>
            <button>
              <PlayIcon tw="h-6 w-6" aria-hidden="true"/>
            </button>
          </div>

          <div>
            <Link tw="text-sm text-blue-500 underline" to={`/pipelines/${pipeline.id}`}>History</Link>
          </div>
        </div>
      </div>
      <div tw="">
        <div tw="p-4">
          <div tw="text-xs mb-3">Instance: {pipeline.latest_pipeline_instance?.instance_num}</div>
          <div tw="text-xs">Triggered by changes</div>
          <div tw="text-xs">on {pipeline.latest_pipeline_instance?.created_at}</div>
          <div tw="flex -mx-1">
            {
              pipeline.latest_pipeline_instance?.stage_instances.map((stage_instance) => {
                return (
                  <div tw="px-3 py-1 m-1"
                       css={[
                         stage_instance.status === "in_progress" && tw`bg-yellow-300`,
                         stage_instance.status === "succeeded" && tw`bg-green-400`,
                         stage_instance.status === "failed" && tw`bg-red-500`,
                       ]}>
                    <CheckIcon tw="h-4 w-4 text-white" aria-hidden="true" />
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default PipelineBox