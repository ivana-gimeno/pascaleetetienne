

## RSVP → Google Sheets Integration

### Overview
Update the RSVP form to POST submissions to a Google Apps Script web app, with a shared secret token for validation. Provide the Apps Script code for the user to set up.

### Changes

**1. Update `src/components/sections/RSVPSection.tsx`**
- Add a `GOOGLE_SCRIPT_URL` and `FORM_SECRET` constant at the top (user fills in the URL after deploying)
- On submit, POST JSON `{ token, timestamp, name, email, attendance, meal, allergies }` to the script URL using `fetch` with `mode: "no-cors"`
- Add loading state (disable button, show spinner text)
- Show success/error toast feedback
- Reset form on success

**2. Provide Google Apps Script code (in instructions, not in codebase)**
The user pastes this into their Google Sheet's Apps Script editor:
- `doPost(e)` function that parses the JSON body
- Validates the token matches a hardcoded secret
- Appends a row: timestamp, name, email, attendance, meal, allergies
- Returns success/error JSON

### Setup instructions for the user
1. Create a Google Sheet with headers: Horodatage, Nom, Courriel, Présence, Repas, Allergies
2. Extensions → Apps Script → paste the provided script
3. Deploy → Web App → Execute as "Me", access "Anyone"
4. Copy the URL into the `GOOGLE_SCRIPT_URL` constant in the code

### Security
- The form sends a secret token with each request
- The Apps Script validates the token before writing — random POST requests without the token are rejected
- The site is also behind a password gate, adding another layer

