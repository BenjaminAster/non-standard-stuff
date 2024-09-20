
# Non-Standard Stuff

Web browsers contain *a lot* of non-standard features (e.g. CSS properties, JavaScript APIs etc.) that have accumulated over the decades. This repository aims to list and possibly document them all. Ideally, all of them should either be removed or standardized. Some of this is manually-crafted while some is automatically generated via [js-everything-list](https://github.com/BenjaminAster/js-everything-list), [all-css-properties](https://github.com/BenjaminAster/all-css-properties) and the scripts in the [css](./css/) and [javascript](./javascript/) folders in this repository.

## CSS

### CSS Properties

| Property | Chromium | Safari | Firefox |
| :--- | :---: | :---: | :---: |
| `-epub-caption-side` | ❌ | ✅ | ❌ |
| `-epub-hyphens` | ❌ | ✅ | ❌ |
| `-epub-text-combine` | ❌ | ✅ | ❌ |
| `-epub-text-emphasis` | ❌ | ✅ | ❌ |
| `-epub-text-emphasis-color` | ❌ | ✅ | ❌ |
| `-epub-text-emphasis-style` | ❌ | ✅ | ❌ |
| `-epub-text-orientation` | ❌ | ✅ | ❌ |
| `-epub-text-transform` | ❌ | ✅ | ❌ |
| `-epub-word-break` | ❌ | ✅ | ❌ |
| `-epub-writing-mode` | ❌ | ✅ | ❌ |
| `-moz-animation` | ❌ | ❌ | ✅ |
| `-moz-animation-delay` | ❌ | ❌ | ✅ |
| `-moz-animation-direction` | ❌ | ❌ | ✅ |
| `-moz-animation-duration` | ❌ | ❌ | ✅ |
| `-moz-animation-fill-mode` | ❌ | ❌ | ✅ |
| `-moz-animation-iteration-count` | ❌ | ❌ | ✅ |
| `-moz-animation-name` | ❌ | ❌ | ✅ |
| `-moz-animation-play-state` | ❌ | ❌ | ✅ |
| `-moz-animation-timing-function` | ❌ | ❌ | ✅ |
| `-moz-appearance` | ❌ | ❌ | ✅ |
| `-moz-border-end` | ❌ | ❌ | ✅ |
| `-moz-border-end-color` | ❌ | ❌ | ✅ |
| `-moz-border-end-style` | ❌ | ❌ | ✅ |
| `-moz-border-end-width` | ❌ | ❌ | ✅ |
| `-moz-border-image` | ❌ | ❌ | ✅ |
| `-moz-border-start` | ❌ | ❌ | ✅ |
| `-moz-border-start-color` | ❌ | ❌ | ✅ |
| `-moz-border-start-style` | ❌ | ❌ | ✅ |
| `-moz-border-start-width` | ❌ | ❌ | ✅ |
| `-moz-box-align` | ❌ | ❌ | ✅ |
| `-moz-box-direction` | ❌ | ❌ | ✅ |
| `-moz-box-flex` | ❌ | ❌ | ✅ |
| `-moz-box-ordinal-group` | ❌ | ❌ | ✅ |
| `-moz-box-orient` | ❌ | ❌ | ✅ |
| `-moz-box-pack` | ❌ | ❌ | ✅ |
| `-moz-box-sizing` | ❌ | ❌ | ✅ |
| `-moz-float-edge` | ❌ | ❌ | ✅ |
| `-moz-font-feature-settings` | ❌ | ❌ | ✅ |
| `-moz-font-language-override` | ❌ | ❌ | ✅ |
| `-moz-force-broken-image-icon` | ❌ | ❌ | ✅ |
| `-moz-hyphens` | ❌ | ❌ | ✅ |
| `-moz-margin-end` | ❌ | ❌ | ✅ |
| `-moz-margin-start` | ❌ | ❌ | ✅ |
| `-moz-orient` | ❌ | ❌ | ✅ |
| `-moz-osx-font-smoothing` | ❌ | ✅ | ❌ |
| `-moz-padding-end` | ❌ | ❌ | ✅ |
| `-moz-padding-start` | ❌ | ❌ | ✅ |
| `-moz-tab-size` | ❌ | ❌ | ✅ |
| `-moz-text-size-adjust` | ❌ | ❌ | ✅ |
| `-moz-transform` | ❌ | ❌ | ✅ |
| `-moz-transform-origin` | ❌ | ❌ | ✅ |
| `-moz-user-input` | ❌ | ❌ | ✅ |
| `-moz-user-modify` | ❌ | ❌ | ✅ |
| `-moz-user-select` | ❌ | ❌ | ✅ |
| `-moz-window-dragging` | ❌ | ❌ | ✅ |
| `-webkit-backdrop-filter` | ❌ | ✅ | ❌ |
| `-webkit-border-after` | ✅ | ✅ | ❌ |
| `-webkit-border-after-color` | ✅ | ✅ | ❌ |
| `-webkit-border-after-style` | ✅ | ✅ | ❌ |
| `-webkit-border-after-width` | ✅ | ✅ | ❌ |
| `-webkit-border-before` | ✅ | ✅ | ❌ |
| `-webkit-border-before-color` | ✅ | ✅ | ❌ |
| `-webkit-border-before-style` | ✅ | ✅ | ❌ |
| `-webkit-border-before-width` | ✅ | ✅ | ❌ |
| `-webkit-border-end` | ✅ | ✅ | ❌ |
| `-webkit-border-end-color` | ✅ | ✅ | ❌ |
| `-webkit-border-end-style` | ✅ | ✅ | ❌ |
| `-webkit-border-end-width` | ✅ | ✅ | ❌ |
| `-webkit-border-horizontal-spacing` | ✅ | ✅ | ❌ |
| `-webkit-border-image` | ✅ | ✅ | ✅ |
| `-webkit-border-start` | ✅ | ✅ | ❌ |
| `-webkit-border-start-color` | ✅ | ✅ | ❌ |
| `-webkit-border-start-style` | ✅ | ✅ | ❌ |
| `-webkit-border-start-width` | ✅ | ✅ | ❌ |
| `-webkit-border-vertical-spacing` | ✅ | ✅ | ❌ |
| `-webkit-box-decoration-break` | ✅ | ✅ | ❌ |
| `-webkit-box-direction` | ✅ | ✅ | ✅ |
| `-webkit-box-flex-group` | ❌ | ✅ | ❌ |
| `-webkit-box-lines` | ❌ | ✅ | ❌ |
| `-webkit-box-reflect` | ✅ | ✅ | ❌ |
| `-webkit-clip-path` | ✅ | ✅ | ✅ |
| `-webkit-column-axis` | ❌ | ✅ | ❌ |
| `-webkit-column-break-after` | ✅ | ✅ | ❌ |
| `-webkit-column-break-before` | ✅ | ✅ | ❌ |
| `-webkit-column-break-inside` | ✅ | ✅ | ❌ |
| `-webkit-column-count` | ✅ | ✅ | ❌ |
| `-webkit-column-fill` | ❌ | ✅ | ❌ |
| `-webkit-column-gap` | ✅ | ✅ | ❌ |
| `-webkit-column-progression` | ❌ | ✅ | ❌ |
| `-webkit-column-rule` | ✅ | ✅ | ❌ |
| `-webkit-column-rule-color` | ✅ | ✅ | ❌ |
| `-webkit-column-rule-style` | ✅ | ✅ | ❌ |
| `-webkit-column-rule-width` | ✅ | ✅ | ❌ |
| `-webkit-column-span` | ✅ | ✅ | ❌ |
| `-webkit-column-width` | ✅ | ✅ | ❌ |
| `-webkit-columns` | ✅ | ✅ | ❌ |
| `-webkit-cursor-visibility` | ❌ | ✅ | ❌ |
| `-webkit-font-feature-settings` | ✅ | ❌ | ✅ |
| `-webkit-font-kerning` | ❌ | ✅ | ❌ |
| `-webkit-font-smoothing` | ✅ | ✅ | ❌ |
| `-webkit-hyphenate-character` | ✅ | ✅ | ❌ |
| `-webkit-hyphenate-limit-after` | ❌ | ✅ | ❌ |
| `-webkit-hyphenate-limit-before` | ❌ | ✅ | ❌ |
| `-webkit-hyphenate-limit-lines` | ❌ | ✅ | ❌ |
| `-webkit-hyphens` | ❌ | ✅ | ❌ |
| `-webkit-initial-letter` | ❌ | ✅ | ❌ |
| `-webkit-justify-items` | ❌ | ✅ | ❌ |
| `-webkit-line-align` | ❌ | ✅ | ❌ |
| `-webkit-line-box-contain` | ❌ | ✅ | ❌ |
| `-webkit-line-break` | ✅ | ✅ | ❌ |
| `-webkit-line-grid` | ❌ | ✅ | ❌ |
| `-webkit-line-snap` | ❌ | ✅ | ❌ |
| `-webkit-locale` | ✅ | ✅ | ❌ |
| `-webkit-logical-height` | ✅ | ✅ | ❌ |
| `-webkit-logical-width` | ✅ | ✅ | ❌ |
| `-webkit-margin-after` | ✅ | ✅ | ❌ |
| `-webkit-margin-before` | ✅ | ✅ | ❌ |
| `-webkit-margin-end` | ✅ | ✅ | ❌ |
| `-webkit-margin-start` | ✅ | ✅ | ❌ |
| `-webkit-mask-position-x` | ✅ | ✅ | ✅ |
| `-webkit-mask-position-y` | ✅ | ✅ | ✅ |
| `-webkit-mask-source-type` | ❌ | ✅ | ❌ |
| `-webkit-max-logical-height` | ✅ | ✅ | ❌ |
| `-webkit-max-logical-width` | ✅ | ✅ | ❌ |
| `-webkit-min-logical-height` | ✅ | ✅ | ❌ |
| `-webkit-min-logical-width` | ✅ | ✅ | ❌ |
| `-webkit-nbsp-mode` | ❌ | ✅ | ❌ |
| `-webkit-opacity` | ✅ | ✅ | ❌ |
| `-webkit-padding-after` | ✅ | ✅ | ❌ |
| `-webkit-padding-before` | ✅ | ✅ | ❌ |
| `-webkit-padding-end` | ✅ | ✅ | ❌ |
| `-webkit-padding-start` | ✅ | ✅ | ❌ |
| `-webkit-perspective-origin-x` | ✅ | ✅ | ❌ |
| `-webkit-perspective-origin-y` | ✅ | ✅ | ❌ |
| `-webkit-print-color-adjust` | ✅ | ✅ | ❌ |
| `-webkit-rtl-ordering` | ✅ | ✅ | ❌ |
| `-webkit-ruby-position` | ✅ | ✅ | ❌ |
| `-webkit-shape-image-threshold` | ✅ | ✅ | ❌ |
| `-webkit-shape-margin` | ✅ | ✅ | ❌ |
| `-webkit-shape-outside` | ✅ | ✅ | ❌ |
| `-webkit-tap-highlight-color` | ✅ | ✅ | ❌ |
| `-webkit-text-combine` | ✅ | ✅ | ❌ |
| `-webkit-text-decoration` | ❌ | ✅ | ❌ |
| `-webkit-text-decoration-color` | ❌ | ✅ | ❌ |
| `-webkit-text-decoration-line` | ❌ | ✅ | ❌ |
| `-webkit-text-decoration-skip` | ❌ | ✅ | ❌ |
| `-webkit-text-decoration-style` | ❌ | ✅ | ❌ |
| `-webkit-text-decorations-in-effect` | ✅ | ✅ | ❌ |
| `-webkit-text-emphasis` | ✅ | ✅ | ❌ |
| `-webkit-text-emphasis-color` | ✅ | ✅ | ❌ |
| `-webkit-text-emphasis-position` | ✅ | ✅ | ❌ |
| `-webkit-text-emphasis-style` | ✅ | ✅ | ❌ |
| `-webkit-text-orientation` | ✅ | ✅ | ❌ |
| `-webkit-text-security` | ✅ | ✅ | ✅ |
| `-webkit-text-underline-position` | ❌ | ✅ | ❌ |
| `-webkit-text-zoom` | ❌ | ✅ | ❌ |
| `-webkit-touch-callout` | ❌ | ✅ | ❌ |
| `-webkit-transform-origin-x` | ✅ | ✅ | ❌ |
| `-webkit-transform-origin-y` | ✅ | ✅ | ❌ |
| `-webkit-transform-origin-z` | ✅ | ✅ | ❌ |
| `-webkit-user-drag` | ✅ | ✅ | ❌ |
| `-webkit-user-modify` | ✅ | ✅ | ❌ |
| `-webkit-writing-mode` | ✅ | ✅ | ❌ |
| `buffered-rendering` | ✅ | ✅ | ❌ |
| `color-rendering` | ✅ | ❌ | ❌ |
| `glyph-orientation-horizontal` | ❌ | ✅ | ❌ |
| `ime-mode` | ❌ | ❌ | ✅ |
| `inset-area` | ✅ | ❌ | ❌ |
| `kerning` | ❌ | ✅ | ❌ |
| `mask-position-x` | ❌ | ❌ | ✅ |
| `mask-position-y` | ❌ | ❌ | ✅ |
| `scroll-snap-margin` | ❌ | ✅ | ❌ |
| `scroll-snap-margin-bottom` | ❌ | ✅ | ❌ |
| `scroll-snap-margin-left` | ❌ | ✅ | ❌ |
| `scroll-snap-margin-right` | ❌ | ✅ | ❌ |
| `scroll-snap-margin-top` | ❌ | ✅ | ❌ |
| `supported-color-schemes` | ❌ | ✅ | ❌ |
| `transform-origin-x` | ❌ | ✅ | ❌ |
| `transform-origin-y` | ❌ | ✅ | ❌ |
| `transform-origin-z` | ❌ | ✅ | ❌ |

### CSS Property Values
- `<color>`: `-webkit-link`
- [`<image>`: `-webkit-canvas()`](https://webkit.org/blog/176/css-canvas-drawing/)

### CSS Pseudo-elements
- `::-webkit-calendar-picker-indicator`
- `::-webkit-clear-button`
- `::-webkit-color-swatch`
- `::-webkit-color-swatch-wrapper`
- `::-webkit-date-and-time-value`
- `::-webkit-datetime-edit`
- `::-webkit-datetime-edit-ampm-field`
- `::-webkit-datetime-edit-day-field`
- `::-webkit-datetime-edit-fields-wrapper`
- `::-webkit-datetime-edit-hour-field`
- `::-webkit-datetime-edit-millisecond-field`
- `::-webkit-datetime-edit-minute-field`
- `::-webkit-datetime-edit-month-field`
- `::-webkit-datetime-edit-second-field`
- `::-webkit-datetime-edit-text`
- `::-webkit-datetime-edit-week-field`
- `::-webkit-datetime-edit-year-field`
- `::-webkit-file-upload-button`
- `::-webkit-inner-spin-button`
- `::-webkit-input-placeholder`
- `::-webkit-media-controls`
- `::-webkit-media-controls-current-time-display`
- `::-webkit-media-controls-enclosure`
- `::-webkit-media-controls-fullscreen-button`
- `::-webkit-media-controls-mute-button`
- `::-webkit-media-controls-overlay-enclosure`
- `::-webkit-media-controls-overlay-play-button`
- `::-webkit-media-controls-panel`
- `::-webkit-media-controls-play-button`
- `::-webkit-media-controls-timeline`
- `::-webkit-media-controls-timeline-container`
- `::-webkit-media-controls-time-remaining-display`
- `::-webkit-media-controls-toggle-closed-captions-button`
- `::-webkit-media-controls-volume-slider`
- `::-webkit-media-slider-container`
- `::-webkit-media-slider-thumb`
- `::-webkit-media-text-track-container`
- `::-webkit-media-text-track-display`
- `::-webkit-media-text-track-region`
- `::-webkit-media-text-track-region-container`
- `::-webkit-meter-bar`
- `::-webkit-meter-even-less-good-value`
- `::-webkit-meter-inner-element`
- `::-webkit-meter-optimum-value`
- `::-webkit-meter-suboptimum-value`
- `::-webkit-progress-bar`
- `::-webkit-progress-inner-element`
- `::-webkit-progress-value`
- `::-webkit-search-cancel-button`
- `::-webkit-slider-container`
- `::-webkit-slider-runnable-track`
- `::-webkit-slider-thumb`
- `::-webkit-textfield-decoration-container`
- `::-webkit-resizer`
- `::-webkit-scrollbar`
- `::-webkit-scrollbar-button`
- `::-webkit-scrollbar-corner`
- `::-webkit-scrollbar-thumb`
- `::-webkit-scrollbar-track`
- `::-webkit-scrollbar-track-piece`
- `::-webkit-details-marker`
- `::-moz-color-swatch`
- `::-moz-focus-inner`
- `::-moz-meter-bar`
- `::-moz-placeholder`
- `::-moz-progress-bar`
- `::-moz-range-progress`
- `::-moz-range-thumb`
- `::-moz-range-track`

### CSS Pseudo classes
- `:-webkit-any-link`
- `:-webkit-autofill`
- `:-webkit-drag`
- `:-webkit-full-page-media`
- `:-webkit-full-screen`
- `:-webkit-full-screen-ancestor`
- `:-webkit-any()`

### CSS at-rules and descriptors
- `@-moz-document url-prefix()`

### Viewport properties
Most properties from in the viewport `<meta>` element are not yet specified in the [CSS Viewport Specification](https://drafts.csswg.org/css-viewport-1/#viewport-meta)
- `width`
- `height`
- `initial-scale`
- `minimum-scale`
- `maximum-scale`
- `user-scalable`
- `extend-to-zoom`

### Units
- `x`

### CSS stuff exclusive to other browsers

#### Microsoft Edge
- [`::-ms-reveal`](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/password-reveal)
- `::-ms-clear`

## JavaScript

### ECMAScript built-ins
- `Intl.v8BreakIterator`

### JavaScript APIs

| Feature | Chromium | Safari | Firefox |
| :--- | :---: | :---: | :---: |
| `Animation.prototype.rangeEnd` | ✅ | ❌ | ❌ |
| `Animation.prototype.rangeStart` | ✅ | ❌ | ❌ |
| `AudioTrack.prototype.configuration` | ❌ | ✅ | ❌ |
| `AudioTrackConfiguration` | ❌ | ✅ | ❌ |
| `AudioTrackList.prototype.item()` | ❌ | ✅ | ❌ |
| `BaseAudioContext.prototype.resume()` | ❌ | ❌ | ✅ |
| `BeforeInstallPromptEvent.prototype.platforms` | ✅ | ❌ | ❌ |
| `BeforeInstallPromptEvent.prototype.userChoice` | ✅ | ❌ | ❌ |
| `ByteLengthQueuingStrategy.prototype.size()` | ❌ | ✅ | ❌ |
| `CSS.x()` | ✅ | ❌ | ❌ |
| `CSS2Properties` | ❌ | ❌ | ✅ |
| `CSSFontFeatureValuesRule.prototype.valueText` | ❌ | ❌ | ✅ |
| `CSSMozDocumentRule` | ❌ | ❌ | ✅ |
| `CSSPositionTryDescriptors.prototype.inset-area` | ✅ | ❌ | ❌ |
| `CSSPositionTryDescriptors.prototype.insetArea` | ✅ | ❌ | ❌ |
| `CSSPositionValue` | ✅ | ❌ | ❌ |
| `CSSPrimitiveValue` | ❌ | ✅ | ❌ |
| `CSSRule.UNKNOWN_RULE` | ❌ | ✅ | ❌ |
| `CSSRule.WEBKIT_KEYFRAMES_RULE` | ❌ | ✅ | ❌ |
| `CSSRule.WEBKIT_KEYFRAME_RULE` | ❌ | ✅ | ❌ |
| `CSSRule.prototype.UNKNOWN_RULE` | ❌ | ✅ | ❌ |
| `CSSRule.prototype.WEBKIT_KEYFRAMES_RULE` | ❌ | ✅ | ❌ |
| `CSSRule.prototype.WEBKIT_KEYFRAME_RULE` | ❌ | ✅ | ❌ |
| `CSSStyleRule.prototype.cssRules` | ✅ | ✅ | ❌ |
| `CSSStyleRule.prototype.deleteRule()` | ✅ | ✅ | ❌ |
| `CSSStyleRule.prototype.insertRule()` | ✅ | ✅ | ❌ |
| `CSSValue` | ❌ | ✅ | ❌ |
| `CSSValueList` | ❌ | ✅ | ❌ |
| `CanvasCaptureMediaStream` | ❌ | ❌ | ✅ |
| `CanvasRenderingContext2D.prototype.clearShadow()` | ❌ | ✅ | ❌ |
| `CanvasRenderingContext2D.prototype.drawImageFromRect()` | ❌ | ✅ | ❌ |
| `CanvasRenderingContext2D.prototype.setAlpha()` | ❌ | ✅ | ❌ |
| `CanvasRenderingContext2D.prototype.setCompositeOperation()` | ❌ | ✅ | ❌ |
| `CanvasRenderingContext2D.prototype.setFillColor()` | ❌ | ✅ | ❌ |
| `CanvasRenderingContext2D.prototype.setLineCap()` | ❌ | ✅ | ❌ |
| `CanvasRenderingContext2D.prototype.setLineJoin()` | ❌ | ✅ | ❌ |
| `CanvasRenderingContext2D.prototype.setLineWidth()` | ❌ | ✅ | ❌ |
| `CanvasRenderingContext2D.prototype.setMiterLimit()` | ❌ | ✅ | ❌ |
| `CanvasRenderingContext2D.prototype.setShadow()` | ❌ | ✅ | ❌ |
| `CanvasRenderingContext2D.prototype.setStrokeColor()` | ❌ | ✅ | ❌ |
| `CanvasRenderingContext2D.prototype.webkitBackingStorePixelRatio` | ❌ | ✅ | ❌ |
| `CanvasRenderingContext2D.prototype.webkitImageSmoothingEnabled` | ❌ | ✅ | ❌ |
| `CanvasRenderingContext2D.prototype.webkitLineDash` | ❌ | ✅ | ❌ |
| `CanvasRenderingContext2D.prototype.webkitLineDashOffset` | ❌ | ✅ | ❌ |
| `CompositionEvent.prototype.locale` | ❌ | ❌ | ✅ |
| `CountQueuingStrategy.prototype.size()` | ❌ | ✅ | ❌ |
| `Counter` | ❌ | ✅ | ❌ |
| `DOMError` | ✅ | ❌ | ❌ |
| `DOMException.prototype.columnNumber` | ❌ | ❌ | ✅ |
| `DOMException.prototype.data` | ❌ | ❌ | ✅ |
| `DOMException.prototype.filename` | ❌ | ❌ | ✅ |
| `DOMException.prototype.lineNumber` | ❌ | ❌ | ✅ |
| `DOMException.prototype.result` | ❌ | ❌ | ✅ |
| `DOMException.prototype.stack` | ❌ | ❌ | ✅ |
| `DOMTokenList.prototype.toString()` | ✅ | ✅ | ✅ |
| `DataCue.prototype.data` | ❌ | ✅ | ❌ |
| `DataTransfer.prototype.addElement()` | ❌ | ❌ | ✅ |
| `DataTransfer.prototype.mozCursor` | ❌ | ❌ | ✅ |
| `DataTransfer.prototype.mozSourceNode` | ❌ | ❌ | ✅ |
| `DataTransfer.prototype.mozUserCancelled` | ❌ | ❌ | ✅ |
| `DataTransferItemList.prototype.item()` | ❌ | ✅ | ❌ |
| `DelegatedInkTrailPresenter` | ✅ | ❌ | ❌ |
| `DeviceMotionEvent.prototype.initDeviceMotionEvent()` | ❌ | ❌ | ✅ |
| `DeviceOrientationEvent.prototype.initDeviceOrientationEvent()` | ❌ | ❌ | ✅ |
| `Directory` | ❌ | ❌ | ✅ |
| `Document.prototype.caretRangeFromPoint()` | ✅ | ✅ | ❌ |
| `Document.prototype.createTouch()` | ❌ | ✅ | ❌ |
| `Document.prototype.createTouchList()` | ❌ | ✅ | ❌ |
| `Document.prototype.enableStyleSheetsForSet()` | ❌ | ❌ | ✅ |
| `Document.prototype.featurePolicy` | ✅ | ❌ | ❌ |
| `Document.prototype.getCSSCanvasContext()` | ❌ | ✅ | ❌ |
| `Document.prototype.lastStyleSheetSet` | ❌ | ❌ | ✅ |
| `Document.prototype.mozCancelFullScreen()` | ❌ | ❌ | ✅ |
| `Document.prototype.mozFullScreen` | ❌ | ❌ | ✅ |
| `Document.prototype.mozFullScreenElement` | ❌ | ❌ | ✅ |
| `Document.prototype.mozFullScreenEnabled` | ❌ | ❌ | ✅ |
| `Document.prototype.mozSetImageElement()` | ❌ | ❌ | ✅ |
| `Document.prototype.onafterscriptexecute` | ❌ | ❌ | ✅ |
| `Document.prototype.onbeforecopy` | ✅ | ✅ | ❌ |
| `Document.prototype.onbeforecut` | ✅ | ✅ | ❌ |
| `Document.prototype.onbeforepaste` | ✅ | ✅ | ❌ |
| `Document.prototype.onbeforescriptexecute` | ❌ | ❌ | ✅ |
| `Document.prototype.oncontentvisibilityautostatechange` | ✅ | ✅ | ✅ |
| `Document.prototype.ondragexit` | ❌ | ❌ | ✅ |
| `Document.prototype.onmousewheel` | ✅ | ✅ | ❌ |
| `Document.prototype.onmozfullscreenchange` | ❌ | ❌ | ✅ |
| `Document.prototype.onmozfullscreenerror` | ❌ | ❌ | ✅ |
| `Document.prototype.onscrollsnapchange` | ✅ | ❌ | ❌ |
| `Document.prototype.onscrollsnapchanging` | ✅ | ❌ | ❌ |
| `Document.prototype.onsearch` | ✅ | ❌ | ❌ |
| `Document.prototype.onwebkitfullscreenchange` | ✅ | ✅ | ❌ |
| `Document.prototype.onwebkitfullscreenerror` | ✅ | ✅ | ❌ |
| `Document.prototype.onwebkitmouseforcechanged` | ❌ | ✅ | ❌ |
| `Document.prototype.onwebkitmouseforcedown` | ❌ | ✅ | ❌ |
| `Document.prototype.onwebkitmouseforceup` | ❌ | ✅ | ❌ |
| `Document.prototype.onwebkitmouseforcewillbegin` | ❌ | ✅ | ❌ |
| `Document.prototype.preferredStyleSheetSet` | ❌ | ❌ | ✅ |
| `Document.prototype.releaseCapture()` | ❌ | ❌ | ✅ |
| `Document.prototype.selectedStyleSheetSet` | ❌ | ❌ | ✅ |
| `Document.prototype.styleSheetSets` | ❌ | ❌ | ✅ |
| `Document.prototype.webkitCancelFullScreen()` | ✅ | ✅ | ❌ |
| `Document.prototype.webkitCurrentFullScreenElement` | ✅ | ✅ | ❌ |
| `Document.prototype.webkitExitFullscreen()` | ✅ | ✅ | ❌ |
| `Document.prototype.webkitFullScreenKeyboardInputAllowed` | ❌ | ✅ | ❌ |
| `Document.prototype.webkitFullscreenElement` | ✅ | ✅ | ❌ |
| `Document.prototype.webkitFullscreenEnabled` | ✅ | ✅ | ❌ |
| `Document.prototype.webkitHidden` | ✅ | ❌ | ❌ |
| `Document.prototype.webkitIsFullScreen` | ✅ | ✅ | ❌ |
| `Document.prototype.webkitVisibilityState` | ✅ | ❌ | ❌ |
| `Document.prototype.xmlEncoding` | ✅ | ✅ | ❌ |
| `Document.prototype.xmlStandalone` | ✅ | ✅ | ❌ |
| `Document.prototype.xmlVersion` | ✅ | ✅ | ❌ |
| `DragEvent.prototype.initDragEvent()` | ❌ | ❌ | ✅ |
| `Element.prototype.ariaRelevant` | ✅ | ✅ | ✅ |
| `Element.prototype.getInnerHTML()` | ✅ | ❌ | ❌ |
| `Element.prototype.mozMatchesSelector()` | ❌ | ❌ | ✅ |
| `Element.prototype.mozRequestFullScreen()` | ❌ | ❌ | ✅ |
| `Element.prototype.onbeforecopy` | ✅ | ❌ | ❌ |
| `Element.prototype.onbeforecut` | ✅ | ❌ | ❌ |
| `Element.prototype.onbeforeload` | ❌ | ✅ | ❌ |
| `Element.prototype.onbeforepaste` | ✅ | ❌ | ❌ |
| `Element.prototype.onfocusin` | ❌ | ✅ | ❌ |
| `Element.prototype.onfocusout` | ❌ | ✅ | ❌ |
| `Element.prototype.onsearch` | ✅ | ❌ | ❌ |
| `Element.prototype.onwebkitfullscreenchange` | ✅ | ✅ | ❌ |
| `Element.prototype.onwebkitfullscreenerror` | ✅ | ✅ | ❌ |
| `Element.prototype.releaseCapture()` | ❌ | ❌ | ✅ |
| `Element.prototype.scrollIntoViewIfNeeded()` | ✅ | ✅ | ❌ |
| `Element.prototype.scrollLeftMax` | ❌ | ❌ | ✅ |
| `Element.prototype.scrollTopMax` | ❌ | ❌ | ✅ |
| `Element.prototype.setCapture()` | ❌ | ❌ | ✅ |
| `Element.prototype.webkitRequestFullScreen()` | ✅ | ✅ | ❌ |
| `Element.prototype.webkitRequestFullscreen()` | ✅ | ✅ | ❌ |
| `ElementInternals.prototype.ariaRelevant` | ✅ | ✅ | ✅ |
| `Event.ALT_MASK` | ❌ | ❌ | ✅ |
| `Event.CONTROL_MASK` | ❌ | ❌ | ✅ |
| `Event.META_MASK` | ❌ | ❌ | ✅ |
| `Event.SHIFT_MASK` | ❌ | ❌ | ✅ |
| `Event.prototype.ALT_MASK` | ❌ | ❌ | ✅ |
| `Event.prototype.CONTROL_MASK` | ❌ | ❌ | ✅ |
| `Event.prototype.META_MASK` | ❌ | ❌ | ✅ |
| `Event.prototype.SHIFT_MASK` | ❌ | ❌ | ✅ |
| `Event.prototype.explicitOriginalTarget` | ❌ | ❌ | ✅ |
| `Event.prototype.originalTarget` | ❌ | ❌ | ✅ |
| `FeaturePolicy` | ✅ | ❌ | ❌ |
| `File.prototype.lastModifiedDate` | ✅ | ❌ | ❌ |
| `FileSystemFileHandle.prototype.move()` | ✅ | ❌ | ❌ |
| `FileSystemHandle.prototype.move()` | ❌ | ❌ | ✅ |
| `FileSystemHandle.prototype.remove()` | ✅ | ❌ | ❌ |
| `FileSystemWritableFileStream.prototype.mode` | ✅ | ❌ | ❌ |
| `FontFace.prototype.sizeAdjust` | ✅ | ✅ | ✅ |
| `FontFace.prototype.variant` | ✅ | ❌ | ✅ |
| `GPUAdapter.prototype.requestAdapterInfo()` | ✅ | ❌ | ❌ |
| `GPUBufferUsage.prototype` | ❌ | ✅ | ❌ |
| `GPUBufferUsage.prototype.COPY_DST` | ❌ | ✅ | ❌ |
| `GPUBufferUsage.prototype.COPY_SRC` | ❌ | ✅ | ❌ |
| `GPUBufferUsage.prototype.INDEX` | ❌ | ✅ | ❌ |
| `GPUBufferUsage.prototype.INDIRECT` | ❌ | ✅ | ❌ |
| `GPUBufferUsage.prototype.MAP_READ` | ❌ | ✅ | ❌ |
| `GPUBufferUsage.prototype.MAP_WRITE` | ❌ | ✅ | ❌ |
| `GPUBufferUsage.prototype.QUERY_RESOLVE` | ❌ | ✅ | ❌ |
| `GPUBufferUsage.prototype.STORAGE` | ❌ | ✅ | ❌ |
| `GPUBufferUsage.prototype.UNIFORM` | ❌ | ✅ | ❌ |
| `GPUBufferUsage.prototype.VERTEX` | ❌ | ✅ | ❌ |
| `GPUColorWrite.prototype` | ❌ | ✅ | ❌ |
| `GPUColorWrite.prototype.ALL` | ❌ | ✅ | ❌ |
| `GPUColorWrite.prototype.ALPHA` | ❌ | ✅ | ❌ |
| `GPUColorWrite.prototype.BLUE` | ❌ | ✅ | ❌ |
| `GPUColorWrite.prototype.GREEN` | ❌ | ✅ | ❌ |
| `GPUColorWrite.prototype.RED` | ❌ | ✅ | ❌ |
| `GPUComputePassEncoder.prototype.writeTimestamp()` | ✅ | ❌ | ❌ |
| `GPUMapMode.prototype` | ❌ | ✅ | ❌ |
| `GPUMapMode.prototype.READ` | ❌ | ✅ | ❌ |
| `GPUMapMode.prototype.WRITE` | ❌ | ✅ | ❌ |
| `GPURenderPassEncoder.prototype.writeTimestamp()` | ✅ | ❌ | ❌ |
| `GPUShaderStage.prototype` | ❌ | ✅ | ❌ |
| `GPUShaderStage.prototype.COMPUTE` | ❌ | ✅ | ❌ |
| `GPUShaderStage.prototype.FRAGMENT` | ❌ | ✅ | ❌ |
| `GPUShaderStage.prototype.VERTEX` | ❌ | ✅ | ❌ |
| `GPUSupportedLimits.prototype.maxInterStageShaderComponents` | ✅ | ❌ | ❌ |
| `GPUTextureUsage.prototype` | ❌ | ✅ | ❌ |
| `GPUTextureUsage.prototype.COPY_DST` | ❌ | ✅ | ❌ |
| `GPUTextureUsage.prototype.COPY_SRC` | ❌ | ✅ | ❌ |
| `GPUTextureUsage.prototype.RENDER_ATTACHMENT` | ❌ | ✅ | ❌ |
| `GPUTextureUsage.prototype.STORAGE_BINDING` | ❌ | ✅ | ❌ |
| `GPUTextureUsage.prototype.TEXTURE_BINDING` | ❌ | ✅ | ❌ |
| `GamepadHapticActuator.prototype.type` | ✅ | ❌ | ✅ |
| `GeolocationCoordinates.prototype.floorLevel` | ❌ | ✅ | ❌ |
| `HTMLAnchorElement.prototype.attributionDestination` | ❌ | ✅ | ❌ |
| `HTMLAnchorElement.prototype.toString()` | ✅ | ✅ | ✅ |
| `HTMLAreaElement.prototype.toString()` | ✅ | ✅ | ✅ |
| `HTMLBodyElement.prototype.onblur` | ✅ | ✅ | ❌ |
| `HTMLBodyElement.prototype.onerror` | ✅ | ✅ | ❌ |
| `HTMLBodyElement.prototype.onfocus` | ✅ | ✅ | ❌ |
| `HTMLBodyElement.prototype.onfocusin` | ❌ | ✅ | ❌ |
| `HTMLBodyElement.prototype.onfocusout` | ❌ | ✅ | ❌ |
| `HTMLBodyElement.prototype.onload` | ✅ | ✅ | ❌ |
| `HTMLBodyElement.prototype.onresize` | ✅ | ✅ | ❌ |
| `HTMLBodyElement.prototype.onscroll` | ✅ | ✅ | ❌ |
| `HTMLBodyElement.prototype.onwebkitmouseforcechanged` | ❌ | ✅ | ❌ |
| `HTMLBodyElement.prototype.onwebkitmouseforcedown` | ❌ | ✅ | ❌ |
| `HTMLBodyElement.prototype.onwebkitmouseforceup` | ❌ | ✅ | ❌ |
| `HTMLBodyElement.prototype.onwebkitmouseforcewillbegin` | ❌ | ✅ | ❌ |
| `HTMLCanvasElement.prototype.mozOpaque` | ❌ | ❌ | ✅ |
| `HTMLCanvasElement.prototype.mozPrintCallback` | ❌ | ❌ | ✅ |
| `HTMLDocument` | ✅ | ✅ | ✅ |
| `HTMLElement.prototype.cue` | ❌ | ✅ | ❌ |
| `HTMLElement.prototype.cuebackground` | ❌ | ✅ | ❌ |
| `HTMLElement.prototype.onbeforecopy` | ❌ | ✅ | ❌ |
| `HTMLElement.prototype.onbeforecut` | ❌ | ✅ | ❌ |
| `HTMLElement.prototype.onbeforepaste` | ❌ | ✅ | ❌ |
| `HTMLElement.prototype.oncontentvisibilityautostatechange` | ✅ | ✅ | ✅ |
| `HTMLElement.prototype.ondragexit` | ❌ | ❌ | ✅ |
| `HTMLElement.prototype.onmousewheel` | ✅ | ✅ | ❌ |
| `HTMLElement.prototype.onmozfullscreenchange` | ❌ | ❌ | ✅ |
| `HTMLElement.prototype.onmozfullscreenerror` | ❌ | ❌ | ✅ |
| `HTMLElement.prototype.onscrollsnapchange` | ✅ | ❌ | ❌ |
| `HTMLElement.prototype.onscrollsnapchanging` | ✅ | ❌ | ❌ |
| `HTMLElement.prototype.onwebkitmouseforcechanged` | ❌ | ✅ | ❌ |
| `HTMLElement.prototype.onwebkitmouseforcedown` | ❌ | ✅ | ❌ |
| `HTMLElement.prototype.onwebkitmouseforceup` | ❌ | ✅ | ❌ |
| `HTMLElement.prototype.onwebkitmouseforcewillbegin` | ❌ | ✅ | ❌ |
| `HTMLElement.prototype.webkitdropzone` | ❌ | ✅ | ❌ |
| `HTMLFencedFrameElement.canLoadOpaqueURL()` | ✅ | ❌ | ❌ |
| `HTMLFrameElement.prototype.getSVGDocument()` | ❌ | ✅ | ❌ |
| `HTMLFrameSetElement.prototype.onblur` | ✅ | ✅ | ❌ |
| `HTMLFrameSetElement.prototype.onerror` | ✅ | ✅ | ❌ |
| `HTMLFrameSetElement.prototype.onfocus` | ✅ | ✅ | ❌ |
| `HTMLFrameSetElement.prototype.onfocusin` | ❌ | ✅ | ❌ |
| `HTMLFrameSetElement.prototype.onfocusout` | ❌ | ✅ | ❌ |
| `HTMLFrameSetElement.prototype.onload` | ✅ | ✅ | ❌ |
| `HTMLFrameSetElement.prototype.onresize` | ✅ | ✅ | ❌ |
| `HTMLFrameSetElement.prototype.onscroll` | ✅ | ✅ | ❌ |
| `HTMLIFrameElement.prototype.allowPaymentRequest` | ✅ | ❌ | ❌ |
| `HTMLIFrameElement.prototype.featurePolicy` | ✅ | ❌ | ❌ |
| `HTMLInputElement.prototype.incremental` | ✅ | ❌ | ❌ |
| `HTMLInputElement.prototype.mozIsTextField()` | ❌ | ❌ | ✅ |
| `HTMLInputElement.prototype.textLength` | ❌ | ❌ | ✅ |
| `HTMLMediaElement.prototype.controller` | ❌ | ✅ | ❌ |
| `HTMLMediaElement.prototype.controlsList` | ✅ | ❌ | ❌ |
| `HTMLMediaElement.prototype.getVideoPlaybackQuality()` | ❌ | ✅ | ❌ |
| `HTMLMediaElement.prototype.mediaGroup` | ❌ | ✅ | ❌ |
| `HTMLMediaElement.prototype.mozAudioCaptured` | ❌ | ❌ | ✅ |
| `HTMLMediaElement.prototype.mozCaptureStream()` | ❌ | ❌ | ✅ |
| `HTMLMediaElement.prototype.mozCaptureStreamUntilEnded()` | ❌ | ❌ | ✅ |
| `HTMLMediaElement.prototype.mozFragmentEnd` | ❌ | ❌ | ✅ |
| `HTMLMediaElement.prototype.mozGetMetadata()` | ❌ | ❌ | ✅ |
| `HTMLMediaElement.prototype.webkitAudioDecodedByteCount` | ✅ | ❌ | ❌ |
| `HTMLMediaElement.prototype.webkitPreservesPitch` | ❌ | ✅ | ❌ |
| `HTMLMediaElement.prototype.webkitVideoDecodedByteCount` | ✅ | ❌ | ❌ |
| `HTMLOptionsCollection.prototype.item()` | ❌ | ✅ | ❌ |
| `HTMLOptionsCollection.prototype.namedItem()` | ❌ | ✅ | ❌ |
| `HTMLVideoElement.prototype.mozDecodedFrames` | ❌ | ❌ | ✅ |
| `HTMLVideoElement.prototype.mozFrameDelay` | ❌ | ❌ | ✅ |
| `HTMLVideoElement.prototype.mozHasAudio` | ❌ | ❌ | ✅ |
| `HTMLVideoElement.prototype.mozPaintedFrames` | ❌ | ❌ | ✅ |
| `HTMLVideoElement.prototype.mozParsedFrames` | ❌ | ❌ | ✅ |
| `HTMLVideoElement.prototype.mozPresentedFrames` | ❌ | ❌ | ✅ |
| `HTMLVideoElement.prototype.webkitDecodedFrameCount` | ✅ | ❌ | ❌ |
| `HTMLVideoElement.prototype.webkitDisplayingFullscreen` | ❌ | ✅ | ❌ |
| `HTMLVideoElement.prototype.webkitDroppedFrameCount` | ✅ | ❌ | ❌ |
| `HTMLVideoElement.prototype.webkitEnterFullScreen()` | ❌ | ✅ | ❌ |
| `HTMLVideoElement.prototype.webkitEnterFullscreen()` | ❌ | ✅ | ❌ |
| `HTMLVideoElement.prototype.webkitExitFullScreen()` | ❌ | ✅ | ❌ |
| `HTMLVideoElement.prototype.webkitExitFullscreen()` | ❌ | ✅ | ❌ |
| `HTMLVideoElement.prototype.webkitSupportsFullscreen` | ❌ | ✅ | ❌ |
| `HashChangeEvent.prototype.initHashChangeEvent()` | ❌ | ✅ | ❌ |
| `IDBIndex.prototype.mozGetAll()` | ❌ | ❌ | ✅ |
| `IDBIndex.prototype.mozGetAllKeys()` | ❌ | ❌ | ✅ |
| `IDBObjectStore.prototype.mozGetAll()` | ❌ | ❌ | ✅ |
| `IDBVersionChangeEvent.prototype.dataLoss` | ✅ | ❌ | ❌ |
| `IDBVersionChangeEvent.prototype.dataLossMessage` | ✅ | ❌ | ❌ |
| `IdentityCredentialError` | ✅ | ❌ | ❌ |
| `ImageBitmapRenderingContext.prototype.transferImageBitmap()` | ❌ | ❌ | ✅ |
| `InstallTrigger` | ❌ | ❌ | ✅ |
| `InternalError` | ❌ | ❌ | ✅ |
| `KeyEvent` | ❌ | ❌ | ✅ |
| `LayoutShiftAttribution.prototype.toJSON()` | ✅ | ❌ | ❌ |
| `MathMLElement.prototype.onbeforecopy` | ❌ | ✅ | ❌ |
| `MathMLElement.prototype.onbeforecut` | ❌ | ✅ | ❌ |
| `MathMLElement.prototype.onbeforepaste` | ❌ | ✅ | ❌ |
| `MathMLElement.prototype.oncontentvisibilityautostatechange` | ✅ | ✅ | ✅ |
| `MathMLElement.prototype.ondragexit` | ❌ | ❌ | ✅ |
| `MathMLElement.prototype.onmousewheel` | ✅ | ✅ | ❌ |
| `MathMLElement.prototype.onmozfullscreenchange` | ❌ | ❌ | ✅ |
| `MathMLElement.prototype.onmozfullscreenerror` | ❌ | ❌ | ✅ |
| `MathMLElement.prototype.onscrollsnapchange` | ✅ | ❌ | ❌ |
| `MathMLElement.prototype.onscrollsnapchanging` | ✅ | ❌ | ❌ |
| `MathMLElement.prototype.onwebkitmouseforcechanged` | ❌ | ✅ | ❌ |
| `MathMLElement.prototype.onwebkitmouseforcedown` | ❌ | ✅ | ❌ |
| `MathMLElement.prototype.onwebkitmouseforceup` | ❌ | ✅ | ❌ |
| `MathMLElement.prototype.onwebkitmouseforcewillbegin` | ❌ | ✅ | ❌ |
| `MathMLMathElement` | ❌ | ✅ | ❌ |
| `MediaController` | ❌ | ✅ | ❌ |
| `MediaKeyError` | ❌ | ❌ | ✅ |
| `MediaKeySession.prototype.error` | ❌ | ❌ | ✅ |
| `MediaKeys.prototype.keySystem` | ❌ | ❌ | ✅ |
| `MediaList.prototype.toString()` | ✅ | ✅ | ✅ |
| `MediaRecorderErrorEvent` | ❌ | ✅ | ✅ |
| `MediaStream.prototype.onactive` | ✅ | ❌ | ❌ |
| `MediaStream.prototype.oninactive` | ✅ | ❌ | ❌ |
| `MediaStreamEvent` | ✅ | ❌ | ✅ |
| `MessageEvent.prototype.userActivation` | ✅ | ❌ | ❌ |
| `MouseEvent.MOZ_SOURCE_CURSOR` | ❌ | ❌ | ✅ |
| `MouseEvent.MOZ_SOURCE_ERASER` | ❌ | ❌ | ✅ |
| `MouseEvent.MOZ_SOURCE_KEYBOARD` | ❌ | ❌ | ✅ |
| `MouseEvent.MOZ_SOURCE_MOUSE` | ❌ | ❌ | ✅ |
| `MouseEvent.MOZ_SOURCE_PEN` | ❌ | ❌ | ✅ |
| `MouseEvent.MOZ_SOURCE_TOUCH` | ❌ | ❌ | ✅ |
| `MouseEvent.MOZ_SOURCE_UNKNOWN` | ❌ | ❌ | ✅ |
| `MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN` | ❌ | ✅ | ❌ |
| `MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN` | ❌ | ✅ | ❌ |
| `MouseEvent.prototype.MOZ_SOURCE_CURSOR` | ❌ | ❌ | ✅ |
| `MouseEvent.prototype.MOZ_SOURCE_ERASER` | ❌ | ❌ | ✅ |
| `MouseEvent.prototype.MOZ_SOURCE_KEYBOARD` | ❌ | ❌ | ✅ |
| `MouseEvent.prototype.MOZ_SOURCE_MOUSE` | ❌ | ❌ | ✅ |
| `MouseEvent.prototype.MOZ_SOURCE_PEN` | ❌ | ❌ | ✅ |
| `MouseEvent.prototype.MOZ_SOURCE_TOUCH` | ❌ | ❌ | ✅ |
| `MouseEvent.prototype.MOZ_SOURCE_UNKNOWN` | ❌ | ❌ | ✅ |
| `MouseEvent.prototype.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN` | ❌ | ✅ | ❌ |
| `MouseEvent.prototype.WEBKIT_FORCE_AT_MOUSE_DOWN` | ❌ | ✅ | ❌ |
| `MouseEvent.prototype.fromElement` | ✅ | ✅ | ❌ |
| `MouseEvent.prototype.initNSMouseEvent()` | ❌ | ❌ | ✅ |
| `MouseEvent.prototype.mozInputSource` | ❌ | ❌ | ✅ |
| `MouseEvent.prototype.mozPressure` | ❌ | ❌ | ✅ |
| `MouseEvent.prototype.toElement` | ✅ | ✅ | ❌ |
| `MouseEvent.prototype.webkitForce` | ❌ | ✅ | ❌ |
| `MouseScrollEvent` | ❌ | ❌ | ✅ |
| `NavigateEvent.prototype.canTransition` | ✅ | ❌ | ❌ |
| `Navigator.prototype.buildID` | ❌ | ❌ | ✅ |
| `Navigator.prototype.deprecatedURNToURL()` | ✅ | ❌ | ❌ |
| `Navigator.prototype.doNotTrack` | ✅ | ❌ | ✅ |
| `Navigator.prototype.getUserMedia()` | ✅ | ❌ | ❌ |
| `Navigator.prototype.globalPrivacyControl` | ❌ | ❌ | ✅ |
| `Navigator.prototype.login` | ✅ | ❌ | ❌ |
| `Navigator.prototype.mozGetUserMedia()` | ❌ | ❌ | ✅ |
| `Navigator.prototype.standalone` | ❌ | ✅ | ❌ |
| `Navigator.prototype.webkitGetUserMedia()` | ✅ | ❌ | ❌ |
| `Navigator.prototype.webkitPersistentStorage` | ✅ | ❌ | ❌ |
| `Navigator.prototype.webkitTemporaryStorage` | ✅ | ❌ | ❌ |
| `NavigatorLogin` | ✅ | ❌ | ❌ |
| `Notification.prototype.ondisplay` | ❌ | ✅ | ❌ |
| `Notification.prototype.show()` | ❌ | ✅ | ❌ |
| `OffscreenCanvas.prototype.toBlob()` | ❌ | ❌ | ✅ |
| `OffscreenCanvasRenderingContext2D.prototype.commit()` | ❌ | ❌ | ✅ |
| `OverconstrainedError.prototype.message` | ❌ | ✅ | ❌ |
| `OverconstrainedError.prototype.name` | ❌ | ✅ | ❌ |
| `OverconstrainedErrorEvent` | ❌ | ✅ | ❌ |
| `OverflowEvent` | ❌ | ✅ | ❌ |
| `PaintRequest` | ❌ | ❌ | ✅ |
| `PaintRequestList` | ❌ | ❌ | ✅ |
| `PaymentAddress` | ✅ | ❌ | ❌ |
| `PaymentRequest.prototype.hasEnrolledInstrument()` | ✅ | ❌ | ❌ |
| `Performance.prototype.memory` | ✅ | ❌ | ❌ |
| `PerformanceObserver.supportedEntryTypes.length` | ✅ | ✅ | ✅ |
| `PopupBlockedEvent` | ❌ | ❌ | ✅ |
| `PressureObserver.knownSources.length` | ✅ | ❌ | ❌ |
| `PushManager.supportedContentEncodings.length` | ✅ | ❌ | ❌ |
| `REGEXPS` | ❌ | ✅ | ❌ |
| `RGBColor` | ❌ | ✅ | ❌ |
| `RTCDataChannel.prototype.reliable` | ✅ | ❌ | ✅ |
| `RTCEncodedAudioFrame.prototype.timestamp` | ✅ | ❌ | ✅ |
| `RTCEncodedAudioFrame.prototype.toString()` | ✅ | ❌ | ❌ |
| `RTCEncodedVideoFrame.prototype.timestamp` | ✅ | ❌ | ✅ |
| `RTCEncodedVideoFrame.prototype.toString()` | ✅ | ❌ | ❌ |
| `RTCPeerConnection.prototype.addStream()` | ✅ | ❌ | ✅ |
| `RTCPeerConnection.prototype.createDTMFSender()` | ✅ | ❌ | ❌ |
| `RTCPeerConnection.prototype.getLocalStreams()` | ✅ | ❌ | ✅ |
| `RTCPeerConnection.prototype.getRemoteStreams()` | ✅ | ❌ | ✅ |
| `RTCPeerConnection.prototype.onaddstream` | ✅ | ❌ | ✅ |
| `RTCPeerConnection.prototype.onaddtrack` | ❌ | ❌ | ✅ |
| `RTCPeerConnection.prototype.onremovestream` | ✅ | ❌ | ❌ |
| `RTCPeerConnection.prototype.removeStream()` | ✅ | ❌ | ❌ |
| `RTCPeerConnectionIceErrorEvent.prototype.hostCandidate` | ✅ | ❌ | ❌ |
| `RTCRtpReceiver.prototype.createEncodedStreams()` | ✅ | ❌ | ❌ |
| `RTCRtpReceiver.prototype.playoutDelayHint` | ✅ | ❌ | ❌ |
| `RTCRtpSender.prototype.createEncodedStreams()` | ✅ | ❌ | ❌ |
| `RTCRtpTransceiver.prototype.stopped` | ✅ | ❌ | ✅ |
| `Range.NODE_AFTER` | ❌ | ✅ | ❌ |
| `Range.NODE_BEFORE` | ❌ | ✅ | ❌ |
| `Range.NODE_BEFORE_AND_AFTER` | ❌ | ✅ | ❌ |
| `Range.NODE_INSIDE` | ❌ | ✅ | ❌ |
| `Range.prototype.NODE_AFTER` | ❌ | ✅ | ❌ |
| `Range.prototype.NODE_BEFORE` | ❌ | ✅ | ❌ |
| `Range.prototype.NODE_BEFORE_AND_AFTER` | ❌ | ✅ | ❌ |
| `Range.prototype.NODE_INSIDE` | ❌ | ✅ | ❌ |
| `Range.prototype.compareNode()` | ❌ | ✅ | ❌ |
| `Range.prototype.expand()` | ✅ | ✅ | ❌ |
| `Rect` | ❌ | ✅ | ❌ |
| `SQLTransaction` | ❌ | ✅ | ❌ |
| `SVGAnimateColorElement` | ❌ | ✅ | ❌ |
| `SVGAnimationElement.prototype.hasExtension()` | ❌ | ✅ | ❌ |
| `SVGAnimationElement.prototype.requiredFeatures` | ❌ | ✅ | ❌ |
| `SVGDocument` | ❌ | ✅ | ❌ |
| `SVGElement.prototype.id` | ❌ | ❌ | ✅ |
| `SVGElement.prototype.onbeforecopy` | ❌ | ✅ | ❌ |
| `SVGElement.prototype.onbeforecut` | ❌ | ✅ | ❌ |
| `SVGElement.prototype.onbeforepaste` | ❌ | ✅ | ❌ |
| `SVGElement.prototype.oncontentvisibilityautostatechange` | ✅ | ✅ | ✅ |
| `SVGElement.prototype.ondragexit` | ❌ | ❌ | ✅ |
| `SVGElement.prototype.onmousewheel` | ✅ | ✅ | ❌ |
| `SVGElement.prototype.onmozfullscreenchange` | ❌ | ❌ | ✅ |
| `SVGElement.prototype.onmozfullscreenerror` | ❌ | ❌ | ✅ |
| `SVGElement.prototype.onscrollsnapchange` | ✅ | ❌ | ❌ |
| `SVGElement.prototype.onscrollsnapchanging` | ✅ | ❌ | ❌ |
| `SVGElement.prototype.onwebkitmouseforcechanged` | ❌ | ✅ | ❌ |
| `SVGElement.prototype.onwebkitmouseforcedown` | ❌ | ✅ | ❌ |
| `SVGElement.prototype.onwebkitmouseforceup` | ❌ | ✅ | ❌ |
| `SVGElement.prototype.onwebkitmouseforcewillbegin` | ❌ | ✅ | ❌ |
| `SVGFECompositeElement.SVG_FECOMPOSITE_OPERATOR_LIGHTER` | ❌ | ❌ | ✅ |
| `SVGFECompositeElement.prototype.SVG_FECOMPOSITE_OPERATOR_LIGHTER` | ❌ | ❌ | ✅ |
| `SVGFEFuncAElement.SVG_FECOMPONENTTRANSFER_TYPE_DISCRETE` | ✅ | ❌ | ❌ |
| `SVGFEFuncAElement.SVG_FECOMPONENTTRANSFER_TYPE_GAMMA` | ✅ | ❌ | ❌ |
| `SVGFEFuncAElement.SVG_FECOMPONENTTRANSFER_TYPE_IDENTITY` | ✅ | ❌ | ❌ |
| `SVGFEFuncAElement.SVG_FECOMPONENTTRANSFER_TYPE_LINEAR` | ✅ | ❌ | ❌ |
| `SVGFEFuncAElement.SVG_FECOMPONENTTRANSFER_TYPE_TABLE` | ✅ | ❌ | ❌ |
| `SVGFEFuncAElement.SVG_FECOMPONENTTRANSFER_TYPE_UNKNOWN` | ✅ | ❌ | ❌ |
| `SVGFEFuncBElement.SVG_FECOMPONENTTRANSFER_TYPE_DISCRETE` | ✅ | ❌ | ❌ |
| `SVGFEFuncBElement.SVG_FECOMPONENTTRANSFER_TYPE_GAMMA` | ✅ | ❌ | ❌ |
| `SVGFEFuncBElement.SVG_FECOMPONENTTRANSFER_TYPE_IDENTITY` | ✅ | ❌ | ❌ |
| `SVGFEFuncBElement.SVG_FECOMPONENTTRANSFER_TYPE_LINEAR` | ✅ | ❌ | ❌ |
| `SVGFEFuncBElement.SVG_FECOMPONENTTRANSFER_TYPE_TABLE` | ✅ | ❌ | ❌ |
| `SVGFEFuncBElement.SVG_FECOMPONENTTRANSFER_TYPE_UNKNOWN` | ✅ | ❌ | ❌ |
| `SVGFEFuncGElement.SVG_FECOMPONENTTRANSFER_TYPE_DISCRETE` | ✅ | ❌ | ❌ |
| `SVGFEFuncGElement.SVG_FECOMPONENTTRANSFER_TYPE_GAMMA` | ✅ | ❌ | ❌ |
| `SVGFEFuncGElement.SVG_FECOMPONENTTRANSFER_TYPE_IDENTITY` | ✅ | ❌ | ❌ |
| `SVGFEFuncGElement.SVG_FECOMPONENTTRANSFER_TYPE_LINEAR` | ✅ | ❌ | ❌ |
| `SVGFEFuncGElement.SVG_FECOMPONENTTRANSFER_TYPE_TABLE` | ✅ | ❌ | ❌ |
| `SVGFEFuncGElement.SVG_FECOMPONENTTRANSFER_TYPE_UNKNOWN` | ✅ | ❌ | ❌ |
| `SVGFEFuncRElement.SVG_FECOMPONENTTRANSFER_TYPE_DISCRETE` | ✅ | ❌ | ❌ |
| `SVGFEFuncRElement.SVG_FECOMPONENTTRANSFER_TYPE_GAMMA` | ✅ | ❌ | ❌ |
| `SVGFEFuncRElement.SVG_FECOMPONENTTRANSFER_TYPE_IDENTITY` | ✅ | ❌ | ❌ |
| `SVGFEFuncRElement.SVG_FECOMPONENTTRANSFER_TYPE_LINEAR` | ✅ | ❌ | ❌ |
| `SVGFEFuncRElement.SVG_FECOMPONENTTRANSFER_TYPE_TABLE` | ✅ | ❌ | ❌ |
| `SVGFEFuncRElement.SVG_FECOMPONENTTRANSFER_TYPE_UNKNOWN` | ✅ | ❌ | ❌ |
| `SVGGraphicsElement.prototype.farthestViewportElement` | ✅ | ✅ | ✅ |
| `SVGGraphicsElement.prototype.getTransformToElement()` | ❌ | ✅ | ❌ |
| `SVGGraphicsElement.prototype.hasExtension()` | ❌ | ✅ | ❌ |
| `SVGGraphicsElement.prototype.nearestViewportElement` | ✅ | ✅ | ✅ |
| `SVGGraphicsElement.prototype.requiredFeatures` | ❌ | ✅ | ❌ |
| `SVGImageElement.prototype.decode()` | ✅ | ❌ | ✅ |
| `SVGImageElement.prototype.decoding` | ✅ | ❌ | ✅ |
| `SVGLinearGradientElement.SVG_SPREADMETHOD_PAD` | ✅ | ❌ | ❌ |
| `SVGLinearGradientElement.SVG_SPREADMETHOD_REFLECT` | ✅ | ❌ | ❌ |
| `SVGLinearGradientElement.SVG_SPREADMETHOD_REPEAT` | ✅ | ❌ | ❌ |
| `SVGLinearGradientElement.SVG_SPREADMETHOD_UNKNOWN` | ✅ | ❌ | ❌ |
| `SVGMarkerElement.SVG_MARKER_ORIENT_AUTO_START_REVERSE` | ❌ | ❌ | ✅ |
| `SVGMarkerElement.prototype.SVG_MARKER_ORIENT_AUTO_START_REVERSE` | ❌ | ❌ | ✅ |
| `SVGMaskElement.SVG_MASKTYPE_ALPHA` | ❌ | ❌ | ✅ |
| `SVGMaskElement.SVG_MASKTYPE_LUMINANCE` | ❌ | ❌ | ✅ |
| `SVGMaskElement.prototype.SVG_MASKTYPE_ALPHA` | ❌ | ❌ | ✅ |
| `SVGMaskElement.prototype.SVG_MASKTYPE_LUMINANCE` | ❌ | ❌ | ✅ |
| `SVGMaskElement.prototype.hasExtension()` | ❌ | ✅ | ❌ |
| `SVGMaskElement.prototype.requiredExtensions` | ✅ | ✅ | ❌ |
| `SVGMaskElement.prototype.requiredFeatures` | ❌ | ✅ | ❌ |
| `SVGMaskElement.prototype.systemLanguage` | ✅ | ✅ | ❌ |
| `SVGMatrix.prototype.flipX()` | ✅ | ✅ | ✅ |
| `SVGMatrix.prototype.flipY()` | ✅ | ✅ | ✅ |
| `SVGMatrix.prototype.inverse()` | ✅ | ✅ | ✅ |
| `SVGMatrix.prototype.multiply()` | ✅ | ✅ | ✅ |
| `SVGMatrix.prototype.rotate()` | ✅ | ✅ | ✅ |
| `SVGMatrix.prototype.rotateFromVector()` | ✅ | ✅ | ✅ |
| `SVGMatrix.prototype.scale()` | ✅ | ✅ | ✅ |
| `SVGMatrix.prototype.scaleNonUniform()` | ✅ | ✅ | ✅ |
| `SVGMatrix.prototype.skewX()` | ✅ | ✅ | ✅ |
| `SVGMatrix.prototype.skewY()` | ✅ | ✅ | ✅ |
| `SVGMatrix.prototype.translate()` | ✅ | ✅ | ✅ |
| `SVGPathElement.prototype.animatedPathSegList` | ❌ | ✅ | ❌ |
| `SVGPathElement.prototype.createSVGPathSegArcAbs()` | ❌ | ✅ | ❌ |
| `SVGPathElement.prototype.createSVGPathSegArcRel()` | ❌ | ✅ | ❌ |
| `SVGPathElement.prototype.createSVGPathSegClosePath()` | ❌ | ✅ | ❌ |
| `SVGPathElement.prototype.createSVGPathSegCurvetoCubicAbs()` | ❌ | ✅ | ❌ |
| `SVGPathElement.prototype.createSVGPathSegCurvetoCubicRel()` | ❌ | ✅ | ❌ |
| `SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothAbs()` | ❌ | ✅ | ❌ |
| `SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothRel()` | ❌ | ✅ | ❌ |
| `SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticAbs()` | ❌ | ✅ | ❌ |
| `SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticRel()` | ❌ | ✅ | ❌ |
| `SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothAbs()` | ❌ | ✅ | ❌ |
| `SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothRel()` | ❌ | ✅ | ❌ |
| `SVGPathElement.prototype.createSVGPathSegLinetoAbs()` | ❌ | ✅ | ❌ |
| `SVGPathElement.prototype.createSVGPathSegLinetoHorizontalAbs()` | ❌ | ✅ | ❌ |
| `SVGPathElement.prototype.createSVGPathSegLinetoHorizontalRel()` | ❌ | ✅ | ❌ |
| `SVGPathElement.prototype.createSVGPathSegLinetoRel()` | ❌ | ✅ | ❌ |
| `SVGPathElement.prototype.createSVGPathSegLinetoVerticalAbs()` | ❌ | ✅ | ❌ |
| `SVGPathElement.prototype.createSVGPathSegLinetoVerticalRel()` | ❌ | ✅ | ❌ |
| `SVGPathElement.prototype.createSVGPathSegMovetoAbs()` | ❌ | ✅ | ❌ |
| `SVGPathElement.prototype.createSVGPathSegMovetoRel()` | ❌ | ✅ | ❌ |
| `SVGPathElement.prototype.getPathSegAtLength()` | ❌ | ✅ | ❌ |
| `SVGPathElement.prototype.pathSegList` | ❌ | ✅ | ❌ |
| `SVGPathSeg` | ❌ | ✅ | ❌ |
| `SVGPathSegArcAbs` | ❌ | ✅ | ❌ |
| `SVGPathSegArcRel` | ❌ | ✅ | ❌ |
| `SVGPathSegClosePath` | ❌ | ✅ | ❌ |
| `SVGPathSegCurvetoCubicAbs` | ❌ | ✅ | ❌ |
| `SVGPathSegCurvetoCubicRel` | ❌ | ✅ | ❌ |
| `SVGPathSegCurvetoCubicSmoothAbs` | ❌ | ✅ | ❌ |
| `SVGPathSegCurvetoCubicSmoothRel` | ❌ | ✅ | ❌ |
| `SVGPathSegCurvetoQuadraticAbs` | ❌ | ✅ | ❌ |
| `SVGPathSegCurvetoQuadraticRel` | ❌ | ✅ | ❌ |
| `SVGPathSegCurvetoQuadraticSmoothAbs` | ❌ | ✅ | ❌ |
| `SVGPathSegCurvetoQuadraticSmoothRel` | ❌ | ✅ | ❌ |
| `SVGPathSegLinetoAbs` | ❌ | ✅ | ❌ |
| `SVGPathSegLinetoHorizontalAbs` | ❌ | ✅ | ❌ |
| `SVGPathSegLinetoHorizontalRel` | ❌ | ✅ | ❌ |
| `SVGPathSegLinetoRel` | ❌ | ✅ | ❌ |
| `SVGPathSegLinetoVerticalAbs` | ❌ | ✅ | ❌ |
| `SVGPathSegLinetoVerticalRel` | ❌ | ✅ | ❌ |
| `SVGPathSegList` | ❌ | ✅ | ❌ |
| `SVGPathSegMovetoAbs` | ❌ | ✅ | ❌ |
| `SVGPathSegMovetoRel` | ❌ | ✅ | ❌ |
| `SVGPatternElement.prototype.hasExtension()` | ❌ | ✅ | ❌ |
| `SVGPatternElement.prototype.requiredExtensions` | ✅ | ✅ | ❌ |
| `SVGPatternElement.prototype.requiredFeatures` | ❌ | ✅ | ❌ |
| `SVGPatternElement.prototype.systemLanguage` | ✅ | ✅ | ❌ |
| `SVGPoint.prototype.matrixTransform()` | ✅ | ✅ | ✅ |
| `SVGRadialGradientElement.SVG_SPREADMETHOD_PAD` | ✅ | ❌ | ❌ |
| `SVGRadialGradientElement.SVG_SPREADMETHOD_REFLECT` | ✅ | ❌ | ❌ |
| `SVGRadialGradientElement.SVG_SPREADMETHOD_REPEAT` | ✅ | ❌ | ❌ |
| `SVGRadialGradientElement.SVG_SPREADMETHOD_UNKNOWN` | ✅ | ❌ | ❌ |
| `SVGSVGElement.SVG_ZOOMANDPAN_DISABLE` | ✅ | ✅ | ✅ |
| `SVGSVGElement.SVG_ZOOMANDPAN_MAGNIFY` | ✅ | ✅ | ✅ |
| `SVGSVGElement.SVG_ZOOMANDPAN_UNKNOWN` | ✅ | ✅ | ✅ |
| `SVGSVGElement.prototype.SVG_ZOOMANDPAN_DISABLE` | ✅ | ✅ | ✅ |
| `SVGSVGElement.prototype.SVG_ZOOMANDPAN_MAGNIFY` | ✅ | ✅ | ✅ |
| `SVGSVGElement.prototype.SVG_ZOOMANDPAN_UNKNOWN` | ✅ | ✅ | ✅ |
| `SVGSVGElement.prototype.currentView` | ❌ | ✅ | ❌ |
| `SVGSVGElement.prototype.useCurrentView` | ❌ | ✅ | ❌ |
| `SVGSVGElement.prototype.zoomAndPan` | ✅ | ✅ | ✅ |
| `SVGScriptElement.prototype.async` | ❌ | ❌ | ✅ |
| `SVGScriptElement.prototype.defer` | ❌ | ❌ | ✅ |
| `SVGStyleElement.prototype.disabled` | ✅ | ✅ | ✅ |
| `SVGSymbolElement.prototype.requiredExtensions` | ❌ | ❌ | ✅ |
| `SVGSymbolElement.prototype.systemLanguage` | ❌ | ❌ | ✅ |
| `SVGTSpanElement.LENGTHADJUST_SPACING` | ✅ | ❌ | ❌ |
| `SVGTSpanElement.LENGTHADJUST_SPACINGANDGLYPHS` | ✅ | ❌ | ❌ |
| `SVGTSpanElement.LENGTHADJUST_UNKNOWN` | ✅ | ❌ | ❌ |
| `SVGTextElement.LENGTHADJUST_SPACING` | ✅ | ❌ | ❌ |
| `SVGTextElement.LENGTHADJUST_SPACINGANDGLYPHS` | ✅ | ❌ | ❌ |
| `SVGTextElement.LENGTHADJUST_UNKNOWN` | ✅ | ❌ | ❌ |
| `SVGTextPathElement.LENGTHADJUST_SPACING` | ✅ | ❌ | ❌ |
| `SVGTextPathElement.LENGTHADJUST_SPACINGANDGLYPHS` | ✅ | ❌ | ❌ |
| `SVGTextPathElement.LENGTHADJUST_UNKNOWN` | ✅ | ❌ | ❌ |
| `SVGTextPositioningElement.LENGTHADJUST_SPACING` | ✅ | ❌ | ❌ |
| `SVGTextPositioningElement.LENGTHADJUST_SPACINGANDGLYPHS` | ✅ | ❌ | ❌ |
| `SVGTextPositioningElement.LENGTHADJUST_UNKNOWN` | ✅ | ❌ | ❌ |
| `SVGViewElement.SVG_ZOOMANDPAN_DISABLE` | ✅ | ✅ | ✅ |
| `SVGViewElement.SVG_ZOOMANDPAN_MAGNIFY` | ✅ | ✅ | ✅ |
| `SVGViewElement.SVG_ZOOMANDPAN_UNKNOWN` | ✅ | ✅ | ✅ |
| `SVGViewElement.prototype.SVG_ZOOMANDPAN_DISABLE` | ✅ | ✅ | ✅ |
| `SVGViewElement.prototype.SVG_ZOOMANDPAN_MAGNIFY` | ✅ | ✅ | ✅ |
| `SVGViewElement.prototype.SVG_ZOOMANDPAN_UNKNOWN` | ✅ | ✅ | ✅ |
| `SVGViewElement.prototype.zoomAndPan` | ✅ | ✅ | ✅ |
| `SVGViewSpec` | ❌ | ✅ | ❌ |
| `Screen.prototype.availLeft` | ✅ | ✅ | ✅ |
| `Screen.prototype.availTop` | ✅ | ✅ | ✅ |
| `Screen.prototype.left` | ❌ | ❌ | ✅ |
| `Screen.prototype.mozLockOrientation()` | ❌ | ❌ | ✅ |
| `Screen.prototype.mozOrientation` | ❌ | ❌ | ✅ |
| `Screen.prototype.mozUnlockOrientation()` | ❌ | ❌ | ✅ |
| `Screen.prototype.onmozorientationchange` | ❌ | ❌ | ✅ |
| `Screen.prototype.top` | ❌ | ❌ | ✅ |
| `ScrollAreaEvent` | ❌ | ❌ | ✅ |
| `SecurityPolicyViolationEvent.prototype.colno` | ❌ | ✅ | ❌ |
| `SecurityPolicyViolationEvent.prototype.lineno` | ❌ | ✅ | ❌ |
| `Selection.prototype.baseNode` | ✅ | ✅ | ❌ |
| `Selection.prototype.baseOffset` | ✅ | ✅ | ❌ |
| `Selection.prototype.caretBidiLevel` | ❌ | ❌ | ✅ |
| `Selection.prototype.extentNode` | ✅ | ✅ | ❌ |
| `Selection.prototype.extentOffset` | ✅ | ✅ | ❌ |
| `ShadowRoot.prototype.elementFromPoint()` | ✅ | ✅ | ✅ |
| `ShadowRoot.prototype.elementsFromPoint()` | ✅ | ✅ | ✅ |
| `ShadowRoot.prototype.getElementById()` | ❌ | ❌ | ✅ |
| `ShadowRoot.prototype.getInnerHTML()` | ✅ | ❌ | ❌ |
| `ShadowRoot.prototype.getSelection()` | ✅ | ❌ | ❌ |
| `ShadowRoot.prototype.mozFullScreenElement` | ❌ | ❌ | ✅ |
| `SharedStorageWorklet.prototype.addModule()` | ✅ | ❌ | ❌ |
| `SourceBufferList.prototype.item()` | ❌ | ✅ | ❌ |
| `TextTrack.prototype.regions` | ❌ | ✅ | ❌ |
| `TextTrackCue.prototype.getCueAsHTML()` | ❌ | ✅ | ❌ |
| `TextTrackCueList.prototype.item()` | ❌ | ✅ | ❌ |
| `TextTrackList.prototype.item()` | ❌ | ✅ | ❌ |
| `Touch.prototype.webkitForce` | ❌ | ✅ | ❌ |
| `Touch.prototype.webkitRadiusX` | ❌ | ✅ | ❌ |
| `Touch.prototype.webkitRadiusY` | ❌ | ✅ | ❌ |
| `Touch.prototype.webkitRotationAngle` | ❌ | ✅ | ❌ |
| `TrustedTypePolicyFactory.prototype.getTypeMapping()` | ✅ | ❌ | ❌ |
| `UIEvent.SCROLL_PAGE_DOWN` | ❌ | ❌ | ✅ |
| `UIEvent.SCROLL_PAGE_UP` | ❌ | ❌ | ✅ |
| `UIEvent.prototype.SCROLL_PAGE_DOWN` | ❌ | ❌ | ✅ |
| `UIEvent.prototype.SCROLL_PAGE_UP` | ❌ | ❌ | ✅ |
| `UIEvent.prototype.layerX` | ❌ | ✅ | ✅ |
| `UIEvent.prototype.layerY` | ❌ | ✅ | ✅ |
| `UIEvent.prototype.pageX` | ❌ | ✅ | ❌ |
| `UIEvent.prototype.pageY` | ❌ | ✅ | ❌ |
| `UIEvent.prototype.rangeOffset` | ❌ | ❌ | ✅ |
| `UIEvent.prototype.rangeParent` | ❌ | ❌ | ✅ |
| `URL.prototype.toString()` | ✅ | ✅ | ✅ |
| `UserMessageHandler` | ❌ | ✅ | ❌ |
| `UserMessageHandlersNamespace` | ❌ | ✅ | ❌ |
| `VTTRegion.prototype.track` | ❌ | ✅ | ❌ |
| `VideoPlaybackQuality.prototype.totalFrameDelay` | ❌ | ✅ | ❌ |
| `VideoTrack.prototype.configuration` | ❌ | ✅ | ❌ |
| `VideoTrackConfiguration` | ❌ | ✅ | ❌ |
| `VideoTrackList.prototype.item()` | ❌ | ✅ | ❌ |
| `VirtualKeyboardGeometryChangeEvent` | ✅ | ❌ | ❌ |
| `WebGLRenderingContext.RGB8` | ✅ | ❌ | ❌ |
| `WebGLRenderingContext.prototype.RGB8` | ✅ | ❌ | ❌ |
| `WebKitMutationObserver` | ✅ | ✅ | ❌ |
| `WebKitNamespace` | ❌ | ✅ | ❌ |
| `WebKitPoint` | ❌ | ✅ | ❌ |
| `WebSocketError` | ✅ | ❌ | ❌ |
| `WebSocketStream` | ✅ | ❌ | ❌ |
| `WheelEvent.prototype.webkitDirectionInvertedFromDevice` | ❌ | ✅ | ❌ |
| `WheelEvent.prototype.wheelDelta` | ✅ | ✅ | ✅ |
| `WheelEvent.prototype.wheelDeltaX` | ✅ | ✅ | ✅ |
| `WheelEvent.prototype.wheelDeltaY` | ✅ | ✅ | ✅ |
| `Window.PERSISTENT` | ✅ | ❌ | ❌ |
| `Window.TEMPORARY` | ✅ | ❌ | ❌ |
| `Window.prototype.PERSISTENT` | ✅ | ❌ | ❌ |
| `Window.prototype.TEMPORARY` | ✅ | ❌ | ❌ |
| `XMLHttpRequest.prototype.mozAnon` | ❌ | ❌ | ✅ |
| `XMLHttpRequest.prototype.mozSystem` | ❌ | ❌ | ✅ |
| `XMLHttpRequestProgressEvent` | ❌ | ✅ | ❌ |
| `XRDOMOverlayState` | ✅ | ❌ | ❌ |
| `XRSystem.prototype.supportsSession()` | ✅ | ❌ | ❌ |
| `chrome` | ✅ | ❌ | ❌ |
| `console.context()` | ✅ | ❌ | ❌ |
| `console.createTask()` | ✅ | ❌ | ❌ |
| `console.exception()` | ❌ | ❌ | ✅ |
| `console.memory` | ✅ | ❌ | ❌ |
| `console.profile()` | ✅ | ✅ | ✅ |
| `console.profileEnd()` | ✅ | ✅ | ✅ |
| `console.record()` | ❌ | ✅ | ❌ |
| `console.recordEnd()` | ❌ | ✅ | ❌ |
| `console.screenshot()` | ❌ | ✅ | ❌ |
| `console.takeHeapSnapshot()` | ❌ | ✅ | ❌ |
| `console.timeStamp()` | ✅ | ✅ | ✅ |
| `dump()` | ❌ | ❌ | ✅ |
| `find()` | ✅ | ✅ | ✅ |
| `fullScreen` | ❌ | ❌ | ✅ |
| `getDefaultComputedStyle()` | ❌ | ❌ | ✅ |
| `isNodeVisible` | ❌ | ✅ | ❌ |
| `isProbablyReaderable` | ❌ | ✅ | ❌ |
| `mozInnerScreenX` | ❌ | ❌ | ✅ |
| `mozInnerScreenY` | ❌ | ❌ | ✅ |
| `netscape` | ❌ | ❌ | ✅ |
| `offscreenBuffering` | ✅ | ✅ | ❌ |
| `oncontentvisibilityautostatechange` | ✅ | ✅ | ✅ |
| `ondragexit` | ❌ | ❌ | ✅ |
| `ongesturechange` | ❌ | ✅ | ❌ |
| `ongestureend` | ❌ | ✅ | ❌ |
| `ongesturestart` | ❌ | ✅ | ❌ |
| `onmousewheel` | ✅ | ✅ | ❌ |
| `onmozfullscreenchange` | ❌ | ❌ | ✅ |
| `onmozfullscreenerror` | ❌ | ❌ | ✅ |
| `onscrollsnapchange` | ✅ | ❌ | ❌ |
| `onscrollsnapchanging` | ✅ | ❌ | ❌ |
| `onsearch` | ✅ | ❌ | ❌ |
| `onwebkitmouseforcechanged` | ❌ | ✅ | ❌ |
| `onwebkitmouseforcedown` | ❌ | ✅ | ❌ |
| `onwebkitmouseforceup` | ❌ | ✅ | ❌ |
| `onwebkitmouseforcewillbegin` | ❌ | ✅ | ❌ |
| `openDatabase` | ❌ | ✅ | ❌ |
| `safari` | ❌ | ✅ | ❌ |
| `scrollByLines()` | ❌ | ❌ | ✅ |
| `scrollByPages()` | ❌ | ❌ | ✅ |
| `scrollMaxX` | ❌ | ❌ | ✅ |
| `scrollMaxY` | ❌ | ❌ | ✅ |
| `setResizable()` | ❌ | ❌ | ✅ |
| `styleMedia` | ✅ | ✅ | ❌ |
| `updateCommands()` | ❌ | ❌ | ✅ |
| `webkitCancelAnimationFrame()` | ✅ | ✅ | ❌ |
| `webkitCancelRequestAnimationFrame()` | ❌ | ✅ | ❌ |
| `webkitConvertPointFromNodeToPage()` | ❌ | ✅ | ❌ |
| `webkitConvertPointFromPageToNode()` | ❌ | ✅ | ❌ |
| `webkitIndexedDB` | ❌ | ✅ | ❌ |
| `webkitMediaStream` | ✅ | ❌ | ❌ |
| `webkitRTCPeerConnection` | ✅ | ❌ | ❌ |
| `webkitRequestAnimationFrame()` | ✅ | ✅ | ❌ |
| `webkitRequestFileSystem()` | ✅ | ❌ | ❌ |
| `webkitResolveLocalFileSystemURL()` | ✅ | ❌ | ❌ |
| `webkitSpeechGrammar` | ✅ | ❌ | ❌ |
| `webkitSpeechGrammarList` | ✅ | ❌ | ❌ |
| `webkitSpeechRecognition` | ✅ | ❌ | ❌ |
| `webkitSpeechRecognitionError` | ✅ | ❌ | ❌ |
| `webkitSpeechRecognitionEvent` | ✅ | ❌ | ❌ |
| `webkitURL.prototype.toString()` | ✅ | ✅ | ✅ |

### JavaScript APIs exclusive to other browsers

#### Microsoft Edge
- [`External.prototype.getHostEnvironmentValue()`](https://learn.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/platform-apis/mt795399(v=vs.85))
- `HTMLElement.prototype.textprediction`
- `HTMLVideoElement.prototype.msGetVideoProcessingTypes()`
- `HTMLVideoElement.prototype.msVideoProcessing`
- `Notification.prototype.scenario`
- `SpeechSynthesis.prototype.preload()`

#### Brave
- [`Navigator.prototype.brave`](https://github.com/brave/brave-browser/wiki/Detecting-Brave-(for-Websites))
- [`braveEthereum`](https://github.com/brave/brave-browser/wiki/Ethereum-Provider-API)
	- `braveEthereum._metamask`
		- `braveEthereum._metamask.isUnlocked()`
	- `braveEthereum.chainId`
	- `braveEthereum.emit`
		- `braveEthereum.emit.prototype`
	- `braveEthereum.enable()`
	- `braveEthereum.isBraveWallet`
	- `braveEthereum.isConnected()`
	- `braveEthereum.isMetaMask`
	- `braveEthereum.networkVersion`
	- `braveEthereum.on`
		- `braveEthereum.on.prototype`
	- `braveEthereum.removeAllListeners`
		- `braveEthereum.removeAllListeners.prototype`
	- `braveEthereum.removeListener`
		- `braveEthereum.removeListener.prototype`
	- `braveEthereum.request()`
	- `braveEthereum.selectedAddress`
	- `braveEthereum.send()`
	- `braveEthereum.sendAsync()`
- `braveSolana`
	- `braveSolana.connect()`
	- `braveSolana.disconnect()`
	- `braveSolana.emit`
		- `braveSolana.emit.prototype`
	- `braveSolana.isBraveWallet`
	- `braveSolana.isConnected`
	- `braveSolana.isPhantom`
	- `braveSolana.off`
		- `braveSolana.off.prototype`
	- `braveSolana.on`
		- `braveSolana.on.prototype`
	- `braveSolana.publicKey`
	- `braveSolana.removeAllListeners`
		- `braveSolana.removeAllListeners.prototype`
	- `braveSolana.removeListener`
		- `braveSolana.removeListener.prototype`
	- `braveSolana.request()`
	- `braveSolana.signAllTransactions()`
	- `braveSolana.signAndSendTransaction()`
	- `braveSolana.signMessage()`
	- `braveSolana.signTransaction()`
	- `braveSolana.walletStandardInit()`
- `solana`
	- `solana.connect()`
	- `solana.disconnect()`
	- `solana.emit`
		- `solana.emit.prototype`
	- `solana.isBraveWallet`
	- `solana.isConnected`
	- `solana.isPhantom`
	- `solana.off`
		- `solana.off.prototype`
	- `solana.on`
		- `solana.on.prototype`
	- `solana.publicKey`
	- `solana.removeAllListeners`
		- `solana.removeAllListeners.prototype`
	- `solana.removeListener`
		- `solana.removeListener.prototype`
	- `solana.request()`
	- `solana.signAllTransactions()`
	- `solana.signAndSendTransaction()`
	- `solana.signMessage()`
	- `solana.signTransaction()`
	- `solana.walletStandardInit()`

#### Samsung Internet
- `News`
	- `News.isHomepageNewsFeed()`
	- `News.setHomepageAsNewsFeed()`
- `QuickAccess`
	- `QuickAccess.deleteItems()`
	- `QuickAccess.enterEditMode()`
	- `QuickAccess.enterPrivacyBoard()`
	- `QuickAccess.getGuiVersion()`
	- `QuickAccess.getItems()`
	- `QuickAccess.getPrivacyDashboardData()`
	- `QuickAccess.isNightModeEnabled()`
	- `QuickAccess.isPrivacyBoardEnabled()`
	- `QuickAccess.isRefererCleanerEnabled()`
	- `QuickAccess.isSecretMode()`
	- `QuickAccess.isSetAsHomePage()`
	- `QuickAccess.requestPrivacyDashboardData()`
	- `QuickAccess.sendSILog()`
	- `QuickAccess.showAddDialog()`
	- `QuickAccess.showQuickAccessSettings()`
	- `QuickAccess.showRenameDialog()`
	- `QuickAccess.turnOnPrivacyFeature()`

#### DuckDuckGo Desktop
- `Navigator.prototype.duckduckgo`
	- `Navigator.prototype.duckduckgo.isDuckDuckGo()`
	- `Navigator.prototype.duckduckgo.platform`
	- `Navigator.prototype.duckduckgo.taintedOrigins`
	- `Navigator.prototype.duckduckgo.taints`
- `gc`
	- `gc.prototype`

#### DuckDuckGo Anroid
- a function whose name is a session id consisting of 32 hex digits and stringifies to `(providedSecret, response) => { if (providedSecret === this.messageSecret) { this._dispatch(response); } }` (This can be abused to uniquely identify a user, which is a bit ironic since DuckDuckGo claims to be super pro-privacy and anti-fingerprinting! 🫠)
- `AutoconsentAndroid`
	- `AutoconsentAndroid.process()`
- `BrowserAutofill`
	- `BrowserAutofill.closeEmailProtectionTab()`
	- `BrowserAutofill.getAutofillData()`
	- `BrowserAutofill.getIncontextSignupDismissedAt()`
	- `BrowserAutofill.showInContextEmailProtectionSignupPrompt()`
	- `BrowserAutofill.storeFormData()`
- `EmailInterface`
	- `EmailInterface.getDeviceCapabilities()`
	- `EmailInterface.getUserData()`
	- `EmailInterface.isSignedIn()`
	- `EmailInterface.removeCredentials()`
	- `EmailInterface.showTooltip()`
	- `EmailInterface.storeCredentials()`
- `LoginDetection`
	- `LoginDetection.log()`
	- `LoginDetection.loginDetected()`
- `Print`
	- `Print.print()`
- `URL.createObjectURL` gets overridden at runtime with a function that stringifies to `function () { const blob = arguments[0]; const url = original_createObjectURL.call(this, ...arguments); if (blob instanceof Blob) { __url_to_blob_collection[url] = blob; } return url; }`
- `__url_to_blob_collection`
- `android`
- `autoconsentMessageCallback()`
- `blobToBase64DataUrl`
	- `blobToBase64DataUrl.prototype`
- `ddgBlobDownloadObj`
	- `ddgBlobDownloadObj.addEventListener()`
	- `ddgBlobDownloadObj.onmessage`
		- `ddgBlobDownloadObj.onmessage.prototype`
	- `ddgBlobDownloadObj.postMessage()`
	- `ddgBlobDownloadObj.removeEventListener()`
- `print`
	- `print.prototype`
