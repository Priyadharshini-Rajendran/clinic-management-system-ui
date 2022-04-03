import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import AdapterMoment from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
const GetComponents = ({
  type,
  defaultValue,
  value,
  onChange = () => {},
  onClick = () => {},
  label,
  name,
  options = [],
  disablePast = false,
  disableFuture = false,
}) => {
  console.log('value', value);
  console.log('name', name);

  switch (type) {
    case 'text':
      return <TextField placeholder={label} id={name} value={value || ''} onChange={onChange} fullWidth />;
    case 'dropDown':
      return (
        <Select
          labelId={name}
          name={name}
          id={name}
          displayEmpty
          value={value || ''}
          onChange={onChange}
          fullWidth
          inputProps={{ 'aria-label': 'Without label' }}
          defaultValue={defaultValue}
        >
          {options.map((option, index) => {
            return (
              <MenuItem value={option?.id} key={index}>
                {option?.value}
              </MenuItem>
            );
          })}
        </Select>
      );
    case 'number':
      return <TextField type="number" placeholder={label} id={name} value={value || ''} onChange={onChange} fullWidth />;
    case 'multiLineText':
      return <TextField multiline placeholder={label} id={name} value={value || ''} onChange={onChange} fullWidth maxRows={3} />;
    case 'date':
      return (
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DatePicker
            placeholder={label}
            id={name}
            openTo="year"
            views={['year', 'month', 'day']}
            value={value}
            onChange={onChange}
            renderInput={(params) => <TextField {...params} fullWidth />}
            disablePast={disablePast}
            disableFuture={disableFuture}
          />
        </LocalizationProvider>
      );
    default:
      return <div />;
  }
};
export default GetComponents;
