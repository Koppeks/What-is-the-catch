import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumTypeRequestFilterSchema } from './EnumTypeRequestFilterSchema';
import { TypeRequestSchema } from './TypeRequestSchema';
import { EnumAnalysisStatusFilterSchema } from './EnumAnalysisStatusFilterSchema';
import { AnalysisStatusSchema } from './AnalysisStatusSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { ClauseListRelationFilterSchema } from './ClauseListRelationFilterSchema';
import { TriggerListRelationFilterSchema } from './TriggerListRelationFilterSchema';

export const AnalysisRequestWhereInputSchema: z.ZodType<Prisma.AnalysisRequestWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AnalysisRequestWhereInputSchema),z.lazy(() => AnalysisRequestWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AnalysisRequestWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AnalysisRequestWhereInputSchema),z.lazy(() => AnalysisRequestWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => EnumTypeRequestFilterSchema),z.lazy(() => TypeRequestSchema) ]).optional(),
  status: z.union([ z.lazy(() => EnumAnalysisStatusFilterSchema),z.lazy(() => AnalysisStatusSchema) ]).optional(),
  sourceUrl: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  language: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  clauses: z.lazy(() => ClauseListRelationFilterSchema).optional(),
  triggers: z.lazy(() => TriggerListRelationFilterSchema).optional()
}).strict() as z.ZodType<Prisma.AnalysisRequestWhereInput>;

export default AnalysisRequestWhereInputSchema;
