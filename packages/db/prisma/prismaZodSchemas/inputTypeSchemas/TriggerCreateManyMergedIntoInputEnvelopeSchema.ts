import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerCreateManyMergedIntoInputSchema } from './TriggerCreateManyMergedIntoInputSchema';

export const TriggerCreateManyMergedIntoInputEnvelopeSchema: z.ZodType<Prisma.TriggerCreateManyMergedIntoInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => TriggerCreateManyMergedIntoInputSchema), z.lazy(() => TriggerCreateManyMergedIntoInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default TriggerCreateManyMergedIntoInputEnvelopeSchema;
