import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseCreateManyParentInputSchema } from './ClauseCreateManyParentInputSchema';

export const ClauseCreateManyParentInputEnvelopeSchema: z.ZodType<Prisma.ClauseCreateManyParentInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ClauseCreateManyParentInputSchema),z.lazy(() => ClauseCreateManyParentInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict() as z.ZodType<Prisma.ClauseCreateManyParentInputEnvelope>;

export default ClauseCreateManyParentInputEnvelopeSchema;
