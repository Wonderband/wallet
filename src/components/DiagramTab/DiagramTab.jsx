// import { useDispatch } from 'react-redux';
import { Chart } from 'components/Chart/Chart';
import { Table } from 'components/Table/Table';

export const DiagramTab = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]); ????????

  return (
    <>
      <div>I'm DIAGRAM TAB</div>
      <Chart />
      {/* balance={balance}
          data={stats?.data ? stats.data : []}
          colors={colors} */}
      <Table />
    </>
  );
};
