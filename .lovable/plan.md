

## Plan: Align Pascale left, Étienne right

### Change in `src/components/sections/OurStorySection.tsx`

**StoryChapter component** — add an `align` prop (`"left" | "right"`) that controls text alignment:
- `"left"`: `text-left` on both name and content
- `"right"`: `text-right` on both name and content

**All StoryChapter usages** — pass `align="left"` for Pascale, `align="right"` for Étienne.

