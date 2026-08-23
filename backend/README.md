# BookHaven Backend

Express + PostgreSQL API for the BookHaven bookstore frontend.

## Setup

1. **Install dependencies**
   ```
   cd backend
   npm install
   ```

2. **Create the database**
   ```
   createdb bookhaven
   ```
   (Or use `psql` / pgAdmin to create a database named `bookhaven`.)

3. **Configure environment**
   ```
   cp .env.example .env
   ```
   Edit `.env` and fill in your actual PostgreSQL username/password.

4. **Create tables**
   ```
   psql -U postgres -d bookhaven -f db/schema.sql
   ```

5. **Seed the books table**
   ```
   npm run seed
   ```
   This inserts the same 12 books currently hardcoded in `src/pages/Shop/page.tsx`.

6. **Run the server**
   ```
   npm run dev
   ```
   Server starts on `http://localhost:5000`. Test it: `GET http://localhost:5000/api/health`.

## API Reference

| Method | Route | Auth? | Body | Description |
|---|---|---|---|---|
| POST | `/api/auth/register` | No | `{ name, email, password }` | Create account, returns `{ user, token }` |
| POST | `/api/auth/login` | No | `{ email, password }` | Login, returns `{ user, token }` |
| GET | `/api/books` | No | — | List all books |
| GET | `/api/books/:id` | No | — | Get one book |
| GET | `/api/cart` | Yes | — | Get logged-in user's cart + subtotal |
| POST | `/api/cart` | Yes | `{ bookId, quantity }` | Add book to cart |
| PUT | `/api/cart/:itemId` | Yes | `{ quantity }` | Update quantity |
| DELETE | `/api/cart/:itemId` | Yes | — | Remove item from cart |
| POST | `/api/orders` | Yes | — | Checkout: cart → order |
| GET | `/api/orders` | Yes | — | Order history |

**Auth routes** need `Authorization: Bearer <token>` header (token comes from register/login response).

## Next: connect the frontend

Every protected request needs the JWT. Store it after login/signup:
```js
localStorage.setItem('token', response.token);
```

Then attach it to requests:
```js
// Import apiFetch at the top of the file:
import { apiFetch } from '../lib/api';

// Replace your fetch call with:
const responseData = await apiFetch('/cart');