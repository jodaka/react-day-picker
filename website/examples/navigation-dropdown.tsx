import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';

export function Example() {
  return <DayPicker fromYear={2015} toYear={2025} captionLayout="dropdown" />;
}
