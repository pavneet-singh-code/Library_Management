
# Library Management System — Development TODO

This task list defines the recommended development order.

---

# Phase 1 — Project Setup

## Task 1 — Create Project

npx create-next-app@latest library-system

Enable:
- App Router
- TypeScript
- Tailwind

---

## Task 2 — Setup Project Structure

Create folders:

/app
/components
/lib
/prisma
/types

Commit:
chore: initialize project structure

---

# Phase 2 — Database Setup

## Task 3 — Install Prisma

npm install prisma @prisma/client

Initialize Prisma:

npx prisma init

---

## Task 4 — Design Database Schema

Create tables:

users
books
borrow_records

Fields:

users
- id
- name
- email
- role

books
- id
- title
- author
- category
- available_quantity

borrow_records
- id
- user_id
- book_id
- borrow_date
- return_date
- status

---

## Task 5 — Run Migration

npx prisma migrate dev

---

# Phase 3 — Backend API

## Task 6 — Create Database Utility

/lib/db.ts

Initialize Prisma client.

---

## Task 7 — Books API

Create routes:

GET /api/books
POST /api/books
DELETE /api/books

---

## Task 8 — Members API

GET /api/members

---

## Task 9 — Borrow API

POST /api/borrow
POST /api/return

---

## Task 10 — Records API

GET /api/records

---

# Phase 4 — Dashboard UI

## Task 11 — Sidebar Component

/components/Sidebar.tsx

---

## Task 12 — Navbar Component

/components/Navbar.tsx

---

## Task 13 — Dashboard Page

/app/dashboard/page.tsx

Add stat cards.

---

# Phase 5 — Books UI

## Task 14 — Books Page

/app/books/page.tsx

Display book table.

---

## Task 15 — Add Book Form

/components/AddBookModal.tsx

---

## Task 16 — Book Actions

Add:
Edit
Delete
Borrow

---

# Phase 6 — Members UI

## Task 17 — Members Page

/app/members/page.tsx

Show members table.

---

# Phase 7 — Borrow System

## Task 18 — Borrow Form

/components/BorrowForm.tsx

---

## Task 19 — Borrow Records Page

/app/records/page.tsx

Display borrow history.

---

# Phase 8 — Polish

## Task 20 — Loading States

Add skeleton loaders.

---

## Task 21 — Error Handling

Handle API failures.

---

## Task 22 — Responsive Layout

Ensure mobile support.

---

## Task 23 — Code Cleanup

Remove console logs.
Refactor components.

---

# Phase 9 — Deployment

## Task 24 — Deploy Database

Use Supabase or Neon.

---

## Task 25 — Deploy App

Deploy on Vercel.

Commit:
chore: deploy library system
