import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SeveritySchema } from './SeveritySchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumSeverityFilterSchema } from './NestedEnumSeverityFilterSchema';

export const NestedEnumSeverityWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumSeverityWithAggregatesFilter> = z.object({
  equals: z.lazy(() => SeveritySchema).optional(),
  in: z.lazy(() => SeveritySchema).array().optional(),
  notIn: z.lazy(() => SeveritySchema).array().optional(),
  not: z.union([ z.lazy(() => SeveritySchema),z.lazy(() => NestedEnumSeverityWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumSeverityFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumSeverityFilterSchema).optional()
}).strict() as z.ZodType<Prisma.NestedEnumSeverityWithAggregatesFilter>;

export default NestedEnumSeverityWithAggregatesFilterSchema;
