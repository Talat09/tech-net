// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../redux/store";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../redux/features/Counter/counterSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const Home = () => {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <div className="flex justify-center items-center gap-4">
      <button
        className="p-3 border-2 border-yellow-500 rounded-md mt-8"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <p className="text-green-500 text-3xl mt-8">Count: {count}</p>
      <button
        className="p-3 border-2 border-yellow-500 rounded-md mt-8"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <button
        className="p-3 border-2 border-yellow-500 rounded-md mt-8"
        onClick={() => dispatch(incrementByAmount(4))}
      >
        IncrementByAmount
      </button>
    </div>
  );
};

export default Home;
