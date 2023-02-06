import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, IRootState } from "./store";






export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;

export const useAppDispatch: () => AppDispatch = useDispatch; //