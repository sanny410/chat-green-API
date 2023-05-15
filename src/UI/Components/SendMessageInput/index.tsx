import {FunctionComponent} from 'react';

import {observer} from 'mobx-react';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import SendIcon from '@mui/icons-material/Send';
import {useForm, SubmitHandler} from 'react-hook-form';
import {useUpdateChat} from 'Services/Adapters/updateChat';
import {useUserStore} from 'Services/Adapters/store';

interface Inputs {
    message: string;
}

const SendMessageInput: FunctionComponent = () => {
    const {activeChat} = useUserStore();
    const {updateChat} = useUpdateChat();

    const {register, handleSubmit, reset} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        await updateChat({winContact: activeChat.win, message: data.message});
        reset();
    };

    return (
        <div className="send-message-input">
            <form onClick={handleSubmit(onSubmit)}>
                <FormControl sx={{width: '100%'}}>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={'text'}
                        {...register('message', {required: true})}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton type={'submit'}>
                                    <SendIcon />
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
            </form>
        </div>
    );
};

export default observer(SendMessageInput);
