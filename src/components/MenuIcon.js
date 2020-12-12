import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function MenuIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke={props.color || 'currentColor'}
      width={props.size || 24}
      height={props.size || 24}
      {...props}>
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h7"
      />
    </Svg>
  );
}

export default MenuIcon;
