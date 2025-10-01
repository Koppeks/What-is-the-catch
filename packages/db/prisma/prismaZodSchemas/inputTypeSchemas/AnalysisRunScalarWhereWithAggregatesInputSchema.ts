import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { EnumAnalysisStatusWithAggregatesFilterSchema } from './EnumAnalysisStatusWithAggregatesFilterSchema';
import { AnalysisStatusSchema } from './AnalysisStatusSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';

export const AnalysisRunScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AnalysisRunScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => AnalysisRunScalarWhereWithAggregatesInputSchema),z.lazy(() => AnalysisRunScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => AnalysisRunScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AnalysisRunScalarWhereWithAggregatesInputSchema),z.lazy(() => AnalysisRunScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  documentId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => EnumAnalysisStatusWithAggregatesFilterSchema),z.lazy(() => AnalysisStatusSchema) ]).optional(),
  engineVersion: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  startedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  finishedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  overallRisk: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  notes: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict() as z.ZodType<Prisma.AnalysisRunScalarWhereWithAggregatesInput>;

export default AnalysisRunScalarWhereWithAggregatesInputSchema;
