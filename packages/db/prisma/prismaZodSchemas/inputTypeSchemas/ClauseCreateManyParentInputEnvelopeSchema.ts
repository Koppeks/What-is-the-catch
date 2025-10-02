import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseCreateManyParentInputSchema } from './ClauseCreateManyParentInputSchema';

export const ClauseCreateManyParentInputEnvelopeSchema: z.ZodType<Prisma.ClauseCreateManyParentInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => ClauseCreateManyParentInputSchema), z.lazy(() => ClauseCreateManyParentInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default ClauseCreateManyParentInputEnvelopeSchema;
