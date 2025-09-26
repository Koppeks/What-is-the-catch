import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { EnumTypeRequestWithAggregatesFilterSchema } from './EnumTypeRequestWithAggregatesFilterSchema';
import { TypeRequestSchema } from './TypeRequestSchema';
import { EnumAnalysisStatusWithAggregatesFilterSchema } from './EnumAnalysisStatusWithAggregatesFilterSchema';
import { AnalysisStatusSchema } from './AnalysisStatusSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const AnalysisRequestScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AnalysisRequestScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => AnalysisRequestScalarWhereWithAggregatesInputSchema),z.lazy(() => AnalysisRequestScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => AnalysisRequestScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AnalysisRequestScalarWhereWithAggregatesInputSchema),z.lazy(() => AnalysisRequestScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => EnumTypeRequestWithAggregatesFilterSchema),z.lazy(() => TypeRequestSchema) ]).optional(),
  status: z.union([ z.lazy(() => EnumAnalysisStatusWithAggregatesFilterSchema),z.lazy(() => AnalysisStatusSchema) ]).optional(),
  sourceUrl: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  language: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict() as z.ZodType<Prisma.AnalysisRequestScalarWhereWithAggregatesInput>;

export default AnalysisRequestScalarWhereWithAggregatesInputSchema;
