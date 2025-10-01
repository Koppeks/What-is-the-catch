import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { DocumentCreateNestedOneWithoutClausesInputSchema } from './DocumentCreateNestedOneWithoutClausesInputSchema';
import { ClauseCreateNestedOneWithoutChildrenInputSchema } from './ClauseCreateNestedOneWithoutChildrenInputSchema';
import { ClauseCreateNestedManyWithoutParentInputSchema } from './ClauseCreateNestedManyWithoutParentInputSchema';
import { TriggerHitCreateNestedManyWithoutClauseInputSchema } from './TriggerHitCreateNestedManyWithoutClauseInputSchema';

export const ClauseCreateWithoutClauseAnalysisInputSchema: z.ZodType<Prisma.ClauseCreateWithoutClauseAnalysisInput> = z.object({
  id: z.string().cuid().optional(),
  ordinalPath: z.string(),
  title: z.string(),
  text: z.string(),
  order: z.number().int(),
  depth: z.number().int(),
  meta: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  document: z.lazy(() => DocumentCreateNestedOneWithoutClausesInputSchema),
  parent: z.lazy(() => ClauseCreateNestedOneWithoutChildrenInputSchema).optional(),
  children: z.lazy(() => ClauseCreateNestedManyWithoutParentInputSchema).optional(),
  TriggerHits: z.lazy(() => TriggerHitCreateNestedManyWithoutClauseInputSchema).optional()
}).strict() as z.ZodType<Prisma.ClauseCreateWithoutClauseAnalysisInput>;

export default ClauseCreateWithoutClauseAnalysisInputSchema;
