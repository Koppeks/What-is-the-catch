import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerHitCreateManyTriggerInputSchema } from './TriggerHitCreateManyTriggerInputSchema';

export const TriggerHitCreateManyTriggerInputEnvelopeSchema: z.ZodType<Prisma.TriggerHitCreateManyTriggerInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => TriggerHitCreateManyTriggerInputSchema), z.lazy(() => TriggerHitCreateManyTriggerInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default TriggerHitCreateManyTriggerInputEnvelopeSchema;
