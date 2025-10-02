import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerWhereInputSchema } from './TriggerWhereInputSchema';

export const TriggerNullableScalarRelationFilterSchema: z.ZodType<Prisma.TriggerNullableScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => TriggerWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => TriggerWhereInputSchema).optional().nullable(),
});

export default TriggerNullableScalarRelationFilterSchema;
