import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerCreateManyClauseTypeInputSchema } from './TriggerCreateManyClauseTypeInputSchema';

export const TriggerCreateManyClauseTypeInputEnvelopeSchema: z.ZodType<Prisma.TriggerCreateManyClauseTypeInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TriggerCreateManyClauseTypeInputSchema),z.lazy(() => TriggerCreateManyClauseTypeInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict() as z.ZodType<Prisma.TriggerCreateManyClauseTypeInputEnvelope>;

export default TriggerCreateManyClauseTypeInputEnvelopeSchema;
