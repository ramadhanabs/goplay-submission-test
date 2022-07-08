/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { useState, useEffect } from 'react';
import Button from '../../components/button';

const url = 'https://picsum.photos/v2/list';

const styles = {
  img_wrapper: css`
    margin: 8px;
    aspect-ratio: 1/1;
    border-radius: 4px;
    overflow: hidden;
  `,
  img: css`
    object-fit: cover;
    object-position: center;
    background-repeat: no-repeat;
    width: 100%;
    aspect-ratio: 1/1;
  `,
  img_list_wrapper: css`
    height: 50px;
    width: 50px;
    border-radius: 4px;
    overflow: hidden;
  `,
  column_list: css`
    display: flex;
    align-items: center;
    padding: 8px;
    justify-content: space-between;
    border-radius: 4px;

    &:nth-child(odd) {
      background: black;
    }
  `,
};

function ImagesContainerApp() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState({
    page: 1,
    limit: 10,
  });
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `${url}?page=${query.page}&limit=${query.limit}`
        );
        const response = await res.json();
        setData(response);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);
  return (
    <div>
      <h3 className="m-2">Grid View</h3>
      <div className="row" style={{ flexWrap: 'wrap' }}>
        {data.length > 0 &&
          data.map((img) => (
            <div className="col">
              <div css={styles.img_wrapper}>
                <img
                  css={styles.img}
                  src={img.download_url}
                  alt={`picture-${img.author}`}
                />
              </div>
            </div>
          ))}
      </div>

      <h3 className="m-2">List View</h3>
      {data.length > 0 &&
        data.map((img) => (
          <div css={styles.column_list}>
            <div className="row" style={{ alignItems: 'center' }}>
              <div css={styles.img_list_wrapper}>
                <img
                  css={styles.img}
                  src={img.download_url}
                  alt={`picture2-${img.author}`}
                />
              </div>
              <p className="bold-body pl-2">{img.author}</p>
            </div>
            <Button>Original Image</Button>
          </div>
        ))}
    </div>
  );
}

export default ImagesContainerApp;
