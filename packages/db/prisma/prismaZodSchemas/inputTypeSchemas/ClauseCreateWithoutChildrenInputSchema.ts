import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { DocumentCreateNestedOneWithoutClausesInputSchema } from './DocumentCreateNestedOneWithoutClausesInputSchema';
import { ClauseCreateNestedOneWithoutChildrenInputSchema } from './ClauseCreateNestedOneWithoutChildrenInputSchema';
import { TriggerHitCreateNestedManyWithoutClauseInputSchema } from './TriggerHitCreateNestedManyWithoutClauseInputSchema';
import { ClauseAnalysisCreateNestedManyWithoutClauseInputSchema } from './ClauseAnalysisCreateNestedManyWithoutClauseInputSchema';

export const ClauseCreateWithoutChildrenInputSchema: z.ZodType<Prisma.ClauseCreateWithoutChildrenInput> = z.strictObject({
  id: z.cuid().optional(),
  ordinalPath: z.string(),
  title: z.string(),
  text: z.string(),
  order: z.number().int(),
  depth: z.number().int(),
  meta: z.union([ z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  document: z.lazy(() => DocumentCreateNestedOneWithoutClausesInputSchema),
  parent: z.lazy(() => ClauseCreateNestedOneWithoutChildrenInputSchema).optional(),
  TriggerHits: z.lazy(() => TriggerHitCreateNestedManyWithoutClauseInputSchema).optional(),
  ClauseAnalysis: z.lazy(() => ClauseAnalysisCreateNestedManyWithoutClauseInputSchema).optional(),
});

export default ClauseCreateWithoutChildrenInputSchema;
