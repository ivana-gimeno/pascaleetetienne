

# Wedding Party Section - New Layout

## What changes

Replace the current 4-column grid with a **stacked row layout**, one person per row, alternating sides:

- **Tania**: circle photo LEFT, text RIGHT (left-aligned)
- **Ivana**: circle photo LEFT, text RIGHT (left-aligned)
- **Félix**: text LEFT (right-aligned), circle photo RIGHT
- **Thomas**: text LEFT (right-aligned), circle photo RIGHT

Bride's witnesses have photo on the left; groom's witnesses have photo on the right.

## How

**File: `src/components/sections/WeddingPartySection.tsx`**

- Add an `align` property (`"left" | "right"`) to each party member to control photo placement
- Rewrite `PartyMember` component as a horizontal row using flexbox:
  - `align="left"`: photo circle + name/role on left, description text on right (text-left)
  - `align="right"`: description text on left (text-right), photo circle + name/role on right
- Each row is full-width within the container, with a gap between photo and text
- On mobile, stack vertically (photo on top, text below) regardless of alignment
- Keep the existing circular photo placeholder, name, and role styling

