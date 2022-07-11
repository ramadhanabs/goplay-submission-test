/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { useState, useEffect, useContext } from 'react';
import IconButton from '../../components/button/icon';
import GridIcon from '../../assets/icons/grid.svg';
import ListIcon from '../../assets/icons/list.svg';
import ArrowLeft from '../../assets/icons/arrow-left.svg';
import ArrowRight from '../../assets/icons/arrow-right.svg';
import GridView from '../../components/gallery/grid';
import ListView from '../../components/gallery/list';
import Loading from '../../components/loading';
import { getUnsplashSource } from '../../lib/helper/linkGenerator';
import { DisplayContext } from '../../lib/context/display-context';

const url = 'https://picsum.photos/v2/list';

const styles = {
  header_wrapper: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
};

function ImagesContainerApp() {
  const { displayMode, handleChangeMode } = useContext(DisplayContext);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState({
    page: 1,
    limit: 10,
  });
  const [isLoading, setLoading] = useState(false);

  const handlePagination = ({ currentTarget }) => {
    if (currentTarget.name === 'prev') {
      if (query.page === 1) return;
      setQuery((prev) => ({
        ...prev,
        page: prev.page - 1,
      }));
    } else {
      setQuery((prev) => ({
        ...prev,
        page: prev.page + 1,
      }));
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `${url}?page=${query.page}&limit=${query.limit}`
        );
        const response = await res.json();
        const newArray = response.map((img) => ({
          ...img,
          url: getUnsplashSource(img.url),
        }));
        setData(newArray);
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
        <h2>Images Container</h2>
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

      <div
        className="row my-3"
        style={{ alignItems: 'center', justifyContent: 'center' }}
      >
        <IconButton
          name="prev"
          icon={ArrowLeft}
          className="mr-1"
          onClick={handlePagination}
        />
        <p className="bold-body mx-3">Page {query.page}</p>
        <IconButton name="next" icon={ArrowRight} onClick={handlePagination} />
      </div>
    </div>
  );
}

export default ImagesContainerApp;
