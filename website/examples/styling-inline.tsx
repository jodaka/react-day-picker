import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';

export function Example() {
  return (
    <DayPicker
      styles={{
        caption_label: { color: 'red' }
      }}
    />
  );
}
