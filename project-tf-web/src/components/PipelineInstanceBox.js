/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'
import {CheckIcon} from "@heroicons/react/solid";

const PipelineInstanceBox = ({ pipeline, pipelineInstance }) => {
  return (
    <div tw="bg-white overflow-hidden border border-gray-300 divide-y divide-gray-300 p-4">
      <div tw="flex">
        <div tw="w-1/5">
          <div tw="text-xs mb-3">Instance: {pipelineInstance.instance_num}</div>
          <div tw="text-xs">Triggered by changes</div>
          <div tw="text-xs">on {pipelineInstance.created_at}</div>
        </div>

        <div>
          <div tw="flex">
            {
              pipelineInstance.stage_instances.map((stage_instance) => {
                return (
                  <div tw="bg-green-400 px-3 m-1 h-10 flex items-center"
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
export default PipelineInstanceBox