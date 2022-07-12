/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import Button from '../button';
import IconButton from '../button/icon';
import ArrowRight from '../../assets/icons/arrow-right.svg';

const styles = {
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
    border-radius: 8px;
    background: #2b3238;
    margin: 8px 0px;

    &:nth-child(odd) {
      background: #343a40;
    }
  `,
};

function ListView({ data }) {
  const handleOpenLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
    <div className="my-4" data-testid="listView">
      {data.length > 0 &&
        data.map((img) => (
          <div css={styles.column_list} key={img.id} data-testid="listImage">
            <div className="row" style={{ alignItems: 'center' }}>
              <div css={styles.img_list_wrapper}>
                <img
                  css={styles.img}
                  src={img.url}
                  alt={`picture2-${img.author}`}
                  loading="lazy"
                />
              </div>
              <p className="bold-body pl-2">{img.author}</p>
            </div>
            <IconButton
              icon={ArrowRight}
              onClick={() => handleOpenLink(img.url)}
            />
          </div>
        ))}
    </div>
  );
}

export default ListView;
