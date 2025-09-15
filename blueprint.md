# Public Missing Persons Website for Botswana

## Overview

This application serves as a centralized, public platform for reporting, tracking, and raising awareness about missing persons in Botswana. It is designed to be accessible, credible, and to foster community engagement in the search for missing individuals. The platform is built in partnership with the Botswana Police Service (BPS) to ensure the verification and accuracy of all reported cases.

## Project Vision & Features

This section outlines the complete vision for the application, which will be implemented in phases.

### 🔍 Core Features

1.  **Search & Filter System**:
    *   Search by name, age, gender, region, or date missing.
    *   Filters for “children,” “adults,” “long-term missing,” etc.
2.  **Missing Person Profiles**:
    *   Name, age, gender, photo(s).
    *   Last known location, date missing, and circumstances.
    *   Contact info for the reporting family or investigating officer.
    *   Status: *Active*, *Located*, or *Case Closed*.
3.  **Submit a Report (Verified)**:
    *   Secure online form for families/law enforcement to submit missing person cases.
    *   Required verification from Botswana Police Service (BPS) before publishing.
4.  **Tips & Leads Submission**:
    *   Anonymous tip form with optional file/image upload.
    *   Hotline and WhatsApp integration for easy reporting.
5.  **Latest Updates Feed**:
    *   Recently added cases.
    *   Recently resolved cases (with “Found Safe” or “Case Closed” status).

### 📱 Community & Awareness Tools

6.  **Share Buttons**:
    *   Direct sharing to WhatsApp, Facebook, and X (Twitter).
    *   Printable posters (auto-generated from case details).
7.  **Map Integration**:
    *   Interactive map showing last-seen locations.
    *   Filters by district/village for local awareness.
8.  **Alerts & Notifications**:
    *   Opt-in SMS or email alerts for new cases in your district.
    *   Urgent “Child Alert” notifications.

### 🛡️ Trust & Safety Features

9.  **Official Verification Badge**:
    *   Cases verified by BPS flagged with a blue badge.
10. **Privacy & Safety Controls**:
    *   Families choose what info to make public.
    *   Clear data protection compliance.

### 📰 Educational & Support Resources

11. **Awareness Articles**:
    *   Guides on what to do if a loved one goes missing.
    *   Safety tips.
12. **Support & Helplines**:
    *   Contacts for police, NGOs, shelters, and counseling services.

### 🏛️ Administrative & Backend

13. **Law Enforcement Dashboard**:
    *   Secure login for BPS officers to manage cases.
    *   Analytics dashboard.
14. **Case Management System**:
    *   Track updates, leads, and resolution timeline.
15. **Multi-language Support**:
    *   English + Setswana.

---

## Current Task: Phase 1 - Core Feature Enhancement & Redesign

This phase focuses on upgrading the existing application to align with the new vision, improving the user interface, and expanding the core data model.

### Plan

1.  **Update Data Model**: Modify the `MissingPerson` interface to include the new fields: `gender`, `lastSeenDate`, `circumstances`, `status`, and `contact`.
2.  **Enhance UI/UX**:
    *   Redesign the `MissingPersonCardComponent` to be more visually appealing and informative.
    *   Improve the layout of the `MissingPersonListComponent`.
    *   Redesign the `MissingPersonDetailComponent` to present the new, richer data model.
    *   Create a more professional and empathetic color scheme and typography.
3.  **Implement Search and Filter**:
    *   Add a search bar to the `HomeComponent` to filter the list of missing persons by name.
    *   Add filter controls (e.g., by status, gender).
4.  **Update "Create" Form**: Modify the `CreateMissingPersonComponent` to include the new fields from the updated data model.
5.  **Update `MissingPersonsService`**: Update the service to manage the new data fields and provide filtering logic.
6.  **Build and Verify**: Run `ng build` to ensure the application compiles without errors and all new features work as expected.

### Completed Tasks

*   **Resolved Build Errors**: Fixed multiple TypeScript type errors in `add-person-form.component.ts` related to form value types.
*   **Corrected Card Styling**: Fixed a bug in the `missing-person-card.component.html` template that was causing incorrect status display and improved the overall styling of the card.
*   **Cleaned Up Imports**: Removed an unused `NgClass` import from `missing-person-card.component.ts` to eliminate build warnings.
*   **Verified Application Build**: Confirmed that the application builds successfully without any errors or warnings.
