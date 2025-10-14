import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseCategoryCreatetriggerKeywordsInputSchema } from './ClauseCategoryCreatetriggerKeywordsInputSchema';
import { TriggerCreateNestedManyWithoutClauseCategoryInputSchema } from './TriggerCreateNestedManyWithoutClauseCategoryInputSchema';

export const ClauseCategoryCreateInputSchema: z.ZodType<Prisma.ClauseCategoryCreateInput> = z.strictObject({
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
  Trigger: z.lazy(() => TriggerCreateNestedManyWithoutClauseCategoryInputSchema).optional(),
});

export default ClauseCategoryCreateInputSchema;
