This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.



## Contents 

- user/page.tsx : CSR component to fetch user data
- user-server/page.tsx : SSR component to fetch user data
- api/v1/user/details/page.tsx : Backend Get() endpoint for user details
- user-local/route.ts : Component to fetch data form local nextjs backend
