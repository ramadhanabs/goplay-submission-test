/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import ArrowRight from '../../assets/icons/arrow-right.svg';

const styles = {
  detail_wrapper: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  img_wrapper: css`
    margin: 8px;
    aspect-ratio: 1/1;
    overflow: hidden;
  `,
  img: css`
    object-fit: cover;
    object-position: center;
    background-repeat: no-repeat;
    width: 100%;
    aspect-ratio: 1/1;
  `,
  button: css`
    display: flex;
    align-items: center;
    color: #fff;
    text-decoration: none;
    opacity: 0.5;

    &:hover {
      opacity: 1;
    }
  `,
  icon: css`
    width: 16px;
    height: 16px;
  `,
};

function GridView({ data }) {
  const handleOpenLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
    <div className="row" style={{ flexWrap: 'wrap' }}>
      {data.length > 0 &&
        data.map((img) => (
          <div className="col my-2">
            <div css={styles.img_wrapper}>
              <img
                css={styles.img}
                src={img.url}
                alt={`picture-${img.author}`}
                loading="lazy"
              />
            </div>
            <div className="m-2">
              <p className="bold-heading-4 mb-2">
                #ID-
                {img.id}
              </p>
              <div css={styles.detail_wrapper}>
                <p className="bold-metadata">{img.author}</p>
                <a
                  css={styles.button}
                  className="regular-metadata"
                  href="#"
                  onClick={() => handleOpenLink(img.url)}
                >
                  Original Image
                  <img
                    className="ml-2"
                    css={styles.icon}
                    src={ArrowRight}
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default GridView;
