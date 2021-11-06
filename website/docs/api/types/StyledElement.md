---
id: "StyledElement"
title: "Type alias: StyledElement<T>"
sidebar_label: "StyledElement"
sidebar_position: 0
custom_edit_url: null
---

Ƭ **StyledElement**<`T`\>: `Object`

Represent the style (either via class names or via in-line styles) of an element.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `string` \| `React.CSSProperties` |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `button` | `T` | The style of the buttons. |
| `button_reset` | `T` | The style for resetting the buttons. |
| `caption` | `T` | The style of the caption (showing the calendar heading and the navigation) |
| `caption_dropdowns` | `T` | The style of the drop-downs container. |
| `caption_first` | `T` | The style of the caption when the first of a series of months. |
| `caption_label` | `T` | The style of the caption label (e.g. "September 2021"). |
| `caption_last` | `T` | The style of the caption when the last of a series of months. |
| `caption_middle` | `T` | The style of the caption when in the middle of a series of months.. |
| `cell` | `T` | The style of the table cell containing the day element. |
| `day` | `T` | The style of the day button (it is a `span` when not interactive). |
| `day_outside` | `T` | The style of a day when outside the month. |
| `day_today` | `T` | The style of today button. |
| `dropdown` | `T` | The style of the drop-down (select) element. |
| `dropdown_icon` | `T` | The style of the drop-down icon. |
| `dropdown_month` | `T` | The style of the drop-down to change the month. |
| `dropdown_year` | `T` | The style of the drop-down to change the year. |
| `head` | `T` | The style of the table’s head. |
| `head_cell` | `T` | The style of the head cell. |
| `head_row` | `T` | The style of the row in the head. |
| `month` | `T` | The style of the table wrapper. |
| `months` | `T` | The style of the months wrapper. |
| `multiple_month` | `T` | The style of the root element when `numberOfMonths > 1`. |
| `nav` | `T` | The style of the navigation container. |
| `nav_button` | `T` | The style of the navigation button. |
| `nav_button_next` | `T` | The style of the "next month" navigation button. |
| `nav_button_previous` | `T` | The style of the "previous month" navigation button. |
| `nav_icon` | `T` | The style of the icon for the navigation button. |
| `root` | `T` | The style of the root element. |
| `row` | `T` | A style of the table’s row. |
| `row_head` | `T` | The style of the row’s head (displaying the week numbers). |
| `table` | `T` | The style of table containing the monthly calendar. |
| `tbody` | `T` | The style of the table body. |
| `tfoot` | `T` | The style of the table footer. |
| `vhidden` | `T` | The style of an element visually hidden. |
| `weeknumber` | `T` | The style of the weeknumber. |
| `with_weeknumber` | `T` | The style of the root element when `showWeekNumber={true}`. |

#### Defined in

[packages/react-day-picker/src/types/StyledElement.ts:4](https://github.com/gpbl/react-day-picker/blob/b5db746c/packages/react-day-picker/src/types/StyledElement.ts#L4)
