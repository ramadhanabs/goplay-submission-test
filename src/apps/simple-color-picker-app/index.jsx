/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { useState, useEffect } from 'react';
import { generateArrayofColor } from '../../lib/colorGenerator';
import Button from '../../components/button';
import ColorBox from '../../components/button/color-box';

const styles = {
  control_bar: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 16px;
  `,
  color_wrapper: css`
    padding: 16px;
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
};

function SimpleColorPickerApp() {
  const [data, setData] = useState([]);
  const [selectedColor, setColor] = useState(null);
  const [selectedCollection, setCollection] = useState(1);

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

  useEffect(() => {
    const generateColor = () => {
      const arrayOfColor = generateArrayofColor();
      setData(arrayOfColor);
    };

    generateColor();
  }, []);

  return (
    <div className="row">
      <div className="col-6">
        <div className="mb-3" css={styles.control_bar}>
          <Button onClick={handlePrevCollection}>Previous</Button>
          <p className="bold-heading-6">Collection {selectedCollection}</p>
          <Button onClick={handleNextCollection}>Next</Button>
        </div>
        <div css={styles.color_wrapper}>
          {Object.keys(data).length > 0 &&
            data[`collection_${selectedCollection}`].map((color) => (
              <ColorBox
                isActive={color === selectedColor}
                color={color}
                onClick={() => handleClickColor(color)}
              />
            ))}
        </div>
      </div>
      <div className="col-6">
        <h3>Selected color:</h3>
        <p>{selectedColor}</p>
      </div>
    </div>
  );
}

export default SimpleColorPickerApp;
