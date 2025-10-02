import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseCategoryCreatetriggerKeywordsInputSchema } from './ClauseCategoryCreatetriggerKeywordsInputSchema';
import { CategoryHitUncheckedCreateNestedManyWithoutCategoryInputSchema } from './CategoryHitUncheckedCreateNestedManyWithoutCategoryInputSchema';

export const ClauseCategoryUncheckedCreateWithoutTriggerInputSchema: z.ZodType<Prisma.ClauseCategoryUncheckedCreateWithoutTriggerInput> = z.strictObject({
  id: z.cuid().optional(),
  slug: z.string(),
  version: z.string().optional(),
  defaultScoring: z.number().optional(),
  label: z.string(),
  isActive: z.boolean().optional(),
  triggerInstruction: z.string(),
  triggerKeywords: z.union([ z.lazy(() => ClauseCategoryCreatetriggerKeywordsInputSchema), z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  CategoryHit: z.lazy(() => CategoryHitUncheckedCreateNestedManyWithoutCategoryInputSchema).optional(),
});

export default ClauseCategoryUncheckedCreateWithoutTriggerInputSchema;
