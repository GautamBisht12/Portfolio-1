import { useDispatch, useSelector } from "react-redux";
import {
  toggleDarkMode,
  selectDarkMode,
} from "../store/features/darkModeSlice";

const DarkMode = () => {
  const dispatch = useDispatch();
  const isDarkModeEnabled = useSelector(selectDarkMode);

  const handleDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <div>
      <div className="cursor-pointer text-2xl" onClick={() => handleDarkMode()}>
        {isDarkModeEnabled ? "☀️" : "🌕"}
      </div>
    </div>
  );
};

export default DarkMode;
