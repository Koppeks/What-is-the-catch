import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseWhereInputSchema } from './ClauseWhereInputSchema';

export const ClauseListRelationFilterSchema: z.ZodType<Prisma.ClauseListRelationFilter> = z.object({
  every: z.lazy(() => ClauseWhereInputSchema).optional(),
  some: z.lazy(() => ClauseWhereInputSchema).optional(),
  none: z.lazy(() => ClauseWhereInputSchema).optional()
}).strict() as z.ZodType<Prisma.ClauseListRelationFilter>;

export default ClauseListRelationFilterSchema;
