import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseCategoryCreatetriggerKeywordsInputSchema } from './ClauseCategoryCreatetriggerKeywordsInputSchema';
import { TriggerUncheckedCreateNestedManyWithoutClauseCategoryInputSchema } from './TriggerUncheckedCreateNestedManyWithoutClauseCategoryInputSchema';
import { CategoryHitUncheckedCreateNestedManyWithoutCategoryInputSchema } from './CategoryHitUncheckedCreateNestedManyWithoutCategoryInputSchema';

export const ClauseCategoryUncheckedCreateInputSchema: z.ZodType<Prisma.ClauseCategoryUncheckedCreateInput> = z.object({
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
  Trigger: z.lazy(() => TriggerUncheckedCreateNestedManyWithoutClauseCategoryInputSchema).optional(),
  CategoryHit: z.lazy(() => CategoryHitUncheckedCreateNestedManyWithoutCategoryInputSchema).optional()
}).strict() as z.ZodType<Prisma.ClauseCategoryUncheckedCreateInput>;

export default ClauseCategoryUncheckedCreateInputSchema;
