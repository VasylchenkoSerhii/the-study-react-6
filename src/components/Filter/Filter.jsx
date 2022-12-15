import { useDispatch, useSelector  } from "react-redux";
import { changeFilter } from "redux/filterSlice";
import { getFilter } from "redux/selectors";
import { FilterStyle } from "./Filter.styled";

export default function Filter() {
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    const handleChange = e => {
        const { value } = e.target;
        dispatch(changeFilter(value));
    }

    return (
        <FilterStyle
            type="text"
            value={filter}
            onChange={handleChange}
            placeholder="Finde contact"
        />
    );
};
