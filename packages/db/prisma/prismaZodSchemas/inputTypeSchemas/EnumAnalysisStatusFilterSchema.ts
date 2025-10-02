import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AnalysisStatusSchema } from './AnalysisStatusSchema';
import { NestedEnumAnalysisStatusFilterSchema } from './NestedEnumAnalysisStatusFilterSchema';

export const EnumAnalysisStatusFilterSchema: z.ZodType<Prisma.EnumAnalysisStatusFilter> = z.strictObject({
  equals: z.lazy(() => AnalysisStatusSchema).optional(),
  in: z.lazy(() => AnalysisStatusSchema).array().optional(),
  notIn: z.lazy(() => AnalysisStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => AnalysisStatusSchema), z.lazy(() => NestedEnumAnalysisStatusFilterSchema) ]).optional(),
});

export default EnumAnalysisStatusFilterSchema;
