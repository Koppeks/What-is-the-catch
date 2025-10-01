import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseCategoryWhereInputSchema } from './ClauseCategoryWhereInputSchema';

export const ClauseCategoryScalarRelationFilterSchema: z.ZodType<Prisma.ClauseCategoryScalarRelationFilter> = z.object({
  is: z.lazy(() => ClauseCategoryWhereInputSchema).optional(),
  isNot: z.lazy(() => ClauseCategoryWhereInputSchema).optional()
}).strict() as z.ZodType<Prisma.ClauseCategoryScalarRelationFilter>;

export default ClauseCategoryScalarRelationFilterSchema;
