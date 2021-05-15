/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'
import {FamDiagram} from 'basicprimitivesreact';
import data from "../../data/dataset";
import {Link} from "react-router-dom";
import PipelineBox from "../../components/PipelineBox";

const config = {
  "name": "FamDiagram",
  "classPrefix": "famdiagram",
  "navigationMode": 1,
  "pageFitMode": 0,
  "minimalVisibility": 1,
  "minimumVisibleLevels": 1,
  "orientationType": 2,
  "verticalAlignment": 1,
  "arrowsDirection": 2,
  showExtraArrows: false,
  // "showExtraArrows": true,
  // "extraArrowsMinimumSpace": 30,
  "groupByType": 2,
  "alignBylevels": true,
  "enableMatrixLayout": false,
  "minimumMatrixSize": 2,
  "maximumColumnsInMatrix": 6,
  "hideGrandParentsConnectors": false,
  "elbowType": 3,
  "bevelSize": 4,
  "elbowDotSize": 4,
  "emptyDiagramMessage": "Diagram is empty.",
  "items": data,
  "cursorItem": null,
  "highlightItem": null,
  "highlightGravityRadius": 40,
  "selectedItems": [],
  "hasSelectorCheckbox": 0,
  "selectCheckBoxLabel": "",
  "selectionPathMode": 0,
  "neighboursSelectionMode": 0,
  "showFrame": false,
  "frameInnerPadding": {
    "left": 2,
    "top": 2,
    "right": 2,
    "bottom": 2
  },
  "frameOuterPadding": {
    "left": 2,
    "top": 2,
    "right": 2,
    "bottom": 2
  },
  "padding": {
    "left": 10,
    "top": 10,
    "right": 10,
    "bottom": 10
  },
  "templates": [
    {
      "name": "defaultTemplate",
      "isActive": false,
      "itemSize": {
        "width": 200,
        "height": 120
      },
      "itemBorderWidth": 1,
      "itemTemplate": null,
      "minimizedItemShapeType": 6,
      "minimizedItemSize": {
        "width": 16,
        "height": 16
      },
      "minimizedItemCornerRadius": 8,
      "minimizedItemLineWidth": 1,
      "minimizedItemBorderColor": null,
      "minimizedItemLineType": 0,
      "minimizedItemFillColor": null,
      "minimizedItemOpacity": 1,
      "highlightPadding": {
        "left": 4,
        "top": 4,
        "right": 4,
        "bottom": 4
      },
      "highlightBorderWidth": 1,
      "highlightTemplate": null,
      "cursorPadding": {
        "left": 3,
        "top": 3,
        "right": 3,
        "bottom": 3
      },
      "cursorBorderWidth": 2,
      "cursorTemplate": null,
      "hasButtons": 0,
      "onButtonsRender": null,
      onItemRender: ({ context: itemConfig }) => {
        // const itemTitleColor = itemConfig.itemTitleColor != null ? itemConfig.itemTitleColor : Colors.RoyalBlue;

        return <div tw="bg-white overflow-hidden border border-gray-300 divide-y divide-gray-300 h-full">
          <div tw="bg-gray-200 px-4 py-2">
            <div tw="flex justify-between items-center">
              <div tw="text-base font-bold text-gray-900">{itemConfig.title}</div>
            </div>
          </div>
          <div tw="grid grid-cols-1 gap-4 p-4">
          </div>
        </div>
      }
    },
  ],
  "defaultTemplateName": "defaultTemplate",
  "defaultLabelAnnotationTemplate": null,
  "hasButtons": 0,
  "onButtonsRender": null,
  "onHighlightChanging": null,
  "onHighlightChanged": null,
  "onCursorChanging": null,
  "onCursorChanged": null,
  "onSelectionChanging": null,
  "onSelectionChanged": null,
  "onButtonClick": null,
  "onMouseClick": null,
  "onMouseDblClick": null,
  "onItemRender": null,
  "onHighlightRender": null,
  "onCursorRender": null,
  "normalLevelShift": 20,
  "dotLevelShift": 20,
  "lineLevelShift": 20,
  "normalItemsInterval": 20,
  "dotItemsInterval": 10,
  "lineItemsInterval": 10,
  "cousinsIntervalMultiplier": 0,
  "itemTitleFirstFontColor": "#ffffff",
  "itemTitleSecondFontColor": "#ffffff",
  "minimizedItemShapeType": 6,
  "linesColor": "#000000",
  "linesWidth": 1,
  "linesType": 0,
  "showNeigboursConnectorsHighlighted": false,
  "highlightLinesColor": "#ff0000",
  "highlightLinesWidth": 1,
  "highlightLinesType": 0,
  "linesPalette": [],
  "showCallout": true,
  "calloutMaximumVisibility": 2,
  "calloutPlacementOffset": 100,
  "defaultCalloutTemplateName": null,
  "calloutfillColor": "#000000",
  "calloutBorderColor": null,
  "calloutOffset": 4,
  "calloutCornerRadius": 4,
  "calloutPointerWidth": "10%",
  "calloutLineWidth": 1,
  "calloutOpacity": 0.2,
  "buttonsPanelSize": 42,
  "groupTitlePanelSize": 24,
  "checkBoxPanelSize": 24,
  "groupTitlePlacementType": 2,
  "groupTitleOrientation": 2,
  "groupTitleVerticalAlignment": 1,
  "groupTitleHorizontalAlignment": 0,
  "groupTitleFontSize": "12px",
  "groupTitleFontFamily": "Arial",
  "groupTitleColor": "#4169e1",
  "groupTitleFontWeight": "normal",
  "groupTitleFontStyle": "normal",
  "levelTitlePanelSize": 24,
  "levelTitlePlacementType": 2,
  "levelTitlePlaceInside": false,
  "levelTitleOrientation": 3,
  "levelTitleVerticalAlignment": 1,
  "levelTitleHorizontalAlignment": 0,
  "levelTitleFontSize": "12px",
  "levelTitleFontFamily": "Arial",
  "levelTitleFontColor": "#ffffff",
  "levelTitleColor": "#4169e1",
  "levelTitleFontWeight": "normal",
  "levelTitleFontStyle": "normal",
  "distance": 3,
  "scale": 1,
  "minimumScale": 0.5,
  "maximumScale": 1,
  "showLabels": 0,
  "labelSize": {
    "width": 60,
    "height": 40
  },
  "labelOffset": 1,
  "labelOrientation": 0,
  "labelPlacement": 1,
  "labelFontSize": "10px",
  "labelFontFamily": "Arial",
  "labelColor": "#000000",
  "labelFontWeight": "normal",
  "labelFontStyle": "normal",
  "enablePanning": true,
  "autoSizeMinimum": {
    "width": 800,
    "height": 600
  },
  "autoSizeMaximum": {
    "width": 1024,
    "height": 768
  },
  "horizontalAlignment": 0,
  "childrenPlacementType": 2,
  "leavesPlacementType": 2,
  "connectorType": 0
}

const ValueStreamMap = () => {
  return (
    <div tw="w-full h-screen">
      <FamDiagram centerOnCursor={true} config={config}/>
    </div>
  )
}

export default ValueStreamMap