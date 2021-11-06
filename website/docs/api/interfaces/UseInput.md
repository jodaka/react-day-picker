---
id: "UseInput"
title: "Interface: UseInput"
sidebar_label: "UseInput"
sidebar_position: 0
custom_edit_url: null
---

Represent the value returned by [useInput](../functions/useInput).

## Properties

### dayPickerProps

• **dayPickerProps**: [`UseInputDayPickerProps`](UseInputDayPickerProps)

The props to pass to a DayPicker component: `<DayPicker {...dayPickerProps} />`

#### Defined in

[packages/react-day-picker/src/hooks/useInput/types/UseInput.ts:7](https://github.com/gpbl/react-day-picker/blob/0df406c0/packages/react-day-picker/src/hooks/useInput/types/UseInput.ts#L7)

___

### fieldProps

• **fieldProps**: [`UseInputFieldProps`](UseInputFieldProps)

The props to pass to an input field: `<input {...fieldProps} />`

#### Defined in

[packages/react-day-picker/src/hooks/useInput/types/UseInput.ts:9](https://github.com/gpbl/react-day-picker/blob/0df406c0/packages/react-day-picker/src/hooks/useInput/types/UseInput.ts#L9)

## Methods

### reset

▸ **reset**(): `void`

A function to reset to the initial state.

#### Returns

`void`

#### Defined in

[packages/react-day-picker/src/hooks/useInput/types/UseInput.ts:11](https://github.com/gpbl/react-day-picker/blob/0df406c0/packages/react-day-picker/src/hooks/useInput/types/UseInput.ts#L11)

___

### setSelected

▸ **setSelected**(`day`): `void`

A function to set the selected day.

#### Parameters

| Name | Type |
| :------ | :------ |
| `day` | `Date` |

#### Returns

`void`

#### Defined in

[packages/react-day-picker/src/hooks/useInput/types/UseInput.ts:13](https://github.com/gpbl/react-day-picker/blob/0df406c0/packages/react-day-picker/src/hooks/useInput/types/UseInput.ts#L13)
