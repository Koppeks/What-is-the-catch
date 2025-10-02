import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerCreateManyClauseCategoryInputSchema } from './TriggerCreateManyClauseCategoryInputSchema';

export const TriggerCreateManyClauseCategoryInputEnvelopeSchema: z.ZodType<Prisma.TriggerCreateManyClauseCategoryInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => TriggerCreateManyClauseCategoryInputSchema), z.lazy(() => TriggerCreateManyClauseCategoryInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default TriggerCreateManyClauseCategoryInputEnvelopeSchema;
