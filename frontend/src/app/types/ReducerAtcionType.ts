// export type reducerActioinType<T> = {
//   type: string;
//   payload: {
//     [key: string]: T;
//   };
// };

export type ReducerActioinType = {
  type: string;
  payload: {
    [key: string]: any;
  };
};
