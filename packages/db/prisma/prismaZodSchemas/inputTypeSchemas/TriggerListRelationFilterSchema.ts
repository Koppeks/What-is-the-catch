import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerWhereInputSchema } from './TriggerWhereInputSchema';

export const TriggerListRelationFilterSchema: z.ZodType<Prisma.TriggerListRelationFilter> = z.strictObject({
  every: z.lazy(() => TriggerWhereInputSchema).optional(),
  some: z.lazy(() => TriggerWhereInputSchema).optional(),
  none: z.lazy(() => TriggerWhereInputSchema).optional(),
});

export default TriggerListRelationFilterSchema;
