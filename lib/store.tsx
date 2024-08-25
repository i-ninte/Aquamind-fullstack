import Prediction from "@/model/Prediction";
import { create } from "zustand";

interface TokenState {
  prediction: []
  
}

const useStore = create((set:any) => ({
  prediction: [],
  setPrediction: (prediction:any) => set({ prediction }),
 
}));

export default useStore;
