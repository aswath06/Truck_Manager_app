import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props : any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      height="30px"
      viewBox="0 -960 960 960"
      width="30px"
      fill="black"
      {...props}
    >
      <Path d="M240-120q-17 0-28.5-11.5T200-160v-82q-18-20-29-44.5T160-340v-380q0-83 77-121.5T480-880q172 0 246 37t74 123v380q0 29-11 53.5T760-242v82q0 17-11.5 28.5T720-120h-40q-17 0-28.5-11.5T640-160v-40H320v40q0 17-11.5 28.5T280-120h-40zm242-640h224-448 224zm158 280H240h480-80zm-400-80h480v-120H240v120zm100 240q25 0 42.5-17.5T400-380q0-25-17.5-42.5T340-440q-25 0-42.5 17.5T280-380q0 25 17.5 42.5T340-320zm280 0q25 0 42.5-17.5T680-380q0-25-17.5-42.5T620-440q-25 0-42.5 17.5T560-380q0 25 17.5 42.5T620-320zM258-760h448q-15-17-64.5-28.5T482-800q-107 0-156.5 12.5T258-760zm62 480h320q33 0 56.5-23.5T720-360v-120H240v120q0 33 23.5 56.5T320-280z" />
    </Svg>
  )
}

export default SvgComponent
