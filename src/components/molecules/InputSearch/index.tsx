import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

type PropsInputSearch = {
  setValue?: (val:string) => void,
  value?: string,
  placeholder?: string,
}

const InputSearch = ({setValue = () => {}, value="", placeholder=""}: PropsInputSearch) => {
  return (
    <Paper
      sx={{ display: 'flex', alignItems: 'center', width: "100%" }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        onChange={( e: React.ChangeEvent<HTMLInputElement> )=> setValue(e.target.value)}
        value={value}
        placeholder={placeholder}
      />
      <IconButton sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default InputSearch