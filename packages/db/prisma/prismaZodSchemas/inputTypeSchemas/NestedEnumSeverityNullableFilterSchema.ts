import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SeveritySchema } from './SeveritySchema';

export const NestedEnumSeverityNullableFilterSchema: z.ZodType<Prisma.NestedEnumSeverityNullableFilter> = z.object({
  equals: z.lazy(() => SeveritySchema).optional().nullable(),
  in: z.lazy(() => SeveritySchema).array().optional().nullable(),
  notIn: z.lazy(() => SeveritySchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => SeveritySchema),z.lazy(() => NestedEnumSeverityNullableFilterSchema) ]).optional().nullable(),
}).strict() as z.ZodType<Prisma.NestedEnumSeverityNullableFilter>;

export default NestedEnumSeverityNullableFilterSchema;
