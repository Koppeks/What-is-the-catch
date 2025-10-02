import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CategoryHitWhereInputSchema } from './CategoryHitWhereInputSchema';

export const CategoryHitListRelationFilterSchema: z.ZodType<Prisma.CategoryHitListRelationFilter> = z.strictObject({
  every: z.lazy(() => CategoryHitWhereInputSchema).optional(),
  some: z.lazy(() => CategoryHitWhereInputSchema).optional(),
  none: z.lazy(() => CategoryHitWhereInputSchema).optional(),
});

export default CategoryHitListRelationFilterSchema;
