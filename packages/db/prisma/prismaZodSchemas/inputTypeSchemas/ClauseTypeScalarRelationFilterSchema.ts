import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseTypeWhereInputSchema } from './ClauseTypeWhereInputSchema';

export const ClauseTypeScalarRelationFilterSchema: z.ZodType<Prisma.ClauseTypeScalarRelationFilter> = z.object({
  is: z.lazy(() => ClauseTypeWhereInputSchema).optional(),
  isNot: z.lazy(() => ClauseTypeWhereInputSchema).optional()
}).strict() as z.ZodType<Prisma.ClauseTypeScalarRelationFilter>;

export default ClauseTypeScalarRelationFilterSchema;
