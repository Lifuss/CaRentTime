type Props = {
  handleLoadMore?: () => void;
};

const BtnLoadMore = ({ handleLoadMore }: Props) => {
  return (
    <div className="flex justify-center">
      <button onClick={handleLoadMore} className=" w-20 h-10">
        Load more
      </button>
    </div>
  );
};

export default BtnLoadMore;
