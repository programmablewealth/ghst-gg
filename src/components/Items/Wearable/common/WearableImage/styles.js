import { makeStyles } from "@mui/styles";
import {alpha} from "@mui/system";

export default makeStyles( theme => ({
    iconWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '65%',
        marginBottom: 4,

        '.tooltip-wearable &': {
            minHeight: 60
        }
    },
    icon: {
        width: '60%',
        maxHeight: 80,
        '.tooltip-wearable &': { // icon
            maxHeight: 50
        }
    }
}));