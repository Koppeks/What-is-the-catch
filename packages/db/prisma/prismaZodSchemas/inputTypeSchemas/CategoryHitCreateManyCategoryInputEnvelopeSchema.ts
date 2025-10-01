import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CategoryHitCreateManyCategoryInputSchema } from './CategoryHitCreateManyCategoryInputSchema';

export const CategoryHitCreateManyCategoryInputEnvelopeSchema: z.ZodType<Prisma.CategoryHitCreateManyCategoryInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => CategoryHitCreateManyCategoryInputSchema),z.lazy(() => CategoryHitCreateManyCategoryInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict() as z.ZodType<Prisma.CategoryHitCreateManyCategoryInputEnvelope>;

export default CategoryHitCreateManyCategoryInputEnvelopeSchema;
