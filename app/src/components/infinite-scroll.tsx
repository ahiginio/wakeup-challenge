import { cn } from '@/lib/utils';
import { useCallback, useEffect, useRef, useState } from 'react';

interface Props {
  children: React.ReactNode;
  fetchData: (page: number) => Promise<void>;
  columns?: number;
}

export default function InfiniteScroll(props: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const columns = props.columns || 2;
  const [page, setPage] = useState<number>(1);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const handleScroll = useCallback(() => {
    const container = containerRef.current;

    if (container) {
      const { scrollTop, clientHeight, scrollHeight } = container;
      const bottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;
      if (bottom && !isFetching) {
        setPage((p) => p + 1);
      }
    }
  }, [isFetching]);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => {
        container.removeEventListener('scroll', handleScroll);
      };
    }
  }, [handleScroll]);

  useEffect(() => {
    const fetchMoreData = async () => {
      setIsFetching(true);
      await props.fetchData(page);
      setIsFetching(false);
    };

    fetchMoreData();
  }, [page]);

  return (
    <div
      className={cn(`grid grid-cols-${columns} gap-4 pr-2`)}
      ref={containerRef}
      style={{ overflowY: 'auto', maxHeight: '88vh' }}>
      {props.children}
    </div>
  );
}
