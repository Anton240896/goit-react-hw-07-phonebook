import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = evt => {
    dispatch(setFilter(evt.target.value));
  };

  return (
    <label>
      Find contacts:
      <input type="text" name="filter" value={filter} onChange={handleChange} />
    </label>
  );
};
