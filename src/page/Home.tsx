import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { decrement, increment } from "../redux/features/Counter/counterSlice";

const Home = () => {
  const { count } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();
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
    </div>
  );
};

export default Home;
