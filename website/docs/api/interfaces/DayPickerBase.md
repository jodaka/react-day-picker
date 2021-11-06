---
id: "DayPickerBase"
title: "Interface: DayPickerBase"
sidebar_label: "DayPickerBase"
sidebar_position: 0
custom_edit_url: null
---

The shared props for the [DayPicker](../functions/DayPicker) component.

## Properties

### captionLayout

• `Optional` **captionLayout**: ``"dropdown"`` \| ``"buttons"``

Change the layout of the caption:

- `buttons` (default): display prev/right buttons
- `dropdown`: display drop-downs to change the month and the year

**Note** `dropdown` is valid only when `fromDate/fromMonth/fromYear` and
`toDate/toMonth/toYear` are set.

#### Defined in

[packages/react-day-picker/src/types/DayPickerBase.ts:131](https://github.com/gpbl/react-day-picker/blob/0df406c0/packages/react-day-picker/src/types/DayPickerBase.ts#L131)

___

### className

• `Optional` **className**: `string`

CSS class to add to the root UI element.

#### Defined in

[packages/react-day-picker/src/types/DayPickerBase.ts:30](https://github.com/gpbl/react-day-picker/blob/0df406c0/packages/react-day-picker/src/types/DayPickerBase.ts#L30)

___

### classNames

• `Optional` **classNames**: `Partial`<[`StyledElement`](../types/StyledElement)<`string`\>\>

Change the class names.

Use this prop when you need to change the default class names — for example
when using CSS modules.

#### Defined in

[packages/react-day-picker/src/types/DayPickerBase.ts:37](https://github.com/gpbl/react-day-picker/blob/0df406c0/packages/react-day-picker/src/types/DayPickerBase.ts#L37)

___

### components

• `Optional` **components**: `Partial`<[`Components`](Components)\>

A map of components used to create the layout.

#### Defined in

[packages/react-day-picker/src/types/DayPickerBase.ts:153](https://github.com/gpbl/react-day-picker/blob/0df406c0/packages/react-day-picker/src/types/DayPickerBase.ts#L153)

___

### defaultMonth

• `Optional` **defaultMonth**: `Date`

The initial month to show in the calendar. Default is the current month.

As opposed to [month](NavigationContextValue#month), use this prop to let DayPicker control the current
month.

#### Defined in

[packages/react-day-picker/src/types/DayPickerBase.ts:66](https://github.com/gpbl/react-day-picker/blob/0df406c0/packages/react-day-picker/src/types/DayPickerBase.ts#L66)

___

### defaultSelected

• `Optional` **defaultSelected**: (`date`: `Date`) => `boolean` \| `Date` \| `Date`[] \| [`DateRange`](../types/DateRange) \| [`DateBefore`](../types/DateBefore) \| [`DateAfter`](../types/DateAfter) \| [`DateInterval`](../types/DateInterval) \| [`DayOfWeek`](../types/DayOfWeek) \| [`Matcher`](../types/Matcher)[]

The default selected days when the `mode` is `single`, `multiple` or `range`.

#### Defined in

[packages/react-day-picker/src/types/DayPickerBase.ts:205](https://github.com/gpbl/react-day-picker/blob/0df406c0/packages/react-day-picker/src/types/DayPickerBase.ts#L205)

___

### dir

• `Optional` **dir**: `string`

The text direction of the calendar. Use `ltr` for left-to-right (default)
or `rtl` for right-to-left.

#### Defined in

[packages/react-day-picker/src/types/DayPickerBase.ts:245](https://github.com/gpbl/react-day-picker/blob/0df406c0/packages/react-day-picker/src/types/DayPickerBase.ts#L245)

___

### disableNavigation

• `Optional` **disableNavigation**: `boolean`

Disable the navigation between months.

#### Defined in

[packages/react-day-picker/src/types/DayPickerBase.ts:109](https://github.com/gpbl/react-day-picker/blob/0df406c0/packages/react-day-picker/src/types/DayPickerBase.ts#L109)

___

### disabled

• `Optional` **disabled**: (`date`: `Date`) => `boolean` \| `Date` \| `Date`[] \| [`DateRange`](../types/DateRange) \| [`DateBefore`](../types/DateBefore) \| [`DateAfter`](../types/DateAfter) \| [`DateInterval`](../types/DateInterval) \| [`DayOfWeek`](../types/DayOfWeek) \| [`Matcher`](../types/Matcher)[]

Apply the `disabled` modifier to the matching days.

#### Defined in

[packages/react-day-picker/src/types/DayPickerBase.ts:164](https://github.com/gpbl/react-day-picker/blob/0df406c0/packages/react-day-picker/src/types/DayPickerBase.ts#L164)

___

### fixedWeeks

• `Optional` **fixedWeeks**: `boolean`

Display six weeks per months, regardless the month’s number of weeks.
To use this prop, [showOutsideDays](DayPickerBase#showoutsidedays) must be set. Default to `false`.

#### Defined in

[packages/react-day-picker/src/types/DayPickerBase.ts:136](https://github.com/gpbl/react-day-picker/blob/0df406c0/packages/react-day-picker/src/types/DayPickerBase.ts#L136)

___

### footer

• `Optional` **footer**: `ReactNode`

Content to add to the `tfoot` element.

#### Defined in

[packages/react-day-picker/src/types/DayPickerBase.ts:156](https://github.com/gpbl/react-day-picker/blob/0df406c0/packages/react-day-picker/src/types/DayPickerBase.ts#L156)

___

### formatters

• `Optional` **formatters**: `Partial`<[`Formatters`](../types/Formatters)\>

A map of formatters to change the default formatting functions.

#### Defined in

[packages/react-day-picker/src/types/DayPickerBase.ts:250](https://github.com/gpbl/react-day-picker/blob/0df406c0/packages/react-day-picker/src/types/DayPickerBase.ts#L250)

___

### fromDate

• `Optional` **fromDate**: `Date`

The earliest day to start the month navigation.

#### Defined in

[packages/react-day-picker/src/types/DayPickerBase.ts:85](https://github.com/gpbl/react-day-picker/blob/0df406c0/packages/react-day-picker/src/types/DayPickerBase.ts#L85)

___

### fromMonth

• `Optional` **fromMonth**: `Date`

The earliest month to start the month navigation.

#### Defined in

[packages/react-day-picker/src/types/DayPickerBase.ts:93](https://github.com/gpbl/react-day-picker/blob/0df406c0/packages/react-day-picker/src/types/DayPickerBase.ts#L93)

___

### fromYear

• `Optional` **fromYear**: `number`

The earliest year to start the month navigation.

#### Defined in

[packages/react-day-picker/src/types/DayPickerBase.ts:101](https://github.com/gpbl/react-day-picker/blob/0df406c0/packages/react-day-picker/src/types/DayPickerBase.ts#L101)

___

### hidden

• `Optional` **hidden**: (`date`: `Date`) => `boolean` \| `Date` \| `Date`[] \| [`DateRange`](../types/DateRange) \| [`DateBefore`](../types/DateBefore) \| [`DateAfter`](../types/DateAfter) \| [`DateInterval`](../types/DateInterval) \| [`DayOfWeek`](../types/DayOfWeek) \| [`Matcher`](../types/Matcher)[]

Apply the `hidden` modifier to the matching days. Will hide them from the
calendar.

#### Defined in

[packages/react-day-picker/src/types/DayPickerBase.ts:173](https://github.com/gpbl/react-day-picker/blob/0df406c0/packages/react-day-picker/src/types/DayPickerBase.ts#L173)

___

### hideHead

• `Optional` **hideHead**: `boolean`

Hide the month’s head displaying the weekday names.

#### Defined in

[packages/react-day-picker/src/types/DayPickerBase.ts:140](https://github.com/gpbl/react-day-picker/blob/0df406c0/packages/react-day-picker/src/types/DayPickerBase.ts#L140)

___

### labels

• `Optional` **labels**: `Partial`<[`Labels`](../types/Labels)\>

A map of labels creators used for the ARIA labels attributes.

#### Defined in

[packages/react-day-picker/src/types/DayPickerBase.ts:239](https://github.com/gpbl/react-day-picker/blob/0df406c0/packages/react-day-picker/src/types/DayPickerBase.ts#L239)

___

### locale

• `Optional` **locale**: `Locale`

The date-fns locale object to localize the user interface. Defaults to
`en-US`.

#### Defined in

[packages/react-day-picker/src/types/DayPickerBase.ts:234](https://github.com/gpbl/react-day-picker/blob/0df406c0/packages/react-day-picker/src/types/DayPickerBase.ts#L234)

___

### max

• `Optional` **max**: `number`

When in multiple or range selection mode, the maximum amount of days that
can be selected.

#### Defined in

[packages/react-day-picker/src/types/DayPickerBase.ts:219](https://github.com/gpbl/react-day-picker/blob/0df406c0/packages/react-day-picker/src/types/DayPickerBase.ts#L219)

___

### min

• `Optional` **min**: `number`

When in multiple or range selection mode, the minimum amount of days that
can be selected.

#### Defined in

[packages/react-day-picker/src/types/DayPickerBase.ts:214](https://github.com/gpbl/react-day-picker/blob/0df406c0/packages/react-day-picker/src/types/DayPickerBase.ts#L214)

___

### mode

• `Optional` **mode**: ``"uncontrolled"`` \| ``"single"`` \| ``"multiple"`` \| ``"range"``

Toggle the controlled selection mode.

- `uncontrolled`: disable the controlled selection mode
- `single`: control the selection of single days
- `multiple`: control the selection of multiple days
- `range`: control the selection of a range of days

#### Defined in

[packages/react-day-picker/src/types/DayPickerBase.ts:201](https://github.com/gpbl/react-day-picker/blob/0df406c0/packages/react-day-picker/src/types/DayPickerBase.ts#L201)

___

### modifierClassNames

• `Optional` **modifierClassNames**: `Record`<`string`, `string`\>

Change the class name for the day matching the [[modifiers]].

#### Defined in

[packages/react-day-picker/src/types/DayPickerBase.ts:41](https://github.com/gpbl/react-day-picker/blob/0df406c0/packages/react-day-picker/src/types/DayPickerBase.ts#L41)

___

### modifierPrefix

• `Optional` **modifierPrefix**: `string`

The prefix to add to the modifiers class names. Default is `rdp-day_`.

Each day will get a `${modifierPrefix}${modifier}` class name when matching
a modifier.

#### Defined in

[packages/react-day-picker/src/types/DayPickerBase.ts:189](https://github.com/gpbl/react-day-picker/blob/0df406c0/packages/react-day-picker/src/types/DayPickerBase.ts#L189)

___

### modifierStyles

• `Optional` **modifierStyles**: `Record`<`string`, `CSSProperties`\>

Change the inline style for the day matching the [[modifiers]].

#### Defined in

[packages/react-day-picker/src/types/DayPickerBase.ts:56](https://github.com/gpbl/react-day-picker/blob/0df406c0/packages/react-day-picker/src/types/DayPickerBase.ts#L56)

___

### modifiers

• `Optional` **modifiers**: `Record`<`string`, (`date`: `Date`) => `boolean` \| `Date` \| `Date`[] \| [`DateRange`](../types/DateRange) \| [`DateBefore`](../types/DateBefore) \| [`DateAfter`](../types/DateAfter) \| [`DateInterval`](../types/DateInterval) \| [`DayOfWeek`](../types/DayOfWeek) \| [`Matcher`](../types/Matcher)[]\>

Add modifiers to the matching days.

#### Defined in

[packages/react-day-picker/src/types/DayPickerBase.ts:182](https://github.com/gpbl/react-day-picker/blob/0df406c0/packages/react-day-picker/src/types/DayPickerBase.ts#L182)

___

### month

• `Optional` **month**: `Date`

The month to display in the calendar.

As opposed to [defaultMonth](DayPickerBase#defaultmonth), use this prop with [onMonthChange](DayPickerBase#onmonthchange) to
change the month programmatically.

#### Defined in

[packages/react-day-picker/src/types/DayPickerBase.ts:73](https://github.com/gpbl/react-day-picker/blob/0df406c0/packages/react-day-picker/src/types/DayPickerBase.ts#L73)

___

### numberOfMonths

• `Optional` **numberOfMonths**: `number`

The number of displayed months. Defaults to `1`.

#### Defined in

[packages/react-day-picker/src/types/DayPickerBase.ts:81](https://github.com/gpbl/react-day-picker/blob/0df406c0/packages/react-day-picker/src/types/DayPickerBase.ts#L81)

___

### onDayBlur

• `Optional` **onDayBlur**: [`DayFocusEventHandler`](../types/DayFocusEventHandler)

#### Defined in

[packages/react-day-picker/src/types/DayPickerBase.ts:256](https://github.com/gpbl/react-day-picker/blob/0df406c0/packages/react-day-picker/src/types/DayPickerBase.ts#L256)

___

### onDayClick

• `Optional` **onDayClick**: [`DayClickEventHandler`](../types/DayClickEventHandler)

#### Defined in

[packages/react-day-picker/src/types/DayPickerBase.ts:254](https://github.com/gpbl/react-day-picker/blob/0df406c0/packages/react-day-picker/src/types/DayPickerBase.ts#L254)

___

### onDayFocus

• `Optional` **onDayFocus**: [`DayFocusEventHandler`](../types/DayFocusEventHandler)

#### Defined in

[packages/react-day-picker/src/types/DayPickerBase.ts:255](https://github.com/gpbl/react-day-picker/blob/0df406c0/packages/react-day-picker/src/types/DayPickerBase.ts#L255)

___

### onDayKeyDown

• `Optional` **onDayKeyDown**: [`DayKeyboardEventHandler`](../types/DayKeyboardEventHandler)

#### Defined in

[packages/react-day-picker/src/types/DayPickerBase.ts:259](https://github.com/gpbl/react-day-picker/blob/0df406c0/packages/react-day-picker/src/types/DayPickerBase.ts#L259)

___

### onDayKeyPress

• `Optional` **onDayKeyPress**: [`DayKeyboardEventHandler`](../types/DayKeyboardEventHandler)

#### Defined in

[packages/react-day-picker/src/types/DayPickerBase.ts:261](https://github.com/gpbl/react-day-picker/blob/0df406c0/packages/react-day-picker/src/types/DayPickerBase.ts#L261)

___

### onDayKeyUp

• `Optional` **onDayKeyUp**: [`DayKeyboardEventHandler`](../types/DayKeyboardEventHandler)

#### Defined in

[packages/react-day-picker/src/types/DayPickerBase.ts:260](https://github.com/gpbl/react-day-picker/blob/0df406c0/packages/react-day-picker/src/types/DayPickerBase.ts#L260)

___

### onDayMouseEnter

• `Optional` **onDayMouseEnter**: [`DayMouseEventHandler`](../types/DayMouseEventHandler)

#### Defined in

[packages/react-day-picker/src/types/DayPickerBase.ts:257](https://github.com/gpbl/react-day-picker/blob/0df406c0/packages/react-day-picker/src/types/DayPickerBase.ts#L257)

___

### onDayMouseLeave

• `Optional` **onDayMouseLeave**: [`DayMouseEventHandler`](../types/DayMouseEventHandler)

#### Defined in

[packages/react-day-picker/src/types/DayPickerBase.ts:258](https://github.com/gpbl/react-day-picker/blob/0df406c0/packages/react-day-picker/src/types/DayPickerBase.ts#L258)

___

### onDayTouchCancel

• `Optional` **onDayTouchCancel**: [`DayTouchEventHandler`](../types/DayTouchEventHandler)

#### Defined in

[packages/react-day-picker/src/types/DayPickerBase.ts:262](https://github.com/gpbl/react-day-picker/blob/0df406c0/packages/react-day-picker/src/types/DayPickerBase.ts#L262)

___

### onDayTouchEnd

• `Optional` **onDayTouchEnd**: [`DayTouchEventHandler`](../types/DayTouchEventHandler)

#### Defined in

[packages/react-day-picker/src/types/DayPickerBase.ts:263](https://github.com/gpbl/react-day-picker/blob/0df406c0/packages/react-day-picker/src/types/DayPickerBase.ts#L263)

___

### onDayTouchMove

• `Optional` **onDayTouchMove**: [`DayTouchEventHandler`](../types/DayTouchEventHandler)

#### Defined in

[packages/react-day-picker/src/types/DayPickerBase.ts:264](https://github.com/gpbl/react-day-picker/blob/0df406c0/packages/react-day-picker/src/types/DayPickerBase.ts#L264)

___

### onDayTouchStart

• `Optional` **onDayTouchStart**: [`DayTouchEventHandler`](../types/DayTouchEventHandler)

#### Defined in

[packages/react-day-picker/src/types/DayPickerBase.ts:265](https://github.com/gpbl/react-day-picker/blob/0df406c0/packages/react-day-picker/src/types/DayPickerBase.ts#L265)

___

### onMonthChange

• `Optional` **onMonthChange**: [`MonthChangeEventHandler`](../types/MonthChangeEventHandler)

Event fired when the user navigates between months.

#### Defined in

[packages/react-day-picker/src/types/DayPickerBase.ts:77](https://github.com/gpbl/react-day-picker/blob/0df406c0/packages/react-day-picker/src/types/DayPickerBase.ts#L77)

___

### onNextClick

• `Optional` **onNextClick**: [`MonthChangeEventHandler`](../types/MonthChangeEventHandler)

#### Defined in

[packages/react-day-picker/src/types/DayPickerBase.ts:266](https://github.com/gpbl/react-day-picker/blob/0df406c0/packages/react-day-picker/src/types/DayPickerBase.ts#L266)

___

### onPrevClick

• `Optional` **onPrevClick**: [`MonthChangeEventHandler`](../types/MonthChangeEventHandler)

#### Defined in

[packages/react-day-picker/src/types/DayPickerBase.ts:267](https://github.com/gpbl/react-day-picker/blob/0df406c0/packages/react-day-picker/src/types/DayPickerBase.ts#L267)

___

### onSelect

• `Optional` **onSelect**: [`SelectSingleEventHandler`](SelectSingleEventHandler) \| [`SelectMultipleEventHandler`](../types/SelectMultipleEventHandler) \| [`SelectRangeEventHandler`](../types/SelectRangeEventHandler)

Event handler when a day is selected (valid only in controlled selection mode).

#### Defined in

[packages/react-day-picker/src/types/DayPickerBase.ts:223](https://github.com/gpbl/react-day-picker/blob/0df406c0/packages/react-day-picker/src/types/DayPickerBase.ts#L223)

___

### onWeekNumberClick

• `Optional` **onWeekNumberClick**: [`WeekNumberClickEventHandler`](../types/WeekNumberClickEventHandler)

#### Defined in

[packages/react-day-picker/src/types/DayPickerBase.ts:268](https://github.com/gpbl/react-day-picker/blob/0df406c0/packages/react-day-picker/src/types/DayPickerBase.ts#L268)

___

### pagedNavigation

• `Optional` **pagedNavigation**: `boolean`

Paginate the month navigation displaying the [numberOfMonths](DayPickerBase#numberofmonths) at time.

#### Defined in

[packages/react-day-picker/src/types/DayPickerBase.ts:113](https://github.com/gpbl/react-day-picker/blob/0df406c0/packages/react-day-picker/src/types/DayPickerBase.ts#L113)

___

### required

• `Optional` **required**: `boolean`

When in single selection mode, make the selection required.

#### Defined in

[packages/react-day-picker/src/types/DayPickerBase.ts:209](https://github.com/gpbl/react-day-picker/blob/0df406c0/packages/react-day-picker/src/types/DayPickerBase.ts#L209)

___

### reverseMonths

• `Optional` **reverseMonths**: `boolean`

Render the months in reversed order (when [numberOfMonths](DayPickerBase#numberofmonths) is greater
than `1`) to display the most recent month first.

#### Defined in

[packages/react-day-picker/src/types/DayPickerBase.ts:118](https://github.com/gpbl/react-day-picker/blob/0df406c0/packages/react-day-picker/src/types/DayPickerBase.ts#L118)

___

### selected

• `Optional` **selected**: (`date`: `Date`) => `boolean` \| `Date` \| `Date`[] \| [`DateRange`](../types/DateRange) \| [`DateBefore`](../types/DateBefore) \| [`DateAfter`](../types/DateAfter) \| [`DateInterval`](../types/DateInterval) \| [`DayOfWeek`](../types/DayOfWeek) \| [`Matcher`](../types/Matcher)[]

Apply the `selected` modifier to the matching days.

#### Defined in

[packages/react-day-picker/src/types/DayPickerBase.ts:168](https://github.com/gpbl/react-day-picker/blob/0df406c0/packages/react-day-picker/src/types/DayPickerBase.ts#L168)

___

### showOutsideDays

• `Optional` **showOutsideDays**: `boolean`

Show the outside days.  An outside day is a day falling in the next or the
previous month. Default is `false`.

#### Defined in

[packages/react-day-picker/src/types/DayPickerBase.ts:145](https://github.com/gpbl/react-day-picker/blob/0df406c0/packages/react-day-picker/src/types/DayPickerBase.ts#L145)

___

### showWeekNumber

• `Optional` **showWeekNumber**: `boolean`

Show the week numbers column. Default to `false`.

#### Defined in

[packages/react-day-picker/src/types/DayPickerBase.ts:149](https://github.com/gpbl/react-day-picker/blob/0df406c0/packages/react-day-picker/src/types/DayPickerBase.ts#L149)

___

### style

• `Optional` **style**: `CSSProperties`

Style to apply to the container element.

#### Defined in

[packages/react-day-picker/src/types/DayPickerBase.ts:48](https://github.com/gpbl/react-day-picker/blob/0df406c0/packages/react-day-picker/src/types/DayPickerBase.ts#L48)

___

### styles

• `Optional` **styles**: `Partial`<[`StyledElement`](../types/StyledElement)<`CSSProperties`\>\>

Change the inline styles for each UIElement.

#### Defined in

[packages/react-day-picker/src/types/DayPickerBase.ts:52](https://github.com/gpbl/react-day-picker/blob/0df406c0/packages/react-day-picker/src/types/DayPickerBase.ts#L52)

___

### toDate

• `Optional` **toDate**: `Date`

The latest day to end the month navigation.

#### Defined in

[packages/react-day-picker/src/types/DayPickerBase.ts:89](https://github.com/gpbl/react-day-picker/blob/0df406c0/packages/react-day-picker/src/types/DayPickerBase.ts#L89)

___

### toMonth

• `Optional` **toMonth**: `Date`

The latest month to end the month navigation.

#### Defined in

[packages/react-day-picker/src/types/DayPickerBase.ts:97](https://github.com/gpbl/react-day-picker/blob/0df406c0/packages/react-day-picker/src/types/DayPickerBase.ts#L97)

___

### toYear

• `Optional` **toYear**: `number`

The latest year to end the month navigation.

#### Defined in

[packages/react-day-picker/src/types/DayPickerBase.ts:105](https://github.com/gpbl/react-day-picker/blob/0df406c0/packages/react-day-picker/src/types/DayPickerBase.ts#L105)

___

### today

• `Optional` **today**: `Date`

The today’s date. Default is the current date. This Date will get the
`today` modifier to style the day.

#### Defined in

[packages/react-day-picker/src/types/DayPickerBase.ts:178](https://github.com/gpbl/react-day-picker/blob/0df406c0/packages/react-day-picker/src/types/DayPickerBase.ts#L178)
