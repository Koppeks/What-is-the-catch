import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { DocumentCreateNestedOneWithoutClausesInputSchema } from './DocumentCreateNestedOneWithoutClausesInputSchema';
import { ClauseCreateNestedOneWithoutChildrenInputSchema } from './ClauseCreateNestedOneWithoutChildrenInputSchema';
import { ClauseCreateNestedManyWithoutParentInputSchema } from './ClauseCreateNestedManyWithoutParentInputSchema';
import { TriggerHitCreateNestedManyWithoutClauseInputSchema } from './TriggerHitCreateNestedManyWithoutClauseInputSchema';
import { ClauseAnalysisCreateNestedManyWithoutClauseInputSchema } from './ClauseAnalysisCreateNestedManyWithoutClauseInputSchema';

export const ClauseCreateInputSchema: z.ZodType<Prisma.ClauseCreateInput> = z.object({
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
  TriggerHits: z.lazy(() => TriggerHitCreateNestedManyWithoutClauseInputSchema).optional(),
  ClauseAnalysis: z.lazy(() => ClauseAnalysisCreateNestedManyWithoutClauseInputSchema).optional()
}).strict() as z.ZodType<Prisma.ClauseCreateInput>;

export default ClauseCreateInputSchema;
