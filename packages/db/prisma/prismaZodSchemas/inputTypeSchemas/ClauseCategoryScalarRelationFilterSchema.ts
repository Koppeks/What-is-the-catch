import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseCategoryWhereInputSchema } from './ClauseCategoryWhereInputSchema';

export const ClauseCategoryScalarRelationFilterSchema: z.ZodType<Prisma.ClauseCategoryScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => ClauseCategoryWhereInputSchema).optional(),
  isNot: z.lazy(() => ClauseCategoryWhereInputSchema).optional(),
});

export default ClauseCategoryScalarRelationFilterSchema;
