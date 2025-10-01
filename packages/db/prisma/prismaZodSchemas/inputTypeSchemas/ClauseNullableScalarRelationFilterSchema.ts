import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseWhereInputSchema } from './ClauseWhereInputSchema';

export const ClauseNullableScalarRelationFilterSchema: z.ZodType<Prisma.ClauseNullableScalarRelationFilter> = z.object({
  is: z.lazy(() => ClauseWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => ClauseWhereInputSchema).optional().nullable()
}).strict() as z.ZodType<Prisma.ClauseNullableScalarRelationFilter>;

export default ClauseNullableScalarRelationFilterSchema;
