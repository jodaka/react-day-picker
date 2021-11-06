---
id: "SelectMultipleContextValue"
title: "Interface: SelectMultipleContextValue"
sidebar_label: "SelectMultipleContextValue"
sidebar_position: 0
custom_edit_url: null
---

Represents the value of a [SelectMultipleContext](../variables/SelectMultipleContext).

## Properties

### handleDayClick

• **handleDayClick**: [`DayClickEventHandler`](../types/DayClickEventHandler)

Event handler to attach to the day button to enable the multiple select.

#### Defined in

[packages/react-day-picker/src/contexts/SelectMultiple/SelectMultipleContextValue.ts:12](https://github.com/gpbl/react-day-picker/blob/6bc3b9d0/packages/react-day-picker/src/contexts/SelectMultiple/SelectMultipleContextValue.ts#L12)

___

### modifiers

• **modifiers**: `Pick`<[`Modifiers`](../types/Modifiers), ``"disabled"`` \| ``"selected"``\>

The modifiers for the corresponding selection.

#### Defined in

[packages/react-day-picker/src/contexts/SelectMultiple/SelectMultipleContextValue.ts:10](https://github.com/gpbl/react-day-picker/blob/6bc3b9d0/packages/react-day-picker/src/contexts/SelectMultiple/SelectMultipleContextValue.ts#L10)

___

### selected

• **selected**: `undefined` \| `Date`[]

The days that have been selected.

#### Defined in

[packages/react-day-picker/src/contexts/SelectMultiple/SelectMultipleContextValue.ts:8](https://github.com/gpbl/react-day-picker/blob/6bc3b9d0/packages/react-day-picker/src/contexts/SelectMultiple/SelectMultipleContextValue.ts#L8)
