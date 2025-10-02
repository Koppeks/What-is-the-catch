import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerHitCreateManyClauseInputSchema } from './TriggerHitCreateManyClauseInputSchema';

export const TriggerHitCreateManyClauseInputEnvelopeSchema: z.ZodType<Prisma.TriggerHitCreateManyClauseInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => TriggerHitCreateManyClauseInputSchema), z.lazy(() => TriggerHitCreateManyClauseInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default TriggerHitCreateManyClauseInputEnvelopeSchema;
