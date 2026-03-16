

## Plan: Restructure "Notre Histoire" with complete content

### Changes to `src/components/sections/OurStorySection.tsx`

Rewrite the section content to have three grouped sections, each with a heading and Pascale/Étienne sub-sections. Remove `EucalyptusDivider` usage between sections (blank space only). Keep photo gallery with existing "Quelques moments ensemble" title.

**Structure:**

```text
Notre Histoire (main h2)
├── "Notre rencontre" (h3)
│   ├── Pascale (StoryChapter)
│   └── Étienne (StoryChapter)
├── "La demande" (h3)
│   ├── Pascale (StoryChapter)
│   └── Étienne (StoryChapter)
├── "Et maintenant" (h3)
│   ├── Pascale (StoryChapter)
│   └── Étienne (StoryChapter - placeholder text)
└── "Quelques moments ensemble" (h3 + photo grid, unchanged)
```

**Details:**
- Add a section heading (h3, centered, serif) before each group: "Notre rencontre", "La demande", "Et maintenant"
- Each group contains StoryChapter blocks for Pascale and Étienne with the exact text provided
- "Et maintenant" > Étienne gets placeholder text like "[Texte à venir]"
- No EucalyptusDivider between sections — just spacing via the existing `space-y-16` or similar
- Photo gallery section stays exactly as-is with "Quelques moments ensemble" h3
- All provided text uses `\n\n` for paragraph breaks where appropriate

