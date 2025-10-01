import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { ClauseUncheckedCreateNestedManyWithoutParentInputSchema } from './ClauseUncheckedCreateNestedManyWithoutParentInputSchema';
import { TriggerHitUncheckedCreateNestedManyWithoutClauseInputSchema } from './TriggerHitUncheckedCreateNestedManyWithoutClauseInputSchema';

export const ClauseUncheckedCreateWithoutClauseAnalysisInputSchema: z.ZodType<Prisma.ClauseUncheckedCreateWithoutClauseAnalysisInput> = z.object({
  id: z.string().cuid().optional(),
  documentId: z.string(),
  parentId: z.string().optional().nullable(),
  ordinalPath: z.string(),
  title: z.string(),
  text: z.string(),
  order: z.number().int(),
  depth: z.number().int(),
  meta: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  children: z.lazy(() => ClauseUncheckedCreateNestedManyWithoutParentInputSchema).optional(),
  TriggerHits: z.lazy(() => TriggerHitUncheckedCreateNestedManyWithoutClauseInputSchema).optional()
}).strict() as z.ZodType<Prisma.ClauseUncheckedCreateWithoutClauseAnalysisInput>;

export default ClauseUncheckedCreateWithoutClauseAnalysisInputSchema;
