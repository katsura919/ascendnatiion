# AscendNatiion - Brand Guidelines & Funnel Design System

## 1. Brand Identity & Personality

*   **Tone:** Modern, elegant, insightful, and inviting.
*   **Energy:** Medium. The pacing should feel intentional, grounded, and empowering—not aggressive or overly energetic. 
*   **Target Audience:** Individuals interested in spirituality, personal growth, self-improvement, and mindfulness.

## 2. Color Palette

The color palette is rooted in spiritual and sophisticated tones (deep purples) contrasted with a grounded, welcoming background.

*   **Primary:** `#62417B` (Muted Purple - Use for primary buttons, prominent calls-to-action, and key visual elements)
*   **Accent:** `#3B2461` (Deep Violet - Use for secondary accents, hover states, and to draw attention to specific sections)
*   **Background:** `#F8F5EB` (Warm Off-White/Cream - Provides a soft, reading-friendly canvas that feels organic rather than stark white)
*   **Text Primary:** `#3B2461` (Deep Violet - Used for body copy and headings, offering a softer contrast than stark black while maintaining high legibility)
*   **Link:** `#3B2461` (Deep Violet - For inline hyperlinks; consider adding an underline or a slight opacity change on hover)

## 3. Typography

The typography pairs a classic, elegant serif for headings with a clean, modern sans-serif for body copy, balancing established wisdom with accessibility.

*   **Primary Typeface (Body):** Poppins
*   **Heading Typeface:** Cormorant Garamond
*   **Utility/Fallback Typeface:** Roboto

**Typographic Scale:**
*   **H1 (Hero Headlines):** 17px *(Note: For a high-converting funnel, consider scaling this up for desktop (e.g., 36px-48px) and keeping 17px-24px for mobile/sub-elements depending on implementation)*
*   **H2 (Section Headings):** 28px (Cormorant Garamond, bold or semi-bold)
*   **Body Copy:** 16px (Poppins, regular weight, line-height 1.6 for readability)

## 4. Spacing & Structure

A clean, breathing layout is essential for the "medium energy" modern tone. Don't crowd elements; let the design breathe to create a sense of clarity and peace.

*   **Base Unit:** 4px (Use multiples of 4 for margins, padding, and layout structure—e.g., 8px, 16px, 24px, 32px, 64px)
*   **Border Radius:** 5px (Applies to buttons, input fields, cards, and images, creating a soft, approachable feel rather than sharp, harsh edges)

## 5. Design Guidelines for High-Converting Funnel

To ensure the funnel converts well while staying true to the AscendNatiion brand:

### Imagery & Photography
*   Use high-quality, authentic-feeling lifestyle imagery. Avoid overly staged stock photos.
*   Focus on themes of nature, light, personal reflection, and peaceful environments.
*   Consider applying a subtle warm or purple-toned overlay to images to ensure they blend seamlessly with the `Background` (#F8F5EB) and `Primary` (#62417B) colors.

### Calls to Action (CTAs)
*   **Primary CTAs:** Use `#62417B` for the button background with white or `#F8F5EB` text. Ensure the button has the standard `5px` border radius.
*   **Hover States:** When hovering over a primary CTA, transition to the `Accent` color (`#3B2461`) to provide clear interactive feedback.
*   **Action Copy:** Use definitive, empowering language (e.g., "Begin Your Journey," "Unlock Your Potential") rather than generic terms (e.g., "Submit," "Click Here"). Use the **Poppins** font for all buttons.

### Forms & Inputs
*   Keep input fields clean with a `5px` border radius.
*   Use a subtle border color (e.g., a lighter tint of the primary color) with a solid `#FFFFFF` or slightly lighter cream background for the input fields to make them stand out against the `#F8F5EB` page background.
*   Text inside inputs should use Poppins at 16px.

### Trust & Social Proof Elements
*   Testimonials and reviews should be housed in soft "cards" (background: `#FFFFFF` or a very light tint of the primary color) with a `5px` border radius.
*   Use Cormorant Garamond for the quote text (to emphasize authority and wisdom) and Poppins for the attribution (name/title).

### Whitespace (Negative Space)
*   Leverage the 4px base unit to create generous whitespace between sections (e.g., 64px or 80px block padding). This prevents cognitive overload and aligns with the "spirituality and personal growth" aesthetic, helping the user focus on the message.

## 6. CSS / Tailwind Setup (Example Reference)

```css
/* Example Custom Properties */
:root {
  --color-primary: #62417B;
  --color-accent: #3B2461;
  --color-background: #F8F5EB;
  --color-text: #3B2461;
  --color-link: #3B2461;

  --font-heading: 'Cormorant Garamond', serif;
  --font-body: 'Poppins', sans-serif;
  
  --radius-default: 5px;
}
```
