---
id: "UseInputOptions"
title: "Interface: UseInputOptions"
sidebar_label: "UseInputOptions"
sidebar_position: 0
custom_edit_url: null
---

## Properties

### defaultSelected

• `Optional` **defaultSelected**: `Date`

The default selected day.

#### Defined in

[packages/react-day-picker/src/hooks/useInput/types/UseInputOptions.ts:34](https://github.com/gpbl/react-day-picker/blob/b5db746c/packages/react-day-picker/src/hooks/useInput/types/UseInputOptions.ts#L34)

___

### format

• `Optional` **format**: `string`

The format string for formatting the input field. See https://date-fns.org/docs/format for a list of format strings. Default to `PP`.

#### Defined in

[packages/react-day-picker/src/hooks/useInput/types/UseInputOptions.ts:16](https://github.com/gpbl/react-day-picker/blob/b5db746c/packages/react-day-picker/src/hooks/useInput/types/UseInputOptions.ts#L16)

___

### fromDate

• `Optional` **fromDate**: `Date`

The earliest day to start the month navigation.

#### Defined in

[packages/react-day-picker/src/hooks/useInput/types/UseInputOptions.ts:18](https://github.com/gpbl/react-day-picker/blob/b5db746c/packages/react-day-picker/src/hooks/useInput/types/UseInputOptions.ts#L18)

___

### fromMonth

• `Optional` **fromMonth**: `Date`

The earliest month to start the month navigation.

#### Defined in

[packages/react-day-picker/src/hooks/useInput/types/UseInputOptions.ts:22](https://github.com/gpbl/react-day-picker/blob/b5db746c/packages/react-day-picker/src/hooks/useInput/types/UseInputOptions.ts#L22)

___

### fromYear

• `Optional` **fromYear**: `number`

The earliest year to start the month navigation.

#### Defined in

[packages/react-day-picker/src/hooks/useInput/types/UseInputOptions.ts:26](https://github.com/gpbl/react-day-picker/blob/b5db746c/packages/react-day-picker/src/hooks/useInput/types/UseInputOptions.ts#L26)

___

### locale

• `Optional` **locale**: `Locale`

The date-fns locale object to localize the user interface. Defaults to
`en-US`.

```
import es from 'date-fns/locale/es';
```

See also date-fns [Internationalization
guide](https://date-fns.org/docs/I18n).

#### Defined in

[packages/react-day-picker/src/hooks/useInput/types/UseInputOptions.ts:14](https://github.com/gpbl/react-day-picker/blob/b5db746c/packages/react-day-picker/src/hooks/useInput/types/UseInputOptions.ts#L14)

___

### required

• `Optional` **required**: `boolean`

Make the selection required.

#### Defined in

[packages/react-day-picker/src/hooks/useInput/types/UseInputOptions.ts:32](https://github.com/gpbl/react-day-picker/blob/b5db746c/packages/react-day-picker/src/hooks/useInput/types/UseInputOptions.ts#L32)

___

### toDate

• `Optional` **toDate**: `Date`

The latest day to end the month navigation.

#### Defined in

[packages/react-day-picker/src/hooks/useInput/types/UseInputOptions.ts:20](https://github.com/gpbl/react-day-picker/blob/b5db746c/packages/react-day-picker/src/hooks/useInput/types/UseInputOptions.ts#L20)

___

### toMonth

• `Optional` **toMonth**: `Date`

The latest month to end the month navigation.

#### Defined in

[packages/react-day-picker/src/hooks/useInput/types/UseInputOptions.ts:24](https://github.com/gpbl/react-day-picker/blob/b5db746c/packages/react-day-picker/src/hooks/useInput/types/UseInputOptions.ts#L24)

___

### toYear

• `Optional` **toYear**: `number`

The latest year to end the month navigation.

#### Defined in

[packages/react-day-picker/src/hooks/useInput/types/UseInputOptions.ts:28](https://github.com/gpbl/react-day-picker/blob/b5db746c/packages/react-day-picker/src/hooks/useInput/types/UseInputOptions.ts#L28)

___

### today

• `Optional` **today**: `Date`

The date to use as "today".

#### Defined in

[packages/react-day-picker/src/hooks/useInput/types/UseInputOptions.ts:30](https://github.com/gpbl/react-day-picker/blob/b5db746c/packages/react-day-picker/src/hooks/useInput/types/UseInputOptions.ts#L30)
