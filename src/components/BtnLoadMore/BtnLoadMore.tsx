import { FC, useState } from "react";
import { useAppDispatch } from "../../hooks/hooks";
import { loadMoreThunk } from "../../Redux/carRent/operations";

const BtnLoadMore: FC = () => {
  const dispatch = useAppDispatch();

  const handleLoadMore = () => {
    dispatch(loadMoreThunk());
  };

  return (
    <div className="flex justify-center">
      <button onClick={handleLoadMore} className=" w-20 h-10">
        Load more
      </button>
    </div>
  );
};

export default BtnLoadMore;
