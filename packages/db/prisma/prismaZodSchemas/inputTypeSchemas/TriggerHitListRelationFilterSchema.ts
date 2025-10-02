import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerHitWhereInputSchema } from './TriggerHitWhereInputSchema';

export const TriggerHitListRelationFilterSchema: z.ZodType<Prisma.TriggerHitListRelationFilter> = z.strictObject({
  every: z.lazy(() => TriggerHitWhereInputSchema).optional(),
  some: z.lazy(() => TriggerHitWhereInputSchema).optional(),
  none: z.lazy(() => TriggerHitWhereInputSchema).optional(),
});

export default TriggerHitListRelationFilterSchema;
