/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'
// import {ChevronDownIcon} from "@heroicons/react/solid";
import PipelineBox from "./PipelineBox";
import {Link} from "react-router-dom";

const PipelineGroupBox = ({ group, pipelines }) => {
  return (
    <div tw="bg-white overflow-hidden border border-gray-300 divide-y divide-gray-300">
      <div tw="bg-gray-200 px-4 py-2">
        <div tw="flex justify-between items-center">
          <div tw="text-base font-bold text-gray-900">{ group }</div>
          <Link
            to="/pipelines/new"
            tw="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium text-gray-100 bg-blue-600 hover:bg-blue-700 focus:outline-none"
          >
            New Pipeline
            {/*<ChevronDownIcon tw="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />*/}
          </Link>
        </div>
      </div>
      <div tw="grid grid-cols-4 gap-4 p-4">
        {
          pipelines.map((pipeline) => {
            return (
              <PipelineBox key={pipeline.id} pipeline={pipeline} />
            )
          })
        }
      </div>
    </div>
  )
}

export default PipelineGroupBox