import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseCategoryCreatetriggerKeywordsInputSchema } from './ClauseCategoryCreatetriggerKeywordsInputSchema';
import { CategoryHitCreateNestedManyWithoutCategoryInputSchema } from './CategoryHitCreateNestedManyWithoutCategoryInputSchema';

export const ClauseCategoryCreateWithoutTriggerInputSchema: z.ZodType<Prisma.ClauseCategoryCreateWithoutTriggerInput> = z.object({
  id: z.string().cuid().optional(),
  slug: z.string(),
  version: z.string().optional(),
  defaultScoring: z.number().optional(),
  label: z.string(),
  isActive: z.boolean().optional(),
  triggerInstruction: z.string(),
  triggerKeywords: z.union([ z.lazy(() => ClauseCategoryCreatetriggerKeywordsInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  CategoryHit: z.lazy(() => CategoryHitCreateNestedManyWithoutCategoryInputSchema).optional()
}).strict() as z.ZodType<Prisma.ClauseCategoryCreateWithoutTriggerInput>;

export default ClauseCategoryCreateWithoutTriggerInputSchema;
