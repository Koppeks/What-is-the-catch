import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseTypeCreatetriggerKeywordsInputSchema } from './ClauseTypeCreatetriggerKeywordsInputSchema';
import { TriggerUncheckedCreateNestedManyWithoutClauseTypeInputSchema } from './TriggerUncheckedCreateNestedManyWithoutClauseTypeInputSchema';

export const ClauseTypeUncheckedCreateInputSchema: z.ZodType<Prisma.ClauseTypeUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  slug: z.string(),
  version: z.string().optional(),
  defaultScoring: z.number().optional(),
  label: z.string(),
  isActive: z.boolean(),
  triggerInstruction: z.string(),
  triggerKeywords: z.union([ z.lazy(() => ClauseTypeCreatetriggerKeywordsInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Trigger: z.lazy(() => TriggerUncheckedCreateNestedManyWithoutClauseTypeInputSchema).optional()
}).strict() as z.ZodType<Prisma.ClauseTypeUncheckedCreateInput>;

export default ClauseTypeUncheckedCreateInputSchema;
