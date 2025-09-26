import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';
import { EnumSeverityWithAggregatesFilterSchema } from './EnumSeverityWithAggregatesFilterSchema';
import { SeveritySchema } from './SeveritySchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const ClauseScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ClauseScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ClauseScalarWhereWithAggregatesInputSchema),z.lazy(() => ClauseScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ClauseScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ClauseScalarWhereWithAggregatesInputSchema),z.lazy(() => ClauseScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  analysisRequestId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  order: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  title: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  triggerWarning: z.lazy(() => StringNullableListFilterSchema).optional(),
  severity: z.union([ z.lazy(() => EnumSeverityWithAggregatesFilterSchema),z.lazy(() => SeveritySchema) ]).optional(),
  riskScore: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  categories: z.lazy(() => StringNullableListFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict() as z.ZodType<Prisma.ClauseScalarWhereWithAggregatesInput>;

export default ClauseScalarWhereWithAggregatesInputSchema;
