import { useSelector } from 'react-redux';
//import { RootState } from '../../store/store';

export function useCounterCount() {
    return useSelector((state) => state.counter.value);
}