---
id: "SelectRangeContextValue"
title: "Interface: SelectRangeContextValue"
sidebar_label: "SelectRangeContextValue"
sidebar_position: 0
custom_edit_url: null
---

Represents the value of a [SelectRangeContext](../variables/SelectRangeContext).

## Properties

### handleDayClick

• **handleDayClick**: [`DayClickEventHandler`](../types/DayClickEventHandler)

Event handler to attach to the day button to enable the range select.

#### Defined in

[packages/react-day-picker/src/contexts/SelectRange/SelectRangeContextValue.ts:12](https://github.com/gpbl/react-day-picker/blob/6bc3b9d0/packages/react-day-picker/src/contexts/SelectRange/SelectRangeContextValue.ts#L12)

___

### modifiers

• **modifiers**: `Pick`<[`Modifiers`](../types/Modifiers), ``"disabled"`` \| ``"selected"`` \| ``"range_start"`` \| ``"range_end"`` \| ``"range_middle"``\>

The modifiers for the corresponding selection.

#### Defined in

[packages/react-day-picker/src/contexts/SelectRange/SelectRangeContextValue.ts:10](https://github.com/gpbl/react-day-picker/blob/6bc3b9d0/packages/react-day-picker/src/contexts/SelectRange/SelectRangeContextValue.ts#L10)

___

### selected

• **selected**: `undefined` \| [`DateRange`](../types/DateRange)

The range of days that has been selected.

#### Defined in

[packages/react-day-picker/src/contexts/SelectRange/SelectRangeContextValue.ts:8](https://github.com/gpbl/react-day-picker/blob/6bc3b9d0/packages/react-day-picker/src/contexts/SelectRange/SelectRangeContextValue.ts#L8)
