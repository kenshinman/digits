import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function PauseIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width={props.size}
      height={props.size}
      stroke={props.color || 'currentColor'}
      {...props}>
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </Svg>
  );
}

export default PauseIcon;
