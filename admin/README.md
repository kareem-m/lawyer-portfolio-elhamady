This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Blog admin configuration

The admin portal uses the `Article` table in Neon and one fixed administrator account. Add these server-only variables to `admin/.env.local`:

```env
DATABASE_URL=your_neon_pooled_connection_string
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD_HASH=your_bcrypt_hash
SESSION_SECRET=a_long_random_secret
```

Generate a password hash with `node -e "console.log(require('bcryptjs').hashSync('your-password', 12))"`, then apply the schema:

```bash
npx prisma db push --schema src/prisma/schema.prisma
```

Articles use an image URL plus separate Arabic/English titles and Markdown content. Google Drive links such as `https://drive.google.com/file/d/FILE_ID/view` are converted and stored as direct image URLs automatically. Set `NEXT_PUBLIC_ADMIN_API_URL` in the frontend deployment to the deployed admin URL to load database articles.

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

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
