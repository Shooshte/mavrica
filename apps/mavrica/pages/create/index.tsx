import { unstable_getServerSession } from 'next-auth/next';
import { authOptions } from '../api/auth/[...nextauth]';

import type { GetServerSidePropsContext } from 'next';
import type { Session } from 'next-auth';

const Create = ({ session }: { session: Session }) => {
  console.log(session.user);

  return <div>Create</div>;
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return { props: { session } };
}

export default Create;
