import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlockCreateManySectionInputSchema } from './BlockCreateManySectionInputSchema';

export const BlockCreateManySectionInputEnvelopeSchema: z.ZodType<Prisma.BlockCreateManySectionInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => BlockCreateManySectionInputSchema), z.lazy(() => BlockCreateManySectionInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default BlockCreateManySectionInputEnvelopeSchema;
