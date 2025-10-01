import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CategoryHitSelectSchema } from '../inputTypeSchemas/CategoryHitSelectSchema';
import { CategoryHitIncludeSchema } from '../inputTypeSchemas/CategoryHitIncludeSchema';

export const CategoryHitArgsSchema: z.ZodType<Prisma.CategoryHitDefaultArgs> = z.object({
  select: z.lazy(() => CategoryHitSelectSchema).optional(),
  include: z.lazy(() => CategoryHitIncludeSchema).optional(),
}).strict();

export default CategoryHitArgsSchema;
