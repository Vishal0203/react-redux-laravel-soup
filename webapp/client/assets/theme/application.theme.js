import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {deepOrange600} from 'material-ui/styles/colors';

export const overlayColor = deepOrange600;
export const brandColor = '#873260';
export const mainColor = '#FFFFFF';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: mainColor,
    secondaryColor: brandColor,
  },
  appBar: {
    height: 70,
    textColor: brandColor
  },
});

export default muiTheme;
