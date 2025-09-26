import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AnalysisStatusSchema } from './AnalysisStatusSchema';
import { NestedEnumAnalysisStatusWithAggregatesFilterSchema } from './NestedEnumAnalysisStatusWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumAnalysisStatusFilterSchema } from './NestedEnumAnalysisStatusFilterSchema';

export const EnumAnalysisStatusWithAggregatesFilterSchema: z.ZodType<Prisma.EnumAnalysisStatusWithAggregatesFilter> = z.object({
  equals: z.lazy(() => AnalysisStatusSchema).optional(),
  in: z.lazy(() => AnalysisStatusSchema).array().optional(),
  notIn: z.lazy(() => AnalysisStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => AnalysisStatusSchema),z.lazy(() => NestedEnumAnalysisStatusWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumAnalysisStatusFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumAnalysisStatusFilterSchema).optional()
}).strict() as z.ZodType<Prisma.EnumAnalysisStatusWithAggregatesFilter>;

export default EnumAnalysisStatusWithAggregatesFilterSchema;
