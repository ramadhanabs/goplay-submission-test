/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import AppLayout from '../../components/app-layout';
import SimpleColorPickerApp from '../../apps/simple-color-picker-app';

function SimpleColorPicker() {
  return (
    <AppLayout>
      <div className="mb-3">
        <h2>Simple Color Picker</h2>
      </div>
      <div>
        <SimpleColorPickerApp />
      </div>
    </AppLayout>
  );
}

export default SimpleColorPicker;
