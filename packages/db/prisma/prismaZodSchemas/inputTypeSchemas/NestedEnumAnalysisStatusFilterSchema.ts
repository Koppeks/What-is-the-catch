import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AnalysisStatusSchema } from './AnalysisStatusSchema';

export const NestedEnumAnalysisStatusFilterSchema: z.ZodType<Prisma.NestedEnumAnalysisStatusFilter> = z.strictObject({
  equals: z.lazy(() => AnalysisStatusSchema).optional(),
  in: z.lazy(() => AnalysisStatusSchema).array().optional(),
  notIn: z.lazy(() => AnalysisStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => AnalysisStatusSchema), z.lazy(() => NestedEnumAnalysisStatusFilterSchema) ]).optional(),
});

export default NestedEnumAnalysisStatusFilterSchema;
