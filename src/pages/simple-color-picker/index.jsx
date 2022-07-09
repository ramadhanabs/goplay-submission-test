/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import AppLayout from '../../components/app-layout';
import SimpleColorPickerApp from '../../apps/simple-color-picker-app';

const styles = {
  wrapper: css`
    padding: 16px;
    border-radius: 16px;
    background: #343a40;
    width: auto;
    color: white;
  `,
};

function SimpleColorPicker() {
  return (
    <AppLayout>
      <div className="mb-3" css={styles.wrapper}>
        <h3>Simple Color Picker</h3>
      </div>
      <div>
        <SimpleColorPickerApp />
      </div>
    </AppLayout>
  );
}

export default SimpleColorPicker;
