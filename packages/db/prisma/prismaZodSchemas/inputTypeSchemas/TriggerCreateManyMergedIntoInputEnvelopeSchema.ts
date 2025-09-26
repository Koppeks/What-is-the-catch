import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerCreateManyMergedIntoInputSchema } from './TriggerCreateManyMergedIntoInputSchema';

export const TriggerCreateManyMergedIntoInputEnvelopeSchema: z.ZodType<Prisma.TriggerCreateManyMergedIntoInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TriggerCreateManyMergedIntoInputSchema),z.lazy(() => TriggerCreateManyMergedIntoInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict() as z.ZodType<Prisma.TriggerCreateManyMergedIntoInputEnvelope>;

export default TriggerCreateManyMergedIntoInputEnvelopeSchema;
