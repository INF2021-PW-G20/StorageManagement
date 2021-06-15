import {Show, SimpleShowLayout, TextField, NumberField, Button} from "react-admin";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export const StorageShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            {/* <NumberField source="id" /> */}
            <NumberField source="corridor" />
            <NumberField source="shelf" />
            <NumberField source="box" />
            <TextField source="name" />
            <Button href="/#/storages" label="Back" icon={ArrowBackIcon}/>
        </SimpleShowLayout>
    </Show>
);