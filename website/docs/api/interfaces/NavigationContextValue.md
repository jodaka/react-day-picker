---
id: "NavigationContextValue"
title: "Interface: NavigationContextValue"
sidebar_label: "NavigationContextValue"
sidebar_position: 0
custom_edit_url: null
---

Represents the value of the [NavigationContext](../variables/NavigationContext).

## Properties

### displayMonths

• **displayMonths**: `Date`[]

The months to display, according to `numberOfMonths`.

#### Defined in

[packages/react-day-picker/src/contexts/Navigation/NavigationContextValue.tsx:6](https://github.com/gpbl/react-day-picker/blob/b5db746c/packages/react-day-picker/src/contexts/Navigation/NavigationContextValue.tsx#L6)

___

### month

• **month**: `Date`

The current month. Note that when `numberOfMonths > 1` represent the first month in the displayed months.

#### Defined in

[packages/react-day-picker/src/contexts/Navigation/NavigationContextValue.tsx:4](https://github.com/gpbl/react-day-picker/blob/b5db746c/packages/react-day-picker/src/contexts/Navigation/NavigationContextValue.tsx#L4)

___

### nextMonth

• `Optional` **nextMonth**: `Date`

The next month to display. `undefined` if no months left

#### Defined in

[packages/react-day-picker/src/contexts/Navigation/NavigationContextValue.tsx:10](https://github.com/gpbl/react-day-picker/blob/b5db746c/packages/react-day-picker/src/contexts/Navigation/NavigationContextValue.tsx#L10)

___

### previousMonth

• `Optional` **previousMonth**: `Date`

The previous month to display. `undefined` if no months left

#### Defined in

[packages/react-day-picker/src/contexts/Navigation/NavigationContextValue.tsx:12](https://github.com/gpbl/react-day-picker/blob/b5db746c/packages/react-day-picker/src/contexts/Navigation/NavigationContextValue.tsx#L12)

## Methods

### goToMonth

▸ **goToMonth**(`month`): `void`

Navigate to the specified month.

#### Parameters

| Name | Type |
| :------ | :------ |
| `month` | `Date` |

#### Returns

`void`

#### Defined in

[packages/react-day-picker/src/contexts/Navigation/NavigationContextValue.tsx:8](https://github.com/gpbl/react-day-picker/blob/b5db746c/packages/react-day-picker/src/contexts/Navigation/NavigationContextValue.tsx#L8)
