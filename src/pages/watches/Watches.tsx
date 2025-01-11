import { useEffect, useMemo, useState } from 'react';
import { getDocs } from 'firebase/firestore';
// import { useNavigate } from 'react-router';
import { watchesCollectionRef } from '@/configs/firebaseConfig';
import { IWatch } from '@/models/watchModel';
import { Skeleton, Table, type TableProps } from 'antd';

const DeepARComponent = () => {
  // const navigate = useNavigate();

  const [watches, setWatches] = useState<IWatch[]>([]);
  const [isLoadingWatches, setIsLoadingWatches] = useState(false);

  // Use useMemo to memoize the query function only if db or watchesCollectionRef changes
  const getWatchesQuery = useMemo(
    () => async () => {
      try {
        setIsLoadingWatches(true);
        const snapshot = await getDocs(watchesCollectionRef);
        const filteredData = snapshot.docs.map((doc) => ({
          ...(doc.data() as IWatch),
          id: doc.id
        }));
        setWatches(filteredData);
        setIsLoadingWatches(false);
      } catch (error) {
        console.error(error);
      }
    },
    []
  );

  useEffect(() => {
    getWatchesQuery();
  }, [getWatchesQuery]);

  const columns: TableProps<IWatch>['columns'] = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    }
  ];

  if (isLoadingWatches) return <Skeleton />;

  return <Table<IWatch> rowKey='id' columns={columns} dataSource={watches} />;
};

export default DeepARComponent;
