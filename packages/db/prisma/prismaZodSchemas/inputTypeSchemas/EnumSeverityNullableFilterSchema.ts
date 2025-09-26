import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SeveritySchema } from './SeveritySchema';
import { NestedEnumSeverityNullableFilterSchema } from './NestedEnumSeverityNullableFilterSchema';

export const EnumSeverityNullableFilterSchema: z.ZodType<Prisma.EnumSeverityNullableFilter> = z.object({
  equals: z.lazy(() => SeveritySchema).optional().nullable(),
  in: z.lazy(() => SeveritySchema).array().optional().nullable(),
  notIn: z.lazy(() => SeveritySchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => SeveritySchema),z.lazy(() => NestedEnumSeverityNullableFilterSchema) ]).optional().nullable(),
}).strict() as z.ZodType<Prisma.EnumSeverityNullableFilter>;

export default EnumSeverityNullableFilterSchema;
