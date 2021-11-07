import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';

import es from 'date-fns/locale/es';

export function Example() {
  return <DayPicker locale={es} />;
}
