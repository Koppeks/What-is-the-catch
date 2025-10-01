import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DocumentScalarRelationFilterSchema } from './DocumentScalarRelationFilterSchema';
import { DocumentWhereInputSchema } from './DocumentWhereInputSchema';
import { ClauseNullableScalarRelationFilterSchema } from './ClauseNullableScalarRelationFilterSchema';
import { ClauseListRelationFilterSchema } from './ClauseListRelationFilterSchema';
import { TriggerHitListRelationFilterSchema } from './TriggerHitListRelationFilterSchema';
import { ClauseAnalysisListRelationFilterSchema } from './ClauseAnalysisListRelationFilterSchema';

export const ClauseWhereInputSchema: z.ZodType<Prisma.ClauseWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ClauseWhereInputSchema),z.lazy(() => ClauseWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ClauseWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ClauseWhereInputSchema),z.lazy(() => ClauseWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  documentId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  parentId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  ordinalPath: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  text: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  order: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  depth: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  meta: z.lazy(() => JsonNullableFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  document: z.union([ z.lazy(() => DocumentScalarRelationFilterSchema),z.lazy(() => DocumentWhereInputSchema) ]).optional(),
  parent: z.union([ z.lazy(() => ClauseNullableScalarRelationFilterSchema),z.lazy(() => ClauseWhereInputSchema) ]).optional().nullable(),
  children: z.lazy(() => ClauseListRelationFilterSchema).optional(),
  TriggerHits: z.lazy(() => TriggerHitListRelationFilterSchema).optional(),
  ClauseAnalysis: z.lazy(() => ClauseAnalysisListRelationFilterSchema).optional()
}).strict() as z.ZodType<Prisma.ClauseWhereInput>;

export default ClauseWhereInputSchema;
