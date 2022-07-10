import { getPalettesCount } from '@mavrica/parser';
import { withSentry } from '@sentry/nextjs';

import type { NextApiRequest, NextApiResponse } from 'next';

interface Count {
  count: number;
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Count>) => {
  try {
    const count = await getPalettesCount();
    res.status(200).json({ count });
  } catch (e) {
    console.log(e);
    res.status(500).json(e.message);
  }
};

export default withSentry(handler);
