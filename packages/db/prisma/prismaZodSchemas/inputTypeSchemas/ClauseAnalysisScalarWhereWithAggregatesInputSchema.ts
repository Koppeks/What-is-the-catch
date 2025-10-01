import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { EnumSeverityWithAggregatesFilterSchema } from './EnumSeverityWithAggregatesFilterSchema';
import { SeveritySchema } from './SeveritySchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';

export const ClauseAnalysisScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ClauseAnalysisScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ClauseAnalysisScalarWhereWithAggregatesInputSchema),z.lazy(() => ClauseAnalysisScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ClauseAnalysisScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ClauseAnalysisScalarWhereWithAggregatesInputSchema),z.lazy(() => ClauseAnalysisScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  runId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  clauseId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  severity: z.union([ z.lazy(() => EnumSeverityWithAggregatesFilterSchema),z.lazy(() => SeveritySchema) ]).optional(),
  riskScore: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  triggerWarnings: z.lazy(() => StringNullableListFilterSchema).optional()
}).strict() as z.ZodType<Prisma.ClauseAnalysisScalarWhereWithAggregatesInput>;

export default ClauseAnalysisScalarWhereWithAggregatesInputSchema;
