/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { useState, useEffect } from 'react';
import Button from '../../components/button';
import IconButton from '../../components/button/icon';
import GridIcon from '../../assets/icons/grid.svg';
import ListIcon from '../../assets/icons/list.svg';
import GridView from '../../components/gallery/grid';
import ListView from '../../components/gallery/list';
import Loading from '../../components/loading';

const url = 'https://picsum.photos/v2/list';

const styles = {
  header_wrapper: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
};

function ImagesContainerApp() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState({
    page: 1,
    limit: 10,
  });
  const [isLoading, setLoading] = useState(false);
  const [displayMode, setDisplayMode] = useState('');

  const handleChangeMode = ({ currentTarget }) => {
    const { name } = currentTarget;
    setDisplayMode(name);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `${url}?page=${query.page}&limit=${query.limit}`
        );
        const response = await res.json();
        setData(response);
        setDisplayMode('grid');
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div css={styles.header_wrapper} className="m-2">
        <h3>{displayMode.toUpperCase()} View</h3>
        <div className="row">
          <IconButton
            name="grid"
            icon={GridIcon}
            className="mr-1"
            isActive={displayMode === 'grid'}
            onClick={handleChangeMode}
          />
          <IconButton
            name="list"
            icon={ListIcon}
            isActive={displayMode === 'list'}
            onClick={handleChangeMode}
          />
        </div>
      </div>

      {displayMode === 'grid' ? (
        <GridView data={data} />
      ) : (
        <ListView data={data} />
      )}
    </div>
  );
}

export default ImagesContainerApp;
