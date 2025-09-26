import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseWhereInputSchema } from './ClauseWhereInputSchema';

export const ClauseScalarRelationFilterSchema: z.ZodType<Prisma.ClauseScalarRelationFilter> = z.object({
  is: z.lazy(() => ClauseWhereInputSchema).optional(),
  isNot: z.lazy(() => ClauseWhereInputSchema).optional()
}).strict() as z.ZodType<Prisma.ClauseScalarRelationFilter>;

export default ClauseScalarRelationFilterSchema;
