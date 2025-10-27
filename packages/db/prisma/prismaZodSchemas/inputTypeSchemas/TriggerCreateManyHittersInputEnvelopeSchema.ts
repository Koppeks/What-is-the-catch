import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerCreateManyHittersInputSchema } from './TriggerCreateManyHittersInputSchema';

export const TriggerCreateManyHittersInputEnvelopeSchema: z.ZodType<Prisma.TriggerCreateManyHittersInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => TriggerCreateManyHittersInputSchema), z.lazy(() => TriggerCreateManyHittersInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default TriggerCreateManyHittersInputEnvelopeSchema;
