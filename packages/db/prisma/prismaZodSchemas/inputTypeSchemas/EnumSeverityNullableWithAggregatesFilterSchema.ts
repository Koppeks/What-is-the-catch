import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SeveritySchema } from './SeveritySchema';
import { NestedEnumSeverityNullableWithAggregatesFilterSchema } from './NestedEnumSeverityNullableWithAggregatesFilterSchema';
import { NestedIntNullableFilterSchema } from './NestedIntNullableFilterSchema';
import { NestedEnumSeverityNullableFilterSchema } from './NestedEnumSeverityNullableFilterSchema';

export const EnumSeverityNullableWithAggregatesFilterSchema: z.ZodType<Prisma.EnumSeverityNullableWithAggregatesFilter> = z.object({
  equals: z.lazy(() => SeveritySchema).optional().nullable(),
  in: z.lazy(() => SeveritySchema).array().optional().nullable(),
  notIn: z.lazy(() => SeveritySchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => SeveritySchema),z.lazy(() => NestedEnumSeverityNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumSeverityNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumSeverityNullableFilterSchema).optional()
}).strict() as z.ZodType<Prisma.EnumSeverityNullableWithAggregatesFilter>;

export default EnumSeverityNullableWithAggregatesFilterSchema;
