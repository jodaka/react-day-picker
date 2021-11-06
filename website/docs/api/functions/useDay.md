---
id: "useDay"
title: "Function: useDay"
sidebar_label: "useDay"
sidebar_position: 0
custom_edit_url: null
---

▸ **useDay**(`date`, `displayMonth`, `buttonRef`): [`UseDay`](../types/UseDay)

This hook returns details about the content to render in the day cell.

When a day cell is rendered in the table, DayPicker can either:

- render nothing: when the day is outside the month or has matched the
  "hidden" modifier.
- render a button. When a selection mode is set, DayPicker renders a button
  to allow the focus and the selection. In case of `uncontrolled` selection
  mode, DayPicker expects a `onDayClick` prop to render a button.
- render a non-interactive element: when no selection mode is set, the day
  cell shouldn’t respond to any interaction. DayPicker should render a `div`
  or a `span`.

### Usage

Use this hook to customize the behavior of the [Day](Day) component. Create a
new `Day` component using this hook and pass it to the `components` prop.
The source of [Day](Day) can be a good starting point.

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Date` |
| `displayMonth` | `Date` |
| `buttonRef` | `RefObject`<`HTMLButtonElement`\> |

#### Returns

[`UseDay`](../types/UseDay)

#### Defined in

[packages/react-day-picker/src/components/Day/hooks/useDay.tsx:75](https://github.com/gpbl/react-day-picker/blob/0df406c0/packages/react-day-picker/src/components/Day/hooks/useDay.tsx#L75)
