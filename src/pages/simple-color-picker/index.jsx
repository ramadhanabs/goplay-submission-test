/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import AppLayout from '../../components/app-layout';
import SimpleColorPickerApp from '../../apps/simple-color-picker-app';

const styles = {
  base: css`
    height: calc(100% + 60px);
  `,
};

function SimpleColorPicker() {
  return (
    <AppLayout>
      <SimpleColorPickerApp />
    </AppLayout>
  );
}

export default SimpleColorPicker;
