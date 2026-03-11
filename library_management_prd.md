# Product Requirements Document (PRD)

## Product Name

Library Management System

## Owner

Pavneet Singh

## Timeline

March (4 Weeks)

## Project Type

Full‑Stack Web Application

## Tech Stack

-   Next.js (Frontend + API Routes)
-   PostgreSQL (Database)
-   Prisma ORM
-   Tailwind CSS (UI)

------------------------------------------------------------------------

# 1. Problem Statement

Libraries and educational institutions often need a simple system to
track:

-   Available books
-   Borrowed books
-   Student borrowing history
-   Inventory status

Manual systems are inefficient and error‑prone. This project aims to
create a **web‑based Library Management System** that allows users to
browse books and track borrow records while allowing administrators to
manage inventory.

------------------------------------------------------------------------

# 2. Goals

## Primary Goals

-   Learn SQL database design
-   Implement relational database schemas
-   Practice CRUD operations
-   Build a full‑stack application using Next.js and PostgreSQL

## Success Criteria

-   Users can view available books
-   Users can borrow and return books
-   Admin can add and manage books
-   Data persists in a SQL database

------------------------------------------------------------------------

# 3. Target Users

### Students

Students who want to browse and borrow books.

### Administrators

Library managers responsible for managing books and tracking borrow
records.

------------------------------------------------------------------------

# 4. Core Features (MVP)

## 4.1 Browse Books

Users can view a list of available books.

Displayed Information: - Book title - Author - Category - Available
quantity

Functional Requirements: - Retrieve book data from the database -
Display list in a table or card layout - Allow search by title or author

------------------------------------------------------------------------

## 4.2 Borrow Book

Users can borrow a book.

Functional Requirements: - Select a book - Create a borrow record -
Decrease available quantity

Database Action: INSERT into borrow_records table

------------------------------------------------------------------------

## 4.3 Return Book

Users can return a borrowed book.

Functional Requirements: - Update borrow record - Increase available
quantity - Change status to returned

------------------------------------------------------------------------

## 4.4 View Borrow History

Users can see which books they have borrowed.

Displayed Information: - Book title - Borrow date - Return date - Status

------------------------------------------------------------------------

## 4.5 Admin Book Management

Admin users can:

-   Add new books
-   Update book details
-   Remove books
-   View borrow records

------------------------------------------------------------------------

# 5. Database Design

## Users Table

Fields: - id (Primary Key) - name - email - role

Example Roles: - student - admin

------------------------------------------------------------------------

## Books Table

Fields: - id (Primary Key) - title - author - category -
available_quantity

------------------------------------------------------------------------

## Borrow Records Table

Fields: - id (Primary Key) - user_id (Foreign Key) - book_id (Foreign
Key) - borrow_date - return_date - status

Relationships:

Users 1 → N BorrowRecords\
Books 1 → N BorrowRecords

------------------------------------------------------------------------

# 6. User Flow

## Borrow Flow

1.  User opens books page
2.  User selects a book
3.  User clicks borrow
4.  System creates borrow record
5.  Book quantity decreases

------------------------------------------------------------------------

## Return Flow

1.  User opens borrowed books page
2.  User selects return
3.  Borrow record updated
4.  Book quantity increases

------------------------------------------------------------------------

# 7. API Endpoints

GET /api/books\
Returns list of books

POST /api/books\
Create new book

POST /api/borrow\
Borrow a book

POST /api/return\
Return a book

GET /api/borrowed\
Get borrow records

------------------------------------------------------------------------

# 8. Non‑Functional Requirements

Performance: - Queries should return results within 1--2 seconds

Security: - Validate input data - Prevent invalid borrow operations

Reliability: - Database should maintain data integrity

------------------------------------------------------------------------

# 9. Metrics for Completion

Project is considered complete when:

-   Database schema implemented
-   CRUD operations working
-   Borrow and return features functional
-   Admin can manage books
-   Data stored persistently

------------------------------------------------------------------------

# 10. Future Improvements

Possible extensions:

-   User authentication
-   Book reservation system
-   Email notifications
-   Analytics dashboard
-   Multi‑library support

------------------------------------------------------------------------

# 11. Development Milestones

## Week 1

-   Learn SQL basics
-   Setup PostgreSQL
-   Create database schema

## Week 2

-   Setup Prisma ORM
-   Implement database models
-   Seed sample data

## Week 3

-   Build backend API routes
-   Implement borrow/return logic

## Week 4

-   Build frontend pages
-   Connect frontend to APIs
-   Polish UI and documentation

------------------------------------------------------------------------

# Author

Pavneet Singh\
Computer Science Student building projects to master full‑stack
development.
