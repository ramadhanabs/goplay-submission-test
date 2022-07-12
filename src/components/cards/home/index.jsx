/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import Button from '../../button';

const styles = {
  wrapper: css`
    border-radius: 8px;
    color: white;
    background: #343a40;
    height: 100%;
  `,
  content_wrapper: css`
    padding: 16px;
  `,
  img_wrapper: css`
    height: 160px;
    width: 100%;
    border-radius: 8px 8px 0px 0px;
    overflow: hidden;
    z-index: -1;
  `,
  img: css`
    object-fit: cover;
    object-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    border-radius: 8px 8px 0px 0px;
  `,
};

function CardHome({ title, description, imgUrl, route, ...others }) {
  const navigate = useNavigate();

  const handleRoute = () => {
    navigate(route);
  };

  return (
    <div css={styles.wrapper} {...others} data-testid="cardHome">
      <div css={styles.img_wrapper}>
        <img
          css={styles.img}
          src={imgUrl}
          alt="test-1"
          data-testid="cardHomeBanner"
        />
      </div>
      <div css={styles.content_wrapper}>
        <h3 className="mb-2" data-testid="cardTitle">
          {title}
        </h3>
        <p className="regular-metadata-xs mb-3">{description}</p>
        <Button onClick={handleRoute} data-testid="cardButtonNavigate">
          Try this!
        </Button>
      </div>
    </div>
  );
}

export default CardHome;
