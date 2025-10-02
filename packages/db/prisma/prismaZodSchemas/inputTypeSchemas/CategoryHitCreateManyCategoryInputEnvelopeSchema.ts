import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CategoryHitCreateManyCategoryInputSchema } from './CategoryHitCreateManyCategoryInputSchema';

export const CategoryHitCreateManyCategoryInputEnvelopeSchema: z.ZodType<Prisma.CategoryHitCreateManyCategoryInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => CategoryHitCreateManyCategoryInputSchema), z.lazy(() => CategoryHitCreateManyCategoryInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default CategoryHitCreateManyCategoryInputEnvelopeSchema;
