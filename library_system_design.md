
# Design Document

## Project
Library Management System

## Author
Pavneet Singh

## Timeline
March

## Tech Stack
Frontend: Next.js  
Backend: Next.js API Routes  
Database: PostgreSQL  
ORM: Prisma  
Styling: Tailwind CSS

---

# 1. System Overview

The Library Management System is a dashboard-style web application for managing books, members, and borrow records in a library.

Main capabilities:
- Track available books
- Manage library members
- Borrow and return books
- View statistics about library usage

The UI is inspired by a modern admin dashboard layout similar to the Dribbble reference design.

---

# 2. High-Level Architecture

User Browser  
↓  
Next.js Frontend  
↓  
Next.js API Routes  
↓  
Prisma ORM  
↓  
PostgreSQL Database

---

# 3. Layout Structure

Dashboard-style layout:

Sidebar Navigation  
Top Header  
Main Content Area

Sidebar is persistent across all pages.

---

# 4. Navigation Structure

Sidebar menu:

- Dashboard
- Books
- Members
- Borrow Records
- Add Book
- Settings

---

# 5. Dashboard Page

Route: /dashboard

Purpose:
Provide quick overview of library activity.

Components:
- Statistics cards
- Recent borrow activity
- Quick actions

Statistics cards:

- Total Books
- Books Borrowed
- Active Members
- Overdue Books

---

# 6. Books Management Page

Route: /books

Features:
- Search books
- Add new book
- Edit book details
- Delete books

Books table columns:

- Title
- Author
- Category
- Available Copies
- Status
- Actions

Actions:

- Edit
- Delete
- Borrow

---

# 7. Members Page

Route: /members

Purpose:
Manage library members.

Displayed fields:

- Name
- Email
- Books Borrowed
- Join Date
- Status

Features:

- Search members
- View borrow history
- Deactivate member

---

# 8. Borrow / Checkout Page

Route: /borrow

Purpose:
Handle book checkout and returns.

Fields:

- Select user
- Select book
- Borrow date
- Return date
- Status

---

# 9. Borrow Records Page

Route: /records

Table columns:

- User
- Book
- Borrow Date
- Return Date
- Status

Statuses:

- Borrowed
- Returned
- Overdue

---

# 10. Component Architecture

App
 ├── Sidebar
 ├── Navbar
 ├── DashboardPage
 ├── BooksPage
 │     └── BookTable
 ├── MembersPage
 │     └── MemberTable
 ├── BorrowPage
 │     └── BorrowForm
 └── RecordsPage
       └── BorrowTable

Reusable components:

- StatCard
- Table
- Button
- Modal
- SearchBar

---

# 11. Database Schema

Tables:

users
books
borrow_records

Relationships:

Users 1 → N BorrowRecords  
Books 1 → N BorrowRecords

---

# 12. API Routes

GET /api/books  
POST /api/books  
DELETE /api/books  

GET /api/members  

POST /api/borrow  
POST /api/return  

GET /api/records

---

# 13. Responsive Design

Breakpoints:

Mobile < 640px  
Tablet < 1024px  
Desktop > 1024px

Mobile adjustments:

- Sidebar collapses
- Tables convert to cards
- Navigation becomes hamburger menu

---

# 14. Performance Considerations

- Server-side data fetching
- Pagination for tables
- Lazy loading large components

---

# 15. Future Improvements

- Authentication system
- Book reservations
- Email notifications
- Analytics dashboard

---

# 16. Success Criteria

Project is complete when:

- Books can be added/removed
- Users can borrow and return books
- Borrow records persist in database
- Dashboard statistics update correctly
