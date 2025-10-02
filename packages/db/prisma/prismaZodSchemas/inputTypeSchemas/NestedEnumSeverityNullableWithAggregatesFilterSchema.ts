import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SeveritySchema } from './SeveritySchema';
import { NestedIntNullableFilterSchema } from './NestedIntNullableFilterSchema';
import { NestedEnumSeverityNullableFilterSchema } from './NestedEnumSeverityNullableFilterSchema';

export const NestedEnumSeverityNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumSeverityNullableWithAggregatesFilter> = z.strictObject({
  equals: z.lazy(() => SeveritySchema).optional().nullable(),
  in: z.lazy(() => SeveritySchema).array().optional().nullable(),
  notIn: z.lazy(() => SeveritySchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => SeveritySchema), z.lazy(() => NestedEnumSeverityNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumSeverityNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumSeverityNullableFilterSchema).optional(),
});

export default NestedEnumSeverityNullableWithAggregatesFilterSchema;
