# TicketBridge

TicketBridge is a scalable ticket transfer platform where users can upload and transfer unused tickets safely.

## Project Idea

If a user books a ticket and later cannot travel or attend the event, they can upload the ticket to the platform. Other users can search and buy available tickets.

Initially, the project focuses on bus ticket transfers, but it can later scale to:

- Train tickets
- Movie tickets
- Cricket tickets
- Event tickets
- Flight tickets

## Features

### Current Features

- Login Page
- Register Page

### Future Features

- Ticket Upload
- Ticket Search
- Ticket Transfer
- User Authentication
- Ticket Verification
- Payment Integration
- Notifications
- Admin Panel

## Tech Stack

### Frontend

- HTML
- CSS
- JavaScript

### Backend

- Java Spring Boot

### Database

- MySQL

## Folder Structure

```text
ticket-bridge
│
├── frontend
├── backend
├── database
├── docs
└── README.md

flow of ticket
Future Features:
1. Ticket Verification
2. Official Platform Integration
3. Ownership Transfer
4. Escrow Payments
5. Dynamic Cancellation Rules
6. Transfer Deadline Before Journey


# Future Features

## Ticket Verification

* Verify uploaded tickets before listing.
* Prevent fake ticket uploads.

## Ownership Transfer

* Generate a new ticket/PNR for the buyer.
* Invalidate the seller's old ticket.

## Escrow Payments

* Hold buyer payment until ticket transfer succeeds.
* Release money to seller after successful transfer.

## Dynamic Transfer Deadlines

* Bus: 1 hour before departure.
* Train: 4 hours before departure.
* Flight: 24 hours before departure.
* Movie: 30 minutes before showtime.
* Event/Concert: 2 hours before start.

## Operator Integration

* Integrate with RedBus, AbhiBus, MakeMyTrip, government transport systems, and event platforms.

## Fraud Prevention

* Prevent duplicate ticket selling.
* Prevent resale price from exceeding original ticket price.
* Hide sensitive information before purchase.

## Seller Rating System

* Buyers can rate sellers after successful transactions.
* Improve trust and transparency.
```
