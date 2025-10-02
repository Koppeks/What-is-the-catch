import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SeveritySchema } from './SeveritySchema';

export const NestedEnumSeverityNullableFilterSchema: z.ZodType<Prisma.NestedEnumSeverityNullableFilter> = z.strictObject({
  equals: z.lazy(() => SeveritySchema).optional().nullable(),
  in: z.lazy(() => SeveritySchema).array().optional().nullable(),
  notIn: z.lazy(() => SeveritySchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => SeveritySchema), z.lazy(() => NestedEnumSeverityNullableFilterSchema) ]).optional().nullable(),
});

export default NestedEnumSeverityNullableFilterSchema;
