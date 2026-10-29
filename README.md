# Vidyacharan Legal Partners

Build a complete, responsive law firm website for "Vidyacharan", a law firm in Bangalore, India. Use React, Tailwind and React Router. Use placeholder gray boxes with a small label for every image (I will upload real photos later) and write original placeholder copy everywhere.

BRAND
- Colors: white page background; amber #F6B04C for active menu items, section titles and secondary buttons; deep orange #FF6A00 for the disclaimer heading and primary buttons; navy #1B365D for the footer and headings; soft grey card shadows.
- Fonts: Playfair Display for headings, Inter for body text.
- Logo: simple text logo "VIDYACHARAN" with a small column icon, plus the line "Advocates & Legal Consultants". A header image slot sits on the left.

GLOBAL ELEMENTS
1. Disclaimer gate: on first visit, show a modal over the whole site with an orange "Disclaimer" heading, a scrollable body of numbered points and a fixed orange "I AGREE >" button at the bottom. Write the points yourself: Bar Council of India rules do not permit advertising or solicitation; the site is for information only; no advocate-client relationship is created; nothing here is legal advice; the site uses cookies. The site cannot be used until the button is clicked. Remember the choice in localStorage.
2. Sticky header: logo left; menu right: Home, Appointment, Practice Areas (dropdown), More (dropdown), Contact us. The active item is amber. Dropdowns are white cards with a soft shadow and a rotating chevron. On mobile show a hamburger that opens a full-screen menu with accordion sections.
 - Practice Areas: Civil Law; Real Estate, Property & Land Law; Employment & Labour Law; Cyber & Digital Law; IP Law; International Law; Arbitration & Mediation.
 - More: About Us, FAQ, Associates, Our Office Events, Blog, News, Careers, Privacy Policy, Terms & Conditions.
3. Floating buttons, fixed bottom right on every page: blue "Call us" (tel link), green "Chat with us" (WhatsApp link) and a grey "Scroll to top" button that appears after scrolling. Each has a small label under the icon.
4. Footer on a navy background, four columns: Practice Areas list; Quick Links (About us, Services, Associates, Careers, Our Office Events, Contact us, FAQ, Blog, News, Privacy Policy, Terms & Conditions); Social (Instagram, YouTube, LinkedIn icons); Contact (two phone numbers, email, head office address, branch address, each with a "View on Map" link, and hours Mon-Sat 9 AM to 9 PM). Placeholder details are fine.

PAGES
- Home:
 a. Full-width auto-playing hero slider with arrows and dots. Slides: one per practice area (image slot on one side, headline, short service list and phone line on the other), plus a team group slide. On mobile, show lawyer profile slides (photo, name, designation, phone).
 b. "What we are expert at": a grid of image cards, one per practice area, each linking to its page (2 columns on mobile, 4 on desktop).
 c. About band with a background image, a paragraph and an "About us" button.
 d. Animated counters (cases handled, years of service, happy clients, advocates).
 e. Testimonials carousel with reviewer name, date and dot pagination.
 f. "Our Team" preview cards linking to Associates.
- Practice area pages (7, one shared template): hero banner, centered heading with intro, a grid of 6 service cards (icon, title, short description, 3 bullets) that fade in on scroll, and a "Book a consultation" button.
- Appointment (2-step flow with a progress indicator): (1) name*, mobile with +91 prefix and 10-digit validation*, email, address, consultation type dropdown* (the practice areas plus Other), notes, then "Proceed to Select Date & Time"; (2) date picker (no past dates, no Sundays) and a grid of 40-minute slots from 9:00 AM, with the proceed button disabled until a slot is chosen, then a confirmation summary box (name, type, date, time) with Back and "Confirm booking", then a success screen. Save bookings to the database if available.
- Contact us: address with map link, office hours, and a form (name, email, phone, message) with validation and a "Send Message" button. Save messages to the database if available.
- About Us: intro with an illustration slot, a "Why choose us" row of 3 icon cards, and a services grid of icon cards with 3 bullets each.
- FAQ: numbered accordion with plus/minus icons and 6 placeholder questions.
- Associates: grid of profile cards (photo, name, designation, practice area).
- Our Office Events: photo gallery grid with a lightbox.
- Blog and News: card grids (image, title, date, excerpt) with detail pages.
- Careers: openings list and an apply form with a CV upload field.
- Privacy Policy, Terms & Conditions: clean text pages with numbered headings and bullet lists, in plain readable layout.

BEHAVIOUR
Everything must be fully clickable and routed, with smooth scrolling, hover states, fade-in animations, proper mobile layouts and accessible alt text. Include an SEO title and meta description per page.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/5422537c-b657-4784-8078-bca787af8472).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
