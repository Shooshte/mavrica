import NextAuth from 'next-auth';
import neo4j from 'neo4j-driver';
import { withSentry } from '@sentry/nextjs';
import { Neo4jAdapter } from '@next-auth/neo4j-adapter';
import GoogleProvider from 'next-auth/providers/google';

const driver = neo4j.driver(
  process.env['NX_NEO4J_URI'] || '',
  neo4j.auth.basic(
    process.env['NX_NEO4J_USER'] || '',
    process.env['NX_NEO4J_PASS'] || ''
  )
);

export const authOptions = {
  providers: [
    GoogleProvider({
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  adapter: Neo4jAdapter(driver.session()),
  session: {
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
};

const handler = NextAuth(authOptions);

export default withSentry(handler);
