import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseWhereInputSchema } from './ClauseWhereInputSchema';

export const ClauseListRelationFilterSchema: z.ZodType<Prisma.ClauseListRelationFilter> = z.strictObject({
  every: z.lazy(() => ClauseWhereInputSchema).optional(),
  some: z.lazy(() => ClauseWhereInputSchema).optional(),
  none: z.lazy(() => ClauseWhereInputSchema).optional(),
});

export default ClauseListRelationFilterSchema;
