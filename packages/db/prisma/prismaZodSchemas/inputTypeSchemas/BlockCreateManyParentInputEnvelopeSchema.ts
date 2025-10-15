import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlockCreateManyParentInputSchema } from './BlockCreateManyParentInputSchema';

export const BlockCreateManyParentInputEnvelopeSchema: z.ZodType<Prisma.BlockCreateManyParentInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => BlockCreateManyParentInputSchema), z.lazy(() => BlockCreateManyParentInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default BlockCreateManyParentInputEnvelopeSchema;
