---
id: "SelectSingleContextValue"
title: "Interface: SelectSingleContextValue"
sidebar_label: "SelectSingleContextValue"
sidebar_position: 0
custom_edit_url: null
---

Represents the value of a [SelectSingleContext](../variables/SelectSingleContext).

## Properties

### handleDayClick

• **handleDayClick**: [`DayClickEventHandler`](../types/DayClickEventHandler)

Event handler to attach to the day button to enable the single select.

#### Defined in

[packages/react-day-picker/src/contexts/SelectSingle/SelectSingleContextValue.ts:12](https://github.com/gpbl/react-day-picker/blob/0df406c0/packages/react-day-picker/src/contexts/SelectSingle/SelectSingleContextValue.ts#L12)

___

### modifiers

• **modifiers**: `Pick`<[`Modifiers`](../types/Modifiers), ``"selected"``\>

The modifiers for the corresponding selection.

#### Defined in

[packages/react-day-picker/src/contexts/SelectSingle/SelectSingleContextValue.ts:10](https://github.com/gpbl/react-day-picker/blob/0df406c0/packages/react-day-picker/src/contexts/SelectSingle/SelectSingleContextValue.ts#L10)

___

### selected

• **selected**: `undefined` \| `Date`

The day that has been selected.

#### Defined in

[packages/react-day-picker/src/contexts/SelectSingle/SelectSingleContextValue.ts:8](https://github.com/gpbl/react-day-picker/blob/0df406c0/packages/react-day-picker/src/contexts/SelectSingle/SelectSingleContextValue.ts#L8)
