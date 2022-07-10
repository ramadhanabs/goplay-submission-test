/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { useState, useEffect } from 'react';
import { generateArrayofColor } from '../../lib/colorGenerator';
import IconButton from '../../components/button/icon';
import ColorBox from '../../components/button/color-box';
import ArrowLeft from '../../assets/icons/arrow-left.svg';
import ArrowRight from '../../assets/icons/arrow-right.svg';
import CopyIcon from '../../assets/icons/copy.svg';
import PaginationDots from '../../components/pagination-dots';

const styles = {
  wrapper: css`
    padding: 16px;
    border-radius: 16px;
    background: #343a40;
    color: white;
  `,
  control_bar: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  color_wrapper: css`
    padding: 16px 0px;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 10px;
  `,
  color_box: css`
    width: 100%;
    height: 30px;
    border-radius: 4px;
    margin: 4px;
    cursor: pointer;
    border: none;
  `,
  hex_wrapper: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    border-radius: 4px;
    background: #343a40;
    color: white;
    width: 300px;
  `,
};

function SimpleColorPickerApp() {
  const [data, setData] = useState([]);
  const [selectedColor, setColor] = useState(null);
  const [selectedCollection, setCollection] = useState(1);
  const [isShowAlert, setShowAlert] = useState(false);

  const handleClickColor = (val) => {
    setColor(val);
  };

  const handleNextCollection = () => {
    if (selectedCollection === 8) return;
    setCollection(selectedCollection + 1);
  };

  const handlePrevCollection = () => {
    if (selectedCollection === 1) return;
    setCollection(selectedCollection - 1);
  };

  const showAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 1000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(selectedColor);
    showAlert();
  };

  useEffect(() => {
    const generateColor = () => {
      const arrayOfColor = generateArrayofColor();
      setData(arrayOfColor);
    };

    generateColor();
  }, []);

  return (
    <div>
      <div css={styles.wrapper}>
        <div css={styles.control_bar}>
          <IconButton onClick={handlePrevCollection} icon={ArrowLeft} />
          <h3 style={{ textAlign: 'center' }}>
            Collection {selectedCollection}
          </h3>
          <IconButton onClick={handleNextCollection} icon={ArrowRight} />
        </div>
      </div>
      <div className="mb-3" css={styles.color_wrapper}>
        {Object.keys(data).length > 0 &&
          data[`collection_${selectedCollection}`].map((color) => (
            <ColorBox
              isActive={color === selectedColor}
              color={color}
              onClick={() => handleClickColor(color)}
            />
          ))}
      </div>
      <PaginationDots count={Object.keys(data)} isActive={selectedCollection} />
      <div>
        <p className="regular-heading-3 mb-3">Hex Color</p>
        <div css={styles.hex_wrapper} className="mb-2">
          <p className="bold-body">{selectedColor || '--'}</p>
          <IconButton icon={CopyIcon} onClick={handleCopy} />
        </div>
        {isShowAlert && (
          <p className="regular-metadata success-100--text">
            Success copy value!
          </p>
        )}
      </div>
    </div>
  );
}

export default SimpleColorPickerApp;
