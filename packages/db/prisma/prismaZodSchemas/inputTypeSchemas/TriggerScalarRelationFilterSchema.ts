import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerWhereInputSchema } from './TriggerWhereInputSchema';

export const TriggerScalarRelationFilterSchema: z.ZodType<Prisma.TriggerScalarRelationFilter> = z.object({
  is: z.lazy(() => TriggerWhereInputSchema).optional(),
  isNot: z.lazy(() => TriggerWhereInputSchema).optional()
}).strict() as z.ZodType<Prisma.TriggerScalarRelationFilter>;

export default TriggerScalarRelationFilterSchema;
