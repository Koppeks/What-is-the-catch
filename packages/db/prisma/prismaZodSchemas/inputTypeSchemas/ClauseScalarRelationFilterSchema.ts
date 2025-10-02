import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseWhereInputSchema } from './ClauseWhereInputSchema';

export const ClauseScalarRelationFilterSchema: z.ZodType<Prisma.ClauseScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => ClauseWhereInputSchema).optional(),
  isNot: z.lazy(() => ClauseWhereInputSchema).optional(),
});

export default ClauseScalarRelationFilterSchema;
