type Props = {
  handleLoadMore?: () => void;
};

const BtnLoadMore = ({ handleLoadMore }: Props) => {
  return (
    <div className="flex justify-center ">
      <button
        onClick={handleLoadMore}
        className=" w-20 h-10 underline text-mainBtn hover:text-active mt-[100px]"
      >
        Load more
      </button>
    </div>
  );
};

export default BtnLoadMore;
