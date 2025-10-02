import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { TriggerHitUncheckedCreateNestedManyWithoutClauseInputSchema } from './TriggerHitUncheckedCreateNestedManyWithoutClauseInputSchema';
import { ClauseAnalysisUncheckedCreateNestedManyWithoutClauseInputSchema } from './ClauseAnalysisUncheckedCreateNestedManyWithoutClauseInputSchema';

export const ClauseUncheckedCreateWithoutChildrenInputSchema: z.ZodType<Prisma.ClauseUncheckedCreateWithoutChildrenInput> = z.strictObject({
  id: z.cuid().optional(),
  documentId: z.string(),
  parentId: z.string().optional().nullable(),
  ordinalPath: z.string(),
  title: z.string(),
  text: z.string(),
  order: z.number().int(),
  depth: z.number().int(),
  meta: z.union([ z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  TriggerHits: z.lazy(() => TriggerHitUncheckedCreateNestedManyWithoutClauseInputSchema).optional(),
  ClauseAnalysis: z.lazy(() => ClauseAnalysisUncheckedCreateNestedManyWithoutClauseInputSchema).optional(),
});

export default ClauseUncheckedCreateWithoutChildrenInputSchema;
